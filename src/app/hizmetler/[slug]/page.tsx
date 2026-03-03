import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { services } from "@/data/services";
import { SITE_CONFIG } from "@/lib/constants";
import AppointmentForm from "@/components/shared/AppointmentForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/hizmetler/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-1 text-gray-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Tüm Hizmetler
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <service.icon className="h-10 w-10 text-accent" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {service.title}
            </h1>
          </div>
          <p className="text-gray-300 max-w-2xl text-lg">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content + Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Hizmet Detayı
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Kontrol Kapsamı
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 bg-surface rounded-xl p-4 border border-border"
                    >
                      <Check className="h-5 w-5 text-success shrink-0" />
                      <span className="text-sm font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  Hemen Randevu Alın
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.shortTitle} hizmeti için hemen randevu alın, aynı gün
                  sonuç alın.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    Randevu Al
                  </Link>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Bizi Arayın
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
