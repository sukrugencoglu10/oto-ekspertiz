import type { Metadata } from "next";
import { Shield, Target, Eye, Award, Users, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";
import Stats from "@/components/sections/Stats";

export const metadata: Metadata = {
  title: "Kurumsal - Hakkımızda",
  description:
    "Bağcılar Oto Ekspertiz olarak yılların deneyimiyle profesyonel araç kontrol hizmeti sunuyoruz. Ekibimiz, değerlerimiz ve hikayemiz.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/kurumsal`,
  },
};

export default function CorporatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hakkımızda
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Güvenilir, şeffaf ve profesyonel oto ekspertiz hizmeti anlayışımızla
            binlerce müşterinin tercihi olduk.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  İstanbul Bağcılar&apos;da kurulan firmamız, ikinci el araç
                  piyasasındaki güven sorununa çözüm üretmek amacıyla yola
                  çıktı. Sektörde şeffaflığı ve profesyonelliği ön planda
                  tutarak, her müşterimize aracının gerçek durumunu net bir
                  şekilde raporluyoruz.
                </p>
                <p>
                  TSE belgeli ekipmanlarımız ve sertifikalı uzman kadromuz ile
                  bugüne kadar 12.500&apos;den fazla aracı inceledik. Amacımız,
                  araç alıcı ve satıcılarının güvenli bir şekilde karar
                  vermelerine yardımcı olmaktır.
                </p>
                <p>
                  Müşteri memnuniyetini her şeyin üstünde tutan anlayışımız,
                  bizi bölgemizin en güvenilir oto ekspertiz merkezi konumuna
                  getirdi.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  title: "TSE Belgeli",
                  desc: "Tüm ekipmanlarımız TSE onaylı",
                },
                {
                  icon: Users,
                  title: "Uzman Kadro",
                  desc: "Sertifikalı ekspertiz uzmanları",
                },
                {
                  icon: Shield,
                  title: "Garantili Hizmet",
                  desc: "Raporlarımızın arkasında duruyoruz",
                },
                {
                  icon: Clock,
                  title: "Hızlı Teslimat",
                  desc: "Aynı gün detaylı rapor",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface rounded-2xl p-6 border border-border text-center"
                >
                  <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Misyonumuz</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                İkinci el araç piyasasında şeffaflığı ve güveni sağlamak,
                müşterilerimize profesyonel ekipman ve uzman kadromuzla en
                doğru bilgiyi sunmak. Her ekspertiz raporumuz, müşterilerimizin
                bilinçli karar vermesini sağlayan bir güven belgesidir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Vizyonumuz</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Türkiye&apos;nin en güvenilir ve teknolojik açıdan en donanımlı
                oto ekspertiz ağını oluşturmak. Dijital raporlama, yapay zeka
                destekli analiz ve müşteri deneyiminde sektör standardını
                belirleyen bir marka olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <CTASection />
    </>
  );
}
