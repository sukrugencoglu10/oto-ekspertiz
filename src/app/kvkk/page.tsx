import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Bağcılar Oto Ekspertiz KVKK aydınlatma metni.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/kvkk`,
  },
};

export default function KvkkPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">
          KVKK Aydınlatma Metni
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
            uyarınca, {SITE_CONFIG.name} olarak veri sorumlusu sıfatıyla
            kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında
            işlemekteyiz.
          </p>

          <h2 className="text-xl font-bold text-primary">
            İşlenen Kişisel Veriler
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ad Soyad</li>
            <li>Telefon numarası</li>
            <li>Araç bilgileri (marka, model, yıl)</li>
            <li>Randevu talep tarihi ve saati</li>
            <li>İsteğe bağlı mesaj içeriği</li>
          </ul>

          <h2 className="text-xl font-bold text-primary">
            İşleme Amaçları
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Randevu talebinin değerlendirilmesi ve işleme alınması</li>
            <li>Müşteri ile iletişime geçilmesi</li>
            <li>Hizmet kalitesinin artırılması</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <h2 className="text-xl font-bold text-primary">
            Veri Saklama Süresi
          </h2>
          <p>
            Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve
            yasal saklama süreleri dahilinde muhafaza edilir.
          </p>

          <h2 className="text-xl font-bold text-primary">Haklarınız</h2>
          <p>
            KVKK&apos;nın 11. maddesi uyarınca; kişisel verilerinizin işlenip
            işlenmediğini öğrenme, işlenme amacını öğrenme, düzeltilmesini
            isteme, silinmesini isteme haklarınız bulunmaktadır. Bu
            haklarınızı kullanmak için{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-accent hover:underline"
            >
              {SITE_CONFIG.email}
            </a>{" "}
            adresine başvurabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
