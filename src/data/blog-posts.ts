export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "oto-ekspertiz-nedir",
    title: "Oto Ekspertiz Nedir? Neden Yaptırmalısınız?",
    excerpt:
      "İkinci el araç alırken oto ekspertiz yaptırmak neden bu kadar önemli? Ekspertiz sürecinde neler kontrol edilir? Tüm detaylarıyla anlattık.",
    content: `
Oto ekspertiz, bir aracın mekanik, elektrik, kaporta ve boya durumunun profesyonel cihazlarla kontrol edilmesi ve raporlanması işlemidir. Özellikle ikinci el araç alım satımında kritik bir öneme sahiptir.

## Ekspertizde Neler Kontrol Edilir?

### Boya ve Kaporta Kontrolü
Profesyonel boya kalınlığı ölçüm cihazları ile aracın her panelinin mikron değeri ölçülür. Böylece boyalı, değişen veya orijinal parçalar net olarak tespit edilir.

### Motor Diagnostik
OBD2 cihazı ile aracın elektronik beynine bağlanarak tüm arıza kodları okunur. Motor, şanzıman, ABS ve airbag gibi sistemlerin durumu kontrol edilir.

### Tramer Sorgulama
SBM (Sigorta Bilgi ve Gözetim Merkezi) üzerinden aracın sigorta hasar geçmişi sorgulanır. Geçmiş hasar kayıtları ve tutarları raporlanır.

### Şasi ve Alt Kısım Kontrolü
Araç lifte kaldırılarak alt kısmı detaylı şekilde incelenir. Şasi eğriliği, yağ kaçakları ve süspansiyon durumu kontrol edilir.

## Ekspertiz Yaptırmamanın Riskleri

- Boyalı veya değişen parçaları fark edemeyebilirsiniz
- Gizli motor arızaları sizi beklenmedik masraflarla karşı karşıya bırakabilir
- Tramer kaydında görünmeyen hasarlar olabilir
- Aracın piyasa değerinden fazla ödeme yapabilirsiniz

## Sonuç

İkinci el araç alırken profesyonel bir ekspertiz yaptırmak, hem mali hem de güvenlik açısından en doğru karardır. Bağcılar Oto Ekspertiz olarak detaylı ve şeffaf raporlarımızla yanınızdayız.
    `.trim(),
    date: "2026-02-15",
    readTime: "5 dk",
    category: "Rehber",
  },
  {
    slug: "arac-alirken-dikkat-edilmesi-gerekenler",
    title: "İkinci El Araç Alırken Dikkat Edilmesi Gereken 10 Şey",
    excerpt:
      "İkinci el araç satın almadan önce mutlaka kontrol etmeniz gereken 10 kritik madde. Aldatılmamak için bu listeyi inceleyin.",
    content: `
İkinci el araç alımı, doğru adımlar atılmazsa büyük maddi kayıplara yol açabilir. İşte araç almadan önce mutlaka kontrol etmeniz gereken 10 kritik madde.

## 1. Boya Kontrolü Yaptırın
Profesyonel boya kalınlığı ölçüm cihazıyla her paneli kontrol ettirin. Boyalı veya değişen parçalar aracın kazaya karışmış olabileceğinin göstergesidir.

## 2. Tramer Kaydını Sorgulayın
SBM üzerinden aracın sigorta hasar geçmişini mutlaka sorgulayın. Geçmiş hasar kayıtları ve tutarları size aracın gerçek durumu hakkında fikir verir.

## 3. Motor Diagnostik Yaptırın
OBD2 cihazı ile motor arıza kodlarını okutun. Silinen arıza kodları bile iz bırakabilir.

## 4. Kilometre Manipülasyonu Kontrolü
Servis kayıtları ile mevcut kilometre uyumunu kontrol edin. Kilometre düşürme en yaygın dolandırıcılık yöntemlerinden biridir.

## 5. Ruhsat ve Belgeler
Ruhsatın orijinal olduğundan ve araç bilgileriyle uyumlu olduğundan emin olun.

## 6. Lastik ve Fren Kontrolü
Lastik diş derinliği ve fren balata kalınlığını kontrol edin. Yakın zamanda değişim gerektirebilir.

## 7. Şasi Numarası Eşleşmesi
Motor üzerindeki ve kapı eşiğindeki şasi numarasının ruhsatla eşleştiğini doğrulayın.

## 8. Yol Testi
Aracı mutlaka düz yol ve virajlarda test edin. Direksiyon titremesi veya çekme olup olmadığını kontrol edin.

## 9. İç Döşeme Durumu
Koltuklar, tavan döşemesi ve konsol durumunu inceleyin. Aşırı yıpranma yüksek kilometrenin göstergesi olabilir.

## 10. Profesyonel Ekspertiz
Tüm bu kontrolleri profesyonel bir ekspertiz merkezinde tek seferde yaptırabilirsiniz. Bu sayede hiçbir detay gözden kaçmaz.

## Sonuç
İkinci el araç alırken acele etmeyin, mutlaka profesyonel bir ekspertiz yaptırın. Küçük bir yatırımla büyük sorunlardan kaçınabilirsiniz.
    `.trim(),
    date: "2026-02-20",
    readTime: "7 dk",
    category: "İpuçları",
  },
  {
    slug: "tramer-kaydi-sorgulama-nasil-yapilir",
    title: "Tramer Kaydı Sorgulama Nasıl Yapılır? Adım Adım Rehber",
    excerpt:
      "Tramer kaydı nedir, nasıl sorgulanır, nelere dikkat edilmelidir? İkinci el araç alırken tramer kontrolünün önemi.",
    content: `
Tramer kaydı, bir aracın sigorta şirketlerine bildirilmiş hasar geçmişini gösteren resmi bir kayıt sistemidir. İkinci el araç alırken mutlaka kontrol edilmesi gereken en önemli adımlardan biridir.

## Tramer Nedir?

Tramer, Sigorta Bilgi ve Gözetim Merkezi (SBM) tarafından yönetilen bir hasar kayıt sistemidir. Araçların sigorta kapsamında bildirilen tüm hasar kayıtları bu sistemde tutulur.

## Tramer Kaydında Ne Görülür?

- Hasar tarihi
- Hasar tutarı (ödenen tazminat miktarı)
- Hasar türü (ön, arka, sağ, sol)
- Pert kaydı olup olmadığı
- Sigorta şirketi bilgisi

## Nasıl Sorgulanır?

### 1. Online Sorgulama
SBM'nin resmi web sitesi üzerinden araç plaka numarası veya şasi numarası ile sorgulama yapabilirsiniz.

### 2. Ekspertiz Merkezinde
Profesyonel ekspertiz merkezlerinde Tramer sorgulama hizmeti verilmektedir. Sonuçlar raporunuza dahil edilir.

## Dikkat Edilmesi Gerekenler

- Tramer kaydı olmayan araç "kazasız" anlamına gelmez (sigorta dışı onarımlar kayıt altına alınmaz)
- Yüksek tramer tutarı ciddi bir hasar geçmişine işaret edebilir
- Pert kaydı olan araçlardan kesinlikle uzak durun
- Fiziksel kontrolü Tramer sorgulama ile birlikte yaptırın

## Sonuç

Tramer sorgulama tek başına yeterli değildir ancak araç geçmişi hakkında önemli bilgiler sunar. Kapsamlı bir ekspertiz ile birlikte kullanıldığında en güvenli sonucu elde edersiniz.
    `.trim(),
    date: "2026-02-25",
    readTime: "6 dk",
    category: "Rehber",
  },
];
