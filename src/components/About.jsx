
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4f0e8] px-6 py-32 text-[#171717] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.35em] text-black/40">
            01 — ABOUT
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
            CURIOUS BY NATURE.
            <br />
            <span className="text-black/30">
              BUILDER BY CHOICE.
            </span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left — Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
          <div className="overflow-hidden rounded-[2rem] bg-[#e8e2d8]">
            <img
              src="/images/profile.png"
              alt="Radha Krishna Chalamalasetti"
              className="h-[400px] w-full object-cover object-top sm:h-[400px] lg:h-[500px]"
            />
          </div>

          </motion.div>

          {/* Right — Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-3xl font-medium leading-tight md:text-4xl">
              Hi, I'm Radha Krishna.
            </p>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-black/60 md:text-lg">
              <p>
                I'm a B.Tech CSE (IoT) student at VNR VJIET,
                Hyderabad, with a strong interest in Artificial
                Intelligence and Machine Learning, alongside building
                practical technology that solves real-world problems.
              </p>

              <p>
                My interests span AI-powered applications, machine
                learning concepts, full-stack development, and IoT
                systems. I enjoy strengthening my technical knowledge,
                experimenting with new technologies, and turning ideas
                into working prototypes.
              </p>

              <p>
                I'm also pursuing the IBM AI Engineering Professional
                Certificate to deepen my understanding of AI and
                machine learning. Outside technology, I enjoy chess
                and table tennis.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">

              <div className="border-t border-black/15 pt-4">
                <p className="text-xs uppercase tracking-widest text-black/40">
                  Education
                </p>
                <p className="mt-2 text-sm font-medium">
                  B.Tech CSE (IoT)
                </p>
              </div>

              <div className="border-t border-black/15 pt-4">
                <p className="text-xs uppercase tracking-widest text-black/40">
                  Institute
                </p>
                <p className="mt-2 text-sm font-medium">
                  VNR VJIET
                </p>
              </div>

              <div className="border-t border-black/15 pt-4">
                <p className="text-xs uppercase tracking-widest text-black/40">
                  Focus Areas
                </p>
                <p className="mt-2 text-sm font-medium">
                  AI/ML · Full Stack · IoT
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
