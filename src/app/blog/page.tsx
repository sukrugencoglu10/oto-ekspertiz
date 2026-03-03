import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog - Oto Ekspertiz Rehberi",
  description:
    "Oto ekspertiz, araç kontrolü, tramer sorgulama ve ikinci el araç alım ipuçları. Uzman bilgileriyle doğru kararlar verin.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Oto ekspertiz, araç kontrolü ve ikinci el araç alımı hakkında
            faydalı bilgiler ve rehberler.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <span className="text-6xl opacity-30">📝</span>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("tr-TR")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
