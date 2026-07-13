"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    title: "The Future of Remote Work in 2025",
    excerpt:
      "Explore how remote work is shaping the global workforce, its impact on mental health, productivity, and...",
    category: "Technology",
    readTime: "5 min read",
    date: "Jul 13, 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    title: "The Future of Remote Work in 2025",
    excerpt:
      "Explore how remote work is shaping the global workforce, its impact on mental health, productivity, and...",
    category: "Marketing",
    readTime: "5 min read",
    date: "Jul 13, 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    title: "The Future of Remote Work in 2025",
    excerpt:
      "Explore how remote work is shaping the global workforce, its impact on mental health, productivity, and...",
    category: "Business",
    readTime: "5 min read",
    date: "Jul 13, 2026",
  },
];

export function ArticlesSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Articles
            </span>
            <h2 className="mt-3 text-4xl font-medium text-white sm:text-5xl">
              Stay updated with the latest trends, insights, tips, and professional development content.
            </h2>
          </div>
          <Button
            variant="default"
            size="lg"
          >
            View All Articles
            <ArrowRight className="size-4 ml-1.5" strokeWidth={2.6} />
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-gray-700 bg-gray-950 transition-all duration-300 hover:border-gray-500 hover:bg-gray-900"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute left-4 top-4 rounded bg-slate-700 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-gray-400">
                  {article.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold leading-snug text-white transition-colors group-hover:text-slate-400">
                  {article.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-400">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-gray-700 pt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 font-semibold text-gray-400">
                    <Clock className="size-4 text-gray-500" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-gray-400">
                    <Calendar className="size-4 text-gray-500" />
                    {article.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </AnimatedSection>
  );
}
