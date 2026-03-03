import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { faqItems } from "@/data/faq";
import FaqAccordion from "./FaqAccordion";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Oto ekspertiz hakkında sıkça sorulan sorular. Ekspertiz nedir, ne kadar sürer, fiyatları nedir? Tüm cevaplar burada.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/sss`,
  },
};

function generateFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={generateFaqJsonLd()} />

      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Oto ekspertiz hakkında merak ettiğiniz tüm soruların cevaplarını
            burada bulabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
