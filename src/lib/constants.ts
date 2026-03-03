export const SITE_CONFIG = {
  name: "Bağcılar Oto Ekspertiz",
  title: "Bağcılar Oto Ekspertiz | Profesyonel Araç Kontrol Hizmeti",
  description:
    "Bağcılar'da profesyonel oto ekspertiz hizmeti. Boya, kaporta, motor diagnostik ve tramer kontrolü. Hemen randevu alın.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  phone: "0212 123 45 67",
  phoneRaw: "+902121234567",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "902121234567",
  email: "info@example.com",
  address: {
    street: "Yıldıztepe Mah. Bağcılar Cad. No:123",
    district: "Bağcılar",
    city: "İstanbul",
    postalCode: "34200",
    country: "TR",
  },
  workingHours: "Pzt-Cmt: 09:00 - 18:00",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12042.1!2d28.83!3d41.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQmHEn2PDsWxhcg!5e0!3m2!1str!2str!4v1",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    google:
      "https://www.google.com/maps/place/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kurumsal", href: "/kurumsal" },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [
      { label: "Oto Ekspertiz", href: "/hizmetler/oto-ekspertiz" },
      { label: "Boya & Kaporta Tespiti", href: "/hizmetler/boya-kaporta-tespiti" },
      { label: "Motor Diagnostik", href: "/hizmetler/motor-diagnostik" },
      { label: "Tramer Sorgulama", href: "/hizmetler/tramer-sorgulama" },
    ],
  },
  { label: "Paketler", href: "/paketler" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Merhaba, oto ekspertiz randevusu almak istiyorum."
);
