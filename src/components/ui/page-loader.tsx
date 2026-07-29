"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PageLoaderProps {
  show: boolean;
}

type LoaderPhase = "active" | "settling" | "moving" | "done";

// 5 concentric rings via box-shadow: white, black, white, black, white
// Center is transparent — page visible through the hole
const RING_WIDTH = 200;

export function PageLoader({ show }: PageLoaderProps) {
  const [phase, setPhase] = useState<LoaderPhase>("active");
  const [isVisible, setIsVisible] = useState(show);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const hasStartedExit = useRef(false);

  useEffect(() => {
    const calcTarget = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const iconSize = 64;

      const targetTop = 28;
      const targetLeft = 272;

      const centerX = vw / 2 - iconSize / 2;
      const centerY = vh / 2 - iconSize / 2;

      setTargetPosition({
        x: targetLeft - centerX,
        y: targetTop - centerY,
      });
    };

    calcTarget();
    window.addEventListener("resize", calcTarget);
    return () => window.removeEventListener("resize", calcTarget);
  }, []);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setPhase("active");
      hasStartedExit.current = false;
    } else if (isVisible && !hasStartedExit.current) {
      hasStartedExit.current = true;
      setPhase("settling");

      const settleTimer = setTimeout(() => {
        setPhase("moving");
      }, 400);

      const doneTimer = setTimeout(() => {
        setPhase("done");
        setIsVisible(false);
      }, 1600);

      return () => {
        clearTimeout(settleTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [show, isVisible]);

  const isActive = phase === "active" || phase === "settling";
  const isExiting = phase === "settling" || phase === "moving";

  // Box-shadow rings: innermost listed first (on top), outermost last
  // Creates: transparent center → white → black → white → black → white
  const ringShadows = [
    `0 0 0 ${RING_WIDTH * 1}px #ffffff`,
    `0 0 0 ${RING_WIDTH * 2}px #000000`,
    `0 0 0 ${RING_WIDTH * 3}px #ffffff`,
    `0 0 0 ${RING_WIDTH * 4}px #000000`,
    `0 0 0 ${RING_WIDTH * 5 + 1000}px #ffffff`,
  ].join(", ");

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Concentric rings — single element with box-shadow */}
          <div className="fixed inset-0 z-[9998] pointer-events-none flex items-center justify-center">
            <motion.div
              className="rounded-full"
              style={{
                width: 60,
                height: 60,
                backgroundColor: "transparent",
                boxShadow: ringShadows,
              }}
              initial={{ scale: 0 }}
              animate={
                isExiting
                  ? { scale: 25 }
                  : { scale: [0, 25] }
              }
              transition={
                isExiting
                  ? {
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }
                  : {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }
              }
            />
          </div>

          {/* Logo */}
          <motion.div
            className="fixed z-[9999] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            animate={
              phase === "moving"
                ? {
                  x: targetPosition.x,
                  y: targetPosition.y,
                  scale: 0.55,
                  opacity: 0,
                }
                : { scale: 1, opacity: 1 }
            }
            transition={
              phase === "moving"
                ? {
                  x: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  y: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.3, delay: 0.7, ease: "easeOut" },
                }
                : {}
            }
          >
            <Image
              src="/icon.png"
              alt="Loading"
              width={64}
              height={64}
              priority
              className="select-none"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}