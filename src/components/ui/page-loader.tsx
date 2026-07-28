"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

export function PageLoader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}