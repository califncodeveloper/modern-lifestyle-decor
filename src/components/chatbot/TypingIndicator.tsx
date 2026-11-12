"use client";

import { motion } from "framer-motion";

export function TypingIndicator() {
  const dotVariants = {
    initial: { y: 0, opacity: 0.4 },
    animate: { y: -4, opacity: 1 },
  };

  return (
    <div
      className="flex items-center space-x-1.5 px-4 py-3 bg-[#F8F9FC] border border-[#E5E9F2] rounded-2xl rounded-tl-sm w-fit shadow-2xs"
      role="status"
      aria-label="Assistant is typing"
    >
      <span className="text-xs font-medium text-[#737373] mr-1">Thinking</span>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.45,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.15,
            ease: "easeInOut",
          }}
          className="h-1.5 w-1.5 rounded-full bg-[#004AAD] motion-reduce:animate-none"
        />
      ))}
    </div>
  );
}
