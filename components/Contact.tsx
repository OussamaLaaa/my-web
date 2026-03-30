"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/lib/content";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-container min-h-screen py-24 md:py-32 relative"
      id="contact"
    >
      {/* Gradient overlay for cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Title */}
        <h2
          className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {content.contact.title}
        </h2>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-dim mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {content.contact.subtitle}
        </p>

        {/* Message */}
        <p
          className={`text-xl md:text-2xl leading-relaxed mb-16 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {content.contact.message}
        </p>

        {/* CTA Button */}
        <div
          className={`mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <a
            href={`mailto:${content.contact.email}`}
            className="inline-flex items-center gap-3 px-12 py-6 bg-accent text-background font-mono text-sm md:text-base uppercase tracking-wider font-bold rounded-sm cursor-interactive hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 glow"
          >
            <span>{content.contact.cta}</span>
            <span className="text-xl">→</span>
          </a>
        </div>

        {/* Social Links */}
        <div
          className={`flex flex-wrap justify-center gap-8 mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <a
            href="#"
            className="text-dim hover:text-accent transition-colors duration-300 text-base font-mono uppercase tracking-wider cursor-interactive"
            aria-label="LinkedIn"
          >
            {content.contact.social.linkedin}
          </a>
          <span className="text-border">|</span>
          <a
            href="#"
            className="text-dim hover:text-accent transition-colors duration-300 text-base font-mono uppercase tracking-wider cursor-interactive"
            aria-label="Behance"
          >
            {content.contact.social.behance}
          </a>
          <span className="text-border">|</span>
          <a
            href="#"
            className="text-dim hover:text-accent transition-colors duration-300 text-base font-mono uppercase tracking-wider cursor-interactive"
            aria-label="Dribbble"
          >
            {content.contact.social.dribbble}
          </a>
        </div>

        {/* Footer */}
        <div
          className={`pt-16 border-t border-border transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm text-dim font-mono mb-2">
            {content.footer.copyright}
          </p>
          <p className="text-xs text-dim/60 italic">
            {content.footer.tagline}
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-transparent to-border" />
    </section>
  );
}
