"use client";

import { Heading } from "@/components/animation/Heading";
import { TestimonialsSplit } from "@/components/ui/split-testimonial";

const testimonials = [
  {
    id: 1,
    quote:
      "Seamless helped me find my dream job in just 2 weeks. The networking features are incredible — I connected with industry leaders I never thought possible.",
    name: "Pearl Shah",
    role: "Marketing Head",
    company: "Tech Agency",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    quote:
      "The intuitive interface and real-time job match recommendations completely transformed our team's hiring workflow. Highly recommended!",
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    quote:
      "Integrating with this platform was incredibly smooth. We saw an immediate surge in quality connections and candidates.",
    name: "Michael Rodriguez",
    role: "CTO",
    company: "InnovateSphere",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    quote:
      "The scalability, robust features, and outstanding support have been game-changing. Truly a premier professional networking experience.",
    name: "Lisa Thompson",
    role: "VP of Technology",
    company: "FutureNet",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60",
  },
];

export function TestimonialsSection() {
  return (
    <div className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="container-custom">
        <Heading
          align="start"
          textColor="text-white"
          as="h2"
          paragraph="What our users say"
          className="mb-4"
        />
        <p className="mb-16 text-neutral-400">
          Hear from professionals who have found success and connections on our
          platform
        </p>
        <TestimonialsSplit testimonials={testimonials} />
      </div>
    </div>
  );
}
