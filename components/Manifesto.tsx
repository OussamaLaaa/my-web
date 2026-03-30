"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/lib/content";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visiblePrinciples, setVisiblePrinciples] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisiblePrinciples((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    const principles = sectionRef.current?.querySelectorAll("[data-principle]");
    principles?.forEach((principle) => observer.observe(principle));

    return () => {
      principles?.forEach((principle) => observer.unobserve(principle));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-container min-h-screen py-24 md:py-32"
      id="manifesto"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section header */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            {content.manifesto.title}
          </h2>
          <p className="text-lg md:text-xl text-dim max-w-2xl">
            {content.manifesto.subtitle}
          </p>
        </div>

        {/* Principles grid */}
        <div className="space-y-16 md:space-y-24">
          {content.manifesto.principles.map((principle, index) => (
            <div
              key={index}
              data-principle
              data-index={index}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 border-t border-border pt-12 transition-all duration-1000 ${
                visiblePrinciples.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="font-mono text-5xl md:text-6xl font-bold text-accent/30">
                  {principle.number}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-lg md:text-xl text-dim leading-relaxed max-w-3xl">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div className="mt-32 flex justify-center">
          <div className="w-1 h-24 bg-gradient-to-b from-border to-transparent opacity-50" />
        </div>
      </div>
    </section>
  );
}
