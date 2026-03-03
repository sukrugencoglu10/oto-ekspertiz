# Oto Ekspertiz Web Sitesi - Proje Yol Haritası

> **Konum:** İstanbul / Bağcılar  
> **Teknoloji:** Next.js 14+ (App Router) · Tailwind CSS · TypeScript  
> **Hedef:** Dönüşüm odaklı, yerel SEO uyumlu, mobil öncelikli kurumsal web sitesi

Bu belge, işletmenin dijital varlığını güçlendirmek ve Google Ads üzerinden maksimum dönüşüm elde etmek için izlenecek teknik ve stratejik adımları kapsar.

---

## 1. Strateji ve Planlama

### 1.1 Hedef Kitle Analizi

| Segment | Profil | Motivasyon |
|---------|--------|------------|
| 2. El Araç Alıcıları | 25-55 yaş, orta gelir | Aldatılma korkusu, güvenli alışveriş |
| 2. El Araç Satıcıları | Bireysel satıcılar | Aracın değerini belgeleme |
| Oto Galeriler | Bağcılar ve çevre ilçeler | Toplu ekspertiz, kurumsal anlaşma |
| Sigorta Şirketleri | Hasar tespiti ihtiyacı | Hızlı ve güvenilir rapor |

**Coğrafi Kapsam:** Bağcılar merkez + Güngören, Bahçelievler, Esenler, Küçükçekmece, Bağcılar sanayi bölgesi

### 1.2 Rakip İncelemesi Kontrol Listesi

- [ ] Google'da "bağcılar oto ekspertiz" araması — ilk 10 sonucu analiz et
- [ ] Google Maps'te bölgedeki ekspertiz firmalarını listele (puan, yorum sayısı, fotoğraf)
- [ ] Rakip sitelerin sayfa yapılarını incele (hangi sayfalar var, CTA konumları)
- [ ] Rakip fiyat aralıklarını tespit et
- [ ] Rakiplerin Google Ads kullanıp kullanmadığını kontrol et (SimilarWeb / SpyFu)
- [ ] Rakiplerin somut zayıf yönlerini belirle (yavaş site, randevu formu yokluğu, mobil uyumsuzluk, güncel olmayan içerik)

### 1.3 Site Haritası

```
Ana Sayfa (/)
├── Kurumsal (/kurumsal)
├── Hizmetlerimiz (/hizmetler)
│   ├── Oto Ekspertiz (/hizmetler/oto-ekspertiz)
│   ├── Boya & Kaporta Tespiti (/hizmetler/boya-kaporta-tespiti)
│   ├── Motor Diagnostik (/hizmetler/motor-diagnostik)
│   └── Tramer Sorgulama (/hizmetler/tramer-sorgulama)
├── Paketler & Fiyatlar (/paketler)
├── Blog (/blog)
│   └── [yazı-slug] (/blog/oto-ekspertiz-nedir)
├── Referanslar / Müşteri Yorumları (/referanslar)
├── SSS (/sss)
├── İletişim (/iletisim)
│   ├── Randevu Formu
│   └── Google Maps & Yol Tarifi
├── Landing Pages (/lp/[kampanya])
└── Yasal
    ├── Gizlilik Politikası (/gizlilik)
    ├── KVKK Aydınlatma Metni (/kvkk)
    └── Çerez Politikası (/cerez-politikasi)
```

---

## 2. Teknoloji Yığını (Tech Stack)

### 2.1 Çekirdek Yapı

| Katman | Teknoloji | Neden? |
|--------|-----------|--------|
| Framework | **Next.js 14+ (App Router)** | SSR/SSG/ISR desteği, SEO dostu, dosya tabanlı routing |
| Styling | **Tailwind CSS 3.x** | Utility-first, hızlı geliştirme, küçük bundle |
| UI Bileşenleri | **shadcn/ui** | Erişilebilir, özelleştirilebilir, Radix UI tabanlı |
| Dil | **TypeScript** | Tip güvenliği, daha az hata |
| Form | **React Hook Form + Zod** | Performanslı form yönetimi, şema tabanlı validasyon |
| Animasyon | **Framer Motion** | Scroll animasyonları, sayfa geçişleri |
| İkonlar | **Lucide React** | Hafif, tutarlı ikon seti |

