import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-primary/10 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
          dönerek devam edebilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Home className="h-4 w-4" />
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  );
}
