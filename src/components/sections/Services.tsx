"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aracınızın her detayını profesyonel ekipmanlarla kontrol ediyor,
            şeffaf ve detaylı raporlar sunuyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/hizmetler/${service.slug}`}
                className="group block h-full bg-surface hover:bg-white rounded-2xl p-6 border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <service.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                  Detaylı Bilgi
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