### 2.2 Altyapı ve Servisler

| Servis | Teknoloji | Neden? |
|--------|-----------|--------|
| Hosting | **Vercel** | Next.js'in kendi platformu, edge CDN, otomatik CI/CD |
| Harita | **Google Maps Embed API** | Ücretsiz embed, yol tarifi entegrasyonu |
| E-posta | **Resend** veya **Nodemailer** | Form gönderimlerinde bildirim |
| Analytics | **GA4 + GTM** | Dönüşüm izleme, reklam entegrasyonu |
| CMS (Blog) | **MDX** | Markdown + React bileşenleri, Git tabanlı |
| SEO | **next-sitemap** | Otomatik sitemap.xml ve robots.txt |
| Resim | **next/image** | Otomatik WebP, lazy loading, responsive |

### 2.3 Kurulum Komutları

```bash
# Proje oluşturma
npx create-next-app@latest oto-ekspertiz --typescript --tailwind --eslint --app --src-dir

# Temel bağımlılıklar
npm install framer-motion lucide-react react-hook-form @hookform/resolvers zod
npm install next-sitemap resend

# shadcn/ui kurulumu
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input textarea select dialog sheet
```

---

## 3. UI/UX Tasarım İlkeleri

### 3.1 Renk Paleti

```
Primary (Lacivert)    : #1B2A4A  → Header, footer, ana başlıklar
Secondary (Koyu Gri)  : #374151  → Gövde metni, ikincil öğeler
Accent (Turuncu/Altın): #F59E0B  → CTA butonlar, vurgular, fiyat etiketleri
Başarı (Yeşil)        : #22C55E  → Onay mesajları, güven rozetleri
Arka Plan (Beyaz)     : #FFFFFF  → Ana arka plan
Arka Plan (Açık Gri)  : #F3F4F6  → Alternatif bölüm arka planları
Tehlike (Kırmızı)     : #EF4444  → Hata mesajları, uyarılar
```

**Tailwind config'e eklenmesi gereken özel renkler:**

```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: '#1B2A4A',
    light: '#2A3F6E',
    dark: '#111B33',
  },
  accent: {
    DEFAULT: '#F59E0B',
    light: '#FCD34D',
    dark: '#D97706',
  },
}
```

### 3.2 Tipografi

- **Başlıklar:** Inter (700, 600) veya Poppins (700, 600)
- **Gövde metni:** Inter (400, 500)
- **Boyutlar:** Mobilde 16px taban, masaüstünde 18px taban
- Next.js `next/font/google` ile optimized font yükleme

### 3.3 Mobil Öncelikli Tasarım

- Tüm bileşenler **320px** genişlikten başlayarak tasarlanacak
- Breakpoint'ler: `sm: 640px` · `md: 768px` · `lg: 1024px` · `xl: 1280px`
- Mobilde hamburger menü (Sheet bileşeni ile slide-in)
- Touch-friendly butonlar: minimum 44x44px dokunma alanı

### 3.4 CTA (Call-to-Action) Stratejisi

```
┌─────────────────────────────────────────────────┐
│  HEADER (Sabit)                                 │
│  [Logo]  [Menü]  [📞 0212 XXX XX XX] [WhatsApp]│
├─────────────────────────────────────────────────┤
│                                                 │
│  HERO BÖLÜMÜ                                    │
│  "Aracınızın Gerçek Değerini Öğrenin"          │
│  Alt mesaj: "Garantili Ekspertiz · Aynı Gün    │
│  Randevu · Detaylı Rapor"                       │
│  [██ HEMEN RANDEVU AL ██] [Bizi Arayın]        │
│  ⭐ 4.9/5 - 2400+ Mutlu Müşteri                │
│                                                 │
├─────────────────────────────────────────────────┤
│  ... (sayfa içeriği) ...                        │
│  Her bölüm sonunda → [Randevu Al] butonu        │
├─────────────────────────────────────────────────┤
│                                                 │
│  MOBİL SABİT ALT BAR (sticky bottom)           │
│  [📞 Hemen Ara]  [💬 WhatsApp]                  │
│                                                 │
└─────────────────────────────────────────────────┘
│  🟢 Floating WhatsApp Butonu (sağ alt)          │
└─────────────────────────────────────────────────┘
```

