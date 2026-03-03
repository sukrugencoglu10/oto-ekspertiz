import type { Metadata } from "next";
import { Shield, Star, Clock, Check } from "lucide-react";
import AppointmentForm from "@/components/shared/AppointmentForm";
import { SITE_CONFIG } from "@/lib/constants";
import { packages } from "@/data/packages";

interface Props {
  params: Promise<{ campaign: string }>;
}

const campaignData: Record<
  string,
  { title: string; subtitle: string; keyword: string }
> = {
  "bagcilar-ekspertiz": {
    title: "Bağcılar Oto Ekspertiz",
    subtitle:
      "Bağcılar'da profesyonel araç kontrol hizmeti. Aynı gün randevu, aynı gün sonuç.",
    keyword: "bağcılar oto ekspertiz",
  },
  "istanbul-ekspertiz": {
    title: "İstanbul Oto Ekspertiz",
    subtitle:
      "İstanbul'un merkezinde profesyonel ekspertiz. 12.500+ araç incelendi.",
    keyword: "istanbul oto ekspertiz",
  },
  "2el-arac-kontrol": {
    title: "2. El Araç Kontrol",
    subtitle:
      "İkinci el araç almadan önce mutlaka profesyonel kontrol yaptırın.",
    keyword: "2. el araç kontrol",
  },
  "ucretsiz-kontrol": {
    title: "Araç Kontrolünde Kampanya",
    subtitle:
      "Sınırlı süre! Ekonomik paket ile uygun fiyata profesyonel ekspertiz.",
    keyword: "oto ekspertiz kampanya",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { campaign } = await params;
  const data = campaignData[campaign];
  if (!data) return {};

  return {
    title: data.title,
    description: data.subtitle,
    robots: { index: false, follow: false },
  };
}

export default async function LandingPage({ params }: Props) {
  const { campaign } = await params;
  const data = campaignData[campaign] || {
    title: "Profesyonel Oto Ekspertiz",
    subtitle: "Aracınızın gerçek durumunu öğrenin. Hemen randevu alın.",
    keyword: "oto ekspertiz",
  };

  const standardPackage = packages.find((p) => p.id === "standart")!;

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header */}
      <div className="bg-primary py-4">
        <div className="mx-auto max-w-5xl px-4 flex items-center justify-between">
          <span className="text-white font-bold text-lg">
            {SITE_CONFIG.name}
          </span>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="text-accent font-semibold text-sm hover:text-accent-light transition-colors"
          >
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                <Shield className="h-4 w-4 text-accent" />
                Garantili Ekspertiz
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {data.title}
              </h1>
              <p className="text-gray-300 text-lg mb-6">{data.subtitle}</p>

              {/* Trust */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mb-6">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                  <strong className="text-white">4.9/5</strong> Google
                </span>
                <span>2.400+ Müşteri</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Aynı Gün Sonuç
                </span>
              </div>

              {/* Package highlight */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <h3 className="font-bold text-white mb-3">
                  {standardPackage.name} - {standardPackage.price}
                </h3>
                <ul className="space-y-2">
                  {standardPackage.features.slice(0, 5).map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-200"
                    >
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
}
