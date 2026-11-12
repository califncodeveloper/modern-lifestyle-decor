"use client";

import { motion } from "framer-motion";
import { SUGGESTED_QUICK_QUESTIONS } from "@/hooks/useChatbot";
import { Sparkles } from "lucide-react";
import { EASINGS } from "@/config/motion";

interface QuickQuestionsProps {
  onSelectQuestion: (question: string) => void;
  disabled?: boolean;
}

export function QuickQuestions({ onSelectQuestion, disabled }: QuickQuestionsProps) {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#737373]">
        <Sparkles className="h-3.5 w-3.5 text-[#FFC30C]" aria-hidden="true" />
        <span>Suggested Questions</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {SUGGESTED_QUICK_QUESTIONS.map((q, idx) => (
          <motion.button
            key={q}
            type="button"
            onClick={() => onSelectQuestion(q)}
            disabled={disabled}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04, duration: 0.25, ease: EASINGS.luxury }}
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="text-left text-xs bg-white hover:bg-[#EEF4FD] text-[#004AAD] hover:text-[#003A8C] border border-[#E5E9F2] hover:border-[#004AAD]/30 px-3 py-1.5 rounded-full transition-colors duration-150 font-medium shadow-2xs disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] cursor-pointer motion-reduce:transform-none"
          >
            {q}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
