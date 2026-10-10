
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  BrainCircuit,
  Wrench,
  BarChart3,
  FileText,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "React", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "DBMS", "CRUD Operations"],
  },
  {
    title: "AI & Emerging Technologies",
    icon: BrainCircuit,
    skills: ["Machine Learning", "Generative AI", "LLMs", "RAG", "IoT"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Arduino IDE",
    ],
  },
  {
    title: "Office & Productivity",
    icon: FileText,
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
    ],
  },
  {
    title: "Data Visualization & BI",
    icon: BarChart3,
    skills: ["Microsoft Power BI"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#f4f0e8] px-5 py-24 text-[#242820] sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#71816a]">
            What I work with
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Skills & <span className="text-[#71816a]">Tools.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#686a60] sm:text-lg">
            Technologies and tools I use to build applications,
            explore AI, work with data, and turn ideas into practical solutions.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-[#deded2] bg-[#fbfaf6] p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-7"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8eadf] text-[#647c64] transition-colors duration-300 group-hover:bg-[#647c64] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-semibold leading-snug">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#e0e1d7] bg-white px-3 py-2 text-sm text-[#55594f] transition-colors duration-200 hover:border-[#647c64] hover:text-[#526950]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 text-sm leading-6 text-[#77786e]"
        >
          Continuously learning, experimenting, and expanding my technical toolkit.
        </motion.p>
      </div>
    </section>
  );
}
