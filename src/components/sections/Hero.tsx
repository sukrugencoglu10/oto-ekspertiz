"use client";

import Link from "next/link";
import { Phone, Star, Shield, Clock, FileCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Shield className="h-4 w-4 text-accent" />
              Garantili Ekspertiz &middot; Aynı Gün Sonuç
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Aracınızın</span>{" "}
              <span className="text-accent">Gerçek Değerini</span>{" "}
              <span className="text-white">Öğrenin</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Bağcılar&apos;da profesyonel oto ekspertiz hizmeti. 200+ kontrol
              noktası, detaylı rapor ve aynı gün sonuç.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-lg"
              >
                Hemen Randevu Al
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                <Phone className="h-5 w-5" />
                Bizi Arayın
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-accent fill-accent" />
                <span className="font-semibold text-white">4.9/5</span>
                <span>Google</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <span>2.400+ Mutlu Müşteri</span>
            </div>
          </motion.div>

          {/* Trust cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: Shield,
                title: "Garantili Hizmet",
                desc: "Profesyonel ekipmanlarla detaylı kontrol",
              },
              {
                icon: Clock,
                title: "Aynı Gün Sonuç",
                desc: "Raporunuz aynı gün elinizde",
              },
              {
                icon: FileCheck,
                title: "Detaylı Rapor",
                desc: "Fotoğraflı, anlaşılır rapor",
              },
              {
                icon: Star,
                title: "Uzman Kadro",
                desc: "Sertifikalı ekspertiz uzmanları",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <card.icon className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-white mb-1">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
