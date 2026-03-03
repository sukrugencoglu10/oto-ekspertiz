import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Müşteri Yorumları & Referanslar",
  description:
    "Bağcılar Oto Ekspertiz müşteri yorumları ve referansları. Google yorumlarında 4.9/5 puan. Müşterilerimizin deneyimleri.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/referanslar`,
  },
};

const brandLogos = [
  "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Toyota",
  "Ford", "Renault", "Hyundai", "Kia", "Fiat",
  "Peugeot", "Opel", "Honda", "Volvo", "Škoda",
];

export default function ReferencesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Müşteri Yorumları & Referanslar
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Binlerce müşterimizin deneyimlerini okuyun. Google&apos;da 4.9/5
            ortalama puanımızla güvenilirliğimizi kanıtlıyoruz.
          </p>
        </div>
      </section>

      <Testimonials />

      {/* Brand logos */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-3">
            Ekspertiz Yaptığımız Markalar
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            Her marka ve model araç için profesyonel ekspertiz hizmeti sunuyoruz.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {brandLogos.map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-xl px-6 py-3 border border-border text-sm font-semibold text-gray-500 hover:text-primary hover:border-accent transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTASection />
    </>
  );
}
