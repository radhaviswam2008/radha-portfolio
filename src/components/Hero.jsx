
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F4F0E8] px-6 pb-20 pt-28 md:px-12 lg:px-20 lg:pb-28 lg:pt-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

        {/* LEFT: INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#77736C]">
            <span className="h-2 w-2 rounded-full bg-[#71866A]" />
            Portfolio · 2026
          </p>

          <h1 className="max-w-3xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] text-[#20201E] sm:text-6xl md:text-7xl xl:text-[5.5rem]">
            Building ideas
            <br />
            into{" "}
            <span className="font-serif italic text-[#71866A]">
              reality.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#66635D] md:text-lg">
            I'm Radha Krishna Chalamalasetti, a B.Tech CSE (IoT)
            student at VNR VJIET. I'm interested in Artificial
            Intelligence, Machine Learning, AI-powered full-stack
            development, and IoT. I enjoy turning concepts into
            practical, problem-driven projects.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              data-magnetic
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-[#20201E] px-7 py-4 text-sm font-medium text-[#F4F0E8] transition-colors duration-300 hover:bg-[#41413B]"
            >
              Explore my work
              <ArrowUpRight size={17} />
            </a>

            <a
              data-magnetic
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-[#C9C3B8] px-7 py-4 text-sm font-medium text-[#35342F] transition-colors duration-300 hover:border-[#71866A] hover:bg-white/50"
            >
              More about me
              <ArrowDown size={16} />
            </a>
          </div>

          {/* QUICK FACTS */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#D8D2C8] pt-6">
            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#20201E]">
                9.7/10
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#77736C]">
                CGPA
              </p>
            </div>

            <div className="h-12 w-px bg-[#D8D2C8]" />

            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#20201E]">
                AI + IoT
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#77736C]">
                Areas of interest
              </p>
            </div>

            <div className="h-12 w-px bg-[#D8D2C8]" />

            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#20201E]">
                2029
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#77736C]">
                Graduation
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: INTRODUCTION VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          {/* Decorative sage-green glow */}
          <div className="absolute -right-5 top-10 h-40 w-40 rounded-full bg-[#DCE5D5]/70 blur-3xl" />

          {/* Decorative beige glow */}
          <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-[#E8D8C4]/70 blur-3xl" />

          {/* Seamlessly blended video */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-[#F4F0E8]">
            <video
              src="/hero-video.mp4"
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              aria-label="Introduction video of Radha Krishna Chalamalasetti"
            />
          </div>

          {/* Floating information card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="absolute -bottom-5 right-2 rounded-2xl border border-white/60 bg-[#FFFCF5]/90 p-4 shadow-lg backdrop-blur-xl sm:-right-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DCE5D5] text-sm font-semibold text-[#465541]">
                RK
              </div>

              <div>
                <p className="text-sm font-semibold text-[#20201E]">
                  CSE · IoT
                </p>
                <p className="mt-1 text-xs text-[#77736C]">
                  VNR VJIET, Hyderabad
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="mx-auto mt-20 flex max-w-7xl items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#8A857C]">
        <span className="h-px w-10 bg-[#BDB6AA]" />
        Scroll to explore
      </div>
    </section>
  );
}
