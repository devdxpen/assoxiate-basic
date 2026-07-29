"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const RIPPLE_COUNT = 5;
const rippleDelays = [0, 0.2, 0.4, 0.6, 0.8];
const rippleInsets = ["37.5%", "30%", "20%", "10%", "0%"];
const rippleBorderOpacities = [1, 0.8, 0.6, 0.4, 0.2];
const rippleZIndexes = [99, 98, 97, 96, 95];

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black"
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="relative flex aspect-square h-[520px] items-center justify-center">
            <motion.div
              className="absolute left-1/2 top-1/2 z-[999] flex h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/icon.png"
                alt="Assxiate Logo"
                width={80}
                height={80}
                className="h-full w-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                priority
              />
            </motion.div>

            {Array.from({ length: RIPPLE_COUNT }).map((_, i) => (
              <motion.div
                key={`ripple-${rippleZIndexes[i]}`}
                className="absolute rounded-full border-t backdrop-blur-[5px]"
                style={{
                  inset: rippleInsets[i],
                  zIndex: rippleZIndexes[i],
                  borderColor: `rgba(100, 100, 100, ${rippleBorderOpacities[i]})`,
                  background:
                    "linear-gradient(0deg, rgba(50, 50, 50, 0.2) 0%, rgba(100, 100, 100, 0.2) 100%)",
                  boxShadow: "rgba(0, 0, 0, 0.3) 0 10px 10px 0",
                  aspectRatio: "1 / 1",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "rgba(0, 0, 0, 0.3) 0 10px 10px 0",
                    "rgba(0, 0, 0, 0.3) 0 30px 20px 0",
                    "rgba(0, 0, 0, 0.3) 0 10px 10px 0",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: rippleDelays[i],
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}