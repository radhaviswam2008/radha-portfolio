
import { motion } from "framer-motion";

const contactLinks = [
  {
    name: "LinkedIn",
    description: "Connect professionally",
    href: "https://www.linkedin.com/in/radha-krishna-ch-1133b5399/",
    type: "linkedin",
  },
  {
    name: "GitHub",
    description: "Explore my projects and code",
    href: "https://github.com/radhaviswam2008",
    type: "github",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

function ViewIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ContactIcon({ type }) {
  if (type === "linkedin") {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.35H4.96V9h2.97v9.35ZM6.45 7.72a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.9 10.63h-2.97V13.8c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.63H9.18V9h2.85v1.28h.04c.4-.74 1.37-1.52 2.81-1.52 3 0 3.57 1.97 3.57 4.53v5.06Z" />
      </svg>
    );
  }

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.36 3.14 1.8.1-.72.4-1.2.72-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.12 5.52.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

export default function ResumeContact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="resume-contact"
      data-navbar-theme="dark"
      className="bg-[#171717] px-6 py-24 text-[#f4f0e8] md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.35em] text-[#8da58a]">
            07 — RESUME & CONTACT
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
            WANT THE
            <br />
            <span className="text-white/30">
              FULL STORY?
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/55 md:text-lg">
            Explore my education, projects, technical skills,
            and achievements. Interested in my work? Let&apos;s
            connect and explore opportunities to build something
            meaningful.
          </p>
        </motion.div>

        {/* Resume actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-10"
        >
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">
                Explore My Resume
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Education, projects, technical skills and achievements.
                <br />
                PDF · Updated profile
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume in a new tab"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f4f0e8] px-6 py-4 font-semibold text-[#171717] transition duration-300 hover:bg-white"
              >
                <ViewIcon />
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download="Radha_Krishna_Resume.pdf"
                aria-label="Download resume PDF"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 font-semibold transition duration-300 hover:border-[#8da58a]/60 hover:bg-white/[0.07]"
              >
                <DownloadIcon />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-20"
        >
          <p className="text-xs tracking-[0.3em] text-[#8da58a]">
            LET&apos;S CONNECT
          </p>

          <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Let&apos;s build something great.
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/45 md:text-base">
            I&apos;m interested in full-stack development,
            AI-powered applications, and innovative technology.
            Find me on these platforms.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${link.name} profile`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -5 }}
                className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-[#8da58a]/50 hover:bg-white/[0.06] md:p-8"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#647c64]/20 text-[#a9bea3] transition duration-300 group-hover:bg-[#647c64] group-hover:text-white">
                    <ContactIcon type={link.type} />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold md:text-2xl">
                      {link.name}
                    </h4>

                    <p className="mt-1 text-sm text-white/45">
                      {link.description}
                    </p>
                  </div>
                </div>

                <div className="text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a9bea3]">
                  <ArrowIcon />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-white/40">
            Designed and built with curiosity and care.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#a9bea3] transition-colors hover:text-white"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}
