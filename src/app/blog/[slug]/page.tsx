import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { SITE_CONFIG } from "@/lib/constants";
import AppointmentForm from "@/components/shared/AppointmentForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-gray-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Blog
          </Link>
          <span className="inline-block text-xs font-semibold text-accent bg-accent/20 px-2.5 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} okuma
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              {paragraphs.map((p, i) => {
                if (p.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold text-primary mt-8 mb-4"
                    >
                      {p.replace("## ", "")}
                    </h2>
                  );
                }
                if (p.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-xl font-bold text-primary mt-6 mb-3"
                    >
                      {p.replace("### ", "")}
                    </h3>
                  );
                }
                if (p.startsWith("- ")) {
                  const items = p.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="list-disc pl-6 space-y-2 my-4">
                      {items.map((item, j) => (
                        <li key={j} className="text-gray-600">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">
                    {p}
                  </p>
                );
              })}
            </article>

            <aside className="lg:sticky lg:top-32 lg:self-start">
              <AppointmentForm />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