### 3.5 Güven Sinyalleri

- Sertifika ve yetki belgesi logoları (TSE, ticaret odası vb.)
- Animasyonlu sayaç: "12.500+ Araç İncelendi"
- Google yıldız puanı badge (hero bölümünde)
- "Garanti" veya "Para İade" rozeti (varsa)
- Müşteri logoları (galeri ortakları)

---

## 4. İçerik ve SEO Stratejisi

### 4.1 Anahtar Kelime Haritası

| Sayfa | Hedef Anahtar Kelime | Arama Hacmi (tahmini) |
|-------|---------------------|----------------------|
| Ana Sayfa | bağcılar oto ekspertiz | Yüksek |
| Ana Sayfa | istanbul oto ekspertiz | Yüksek |
| Hizmetler | araç ekspertiz hizmeti | Orta |
| Hizmetler | boya kaporta tespiti bağcılar | Düşük-Orta |
| Paketler | oto ekspertiz fiyatları 2026 | Yüksek |
| Blog | oto ekspertiz nedir | Yüksek |
| Blog | araç alırken nelere dikkat edilmeli | Yüksek |
| Blog | tramer kaydı sorgulama nasıl yapılır | Orta |
| Blog | 2. el araç kontrol listesi | Orta |
| İletişim | bağcılar oto ekspertiz randevu | Düşük-Orta |
| Tüm Sayfalar | en yakın ekspertiz / en yakın oto ekspertiz | Orta-Yüksek |
| LP - Güngören | güngören oto ekspertiz | Düşük |
| LP - Bahçelievler | bahçelievler oto ekspertiz | Düşük |

### 4.2 Yerel SEO (Local SEO)

**Google Business Profile (GBP) Optimizasyonu:**

- [ ] Birincil kategori: "Araç Muayene İstasyonu" veya "Oto Ekspertiz"
- [ ] İkincil kategoriler: "Araç Bakım Servisi"
- [ ] İşletme açıklaması: anahtar kelimeleri doğal şekilde içermeli (750 karakter)
- [ ] Minimum 20 yüksek kaliteli fotoğraf (dış cephe, iç mekan, ekipman, ekip)
- [ ] Çalışma saatleri ve özel günler
- [ ] SSS bölümü (GBP üzerinden)
- [ ] Haftalık post paylaşımı
- [ ] Müşterilerden yorum talep etme stratejisi

**NAP Tutarlılığı:**

```
İşletme Adı: [Firma Adı] Oto Ekspertiz
Adres: [Tam Adres], Bağcılar / İstanbul
Telefon: 0212 XXX XX XX
```

> NAP bilgisi header, footer, iletişim sayfası ve JSON-LD'de **birebir aynı** olmalı.

**JSON-LD Yapılandırılmış Veri (Şema İşaretlemesi):**

```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "[Firma Adı] Oto Ekspertiz",
  "image": "https://www.example.com/images/storefront.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Sokak Adresi]",
    "addressLocality": "Bağcılar",
    "addressRegion": "İstanbul",
    "postalCode": "34200",
    "addressCountry": "TR"
  },
  "telephone": "+902121234567",
  "url": "https://www.example.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "245"
  },
  "priceRange": "₺₺"
}
```

**İlçe Bazlı Landing Page'ler:**

Her çevre ilçe için `/lp/[ilce]-oto-ekspertiz` sayfaları:
- Benzersiz H1: "[İlçe] Oto Ekspertiz - Profesyonel Araç Kontrolü"
- İlçeye özel içerik (mesafe, ulaşım bilgisi)
- Aynı CTA ve form yapısı

### 4.3 Teknik SEO Gereksinimleri

```typescript
// src/app/layout.tsx - Root metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.example.com'),
  title: {
    default: 'Bağcılar Oto Ekspertiz | Profesyonel Araç Kontrol Hizmeti',
    template: '%s | [Firma Adı] Oto Ekspertiz',
  },
  description: 'Bağcılar\'da profesyonel oto ekspertiz hizmeti. Boya, kaporta, motor diagnostik ve tramer kontrolü. Hemen randevu alın.',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: '[Firma Adı] Oto Ekspertiz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://www.example.com',
  },
};
```

**Teknik SEO kontrol listesi:**

