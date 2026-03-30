"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WebGLBackground from "@/components/WebGLBackground";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

export default function Home() {
  useEffect(() => {
    // Smooth scroll polyfill for browsers that don't support it
    document.documentElement.style.scrollBehavior = "smooth";

    // Preload fonts and critical assets
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "font";
    link.crossOrigin = "anonymous";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Custom Cursor */}
      <CustomCursor />

      <main className="relative">
        {/* WebGL Background - positioned behind all content */}
        <WebGLBackground />

        {/* Navigation */}
        <Navigation />

        {/* All sections */}
        <div className="relative z-10">
          <Hero />
          <Manifesto />
          <Capabilities />
          <About />
          <Contact />
        </div>

        {/* Hide default cursor on devices with fine pointer */}
        <style jsx global>{`
          @media (pointer: fine) {
            * {
              cursor: none !important;
            }
          }
        `}</style>
      </main>
    </>
  );
}
