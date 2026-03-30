"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = ["hero", "manifesto", "capabilities", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold tracking-tight cursor-interactive hover:text-accent transition-colors duration-300"
          aria-label="Go to home"
        >
          OL
        </button>

        {/* Navigation dots - desktop only */}
        <div className="hidden md:flex items-center gap-4">
          {["hero", "manifesto", "capabilities", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`group relative cursor-interactive`}
              aria-label={`Go to ${section}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === section
                    ? "bg-accent scale-125"
                    : "bg-border group-hover:bg-dim group-hover:scale-110"
                }`}
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {section}
              </span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="px-6 py-2 bg-transparent border border-border hover:border-accent text-foreground hover:text-accent font-mono text-xs uppercase tracking-wider font-bold rounded-sm cursor-interactive transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
