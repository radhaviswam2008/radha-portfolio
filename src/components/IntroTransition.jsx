
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function IntroTransition({ onComplete }) {
  const [visible, setVisible] = useState(true);

  const handleGetStarted = () => {
    setVisible(false);

    // Reveal the portfolio after the exit animation begins.
    setTimeout(() => {
      onComplete();
    }, 450);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          className="fixed inset-0 z-[9999] flex min-h-screen flex-col items-center justify-center bg-[#F4F0E8] px-6 text-center"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -24,
            transition: { duration: 0.55, ease: "easeInOut" },
          }}
        >
          <motion.p
            className="mb-6 text-[10px] tracking-[0.35em] text-[#858477] sm:text-xs"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PERSONAL PORTFOLIO · 2026
          </motion.p>

          <motion.h1
            className="font-serif text-4xl leading-tight tracking-tight text-[#22221F] sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Welcome to
            <br />
            <span className="italic">My Portfolio.</span>
          </motion.h1>

          <motion.div
            className="mt-7 h-[3px] rounded-full bg-[#A3B18A]"
            initial={{ width: 0 }}
            animate={{ width: 56 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          />

          <motion.p
            className="mt-5 max-w-md text-sm leading-6 text-[#77766E] sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Exploring technology. Building ideas.
          </motion.p>

          <motion.button
            type="button"
            onClick={handleGetStarted}
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#22221F] px-7 py-4 text-sm font-medium text-[#F4F0E8] transition-colors duration-300 hover:bg-[#515B49] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#515B49]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>

          <motion.p
            className="absolute bottom-8 text-[10px] tracking-[0.18em] text-[#99978E]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            A LITTLE INTRODUCTION BEFORE YOU EXPLORE
          </motion.p>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
