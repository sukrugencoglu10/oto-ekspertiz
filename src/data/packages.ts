export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export const packages: Package[] = [
  {
    id: "ekonomik",
    name: "Ekonomik Paket",
    price: "1.500 ₺",
    description: "Temel kontrol noktalarını kapsayan uygun fiyatlı ekspertiz.",
    features: [
      "Boya kalınlığı ölçümü",
      "Dış kaporta kontrolü",
      "Temel motor kontrolü",
      "Tramer sorgulama",
      "Yazılı rapor",
    ],
    highlighted: false,
  },
  {
    id: "standart",
    name: "Standart Paket",
    price: "2.500 ₺",
    description:
      "Detaylı mekanik ve elektronik kontrolleri içeren kapsamlı ekspertiz.",
    features: [
      "Boya kalınlığı ölçümü",
      "Tam kaporta kontrolü",
      "Motor diagnostik (OBD2)",
      "Şanzıman kontrolü",
      "Tramer sorgulama",
      "ABS/Airbag test",
      "Fotoğraflı rapor",
      "Yol testi",
    ],
    highlighted: true,
    badge: "En Popüler",
  },
  {
    id: "full",
    name: "Full Paket",
    price: "3.500 ₺",
    description:
      "Aracın A'dan Z'ye tüm detaylarını kapsayan en kapsamlı ekspertiz.",
    features: [
      "Standart paket dahil",
      "Lift altı kontrol",
      "Süspansiyon testi",
      "Fren sistemi testi",
      "Lastik durum analizi",
      "İç döşeme detaylı kontrol",
      "Klima performans testi",
      "Video kayıtlı rapor",
      "Whatsapp üzerinden canlı bilgilendirme",
      "Garanti belgesi",
    ],
    highlighted: false,
    badge: "En Kapsamlı",
  },
];
