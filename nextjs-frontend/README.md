# Renart Next.js - Lüks Mücevher Ürün Listesi

Bu proje, modern Next.js 14 App Router mimarisi ile TypeScript kullanılarak geliştirilmiş lüks mücevher koleksiyonu sergileyen bir e-ticaret uygulamasıdır.

## 🚀 Özellikler

### Modern Next.js Mimarisi
- **Next.js 14** - App Router kullanımı
- **TypeScript** - Tam tip güvenliği
- **Tailwind CSS** - Utility-first CSS framework
- **Server Components** - Performans optimizasyonu
- **Client Components** - İnteraktif bileşenler

### Ana Özellikler
- **Gerçek Zamanlı Altın Fiyatları** - Backend API entegrasyonu
- **Dinamik Fiyat Hesaplama** - Popülerlik ve ağırlığa dayalı
- **Responsive Tasarım** - Mobil ve desktop uyumlu
- **Modern Carousel** - Swiper.js ile dokunmatik ve ok navigasyonu
- **Renk Seçici** - Yellow Gold, White Gold, Rose Gold seçenekleri
- **Yıldız Puanlama** - 5 üzerinden görsel puanlama sistemi
- **Gelişmiş Filtreleme** - Gerçek zamanlı ürün filtreleme
- **Minimalist Tasarım** - Çerçevesiz, temiz görünüm

## 🛠️ Teknoloji Yığını

### Frontend (Next.js)
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Swiper.js (Carousel)
- Lucide React (Icons)
- Axios (HTTP istekleri)

### Backend (Değişmedi)
- Node.js + Express.js
- Gerçek zamanlı altın fiyatları API
- JSON dosyasından ürün verisi

## 📦 Kurulum

