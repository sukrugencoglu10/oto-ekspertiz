import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Aracınızı Kontrol Ettirmeden Karar Vermeyin
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Profesyonel ekspertiz hizmeti ile aracınızın gerçek durumunu öğrenin.
            Hemen randevu alın, aynı gün sonuç alın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-lg"
            >
              Hemen Randevu Al
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/paketler"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Paketleri İncele
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
