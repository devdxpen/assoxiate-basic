"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Heading } from "@/components/animation/Heading";
const testimonials = [
  {
    quote:
      "Seamless helped me find my dream job in just 2 weeks. The networking features are incredible — I connected with industry leaders I never thought possible.",
    name: "Pearl Shah",
    designation: "Marketing Head at Tech Agency",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    quote:
      "The intuitive interface and real-time job match recommendations completely transformed our team's hiring workflow. Highly recommended!",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500&auto=format&fit=crop",
  },
  {
    quote:
      "Integrating with this platform was incredibly smooth. We saw an immediate surge in quality connections and candidates.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop",
  },
  {
    quote:
      "The scalability, robust features, and outstanding support have been game-changing. Truly a premier professional networking experience.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=500&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <div className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="container-custom">
        <Heading
          align="start"
          as="h2"
          textColor="text-white"
          paragraph=" What our users say"
          className="mb-4"
        />
        <p className="mt-4 text-lg font-medium text-gray-400 mb-8">
          Hear from professionals who have found success and connections on our
          platform
        </p>
        <AnimatedTestimonials
          testimonials={testimonials}
          autoplay={true}
          className="py-10 px-0 max-w-full"
        />
      </div>
    </div>
  );
}
