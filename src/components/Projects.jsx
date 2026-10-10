
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    type: "AI + FULL STACK",
    title: "AI-Based Smart Farmer Procurement System",
    description:
      "A smart procurement workflow designed to reduce farmer waiting time and procurement-center congestion through multilingual registration, slot allocation, queue management, and dynamic rebalancing.",
    technologies: [
      "AI Applications",
      "Slot Allocation",
      "Queue Management",
      "Notifications",
      "Dynamic Rebalancing",
    ],
    accent: "bg-[#C5DFC5]",
  },
  {
    number: "02",
    type: "FULL STACK / BACKEND",
    title: "Campus Event Management",
    description:
      "A centralized campus event platform designed to simplify event discovery, registration, and participation through backend APIs and database operations.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
    ],
    accent: "bg-[#BFD7F2]",
  },
  {
    number: "03",
    type: "IoT PROTOTYPE",
    title: "Real-Time AC Load Analyzer",
    description:
      "An ESP32-based system for monitoring electrical parameters using current and voltage sensing, a local display, and remote monitoring.",
    technologies: [
      "ESP32",
      "Current Sensing",
      "Voltage Sensing",
      "16x2 LCD",
      "Blynk",
    ],
    accent: "bg-[#F1D3A8]",
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f4f0e8] px-6 py-32 text-[#171717] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.35em] text-black/40">
            03 — SELECTED WORK
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              THINGS
              <br />
              <span className="text-black/30">
                I'VE BUILT.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-black/50">
              A selection of projects where I explore software
              development, AI-powered solutions, IoT, and practical
              problem solving.
            </p>
          </div>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="mt-20 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
                {/* DECORATIVE VISUAL AREA */}
                <div
                  className={`relative flex min-h-[280px] items-center justify-center overflow-hidden md:min-h-[320px] ${project.accent}`}
                >
                  <div className="absolute h-72 w-72 rounded-full border border-black/10 transition-transform duration-700 group-hover:scale-125" />

                  <div className="absolute h-48 w-48 rounded-full border border-black/10 transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute h-24 w-24 rounded-full bg-white/20 blur-xl" />

                  <span className="relative z-10 text-[9rem] font-black leading-none tracking-[-0.08em] text-black/20 transition-transform duration-700 group-hover:scale-110">
                    {project.number}
                  </span>
                </div>

                {/* PROJECT CONTENT */}
                <div className="flex flex-col justify-between bg-white/70 p-8 md:p-12 lg:p-14">
                  <div>
                    {/* CATEGORY */}
                    <div>
                      <span className="text-xs tracking-[0.25em] text-black/45">
                        {project.type}
                      </span>
                    </div>

                    {/* PROJECT TITLE */}
                    <h3 className="mt-10 max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                      {project.title}
                    </h3>

                    {/* PROJECT DESCRIPTION */}
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 md:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="mt-12">
                    <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-black/35">
                      Built With
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1.5 text-xs text-black/55 transition-colors duration-300 group-hover:border-black/20"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
