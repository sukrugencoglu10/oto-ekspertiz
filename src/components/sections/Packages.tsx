"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Packages() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Ekspertiz Paketleri
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            İhtiyacınıza uygun paketi seçin, aracınızı güvenle kontrol ettirelim.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                "relative bg-white rounded-2xl p-6 lg:p-8 border-2 flex flex-col",
                pkg.highlighted
                  ? "border-accent shadow-xl scale-[1.02]"
                  : "border-border shadow-sm"
              )}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-primary mb-2">
                {pkg.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">
                  {pkg.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/iletisim"
                className={cn(
                  "block text-center font-semibold py-3 rounded-xl transition-colors",
                  pkg.highlighted
                    ? "bg-accent hover:bg-accent-dark text-white"
                    : "bg-primary hover:bg-primary-dark text-white"
                )}
              >
                Randevu Al
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