- [ ] Her sayfa için benzersiz `title` ve `description`
- [ ] Canonical URL'ler tüm sayfalarda
- [ ] Open Graph ve Twitter Card meta tag'leri
- [ ] `next-sitemap` ile otomatik `sitemap.xml` ve `robots.txt`
- [ ] Tüm görseller `next/image` ile (WebP, lazy loading, responsive)
- [ ] Alt text'ler anahtar kelime içerecek şekilde yazılacak
- [ ] Heading hiyerarşisi (tek H1, mantıklı H2-H3 yapısı)
- [ ] Internal linking stratejisi (blog yazıları arası, hizmet sayfalarına yönlendirme)
- [ ] Sayfa hızı: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 5. Dönüşüm Optimizasyonu (CRO)

### 5.1 WhatsApp Entegrasyonu

```typescript
// src/components/shared/WhatsAppButton.tsx
const WHATSAPP_NUMBER = '90XXXXXXXXXX';
const DEFAULT_MESSAGE = encodeURIComponent(
  'Merhaba, oto ekspertiz randevusu almak istiyorum.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;
```

**Yerleşim noktaları:**
- Floating buton: sağ alt köşe (sabit, tüm sayfalarda)
- Mobil sticky bar: ekranın altında sabit "Hemen Ara" + "WhatsApp" yan yana
- Header: WhatsApp ikonu (masaüstü)
- İletişim sayfası: WhatsApp ile iletişim kartı
- Her hizmet sayfasının sonunda: "WhatsApp'tan Bilgi Al" butonu

**GTM Event (tıklama izleme):**

```javascript
// Her WhatsApp butonu tıklamasında
window.dataLayer.push({
  event: 'whatsapp_click',
  click_location: 'floating_button' // veya 'header', 'mobile_bar', 'service_page'
});
```

### 5.2 Dinamik Randevu Formu

**Form alanları ve validasyon:**

| Alan | Tip | Validasyon | Zorunlu |
|------|-----|------------|---------|
| Ad Soyad | text | min 3 karakter | Evet |
| Telefon | tel | Türkiye formatı (05XX XXX XX XX) | Evet |
| Araç Markası | select | Marka listesi | Evet |
| Araç Modeli | select | Markaya bağlı dinamik | Evet |
| Araç Yılı | select | 2000-2026 | Evet |
| Tercih Edilen Tarih | date | bugünden itibaren | Hayır |
| Tercih Edilen Saat | select | 09:00-17:00 arası | Hayır |
| Mesaj / Not | textarea | max 500 karakter | Hayır |

**Form gönderim akışı:**

```
Kullanıcı formu doldurur
  → Zod ile istemci tarafı validasyon
  → Next.js API Route'a POST (/api/randevu)
  → Sunucu tarafı validasyon (aynı Zod şeması)
  → Resend ile firma e-postasına bildirim
  → Başarılı yanıt → Teşekkür mesajı + GTM event
  → dataLayer.push({ event: 'form_submit', form_type: 'appointment' })
```

### 5.3 Social Proof (Müşteri Yorumları)

**Yorum kartı yapısı:**

```
┌──────────────────────────────────┐
│  ⭐⭐⭐⭐⭐                       │
│  "Aracımı almadan önce kontrol   │
│   ettirdim, çok detaylı rapor    │
│   hazırladılar. Teşekkürler!"    │
│                                  │
│  — Ahmet Y. · BMW 320i · 2024   │
│    📍 Google Yorumu              │
└──────────────────────────────────┘
```

**Uygulama:**
- Ana sayfada yatay kaydırmalı (carousel) yorum kartları
- Her kartda: yıldız puanı, yorum metni, müşteri adı (baş harf + soyadı), araç bilgisi
- Google Reviews'tan alıntı olduğunu gösteren Google ikonu
- Toplamda en az 6-8 yorum kartı
- "Google'da Tüm Yorumları Gör" bağlantısı
- Daha önce ekspertiz yapılmış araçların marka logoları (BMW, Mercedes, Audi vb.) — güven ve deneyim göstergesi

### 5.4 Diğer CRO Elemanları

