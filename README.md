# TaskFlow Backend

> Yazılım ekipleri için görev ve proje yönetimi REST API'si.

TaskFlow, **Node.js** ve **Express.js** kullanılarak geliştirilmiş basit ve anlaşılır bir görev yönetim API'sidir. Görevleri listeleyebilir, detaylarını görüntüleyebilir, yeni görev oluşturabilir, güncelleyebilir ve silebilirsiniz.

## Özellikler

- RESTful API yapısı
- Görevler için tam CRUD işlemleri
- JSON formatında istek ve yanıtlar
- Dosya tabanlı kalıcı veri saklama
- Basit istek loglama middleware'i
- Postman ile test edilebilir endpoint'ler

## Kullanılan Teknolojiler

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- JavaScript — CommonJS
- JSON dosya tabanlı veri saklama

## Gereksinimler

- Node.js **18 veya üzeri**
- npm
- İsteğe bağlı: [Postman](https://www.postman.com/)

## Kurulum ve Çalıştırma

```bash
git clone https://github.com/asuzey/TaskFlow-Backend.git
cd TaskFlow-Backend
npm install
npm start
```

Sunucu başlatıldıktan sonra API şu adreste çalışır:

```text
http://localhost:3000
```

API'nin çalıştığını kontrol etmek için:

```bash
curl http://localhost:3000/
```

## API Endpoint'leri

Temel URL: `http://localhost:3000`

| İşlem | Metot | Endpoint | Açıklama |
| --- | :---: | --- | --- |
| Sağlık kontrolü | `GET` | `/` | API'nin çalışıp çalışmadığını kontrol eder. |
| Tüm görevleri listeleme | `GET` | `/tasks` | Tüm görevleri ve toplam görev sayısını döndürür. |
| Görev detayı | `GET` | `/tasks/:id` | ID değerine göre tek bir görev döndürür. |
| Yeni görev oluşturma | `POST` | `/tasks` | Yeni bir görev ekler. `title` ve `assignee` zorunludur. |
| Görev güncelleme | `PUT` | `/tasks/:id` | Gönderilen alanları günceller. |
| Görev silme | `DELETE` | `/tasks/:id` | ID değerine sahip görevi siler. |

### Yeni görev oluşturma

`POST /tasks`

```json
{
  "title": "API dokümantasyonunu hazırla",
  "description": "Endpoint'leri ve örnek istekleri README dosyasına ekle.",
  "status": "pending",
  "priority": "high",
  "assignee": "Ayşe"
}
```

`title` ve `assignee` alanları zorunludur. Gönderilmeyen alanlar için varsayılan değerler kullanılır:

- `description`: `""`
- `status`: `"pending"`
- `priority`: `"medium"`

### Görev güncelleme

`PUT /tasks/1` isteğinde yalnızca değiştirmek istediğiniz alanları gönderebilirsiniz:

```json
{
  "status": "completed",
  "priority": "medium"
}
```

### Örnek yanıt

```json
{
  "basarili": true,
  "data": {
    "id": 1,
    "title": "API dokümantasyonunu hazırla",
    "description": "Endpoint'leri ve örnek istekleri README dosyasına ekle.",
    "status": "pending",
    "priority": "high",
    "assignee": "Ayşe",
    "createdAt": "2026-01-01T12:00:00.000Z"
  }
}
```

## Proje Yapısı

```text
TaskFlow-Backend/
├── data/                 # JSON tabanlı görev verileri
├── ekranGoruntuleri/     # Postman test ekran görüntüleri
├── middleware/           # İstek loglama middleware'i
├── routes/               # API route'ları
├── utils/                # Dosya okuma ve yazma yardımcıları
├── app.js                # Express uygulaması ve middleware'ler
├── server.js             # Sunucu giriş noktası
├── package.json          # Proje ayarları ve bağımlılıklar
└── README.md
```

## Postman Testleri

CRUD işlemlerine ait Postman test ekran görüntüleri:

| İşlem | Görsel |
| --- | --- |
| Görevleri listeleme | [listeleme.png](ekranGoruntuleri/listeleme.png) |
| Görev detayı | [detay.png](ekranGoruntuleri/detay.png) |
| Görev ekleme | [gorevEkleme.png](ekranGoruntuleri/gorevEkleme.png) |
| Görev güncelleme | [guncelleme.png](ekranGoruntuleri/guncelleme.png) |
| Görev silme | [silme.png](ekranGoruntuleri/silme.png) |

## Lisans

Bu proje eğitim ve geliştirme amacıyla hazırlanmıştır.
