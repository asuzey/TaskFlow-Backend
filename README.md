# TaskFlow - Görev ve Proje Yönetim Sistemi API

Node.js ve Express.js kullanılarak geliştirilmiş, yazılım ekipleri için görev yönetimini sağlayan REST API projesidir.

## Proje Gereksinimleri
- Node.js (v18 veya üzeri önerilir)
- Postman (API uçlarını test etmek için)

## Kurulum Adımları
1. Projeyi bilgisayarınıza klonlayın veya indirin:
   ```bash
   git clone https://github.com/asuzey/TaskFlow-Backend.git
   cd TaskFlow-Backend
Gerekli bağımlılıkları (express) yükleyin:
Bash
npm install
Sunucuyu başlatın:
Bash
node server.js
Sunucu başarıyla başlatıldığında terminalde sunucu http://localhost:3000 adresinde calisiyor mesajı görünecektir.
API Uç Noktaları (CRUD)
İşlem	Metot	Uç Nokta	Açıklama
Listeleme	GET	/tasks	Tüm görevleri JSON formatında getirir
Detay	GET	/tasks/:id	Belirli bir ID'ye sahip görevi getirir
Ekleme	POST	/tasks	Sisteme yeni görev ekler
Güncelleme	PUT	/tasks/:id	Var olan görevi günceller
Silme	DELETE	/tasks/:id	Belirtilen görevi sistemden kaldırır
Test Ekran Görüntüleri
Tüm CRUD operasyonlarının Postman üzerindeki test kanıtları ekranGoruntuleri/ klasöründe yer almaktadır.