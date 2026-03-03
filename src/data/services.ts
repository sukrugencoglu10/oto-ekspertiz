import {
  Car,
  Paintbrush,
  Cpu,
  FileSearch,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "oto-ekspertiz",
    title: "Kapsamlı Oto Ekspertiz",
    shortTitle: "Oto Ekspertiz",
    description:
      "Aracınızın tüm mekanik, elektrik ve kaporta durumunu 200+ kontrol noktasından geçiriyoruz.",
    longDescription:
      "Uzman ekibimiz tarafından gerçekleştirilen kapsamlı oto ekspertiz hizmetimiz, aracınızın mevcut durumunu en ince ayrıntısına kadar ortaya koyar. Boya kalınlığı ölçümünden motor diagnostiğe, şasi kontrolünden elektronik test sistemlerine kadar 200'den fazla kontrol noktası ile aracınızı değerlendiriyoruz.",
    icon: Car,
    features: [
      "200+ kontrol noktası",
      "Detaylı yazılı rapor",
      "Fotoğraflı dokümantasyon",
      "Aynı gün sonuç",
      "Boya kalınlığı ölçümü",
      "OBD2 motor diagnostik",
    ],
  },
  {
    slug: "boya-kaporta-tespiti",
    title: "Boya & Kaporta Tespiti",
    shortTitle: "Boya Tespiti",
    description:
      "Profesyonel boya kalınlığı ölçüm cihazı ile aracın boyalı, değişen ve orijinal parçalarını tespit ediyoruz.",
    longDescription:
      "Araç satın almadan önce en kritik kontrollerden biri boya ve kaporta tespitidir. Profesyonel boya kalınlığı ölçüm cihazımız ile her panelin mikron değerini ölçerek, boyalı, değişen, patlak veya orijinal parçaları net olarak belirliyoruz.",
    icon: Paintbrush,
    features: [
      "Mikron bazlı boya ölçümü",
      "Panel bazlı detaylı rapor",
      "Değişen parça tespiti",
      "Macun ve dolgu kontrolü",
      "Kaporta düzgünlük analizi",
      "Boyasız göçük tespiti",
    ],
  },
  {
    slug: "motor-diagnostik",
    title: "Motor Diagnostik",
    shortTitle: "Motor Diagnostik",
    description:
      "OBD2 ve profesyonel diagnostik cihazlarla motorunuzun sağlık durumunu analiz ediyoruz.",
    longDescription:
      "Aracınızın beynine bağlanarak tüm elektronik sistemlerin durumunu kontrol ediyoruz. Motor, şanzıman, ABS, airbag ve diğer tüm kontrol ünitelerindeki arıza kodlarını okuyarak aracın gerçek durumunu ortaya koyuyoruz.",
    icon: Cpu,
    features: [
      "OBD2 arıza kodu okuma",
      "Motor performans testi",
      "Şanzıman kontrol",
      "ABS/ESP sistem testi",
      "Airbag kontrol",
      "Emisyon değerleri ölçümü",
    ],
  },
  {
    slug: "tramer-sorgulama",
    title: "Tramer Sorgulama",
    shortTitle: "Tramer Sorgulama",
    description:
      "Aracın sigorta hasar geçmişini Tramer sistemi üzerinden sorguluyoruz.",
    longDescription:
      "SBM (Sigorta Bilgi ve Gözetim Merkezi) üzerinden aracın tüm sigorta hasar kayıtlarını sorguluyoruz. Tramer kaydı, hasar tutarları, hasar tarihleri ve hasar türleri hakkında detaylı bilgi sunuyoruz.",
    icon: FileSearch,
    features: [
      "SBM Tramer sorgusu",
      "Hasar geçmişi raporu",
      "Hasar tutarı detayları",
      "Pert kayıt kontrolü",
      "Hasar türü analizi",
      "Resmi belge çıktısı",
    ],
  },
];
