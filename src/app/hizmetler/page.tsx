import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { SITE_CONFIG } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Oto ekspertiz, boya tespiti, motor diagnostik ve tramer sorgulama hizmetlerimiz. Profesyonel ekipman ve uzman kadro.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/hizmetler`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hizmetlerimiz
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Aracınızın her detayını profesyonel ekipmanlarla kontrol ediyor,
            şeffaf ve detaylı raporlar sunuyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 space-y-12">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-medium text-sm px-3 py-1 rounded-full mb-4">
                  <service.icon className="h-4 w-4" />
                  {service.shortTitle}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.longDescription}
                </p>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Detaylı Bilgi
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div
                className={`${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <div className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="font-bold text-primary mb-4">
                    Kontrol Kapsamı
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
