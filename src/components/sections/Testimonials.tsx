"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-accent fill-accent"
                />
              ))}
            </div>
            <span className="font-semibold text-primary">4.9/5</span>
            <span>ortalama puan &middot; 245+ Google Yorumu</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(0, 8).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-surface rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 line-clamp-4">
                &ldquo;{review.comment}&rdquo;
              </p>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-primary text-sm">
                  {review.name}
                </p>
                <p className="text-xs text-muted">{review.vehicle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={SITE_CONFIG.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors"
          >
            Google&apos;da Tüm Yorumları Gör &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
