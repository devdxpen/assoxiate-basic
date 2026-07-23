"use client";

import { Heading } from "@/components/animation/Heading";
import { Timeline } from "@/components/ui/timeline";
import {
  UserPlus,
  Search,
  Handshake,
  Rocket,
} from "lucide-react";

const steps = [
  {
    title: "Step 1",
    content: (
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm">
            <UserPlus className="size-6" />
          </div>
          <h4 className="h5">
            Create Your Profile
          </h4>
        </div>
        <p className="mb-6">
          Sign up and build your professional profile in minutes. Showcase your
          skills, experience, and portfolio to stand out in the network.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <p>Quick Setup</p>
            <p className="mt-1 text-base text-gray-700">
              Import from LinkedIn or build from scratch in under 5 minutes.
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <p>
              Verified Badge
            </p>
            <p className="mt-1 text-base">
              Get verified to boost credibility and trust within the network.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 2",
    content: (
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm">
            <Search className="size-6" />
          </div>
          <h4 className="h5">
            Discover Opportunities
          </h4>
        </div>
        <p className="mb-6">
          Our AI-powered engine surfaces relevant jobs, projects, and
          connections tailored to your expertise and career goals.
        </p>
        <div className="space-y-3">
          {[
            "Smart job matching based on your skills",
            "Curated project recommendations",
            "Industry-specific networking suggestions",
            "Real-time opportunity alerts",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3"
            >
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white text-xs font-bold">
                ✓
              </div>
              <span className="P text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Step 3",
    content: (
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm">
            <Handshake className="size-6" />
          </div>
          <h4 className="h5">
            Connect & Collaborate
          </h4>
        </div>
        <p className="mb-6">
          Reach out to professionals, schedule meetings, and start
          collaborating on projects with seamless built-in communication tools.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { stat: "10K+", label: "Active Professionals" },
            { stat: "500+", label: "Companies Hiring" },
            { stat: "98%", label: "Match Accuracy" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center"
            >
              <p className="h3 font-semibold">{item.stat}</p>
              <p className="mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Step 4",
    content: (
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm">
            <Rocket className="size-6" />
          </div>
          <h4 className="h5">
            Grow Your Career
          </h4>
        </div>
        <p className="mb-6">
          Track your progress, gather endorsements, and accelerate your
          professional growth with data-driven insights and analytics.
        </p>
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-base text-gray-700">
              Profile Visibility
            </span>
            <span className="text-base text-gray-700">92%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[92%] rounded-full bg-gray-900" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="h6 font-bold">2.4K</p>
              <p className="text-base text-gray-700">Profile Views</p>
            </div>
            <div>
              <p className="h6 font-bold">180</p>
              <p className="text-base text-gray-700">Connections</p>
            </div>
            <div>
              <p className="h6 font-bold">47</p>
              <p className="text-base text-gray-700">Endorsements</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function ProfessionalsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-custom relative z-10">
        <Heading
          align="center"
          textColor="text-gray-900"
          as="h2"
          heading="How It Works"
          paragraph="A streamlined workflow engineered for clarity, speed, and trusted collaboration."
          className="mx-auto max-w-3xl"
        />

      </div>

      <div className="container-custom relative z-10 mt-10">
        <Timeline data={steps} />
      </div>
    </section>
  );
}