- **Animasyonlu sayaç:** "12.500+ Araç İncelendi", "2.400+ Mutlu Müşteri", "8+ Yıl Deneyim"
- **Hizmet karşılaştırma tablosu:** Paket bazlı (Temel / Standart / Detaylı) özellik matrisi
- **Aciliyet tetikleyicileri:** "Bugün 3 randevu kaldı" (sayfa yüklenince)
- **Neden biz?** bölümü: 4-6 kart grid (ikon + başlık + açıklama)
  - Profesyonel Ekipman
  - Sertifikalı Uzmanlar
  - Detaylı Rapor
  - Aynı Gün Sonuç
  - Uygun Fiyat Garantisi
  - 7/24 WhatsApp Destek

---

## 6. Pazarlama Altyapısı (Google Ads Hazırlığı)

### 6.1 Google Tag Manager (GTM) Kurulumu

**Next.js'e GTM ekleme:**

```typescript
// src/app/layout.tsx
import Script from 'next/script';

const GTM_ID = 'GTM-XXXXXXX';

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
```

### 6.2 Dönüşüm İzleme (Conversion Tracking)

**Tanımlanacak GTM Event'leri:**

| Event Adı | Tetikleyici | Dönüşüm Değeri |
|-----------|------------|----------------|
| `form_submit` | Randevu formu başarılı gönderim | Birincil dönüşüm |
| `whatsapp_click` | WhatsApp butonu tıklaması | İkincil dönüşüm |
| `phone_click` | Telefon numarası tıklaması (`tel:` link) | İkincil dönüşüm |
| `directions_click` | "Yol Tarifi Al" tıklaması | Mikro dönüşüm |
| `package_view` | Paket detayına tıklama | Mikro dönüşüm |

**dataLayer push örnekleri:**

```javascript
// Telefon tıklaması
window.dataLayer.push({
  event: 'phone_click',
  click_location: 'header',
  phone_number: '02121234567'
});

// Form gönderimi
window.dataLayer.push({
  event: 'form_submit',
  form_type: 'appointment',
  vehicle_brand: 'BMW',
  vehicle_model: '320i'
});
```

**GTM'de yapılacak tag konfigürasyonu:**
1. GA4 Event Tag → her custom event için
2. Google Ads Conversion Tag → `form_submit` ve `whatsapp_click` için
3. Google Ads Remarketing Tag → tüm sayfalar için

### 6.3 Landing Page Optimizasyon Kriterleri

**Google Ads kampanyaları için `/lp/[kampanya]` sayfaları:**

```
Özellik                          | Gereksinim
─────────────────────────────────┼────────────────────────────
Navigasyon                       | Minimal (sadece logo + CTA)
Above the fold                   | Başlık + Alt başlık + CTA + Güven sinyali
CTA sayısı                       | Tek odak (form veya telefon)
Sayfa uzunluğu                   | Max 3-4 scroll (kısa ve öz)
Lighthouse Performance           | > 90
Form alanı sayısı                | Max 4-5 (kısa form)
Güven sinyalleri                 | Yıldız puanı + yorum sayısı + sertifika
Çıkış noktaları                  | Minimum (footer link yok)
Mobil uyumluluk                  | %100 responsive
```

**Kampanya bazlı LP örnekleri:**
- `/lp/bagcilar-ekspertiz` → "Bağcılar Oto Ekspertiz" arama kampanyası
- `/lp/istanbul-ekspertiz` → "İstanbul Oto Ekspertiz" genel kampanyası
- `/lp/2el-arac-kontrol` → "2. El Araç Kontrol" kampanyası
- `/lp/ucretsiz-kontrol` → Promosyon kampanyası

**Yönlendirme stratejisi:** Reklamdan gelen kullanıcıyı doğrudan paket fiyatlarının ve randevu formunun bulunduğu bölüme yönlendir. Gereksiz adımları (ana sayfa turu, hakkımızda) atlayarak dönüşüm sürtünmesini minimize et.

---

## 7. Test ve Yayına Alım

### 7.1 Hız Testleri

**Hedef Lighthouse skorları:**

| Metrik | Hedef | Kabul Edilebilir Min. |
|--------|-------|---------------------|
| Performance | > 95 | > 90 |
| Accessibility | > 95 | > 90 |
| Best Practices | > 95 | > 90 |
| SEO | > 95 | > 95 |

**Core Web Vitals hedefleri:**

