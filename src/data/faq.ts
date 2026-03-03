export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Oto ekspertiz nedir?",
    answer:
      "Oto ekspertiz, bir aracın mekanik, elektrik, kaporta ve boya durumunun profesyonel cihazlarla kontrol edilmesi ve raporlanması işlemidir. Özellikle ikinci el araç alım satımında aracın gerçek durumunun ortaya çıkması için yapılır.",
  },
  {
    question: "Ekspertiz yaptırmak ne kadar sürer?",
    answer:
      "Seçtiğiniz pakete göre ekspertiz süresi değişir. Ekonomik paket yaklaşık 30-45 dakika, Standart paket 1-1.5 saat, Full paket ise 2-2.5 saat sürmektedir. Raporunuz aynı gün teslim edilir.",
  },
  {
    question: "Randevu almadan gelebilir miyim?",
    answer:
      "Randevusuz da hizmet veriyoruz ancak randevu almanızı öneriyoruz. Randevulu müşterilerimize öncelik tanınmaktadır. WhatsApp veya telefon ile kolayca randevu alabilirsiniz.",
  },
  {
    question: "Ekspertiz raporu ne kadar geçerlidir?",
    answer:
      "Ekspertiz raporu, kontrolün yapıldığı andaki aracın durumunu yansıtır. Raporun geçerlilik süresi yoktur ancak aracın durumu zaman içinde değişebileceğinden, satın alma öncesinde güncel bir kontrol yaptırmanızı öneririz.",
  },
  {
    question: "Hangi marka araçlara ekspertiz yapıyorsunuz?",
    answer:
      "Tüm otomobil markalarına ekspertiz hizmeti veriyoruz. Binek araçlar, SUV'ler, hafif ticari araçlar ve lüks segment araçlar dahil olmak üzere her türlü araca hizmet sunuyoruz.",
  },
  {
    question: "Ekspertiz fiyatları ne kadar?",
    answer:
      "Fiyatlarımız seçtiğiniz pakete göre değişmektedir. Ekonomik Paket 1.500 ₺, Standart Paket 2.500 ₺, Full Paket 3.500 ₺'dir. Galeriler ve toplu talepler için özel fiyatlar sunuyoruz.",
  },
  {
    question: "Galeri olarak toplu ekspertiz yaptırabilir miyiz?",
    answer:
      "Evet, galeriler ve kurumsal müşterilerimize özel indirimli fiyatlar sunuyoruz. Detaylı bilgi için bizimle iletişime geçebilirsiniz.",
  },
  {
    question: "Tramer sorgulama nedir?",
    answer:
      "Tramer (SBM - Sigorta Bilgi ve Gözetim Merkezi) sorgulama, aracın sigorta şirketlerine bildirilmiş tüm hasar kayıtlarını gösteren resmi bir sorgudur. Aracın geçmişte yaşadığı kazalar ve hasar tutarları bu sistemde yer alır.",
  },
];
