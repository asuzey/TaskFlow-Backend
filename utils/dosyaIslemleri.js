const fs = require('fs');
const path = require('path');

// windows mac farketmesin diye path.join ile tam dosya yolunu aliyorum
const dosyaYolu = path.join(__dirname, '../data/task.json');

function gorevleriOku() {
  try {
    // dosya yoksa hata verip cokmesin bos dizi donsun
    if (!fs.existsSync(dosyaYolu)) {
      return [];
    }
    const icerik = fs.readFileSync(dosyaYolu, 'utf-8');
    // dosyadan string geliyor, js nesnesine cevirmek icin parse ediyorum
    return JSON.parse(icerik);
  } catch (err) {
    console.error('okuma hatasi:', err.message);
    return [];
  }
}

function gorevleriKaydet(gorevler) {
  try {
    // null, 2 koyunca json dosyasi tek satir degil okunakli alt alta yaziliyor
    fs.writeFileSync(dosyaYolu, JSON.stringify(gorevler, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('yazma hatasi:', err.message);
    return false;
  }
}

module.exports = { gorevleriOku, gorevleriKaydet };