| Metrik | Hedef | Açıklama |
|--------|-------|----------|
| LCP (Largest Contentful Paint) | < 2.5s | En büyük içerik öğesinin yüklenme süresi |
| FID (First Input Delay) | < 100ms | İlk kullanıcı etkileşimine yanıt süresi |
| CLS (Cumulative Layout Shift) | < 0.1 | Görsel kararlılık skoru |
| INP (Interaction to Next Paint) | < 200ms | Etkileşim yanıt süresi |

**Test araçları:**
- [ ] Google Lighthouse (Chrome DevTools)
- [ ] PageSpeed Insights (web)
- [ ] WebPageTest (gerçek cihaz testi)
- [ ] Google Search Console (yayın sonrası)

### 7.2 Form Kontrolleri

- [ ] Boş form gönderimi engelleniyor mu?
- [ ] Telefon formatı validasyonu çalışıyor mu? (05XX XXX XX XX)
- [ ] E-posta bildirimi firma adresine ulaşıyor mu?
- [ ] Form gönderimi sonrası teşekkür mesajı gösteriliyor mu?
- [ ] GTM `form_submit` event'i tetikleniyor mu? (GTM Preview Mode ile kontrol)
- [ ] WhatsApp linki mobilde ve masaüstünde doğru açılıyor mu?
- [ ] Telefon `tel:` linki mobilde arama başlatıyor mu?
- [ ] Rate limiting aktif mi? (spam koruması)

### 7.3 Cross-Browser / Cross-Device Test

**Tarayıcılar:**
- [ ] Chrome (son 2 versiyon)
- [ ] Firefox (son 2 versiyon)
- [ ] Safari (son 2 versiyon)
- [ ] Edge (son 2 versiyon)

**Cihazlar ve ekran boyutları:**
- [ ] iPhone SE (375px) — küçük ekran testi
- [ ] iPhone 14/15 (390px) — standart mobil
- [ ] iPad (768px) — tablet
- [ ] Laptop (1024px) — küçük masaüstü
- [ ] Masaüstü (1440px) — standart masaüstü
- [ ] Geniş ekran (1920px) — büyük monitör

**Mobil özel kontroller:**
- [ ] Sticky bottom bar görünüyor ve tıklanabilir mi?
- [ ] Hamburger menü düzgün açılıp kapanıyor mu?
- [ ] Formlar mobilde kullanılabilir mi? (input zoom sorunu yok mu?)
- [ ] Görseller mobilde bozulmuyor mu?

### 7.4 Domain ve Hosting Süreci

**Domain seçimi:**
- Tercih: `firmaadi.com.tr` veya `firmaadi.com`
- Marka adını tam yansıtan, kısa ve akılda kalıcı
- Satın alma: Natro, İsimtescil veya Google Domains

**DNS ve Deployment:**

```
1. Vercel'de proje oluştur (GitHub repo bağla)
2. Domain sağlayıcıda DNS ayarları:
   - A Record: 76.76.21.21 (Vercel)
   - CNAME: cname.vercel-dns.com (www subdomain)
3. Vercel Dashboard → Settings → Domains → Domain ekle
4. SSL otomatik aktif olacak (Let's Encrypt)
5. www → non-www yönlendirmesi ayarla
```

