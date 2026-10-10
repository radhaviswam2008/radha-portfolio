
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Terminal,
  UserRound,
  Code2,
} from "lucide-react";

const profiles = [
  {
    number: "01",
    name: "GitHub",
    handle: "@radhaviswam2008",
    description:
      "Explore my projects, experiments, and development journey.",
    url: "https://github.com/radhaviswam2008",
    icon: Terminal,
    background: "bg-[#D5E2EC]",
    accent: "bg-[#B6CCDD]",
  },
  {
    number: "02",
    name: "LinkedIn",
    handle: "Professional Profile",
    description:
      "Connect with me and follow my academic and professional journey.",
    url: "https://www.linkedin.com/in/radha-krishna-ch-1133b5399/",
    icon: UserRound,
    background: "bg-[#D6E3D4]",
    accent: "bg-[#B9D0B5]",
  },
  {
    number: "03",
    name: "LeetCode",
    handle: "Radha_Krishna08",
    description:
      "Follow my progress in data structures, algorithms, and problem solving.",
    url: "https://leetcode.com/u/Radha_Krishna08/",
    icon: Code2,
    background: "bg-[#F0DCC4]",
    accent: "bg-[#E5C49B]",
  },
];

export default function Profiles() {
  return (
    <section
      id="profiles"
      className="bg-[#DCE3E8] px-6 py-24 text-[#293747] md:px-12 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.35em] text-[#687C8C]">
            06 — ONLINE PRESENCE
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              FIND ME
              <br />
              <span className="text-[#8798A5]">
                ONLINE.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-[#586D7D]">
              Explore my work, follow my learning journey,
              and connect with me across developer platforms.
            </p>
          </div>
        </motion.div>

        {/* PROFILE CARDS */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;

            return (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${profile.name} profile`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                className={`group relative isolate overflow-hidden rounded-[2rem] border border-white/60 ${profile.background} p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-9`}
              >

                {/* DECORATIVE CORNER */}
                <div
                  className={`absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full ${profile.accent} transition-transform duration-700 group-hover:scale-125`}
                />

                {/* ICON AND NUMBER */}
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/35 text-[#34485A] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <span className="text-sm tracking-widest text-[#617585]">
                    {profile.number}
                  </span>
                </div>

                {/* PROFILE DETAILS */}
                <h3 className="mt-14 text-3xl font-bold tracking-tight text-[#293747]">
                  {profile.name}
                </h3>

                <p className="mt-3 text-sm font-medium text-[#526879]">
                  {profile.handle}
                </p>

                <p className="mt-5 min-h-[72px] text-sm leading-7 text-[#526879]">
                  {profile.description}
                </p>

                {/* PROFILE LINK */}
                <div className="mt-7 flex items-center justify-between border-t border-[#293747]/15 pt-5">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#435364]">
                    VISIT PROFILE
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#293747]/15 bg-white/30 transition-all duration-300 group-hover:bg-white/70">
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
