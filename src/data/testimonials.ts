export interface Testimonial {
  id: number;
  name: string;
  vehicle: string;
  rating: number;
  comment: string;
  date: string;
  source: "google";
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmet Y.",
    vehicle: "BMW 320i · 2022",
    rating: 5,
    comment:
      "Aracımı almadan önce kontrol ettirdim, çok detaylı rapor hazırladılar. Boyalı parçaları net olarak gösterdiler. Teşekkürler!",
    date: "2026-01-15",
    source: "google",
  },
  {
    id: 2,
    name: "Fatma K.",
    vehicle: "Volkswagen Golf · 2021",
    rating: 5,
    comment:
      "Çok profesyonel bir ekip. Aracın her detayını tek tek kontrol ettiler. Raporu aynı gün WhatsApp'tan gönderdiler.",
    date: "2026-01-22",
    source: "google",
  },
  {
    id: 3,
    name: "Mehmet S.",
    vehicle: "Mercedes C200 · 2023",
    rating: 5,
    comment:
      "Galeri olarak sürekli çalışıyoruz. Hızlı ve güvenilir hizmet. Fiyatlar da çok makul.",
    date: "2026-02-01",
    source: "google",
  },
  {
    id: 4,
    name: "Elif D.",
    vehicle: "Toyota Corolla · 2020",
    rating: 5,
    comment:
      "İlk defa ekspertiz yaptırıyordum, çok ilgili davrandılar. Her şeyi anlayacağım şekilde açıkladılar.",
    date: "2026-02-10",
    source: "google",
  },
  {
    id: 5,
    name: "Burak A.",
    vehicle: "Ford Focus · 2019",
    rating: 4,
    comment:
      "Tramer kaydında çıkmayan bir hasar buldular. Alacağım araçtan son anda vazgeçtim. Çok teşekkür ederim.",
    date: "2026-02-15",
    source: "google",
  },
  {
    id: 6,
    name: "Zeynep T.",
    vehicle: "Hyundai Tucson · 2023",
    rating: 5,
    comment:
      "Randevu sürecinden rapor teslimine kadar her şey çok sorunsuz ilerledi. Kesinlikle tavsiye ederim.",
    date: "2026-02-20",
    source: "google",
  },
  {
    id: 7,
    name: "Oğuz R.",
    vehicle: "Renault Megane · 2021",
    rating: 5,
    comment:
      "Motor diagnostik testi sayesinde gizli bir arıza tespit ettiler. Aracı almadım ve büyük bir zarardan kurtuldum.",
    date: "2026-02-25",
    source: "google",
  },
  {
    id: 8,
    name: "Hakan B.",
    vehicle: "Audi A4 · 2022",
    rating: 5,
    comment:
      "Profesyonel ekipman ve uzman kadro. Full paket yaptırdım, her kuruşuna değdi.",
    date: "2026-03-01",
    source: "google",
  },
];