### 1. Next.js Frontend Kurulumu
\`\`\`bash
cd nextjs-frontend
npm install
\`\`\`

### 2. Backend Kurulumu (Değişmedi)
\`\`\`bash
cd backend
npm install
npm start
\`\`\`

### 3. Next.js Frontend Başlatma
\`\`\`bash
cd nextjs-frontend
npm run dev
\`\`\`

## 🔧 Environment Variables

\`\`\`.env.local\`\`\` dosyası (Next.js):
\`\`\`
NEXT_PUBLIC_BACKEND_API=http://localhost:3001
\`\`\`

## 📁 Yeni Proje Yapısı

\`\`\`
nextjs-frontend/
├── app/
│   ├── layout.tsx          # Root layout (metadata, fonts)
│   ├── page.tsx            # Ana sayfa (eski App.jsx)
│   └── globals.css         # Global stiller + Tailwind
├── components/
│   ├── ProductCarousel.tsx # Carousel bileşeni
│   ├── ProductCard.tsx     # Ürün kartı bileşeni
│   ├── ProductFilters.tsx  # Filtreleme bileşeni
│   ├── LoadingSpinner.tsx  # Loading bileşeni
│   └── ErrorMessage.tsx    # Hata bileşeni
├── utils/
│   └── api.ts              # API fonksiyonları (tip güvenli)
├── next.config.js          # Next.js konfigürasyonu
├── tailwind.config.js      # Tailwind konfigürasyonu
├── tsconfig.json           # TypeScript konfigürasyonu
└── .env.local              # Environment variables
\`\`\`

## 📝 Dönüşüm Değişiklikleri

### App Router Mimarisi
- \`src/App.jsx\` → \`app/page.tsx\`
- \`src/main.jsx\` → Kaldırıldı (Next.js otomatik)
- \`index.html\` → \`app/layout.tsx\`
- \`vite.config.js\` → \`next.config.js\`

### TypeScript Dönüşümü
- Tüm \`.jsx\` dosyaları \`.tsx\`'e dönüştürüldü
- Tam tip güvenliği eklendi
- Interface'ler ve tipler tanımlandı

### Tailwind CSS Dönüşümü
- Vanilla CSS → Tailwind utility classes
- Responsive tasarım korundu
- Custom CSS değişkenleri korundu

### API Katmanı
- \`src/services/api.js\` → \`utils/api.ts\`
- TypeScript tipleri eklendi
- \`NEXT_PUBLIC_\` prefix kullanımı

## 🎨 UI/UX Özellikler

### Modern Tasarım
- **Çerçevesiz Kart Tasarımı** - Minimalist ve temiz görünüm
- **Yuvarlatılmış Köşeler** - Modern estetik
- **Büyük Ürün Görselleri** - 320px yükseklik ile detaylı görünüm
- **İnce Kenarlı Renk Seçici** - Seçili: 2px, Normal: 1px
- **Responsive Grid** - 1/2/3/4 sütun otomatik geçiş

### Renk Paleti
- **Yellow Gold**: #E6CA97
- **White Gold**: #D9D9D9  
- **Rose Gold**: #E1A4A9

## 🎨 Tailwind CSS Konfigürasyonu

### Custom Colors (Güncellenmiş)
\`\`\`js
colors: {
  primary: '#E6CA97',
  'yellow-gold': '#E6CA97',
  'white-gold': '#D9D9D9',
  'rose-gold': '#E1A4A9',
}
\`\`\`

### Custom Font Sizes (Güncellenmiş)
\`\`\`js
fontSize: {
  'heading': '45px',        // Ana başlık (Product List)
  'product-title': '15px',  // Ürün başlığı (Montserrat Medium)
  'product-price': '15px',  // Ürün fiyatı (Montserrat Regular)
  'color-label': '12px',    // Renk açıklaması (Avenir Book)
  'rating': '14px',         // Puan gösterimi (Avenir Book)
}
\`\`\`

### Font Family Kullanımı
- **Ana Başlık**: Avenir Book 45px
- **Ürün Başlığı**: Montserrat Medium 15px  
- **Ürün Fiyatı**: Montserrat Regular 15px
- **Renk Açıklaması**: Avenir Book 12px
- **Puan Gösterimi**: Avenir Book 14px

## 🚀 Production Deployment

### Vercel (Önerilen)
\`\`\`bash
cd nextjs-frontend
npm run build
vercel --prod
\`\`\`

### Netlify
\`\`\`bash
npm run build
# out/ klasörünü deploy edin
\`\`\`

## � Güncel Proje Özellikleri

### 2025 Güncellemeleri
1. **Ana Başlık Değişikliği** - "Renart Lüks Mücevher Koleksiyonu" → "Product List"
2. **Font Optimizasyonu** - Avenir ve Montserrat font ailesi kullanımı
3. **Renk Kodu Güncellemeleri** - Yeni hex kodları ile tutarlı renk paleti
4. **Minimalist UI** - Çerçevesiz, temiz tasarım yaklaşımı
5. **Gelişmiş Carousel** - Sürükle/bırak özelliği olmadan ok navigasyonu
6. **Responsive İyileştirmeler** - Mobil deneyim optimizasyonu

### Teknik İyileştirmeler
- TypeScript tip güvenliği
- Modern Tailwind CSS utility classes
- Next.js 14 App Router optimizasyonları
- Image optimization
- Font loading optimization

## �📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔄 Önceki Vite Projesinden Farklar

1. **Daha İyi SEO** - Server-side rendering
2. **Daha Hızlı Yükleme** - Image optimization, font optimization
3. **Tip Güvenliği** - TypeScript kullanımı
4. **Modern CSS** - Tailwind CSS utility classes
5. **Production Ready** - Next.js optimizasyonları
6. **Minimalist Tasarım** - Çerçevesiz, temiz UI
7. **Font Tutarlılığı** - Avenir ve Montserrat font ailesi
8. **Renk Standardizasyonu** - Güncellenmiş hex kodları

## 📞 Development

\`\`\`bash
# Backend çalıştır (Ayrı terminal)
cd backend
npm start

# Frontend çalıştır (Ayrı terminal)  
cd nextjs-frontend
npm run dev
\`\`\`

- **Backend**: http://localhost:3001
- **Frontend**: http://localhost:3000

---

**Not**: Bu proje, modern Next.js 14 + TypeScript + Tailwind CSS mimarisi ile geliştirilmiş lüks mücevher e-ticaret uygulamasıdır. Minimalist tasarım, responsive yapı ve kullanıcı deneyimi odaklı geliştirilmiştir.

## 👨‍💻 Geliştirici

**Yusuf KUŞÇU**
- LinkedIn: https://www.linkedin.com/in/yusufkuscu/
- GitHub: https://github.com/Yusufkuscu


