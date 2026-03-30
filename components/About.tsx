"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/lib/content";

export default function About() {
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
      { threshold: 0.2 }
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
      className="section-container min-h-screen py-24 md:py-32"
      id="about"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: Title */}
          <div className="md:col-span-4">
            <div className="sticky top-32">
              <h2
                className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
              >
                {content.about.title}
              </h2>
              <p
                className={`text-lg md:text-xl text-dim mt-6 transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
              >
                {content.about.subtitle}
              </p>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="md:col-span-8 space-y-8">
            {content.about.bio.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl leading-relaxed text-dim transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${300 + index * 150}ms`,
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Highlights */}
            <div
              className={`pt-12 mt-12 border-t border-border transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${300 + content.about.bio.length * 150}ms`,
              }}
            >
              <h3 className="text-sm uppercase tracking-widest font-mono text-accent mb-6">
                Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.about.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group cursor-interactive"
                  >
                    <span className="text-accent mt-1 group-hover:scale-125 transition-transform duration-300">
                      →
                    </span>
                    <span className="text-base text-foreground group-hover:text-accent transition-colors duration-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
