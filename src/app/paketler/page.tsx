import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Packages from "@/components/sections/Packages";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Ekspertiz Paketleri & Fiyatlar",
  description:
    "Bağcılar oto ekspertiz fiyatları 2026. Ekonomik, Standart ve Full ekspertiz paketleri. İhtiyacınıza uygun paketi seçin.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/paketler`,
  },
};

export default function PackagesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ekspertiz Paketleri & Fiyatlar
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            İhtiyacınıza uygun paketi seçin, aracınızı güvenle kontrol
            ettirelim. Galeriler için özel fiyatlar mevcuttur.
          </p>
        </div>
      </section>

      <Packages />

      {/* Extra info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-surface rounded-2xl p-8 border border-border">
            <h2 className="text-xl font-bold text-primary mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary">
                  Galeri indirimi var mı?
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Evet, aylık 5 ve üzeri ekspertiz yaptıran galerilerimize özel
                  indirimler sunuyoruz. Detaylar için bizimle iletişime
                  geçebilirsiniz.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary">
                  Paket fiyatlarına KDV dahil mi?
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Evet, tüm fiyatlarımız KDV dahildir.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary">
                  Hangi ödeme yöntemlerini kabul ediyorsunuz?
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Nakit, banka kartı ve kredi kartı ile ödeme kabul ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
