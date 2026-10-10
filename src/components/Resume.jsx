
import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      
      className="bg-[#171717] px-6 py-32 text-[#f4f0e8] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end"
        >
          <div>
            <p className="text-xs tracking-[0.35em] text-white/40">
              07 — RESUME
            </p>

            <h2 className="mt-5 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              WANT THE
              <br />
              <span className="text-white/30">
                FULL STORY?
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/45">
            Explore my education, projects, technical skills,
            achievements and experience in one place.
          </p>
        </motion.div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-16"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-colors duration-500 hover:bg-white/[0.06] md:p-12">
            <div>
              <p className="text-2xl font-bold md:text-4xl">
                Explore My Resume
              </p>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Education, projects, technical skills and achievements.
                <br />
                PDF · Updated profile
              </p>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Opens PDF in a new tab */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume in a new tab"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f4f0e8] px-7 py-4 font-semibold text-[#171717] transition-all duration-300 hover:bg-white hover:shadow-lg"
              >
                <span>View Resume</span>

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Downloads PDF */}
              <a
                href="/resume.pdf"
                download="Radha_Krishna_Resume.pdf"
                aria-label="Download resume as PDF"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 font-semibold text-[#f4f0e8] transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <Download
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />

                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
