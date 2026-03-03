"use client";

import {
  Wrench,
  Award,
  FileText,
  Zap,
  BadgeCheck,
  Headset,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Wrench,
    title: "Profesyonel Ekipman",
    description:
      "Son teknoloji boya ölçüm cihazları ve OBD2 diagnostik sistemleri",
  },
  {
    icon: Award,
    title: "Sertifikalı Uzmanlar",
    description:
      "Alanında deneyimli, sertifikalı oto ekspertiz uzmanları",
  },
  {
    icon: FileText,
    title: "Detaylı Rapor",
    description:
      "Fotoğraflı, kolay anlaşılır ve kapsamlı ekspertiz raporu",
  },
  {
    icon: Zap,
    title: "Aynı Gün Sonuç",
    description: "Ekspertiz sonuçlarınız aynı gün elinizde",
  },
  {
    icon: BadgeCheck,
    title: "Uygun Fiyat Garantisi",
    description: "Kaliteli hizmeti en uygun fiyatlarla sunuyoruz",
  },
  {
    icon: Headset,
    title: "7/24 WhatsApp Destek",
    description:
      "Sorularınız için WhatsApp üzerinden bize ulaşabilirsiniz",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yılların deneyimi, profesyonel ekipman ve müşteri memnuniyeti odaklı
            hizmet anlayışımızla fark yaratıyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-md transition-all group"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
