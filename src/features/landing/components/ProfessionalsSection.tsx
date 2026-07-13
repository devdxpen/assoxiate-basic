"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Send,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

function MockupStep1() {
  const [text, setText] = useState("");
  const [step, setStep] = useState(0); 

  useEffect(() => {
    const fullText = "Looking for a Next.js Expert...";
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(typingInterval);
        setStep(1);
      }
    }, 55);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (step === 1) {
      const t = setTimeout(() => setStep(2), 1000);
      return () => clearTimeout(t);
    }
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 1200);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-800 bg-gray-900/60 p-5 shadow-2xl backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-gray-800/60 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">New Post</span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
            What do you need done?
          </label>
          <div className="w-full bg-black/40 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white min-h-[36px] flex items-center">
            <span>{text}</span>
            {step === 0 && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-1.5 h-4 bg-blue-500 ml-0.5 inline-block"
              />
            )}
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
            Required Skills
          </label>
          <div className="flex flex-wrap gap-1.5 min-h-[26px]">
            {step >= 1 && (
              <>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-full bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 text-[10px] text-blue-400 font-medium"
                >
                  Next.js
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-full bg-indigo-500/10 border border-indigo-500/30 px-2 py-0.5 text-[10px] text-indigo-400 font-medium"
                >
                  TypeScript
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-full bg-purple-500/10 border border-purple-500/30 px-2 py-0.5 text-[10px] text-purple-400 font-medium"
                >
                  Tailwind CSS
                </motion.span>
              </>
            )}
          </div>
        </div>

        <div className="pt-2 flex flex-col *:w-full">
          {step < 2 && (
            <Button disabled>
              Publish Requirement
            </Button>
          )}
          {step === 2 && (
            <Button>
              <span className="size-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Publishing...
            </Button>
          )}
          {step === 3 && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full bg-green-500/20 border border-green-500/40 text-green-400 rounded-lg py-2 text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
            >
              <CheckCircle2 className="size-4 text-green-400" />
              Requirement Live & Active!
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function MockupStep2() {
  const [messages, setMessages] = useState<{ sender: "user" | "talent"; text: string }[]>([]);
  const [step, setStep] = useState(0); 

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 400);
    const t2 = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "talent", text: "Hi! I saw your post. I have 4+ years of Next.js experience!" },
      ]);
      setStep(2);
    }, 1200);
    const t3 = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: "Hi Sarah! Your portfolio looks excellent. Let's connect." },
      ]);
      setStep(3);
    }, 2500);
    const t4 = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "talent", text: "Awesome, thank you! I've accepted the invitation." },
      ]);
      setStep(4);
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="w-full max-w-sm flex flex-col gap-3">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={step >= 1 ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="rounded-2xl border border-gray-800 bg-gray-900/60 p-3 shadow-lg flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
            SJ
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-white">Sarah Jenkins</span>
              <span className="size-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-extrabold" title="Verified">
                ✓
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] text-gray-400">Next.js Architect</span>
              <span className="text-[10px] text-amber-400 flex items-center gap-0.5">
                ★ 4.9
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="rounded-full bg-green-500/10 border border-green-500/30 px-2 py-0.5 text-[9px] text-green-400 font-extrabold inline-block">
            98% Match
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={step >= 2 ? { scale: 1, opacity: 1 } : {}}
        className="rounded-2xl border border-gray-800 bg-black/40 p-4 h-48 flex flex-col justify-between"
      >
        <div className="space-y-3 overflow-y-auto pr-1 select-none scrollbar-none">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-1.5 text-[11px] leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700/50"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="border-t border-gray-800/80 pt-2 flex items-center justify-between">
          <div className="text-[10px] text-gray-500 pl-1">
            {step === 2 && "Sarah is typing..."}
            {step === 3 && "You replied"}
            {step >= 4 && "Connected"}
          </div>
          <div className="size-6 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:bg-blue-500 transition-colors">
            <Send className="size-3" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MockupStep3() {
  const [progress, setProgress] = useState(33);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStep(1);
      setProgress(66);
    }, 1200);

    const t2 = setTimeout(() => {
      setStep(2);
      setProgress(100);
    }, 2400);

    const t3 = setTimeout(() => {
      setStep(3);
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-800 bg-gray-900/60 p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
      
      {step === 3 && (
        <div className="absolute inset-0 bg-green-500/5 transition-opacity duration-700 animate-pulse pointer-events-none" />
      )}

      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-bold text-white tracking-wide">Project Workspace</h4>
        <span className="text-[10px] text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
          Sarah Jenkins
        </span>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1.5">
          <span>Project Progress</span>
          <span className="font-bold text-white">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-black/40 border border-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
            initial={{ width: "33%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
      <div className="space-y-3 mb-1">
        <div className="flex items-center gap-3">
          <div className="size-4 rounded border border-green-500 bg-green-500/20 flex items-center justify-center text-green-400 text-[10px]">
            ✓
          </div>
          <span className="text-xs text-gray-500 line-through">Onboarding & Setup</span>
        </div>

        <div className="flex items-center gap-3">
          <motion.div
            animate={step >= 1 ? { borderColor: "#22c55e", backgroundColor: "rgba(34,197,94,0.2)" } : {}}
            className="size-4 rounded border border-gray-700 bg-black/20 flex items-center justify-center text-[10px]"
          >
            {step >= 1 ? (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-400">
                ✓
              </motion.span>
            ) : (
              <span className="size-1.5 rounded-full bg-blue-500 animate-ping" />
            )}
          </motion.div>
          <span className={`text-xs transition-all duration-300 ${step >= 1 ? "text-gray-500 line-through" : "text-white font-medium"}`}>
            Development & Integration
          </span>
        </div>

        <div className="flex items-center gap-3">
          <motion.div
            animate={step >= 2 ? { borderColor: "#22c55e", backgroundColor: "rgba(34,197,94,0.2)" } : {}}
            className="size-4 rounded border border-gray-700 bg-black/20 flex items-center justify-center text-[10px]"
          >
            {step >= 2 && (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-400">
                ✓
              </motion.span>
            )}
          </motion.div>
          <span className={`text-xs transition-all duration-300 ${step >= 2 ? "text-gray-500 line-through" : "text-gray-500"}`}>
            Final Testing & Handover
          </span>
        </div>
      </div>
      <AnimatePresence>
        {step === 3 && (
          <motion.div
            initial={{ y: 15, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 15, opacity: 0 }}
            className="mt-4 rounded-xl border border-green-500/30 bg-green-950/20 p-3 flex items-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.15)]"
          >
            <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-green-400">Escrow Released</div>
              <div className="text-xs font-black text-white">$4,500.00 transferred securely</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Post Your Requirement",
    description:
      "Describe what you need — from hiring a professional to requesting a service. Our platform matches you with the best options.",
    icon: PlusCircle,
  },
  {
    number: "02",
    title: "Review & Connect",
    description:
      "Browse verified profiles, compare proposals or communication, and connect directly with providers.",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Get It Done",
    description:
      "Collaborate, track progress, and complete your projects or transactions securely all through the platform.",
    icon: CheckCircle2,
  },
];

export function ProfessionalsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoCycleRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (autoCycleRef.current) clearInterval(autoCycleRef.current);
      return;
    }

    autoCycleRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 5500);

    return () => {
      if (autoCycleRef.current) clearInterval(autoCycleRef.current);
    };
  }, [isPaused]);

  const handleStepSelect = (idx: number) => {
    setActiveStep(idx);
    setIsPaused(true); 
  };

  const handleStepHover = (idx: number) => {
    setActiveStep(idx);
    setIsPaused(true); 
  };

  return (
    <AnimatedSection className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="absolute top-1/4 left-1/10 size-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 size-96 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="container-custom relative z-10">
 <h2 className="text-4xl font-medium text-white sm:text-5xl">Find qualified professionals, trusted services, and verified products — all in one platform.</h2>
        <p className="mt-4 text-lg font-medium text-gray-400 mb-8">Whether you need to hire talent, offer your expertise, or showcase products — we have got you covered.</p>
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-12 lg:mt-16"
        >
         <div className="space-y-6 lg:hidden">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleStepSelect(idx)}
                  className={cn(
                    "rounded-2xl border p-6 transition-all duration-300 cursor-pointer select-none",
                    isActive
                      ? "border-blue-500/40 bg-gray-900/40 shadow-[0_0_25px_rgba(59,130,246,0.1)]"
                      : "border-gray-800 bg-gray-950/60"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex size-11 items-center justify-center rounded-xl font-bold transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-tr from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                          : "border border-gray-700 bg-gray-900 text-gray-400"
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">
                        Step {step.number}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-0.5">{step.title}</h3>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 16 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm leading-relaxed text-gray-400 mb-6">
                      {step.description}
                    </p>
                    <div className="flex justify-center p-4 bg-black/40 rounded-2xl border border-gray-800/40">
                      {idx === 0 && <MockupStep1 />}
                      {idx === 1 && <MockupStep2 />}
                      {idx === 2 && <MockupStep3 />}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 items-center">
           <div className="lg:col-span-5 relative space-y-8 pl-8">
              <div className="absolute left-3.5 top-8 bottom-8 w-0.5 bg-gray-800/60 rounded-full">
                <motion.div
                  className="w-full bg-gradient-to-b from-blue-500 to-indigo-500 origin-top rounded-full"
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: activeStep === 0 ? 0.15 : activeStep === 1 ? 0.65 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ height: "100%" }}
                />
              </div>

              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => handleStepSelect(idx)}
                    onMouseEnter={() => handleStepHover(idx)}
                    className={cn(
                      "group relative flex gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-pointer select-none",
                      isActive
                        ? "border-blue-500/30 bg-gray-900/30 shadow-[0_0_20px_rgba(59,130,246,0.08)]"
                        : "border-transparent hover:bg-gray-900/10 hover:border-gray-800/50"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute -left-[30px] top-[26px] z-10 flex size-[22px] items-center justify-center rounded-full border text-[9px] font-black transition-all duration-300",
                        isActive
                          ? "border-blue-500 bg-blue-500 text-white shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                          : activeStep > idx
                          ? "border-indigo-500 bg-indigo-950/40 text-indigo-400"
                          : "border-gray-700 bg-gray-950 text-gray-500"
                      )}
                    >
                      {activeStep > idx ? "✓" : idx + 1}
                    </div>

                    <div
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-xl font-bold transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-tr from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                          : "border border-gray-800 bg-gray-950 text-gray-400 group-hover:border-gray-700 group-hover:text-gray-300"
                      )}
                    >
                      <Icon className="size-6" />
                    </div>

                    <div>
                      <span
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-wider transition-colors duration-300",
                          isActive ? "text-blue-400" : "text-gray-500"
                        )}
                      >
                        Step {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-0.5 group-hover:text-slate-100 transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-7 flex justify-center items-center relative pl-8">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-indigo-500/0 opacity-60 blur-xl" />
              <div className="relative w-full min-h-[380px] max-w-md flex items-center justify-center rounded-3xl border border-gray-800 bg-gray-950/60 shadow-3xl backdrop-blur-md overflow-hidden p-8">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex justify-center items-center z-10"
                  >
                    {activeStep === 0 && <MockupStep1 />}
                    {activeStep === 1 && <MockupStep2 />}
                    {activeStep === 2 && <MockupStep3 />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

