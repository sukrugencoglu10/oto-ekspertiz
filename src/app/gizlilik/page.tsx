import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Bağcılar Oto Ekspertiz gizlilik politikası.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/gizlilik`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Gizlilik Politikası
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p>
            {SITE_CONFIG.name} olarak kişisel verilerinizin güvenliği bizim
            için önemlidir. Bu gizlilik politikası, web sitemizi ziyaret
            ettiğinizde hangi bilgileri topladığımızı ve bu bilgileri nasıl
            kullandığımızı açıklar.
          </p>

          <h2 className="text-xl font-bold text-primary">Toplanan Bilgiler</h2>
          <p>
            Web sitemizde randevu formu doldurduğunuzda ad soyad, telefon
            numarası, araç bilgileri ve isteğe bağlı mesajınız toplanmaktadır.
            Bunun dışında Google Analytics aracılığıyla anonim kullanım
            istatistikleri toplanabilir.
          </p>

          <h2 className="text-xl font-bold text-primary">
            Bilgilerin Kullanımı
          </h2>
          <p>
            Topladığımız bilgiler yalnızca randevu talebinizi işleme almak,
            sizinle iletişime geçmek ve hizmet kalitemizi artırmak amacıyla
            kullanılmaktadır. Bilgileriniz üçüncü şahıslarla paylaşılmaz.
          </p>

          <h2 className="text-xl font-bold text-primary">Çerezler</h2>
          <p>
            Web sitemizde çerezler kullanılmaktadır. Çerezler, Google Analytics
            ve Google Tag Manager gibi hizmetler tarafından kullanıcı
            deneyimini iyileştirmek amacıyla kullanılır.
          </p>

          <h2 className="text-xl font-bold text-primary">İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-accent hover:underline"
            >
              {SITE_CONFIG.email}
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
