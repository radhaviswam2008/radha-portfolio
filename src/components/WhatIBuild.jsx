
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Cpu,
  Lightbulb,
} from "lucide-react";

const areas = [
  {
    number: "01",
    title: "AI & MACHINE LEARNING",
    description:
      "Exploring intelligent applications, machine learning concepts, and practical AI-powered solutions.",
    icon: BrainCircuit,
    tags: ["Artificial Intelligence", "Machine Learning", "AI Applications"],
  },
  {
    number: "02",
    title: "FULL STACK DEVELOPMENT",
    description:
      "Building functional web applications with backend APIs, database integration, and useful features.",
    icon: Code2,
    tags: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    number: "03",
    title: "INTERNET OF THINGS",
    description:
      "Connecting hardware and software through sensors, microcontrollers, and real-time monitoring.",
    icon: Cpu,
    tags: ["ESP32", "Sensors", "Blynk"],
  },
  {
    number: "04",
    title: "PROBLEM SOLVING",
    description:
      "Breaking down real-world problems and translating ideas into practical, technology-driven solutions.",
    icon: Lightbulb,
    tags: ["DSA", "Prototyping", "Innovation"],
  },
];

export default function WhatIBuild() {
  return (
    <section
      id="what-i-build"
      data-navbar-theme="dark"
      className="relative overflow-hidden bg-[#171717] px-6 py-28 text-[#f4f0e8] md:px-12 md:py-36 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.35em] text-white/40">
            03 — WHAT I BUILD
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              IDEAS INTO
              <br />
              <span className="text-white/30">REALITY.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/55 md:text-base">
              I explore technologies, develop practical skills, and
              build projects that connect intelligent software with
              real-world applications.
            </p>
          </div>
        </motion.div>

        {/* FOCUS AREA CARDS */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07] md:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] transition-transform duration-500 group-hover:scale-110">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs tracking-widest text-white/30">
                    {area.number}
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-bold leading-tight tracking-tight">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {area.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* FOOTER LINE */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs tracking-[0.2em] text-white/35">
            LEARN DEEPLY. BUILD PRACTICALLY. KEEP EXPLORING.
          </p>
        </div>
      </div>
    </section>
  );
}
