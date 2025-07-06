# Renart - Lüks Mücevher Ürün Listesi

Bu proje, Renart mücevher markası için geliştirilmiş modern bir ürün listeleme uygulamasıdır. Gerçek zamanlı altın fiyatları ile dinamik fiyatlandırma, gelişmiş filtreleme ve şık carousel tasarımı içerir.

## 🚀 Özellikler

### Backend API
- **RESTful API** - Express.js ile geliştirilmiş
- **Gerçek Zamanlı Altın Fiyatları** - Metal API entegrasyonu
- **Dinamik Fiyat Hesaplama** - Popülerlik ve ağırlığa dayalı
- **Gelişmiş Filtreleme** - Fiyat ve popülerlik aralığı
- **CORS Desteği** - Cross-origin istekler için
- **Error Handling** - Kapsamlı hata yönetimi

### Frontend
- **React 18** - Modern React hooks kullanımı
- **Responsive Tasarım** - Mobil ve desktop uyumlu
- **Carousel** - Swiper.js ile dokunmatik ve ok navigasyonu
- **Renk Seçici** - Yellow, White, Rose Gold seçenekleri
- **Yıldız Puanlama** - 5 üzerinden görsel puanlama sistemi
- **Filtreleme** - Gerçek zamanlı ürün filtreleme
- **Loading States** - Kullanıcı dostu yükleme göstergeleri

## 🛠️ Teknoloji Yığını

### Backend
- Node.js
- Express.js
- Axios (HTTP istekleri)
- CORS middleware
- dotenv (Environment variables)

### Frontend
- React 18
- Vite (Build tool)
- Swiper.js (Carousel)
- Lucide React (Icons)
- CSS3 (Custom styling)
- Avenir & Montserrat fonts

## 📦 Kurulum

### Gereksinimler
- Node.js 16+ 
- npm veya yarn

### 1. Repository'yi klonlayın
```bash
git clone <repository-url>
cd renart-case-study
```

### 2. Backend Kurulumu
```bash
cd backend
npm install
npm run dev
```
Backend http://localhost:3001 adresinde çalışacak.

### 3. Frontend Kurulumu
```bash
cd frontend
npm install
npm run dev
```
Frontend http://localhost:3000 adresinde çalışacak.

## 🔧 Environment Variables

Backend `.env` dosyası:
```
NODE_ENV=development
PORT=3001
GOLD_API_KEY=your_api_key_here  # Opsiyonel
```

## 📖 API Endpoints

### Ürünler
- `GET /api/products` - Tüm ürünleri listele
- `GET /api/products?minPrice=100&maxPrice=1000` - Fiyat filtreli
- `GET /api/products/:id` - Tek ürün detayı

### Altın Fiyatı
- `GET /api/gold-price` - Güncel altın fiyatı

### Sağlık Kontrolü
- `GET /api/health` - API durumu

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Yellow Gold**: #EFC497
- **White Gold**: #F9F9F9  
- **Rose Gold**: #E1A4A9
- **Primary Text**: #333333
- **Secondary Text**: #666666

### Typography
- **Başlıklar**: Avenir (Book, Medium, Heavy)
- **Metin**: Montserrat (Regular, Medium, Bold)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔄 Fiyat Hesaplama Formülü

```javascript
Price = (popularityScore + 1) * weight * goldPrice
```

- `popularityScore`: 0-1 arası popülerlik puanı
- `weight`: Gram cinsinden ağırlık
- `goldPrice`: Gram başına USD altın fiyatı

## ⭐ Popülerlik Puanı Dönüşümü

```javascript
Rating = popularityScore * 5 (1 ondalık basamak)
```

## 🚀 Deployment

### Backend (Heroku)
```bash
cd backend
git init
heroku create renart-backend
git add .
git commit -m "Initial backend deployment"
git push heroku main
```

### Frontend (Vercel)
```bash
cd frontend
vercel --prod
```

## 📱 Özellik Detayları

### Carousel
- **Swiper.js** ile geliştirilmiş
- Dokunmatik ve mouse wheel desteği
- Ok tuşları ile navigasyon
- Responsive breakpoints
- Autoplay (5 saniye)
- Loop desteği

### Renk Seçici
- 3 altın rengi seçeneği
- Görsel feedback
- Hover efektleri
- Accessibility desteği

### Filtreleme Sistemi
- Fiyat aralığı (min-max)
- Popülerlik puanı aralığı
- Gerçek zamanlı sonuçlar
- Temizleme özelliği
- Sonuç sayacı

### Loading & Error States
- Görsel loading spinners
- Resim yükleme göstergeleri
- Hata mesajları
- Retry fonksiyonalitesi

## 🧪 Test

```bash
# Backend testleri
cd backend
npm test

# Frontend testleri  
cd frontend
npm test
```

## 📊 Performance

- **Lazy loading** resimler için
- **Debounced** filtreleme
- **Optimized** re-renders
- **Responsive** images
- **Minified** production build

## 🔒 Güvenlik

- CORS koruması
- Input validasyonu
- XSS koruması
- Rate limiting (üretim için)
- Environment variables

## 📝 Lisans

MIT License - Detaylar için LICENSE dosyasına bakınız.

## 👥 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Branch'e push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request açın



---

**Not**: Bu proje Renart mücevher markası için case study amaçlı geliştirilmiştir. Gerçek zamanlı altın fiyatları Metal API üzerinden alınmaktadır.
