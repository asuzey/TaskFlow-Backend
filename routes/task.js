const express = require('express');
const router = express.Router();
const { gorevleriOku, gorevleriKaydet } = require('../utils/dosyaIslemleri');

// tum gorevleri listeleme
router.get('/', (req, res) => {
  const gorevler = gorevleriOku();
  res.status(200).json({
    basarili: true,
    toplam: gorevler.length,
    data: gorevler
  });
});

// id ye gore tek gorev getirme
router.get('/:id', (req, res) => {
  // urlden gelen id string oluyor o yuzden sayiya ceviriyorum
  const id = Number(req.params.id);
  const gorevler = gorevleriOku();
  const gorev = gorevler.find((t) => t.id === id);

  if (!gorev) {
    return res.status(404).json({
      basarili: false,
      mesaj: `${id} id'li gorev bulunamadi`
    });
  }

  res.status(200).json({
    basarili: true,
    data: gorev
  });
});

// yeni gorev ekleme
router.post('/', (req, res) => {
  const { title, description, status, priority, assignee } = req.body;

  // baslik ve atanan kisi bossa kayit yapmasin 400 donsun
  if (!title || !assignee) {
    return res.status(400).json({
      basarili: false,
      mesaj: 'title ve assignee alanlari zorunlu'
    });
  }

  const gorevler = gorevleriOku();
  // son gorevin idsine +1 ekleyip yeni id veriyorum
  const yeniId = gorevler.length > 0 ? gorevler[gorevler.length - 1].id + 1 : 1;

  const yeniGorev = {
    id: yeniId,
    title,
    description: description || '',
    status: status || 'pending',
    priority: priority || 'medium',
    assignee,
    createdAt: new Date().toISOString()
  };

  gorevler.push(yeniGorev);
  gorevleriKaydet(gorevler); // dosyaya kalici yaziyorum

  res.status(201).json({
    basarili: true,
    mesaj: 'gorev olusturuldu',
    data: yeniGorev
  });
});

// gorev guncelleme
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const gorevler = gorevleriOku();
  const index = gorevler.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      basarili: false,
      mesaj: `${id} id'li gorev bulunamadi`
    });
  }

  const { title, description, status, priority, assignee } = req.body;

  // sadece bodyden gonderilen alanlari degistiriyorum, gonderilmeyenler eski haliyle kaliyor
  gorevler[index] = {
    ...gorevler[index],
    title: title !== undefined ? title : gorevler[index].title,
    description: description !== undefined ? description : gorevler[index].description,
    status: status !== undefined ? status : gorevler[index].status,
    priority: priority !== undefined ? priority : gorevler[index].priority,
    assignee: assignee !== undefined ? assignee : gorevler[index].assignee
  };

  gorevleriKaydet(gorevler);

  res.status(200).json({
    basarili: true,
    mesaj: 'gorev guncellendi',
    data: gorevler[index]
  });
});

// gorev silme
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const gorevler = gorevleriOku();
  const index = gorevler.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      basarili: false,
      mesaj: `${id} id'li gorev bulunamadi`
    });
  }

  // splice diziden o indexi cikarip silinen elemani dondurur
  const silinen = gorevler.splice(index, 1)[0];
  gorevleriKaydet(gorevler);

  res.status(200).json({
    basarili: true,
    mesaj: 'gorev silindi',
    data: silinen
  });
});

module.exports = router;