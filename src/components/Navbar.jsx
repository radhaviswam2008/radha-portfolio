
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export default function Navbar({ onAskAI }) {
  const [darkSection, setDarkSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (!navbar) return;

      const navRect = navbar.getBoundingClientRect();
      const navCenter = navRect.top + navRect.height / 2;

      const darkSections = document.querySelectorAll(
        '[data-navbar-theme="dark"]'
      );

      let isDark = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (navCenter >= rect.top && navCenter <= rect.bottom) {
          isDark = true;
        }
      });

      setDarkSection(isDark);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const mutedColor = darkSection
    ? "text-white/75 hover:text-white"
    : "text-black/60 hover:text-black";

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Skills", href: "#skills" },
    { label: "Profiles", href: "#profiles" },
    { label: "Resume & Contact", href: "#resume-contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleAskAI = () => {
    setMobileMenuOpen(false);
    onAskAI?.();
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b px-6 py-4 backdrop-blur-xl transition-all duration-300 ${
        darkSection
          ? "border-white/10 bg-[#171717]/90"
          : "border-[#D8D2C8]/70 bg-[#F4F0E8]/95"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between">
        {/* Circular RK Logo */}
        <a
          href="#home"
          onClick={handleNavClick}
          aria-label="Go to homepage"
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-base font-bold tracking-normal shadow-sm transition-all duration-300 hover:scale-105 lg:-ml-12 ${
            darkSection
              ? "border-white/20 bg-white/10 text-[#F4F0E8] hover:bg-white/20"
              : "border-[#647C64]/25 bg-[#647C64]/10 text-[#405640] hover:bg-[#647C64]/20"
          }`}
        >
          RK.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 text-sm lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`whitespace-nowrap transition-colors duration-300 ${mutedColor}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right-side Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAskAI}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
              darkSection
                ? "border-white/30 bg-white/10 text-white hover:bg-white hover:text-black"
                : "border-black/15 bg-black/[0.03] text-[#171717] hover:bg-black hover:text-white"
            }`}
          >
            <Sparkles size={14} />
            <span>Ask AI</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen((open) => !open)
            }
            aria-label={
              mobileMenuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ${
              darkSection
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-black/15 text-[#171717] hover:bg-black/5"
            }`}
          >
            {mobileMenuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`absolute left-4 right-4 top-full mt-2 rounded-2xl border p-4 shadow-xl backdrop-blur-xl lg:hidden ${
            darkSection
              ? "border-white/10 bg-[#20201E]/95"
              : "border-[#D8D2C8] bg-[#F4F0E8]/98"
          }`}
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                  darkSection
                    ? "text-white/75 hover:bg-white/10 hover:text-white"
                    : "text-black/65 hover:bg-black/5 hover:text-black"
                }`}
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={handleAskAI}
              className={`mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ${
                darkSection
                  ? "bg-white text-[#171717]"
                  : "bg-[#171717] text-white"
              }`}
            >
              <Sparkles size={15} />
              Ask AI Assistant
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
