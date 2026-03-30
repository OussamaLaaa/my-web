"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/lib/content";

export default function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15, rootMargin: "-30px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-capability]");
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-container min-h-screen py-24 md:py-32"
      id="capabilities"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section header */}
        <div className="mb-20 md:mb-32 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            {content.capabilities.title}
          </h2>
          <p className="text-lg md:text-xl text-dim max-w-2xl mx-auto">
            {content.capabilities.subtitle}
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.capabilities.items.map((item, index) => (
            <div
              key={index}
              data-capability
              data-index={index}
              className={`group relative p-8 md:p-10 border border-border rounded-sm bg-background/50 backdrop-blur-sm transition-all duration-700 cursor-interactive ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: `${(index % 3) * 100}ms`,
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />

              {/* Border accent on hover */}
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/30 rounded-sm transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-dim leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-accent/50" />
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-accent/50" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-24 md:mt-32 flex justify-center gap-2">
          <div className="w-1 h-1 bg-accent/50 rounded-full" />
          <div className="w-1 h-1 bg-accent/30 rounded-full" />
          <div className="w-1 h-1 bg-accent/10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
