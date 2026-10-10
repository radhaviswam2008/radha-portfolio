
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  Wrench,
  Terminal,
  Cpu,
} from "lucide-react";
import { portfolio } from "../data/portfolio";

const skillGroups = [
  {
    number: "01",
    category: "INTELLIGENT SYSTEMS",
    title: "AI & Machine Learning",
    skills: portfolio.skills.aiMl,
    icon: BrainCircuit,
    card: "bg-[#DCE7F0]",
    accent: "bg-[#B7CCDF]",
  },
  {
    number: "02",
    category: "FOUNDATION",
    title: "Programming Languages",
    skills: portfolio.skills.languages,
    icon: Code2,
    card: "bg-[#F4DFC7]",
    accent: "bg-[#E9C69C]",
  },
  {
    number: "03",
    category: "APPLICATION DEVELOPMENT",
    title: "Web & Backend",
    skills: portfolio.skills.webBackend,
    icon: Terminal,
    card: "bg-[#DCE8D8]",
    accent: "bg-[#BDD3B7]",
  },
  {
    number: "04",
    category: "DATA MANAGEMENT",
    title: "Database",
    skills: portfolio.skills.database,
    icon: Database,
    card: "bg-[#E8DDF0]",
    accent: "bg-[#D1BCE2]",
  },
  {
    number: "05",
    category: "DEVELOPMENT WORKFLOW",
    title: "Tools & Platforms",
    skills: portfolio.skills.tools,
    icon: Wrench,
    card: "bg-[#F2DDDA]",
    accent: "bg-[#E8C2BD]",
  },
  {
    number: "06",
    category: "COMPUTER SCIENCE",
    title: "Core Concepts",
    skills: portfolio.skills.core,
    icon: Cpu,
    card: "bg-[#E5E8D1]",
    accent: "bg-[#D0D7AF]",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F4F0E8] px-6 py-32 text-[#293747] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.35em] text-[#78818A]">
            05 — TECHNICAL TOOLKIT
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              MY SKILLS
              <br />
              <span className="text-[#9BA5AD]">
                & TOOLKIT.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-[#697784]">
              Technologies and concepts I use to explore ideas,
              develop applications, and build practical solutions.
            </p>
          </div>
        </motion.div>

        {/* SKILL CARDS */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className={`group relative isolate overflow-hidden rounded-[2rem] border border-white/70 ${group.card} p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-10`}
              >

                {/* DECORATIVE CORNER */}
                <div
                  className={`absolute -right-12 -top-12 -z-10 h-36 w-36 rounded-full ${group.accent} opacity-80 transition-transform duration-700 group-hover:scale-125`}
                />

                {/* CARD NUMBER */}
                <span className="absolute right-8 top-8 text-sm tracking-widest text-[#667582]/80 md:right-10 md:top-10">
                  {group.number}
                </span>

                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] border border-white/70 bg-white/55 text-[#34485A] shadow-sm transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                  <Icon size={25} strokeWidth={1.6} />
                </div>

                {/* CATEGORY */}
                <p className="mt-10 text-[10px] tracking-[0.25em] text-[#6D7B87]">
                  {group.category}
                </p>

                {/* TITLE */}
                <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#293747]">
                  {group.title}
                </h3>

                {/* SKILL TAGS */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/80 bg-white/55 px-3.5 py-2 text-sm text-[#435364] transition-all duration-300 group-hover:bg-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* BOTTOM ACCENT */}
                <div className="mt-9 flex justify-end">
                  <div
                    className={`h-1 w-12 rounded-full ${group.accent} transition-all duration-500 group-hover:w-20`}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
