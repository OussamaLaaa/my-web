"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Hide preloader after a short delay
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Ensure minimum loading time for smooth experience
    const minLoadTime = setTimeout(() => {
      setProgress(100);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(minLoadTime);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo or initials */}
      <div className="mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient animate-pulse">
          OL
        </h1>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-[1px] bg-border relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent/50 via-accent to-accent/50 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress text */}
      <div className="mt-6 font-mono text-xs text-dim tracking-widest">
        {Math.round(progress)}%
      </div>

      {/* Tagline */}
      <p className="mt-8 text-sm text-dim/60 animate-fade-in animation-delay-400">
        Crafting experience...
      </p>
    </div>
  );
}
