"use client";

import { useEffect, useRef } from "react";
import { content } from "@/lib/content";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // GSAP animations will be added when dependencies are installed
    // For now, using CSS animations
    if (nameRef.current) {
      nameRef.current.style.opacity = "0";
      nameRef.current.style.transform = "translateY(40px)";
      setTimeout(() => {
        if (nameRef.current) {
          nameRef.current.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
          nameRef.current.style.opacity = "1";
          nameRef.current.style.transform = "translateY(0)";
        }
      }, 300);
    }

    if (roleRef.current) {
      roleRef.current.style.opacity = "0";
      roleRef.current.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (roleRef.current) {
          roleRef.current.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";
          roleRef.current.style.opacity = "1";
          roleRef.current.style.transform = "translateY(0)";
        }
      }, 600);
    }

    if (taglineRef.current) {
      taglineRef.current.style.opacity = "0";
      taglineRef.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (taglineRef.current) {
          taglineRef.current.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";
          taglineRef.current.style.opacity = "1";
          taglineRef.current.style.transform = "translateY(0)";
        }
      }, 900);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="section-container min-h-screen flex flex-col justify-center relative overflow-hidden"
      id="hero"
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Name - Large and bold */}
        <h1
          ref={nameRef}
          className="text-hero font-bold tracking-tight leading-none mb-6 text-gradient"
        >
          {content.hero.name}
        </h1>

        {/* Role */}
        <p
          ref={roleRef}
          className="text-xl md:text-2xl lg:text-3xl text-dim font-mono tracking-wide mb-8 max-w-3xl"
        >
          {content.hero.role}
        </p>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-12 max-w-4xl"
        >
          {content.hero.tagline}
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-dim max-w-2xl mb-12 leading-relaxed animate-fade-in animation-delay-800">
          {content.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-800">
          <a
            href="#capabilities"
            className="px-8 py-4 bg-foreground text-background font-mono text-sm uppercase tracking-wider font-bold rounded-sm cursor-interactive hover:bg-accent hover:text-background transition-all duration-300"
          >
            {content.hero.cta.primary}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent text-foreground border-2 border-border font-mono text-sm uppercase tracking-wider font-bold rounded-sm cursor-interactive hover:border-accent hover:text-accent transition-all duration-300"
          >
            {content.hero.cta.secondary}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
            <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
            <div className="w-[1px] h-12 bg-foreground animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
