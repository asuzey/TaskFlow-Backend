
### 2. `PROJE_TANITIM.md` (Proje Tanıtım Dokümanı)
```markdown
# TaskFlow – Proje Tanıtım Dokümanı

## 1. Projenin Amacı
TaskFlow projesi, 5 günlük Node.js Backend Eğitimi kapsamında edinilen bilgi ve becerileri uygulamalı olarak göstermek amacıyla geliştirilmiştir. Projenin temel amacı; gerçek hayatta bir yazılım şirketinin ekip içerisindeki görevleri, projeleri ve çalışanların sorumluluklarını takip edebileceği, tamamen REST API mimarisine uygun, güvenilir ve modüler bir servis altyapısı sunmaktır.

## 2. Senaryo ve Sistem Özeti
Bir yazılım ekibinde yöneticiler ve geliştiriciler, projelerin durumunu anlık olarak takip etmek istemektedir. Geliştirilen bu sistem sayesinde:
- Yeni görevler oluşturulabilir (`POST /tasks`),
- Ekipteki tüm görevler listelenebilir (`GET /tasks`),
- ID yardımıyla belirli bir görevin detaylarına bakılabilir (`GET /tasks/:id`),
- Görevlerin durumu (devam ediyor, tamamlandı vb.) veya önceliği güncellenebilir (`PUT /tasks/:id`),
- Artık ihtiyaç duyulmayan görevler sistemden silinebilir (`DELETE /tasks/:id`).

Sistemde veri tabanı bağımlılığını ortadan kaldırmak ve sadeliği korumak adına Node.js yerleşik **`fs` (File System)** ve **`path`** modülleri kullanılmış, tüm veriler `data/task.json` dosyasında kalıcı olarak saklanmıştır. Ayrıca projenin mimari kalitesini artırmak için tüm API isteklerinin zaman damgasıyla birlikte konsola kaydedilmesini sağlayan bir **Logger Middleware** ara katmanı entegre edilmiştir.

## 3. Teknik Altyapı ve Kazanımlar
- **Node.js & Express.js:** Sunucu ve yönlendirme altyapısı.
- **REST API Standartları:** HTTP metotları (`GET, POST, PUT, DELETE`) ve uygun durum kodları (`200, 201, 400, 404`).
- **Middleware Kullanımı:** İsteklerin loglanması.
- **Veri Yönetimi:** JSON dosyası üzerinden kalıcı CRUD operasyonları.