**Vercel ortam değişkenleri (.env):**

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=90XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=info@firmaadi.com.tr
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza...
NEXT_PUBLIC_SITE_URL=https://www.firmaadi.com.tr
```

### 7.5 Go-Live Kontrol Listesi

**Yayın öncesi:**
- [ ] Tüm sayfalar responsive ve hatasız
- [ ] `robots.txt` doğru ayarlanmış (`/api/` ve `/_next/` engellenmiş)
- [ ] `sitemap.xml` tüm sayfaları içeriyor
- [ ] Tüm görsellerin alt text'leri var
- [ ] 404 sayfası özelleştirilmiş
- [ ] Favicon ve PWA ikonları ayarlanmış
- [ ] KVKK aydınlatma metni ve çerez bildirimi aktif
- [ ] Ortam değişkenleri Vercel'de tanımlı
- [ ] `console.log` kalıntıları temizlenmiş

**Yayın sonrası:**
- [ ] Google Search Console'a site ekle ve doğrula
- [ ] Sitemap.xml'i Search Console'a gönder
- [ ] Google Business Profile'da web sitesi URL'sini güncelle
- [ ] GA4 ve GTM'de veri geldiğini doğrula
- [ ] Dönüşüm event'lerinin tetiklendiğini kontrol et
- [ ] Google Ads hesabı ile dönüşüm eşleştirmesi yap
- [ ] Eski site varsa 301 yönlendirmelerini kur
- [ ] Sosyal medya profillerinde URL güncelle

---

## Proje Klasör Yapısı

```
oto-ekspertiz/
├── public/
│   ├── images/               # Statik görseller (logo, sertifika, araç fotoğrafları)
│   ├── fonts/                # Özel fontlar (opsiyonel, next/font tercih edilir)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout (GTM, fonts, metadata)
│   │   ├── page.tsx          # Ana sayfa
│   │   ├── not-found.tsx     # 404 sayfası
│   │   ├── kurumsal/
│   │   │   └── page.tsx
│   │   ├── hizmetler/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── paketler/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── iletisim/
│   │   │   └── page.tsx
│   │   ├── sss/
│   │   │   └── page.tsx
│   │   ├── referanslar/
│   │   │   └── page.tsx
│   │   ├── lp/
│   │   │   └── [campaign]/
│   │   │       └── page.tsx
│   │   ├── gizlilik/
│   │   │   └── page.tsx
│   │   ├── kvkk/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── randevu/
│   │           └── route.ts  # Form gönderim API endpoint
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── MobileBottomBar.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Packages.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── Stats.tsx
│   │   │   └── CTASection.tsx
│   │   ├── ui/               # shadcn/ui bileşenleri
│   │   └── shared/
│   │       ├── WhatsAppButton.tsx
│   │       ├── PhoneButton.tsx
│   │       ├── AppointmentForm.tsx
│   │       └── JsonLd.tsx
│   ├── lib/
│   │   ├── utils.ts          # Yardımcı fonksiyonlar (cn, formatPhone vb.)
│   │   ├── constants.ts      # Site sabitleri (telefon, adres, sosyal medya)
│   │   ├── seo.ts            # JSON-LD üretici, metadata helpers
│   │   └── validations.ts    # Zod form şemaları
│   ├── content/
│   │   └── blog/             # MDX blog yazıları
│   │       ├── oto-ekspertiz-nedir.mdx
│   │       └── arac-alirken-dikkat.mdx
│   ├── data/
│   │   ├── services.ts       # Hizmet verileri
│   │   ├── packages.ts       # Paket verileri
│   │   ├── testimonials.ts   # Müşteri yorumları
│   │   └── faq.ts            # SSS verileri
│   └── styles/
│       └── globals.css        # Tailwind directives + özel stiller
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── next-sitemap.config.js     # Sitemap yapılandırması
├── package.json
├── .env.local                 # Yerel ortam değişkenleri (git'e eklenmez)
├── .env.example               # Örnek ortam değişkenleri
├── .gitignore
└── PROJE-YOL-HARITASI.md
```

---

## Uygulama Sıralaması

| Faz | Süre | Kapsam | Çıktılar |
|-----|------|--------|----------|
| **Faz 1** | 1-2 gün | Proje kurulumu, layout, Ana Sayfa, İletişim | Next.js + Tailwind + shadcn/ui kurulumu, Header/Footer, Hero, İletişim formu |
| **Faz 2** | 1-2 gün | Kurumsal, Hizmetler, Paketler | Statik sayfalar, hizmet detay sayfaları, fiyat tablosu |
| **Faz 3** | 1 gün | Blog (MDX), SSS | Blog listeleme/detay, SSS accordion bileşeni |
| **Faz 4** | 1 gün | CRO bileşenleri | WhatsApp butonu, randevu formu API, testimonial carousel, sayaçlar |
| **Faz 5** | 0.5 gün | GTM, GA4, Conversion Tracking | Tag Manager entegrasyonu, event'ler, dönüşüm tag'leri |
| **Faz 6** | 0.5 gün | SEO optimizasyonu | Sitemap, JSON-LD, metadata, Lighthouse optimizasyonu |
| **Faz 7** | 0.5 gün | Test ve yayın | Cross-browser test, domain bağlama, go-live checklist |

**Toplam tahmini süre: 5-7 gün**
