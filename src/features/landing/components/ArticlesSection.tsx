"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Heading } from "@/components/animation/Heading";

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
    <AnimatedSection
      id="articles"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Articles
            </span>
            <Heading
              align="start"
              as="h2"
              paragraph="Stay updated with the latest trends, insights, tips, and professional development content."
              className="mb-4"
            />
          </div>
          <Button variant="whiteGlass" size="xl">
            View All Articles
            <ArrowRight className="size-4 ml-1.5" strokeWidth={2.6} />
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition-all duration-300 hover:border-gray-300 hover:bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Category Badge */}
                <span className="absolute left-4 top-4 rounded bg-white/90 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-gray-600">
                  {article.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-2 h5 transition-colors group-hover:text-gray-600">
                  {article.title}
                </h3>
                <p className="mb-5 text-base">{article.excerpt}</p>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5 text-xs">
                    <Clock className="size-4 text-gray-400" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs">
                    <Calendar className="size-4 text-gray-400" />
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
