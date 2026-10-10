
import { motion } from "framer-motion";
import { Trophy, GraduationCap, Medal, Lightbulb } from "lucide-react";

const achievements = [
  {
    number: "01",
    category: "IDEATHON · FIRST PLACE",
    title: "CargoIQ Ideathon",
    description:
      "Won first place with an AI-powered logistics solution, demonstrating creative thinking and a problem-solving approach.",
    detail: "1ST PLACE",
    accent: "bg-[#F1D3A8]",
    glow: "group-hover:shadow-[#F1D3A8]/10",
    icon: Trophy,
  },
  {
    number: "02",
    category: "HACKATHON · ROUND 1",
    title: "Abode Hackathon",
    description:
      "Cleared Round 1 of the Abode Hackathon, progressing through the initial selection stage.",
    detail: "ROUND 1",
    accent: "bg-[#BFD7F2]",
    glow: "group-hover:shadow-[#BFD7F2]/10",
    icon: Medal,
  },
  {
    number: "03",
    category: "TATA IMAGINATION CHALLENGE · 2026",
    title: "Tata Imagination Challenge 2026",
    description:
      "Currently participating in Round 3 of the Tata Imagination Challenge 2026.",
    detail: "ROUND 3 · IN PROGRESS",
    accent: "bg-[#DCCBF2]",
    glow: "group-hover:shadow-[#DCCBF2]/10",
    icon: Lightbulb,
  },
  {
    number: "04",
    category: "ACADEMIC RECOGNITION",
    title: "Reliance Foundation Undergraduate Scholar",
    description:
      "Selected for the Reliance Foundation Undergraduate Scholarship based on academic merit.",
    detail: "SCHOLAR",
    accent: "bg-[#C5DFC5]",
    glow: "group-hover:shadow-[#C5DFC5]/10",
    icon: GraduationCap,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      data-navbar-theme="dark"
      className="relative overflow-hidden bg-[#1C1C1E] px-6 py-32 text-[#F4F0E8] md:px-12 lg:px-20"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#C5DFC5]/[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#BFD7F2]/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.35em] text-white/45">
            04 — RECOGNITION
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              MILESTONES
              <br />
              <span className="text-[#B9B5AE]">
                THAT MATTER.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-[#B7B5B0]">
              Every milestone represents an opportunity to learn,
              build, compete, and grow.
            </p>
          </div>
        </motion.div>

        {/* ACHIEVEMENT CARDS */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.article
                key={achievement.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className={`group overflow-hidden rounded-[2rem] border border-white/[0.12] bg-gradient-to-b from-[#303033] to-[#28282B] shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl ${achievement.glow}`}
              >
                {/* PASTEL VISUAL PANEL */}
                <div
                  className={`relative flex h-64 items-center justify-center overflow-hidden ${achievement.accent}`}
                >
                  <div className="absolute h-52 w-52 rounded-full border border-black/[0.10] transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute h-40 w-40 rounded-full border border-black/[0.12] transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute h-28 w-28 rounded-full bg-white/20 blur-2xl" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/60 bg-white/40 shadow-sm backdrop-blur-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon
                      size={38}
                      strokeWidth={1.4}
                      className="text-[#514A40]"
                    />
                  </div>

                  <span className="absolute bottom-5 left-6 text-xs font-medium tracking-[0.2em] text-black/50">
                    {achievement.number}
                  </span>

                  <span className="absolute right-4 top-6 max-w-[75%] rounded-full border border-black/[0.08] bg-white/50 px-3 py-1.5 text-center text-[9px] tracking-wider text-black/70 backdrop-blur-sm">
                    {achievement.detail}
                  </span>
                </div>

                {/* CHARCOAL CONTENT */}
                <div className="flex min-h-[310px] flex-col bg-gradient-to-br from-[#303033] to-[#29292C] p-7 md:p-8">
                  <p className="text-[10px] tracking-[0.2em] text-[#C2BEB7]">
                    {achievement.category}
                  </p>

                  <h3 className="mt-7 text-2xl font-bold leading-tight tracking-tight text-[#F7F3EB]">
                    {achievement.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#C0BDB7]">
                    {achievement.description}
                  </p>

                  <div className="mt-8 border-t border-white/[0.12] pt-4">
                    <span className="text-xs tracking-widest text-[#A8A49D]">
                      LEARN · BUILD · ACHIEVE
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
