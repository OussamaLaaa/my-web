"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsFinePointer(hasFinePointer);

    if (!hasFinePointer) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.classList.contains("cursor-interactive");

      setIsPointer(isInteractive);
    };

    // Animation loop for smooth cursor follow
    const animate = () => {
      // Smooth follow for outer ring
      const speed = 0.15;
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      // Faster follow for dot
      const dotSpeed = 0.5;
      dotX += (mouseX - dotX) * dotSpeed;
      dotY += (mouseY - dotY) * dotSpeed;

      if (cursor) {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }

      if (cursorDot) {
        cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-8 h-8 border border-foreground/30 rounded-full pointer-events-none z-[9999] transition-all duration-300 ${
          isPointer ? "scale-150 border-accent/60" : "scale-100"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-foreground rounded-full pointer-events-none z-[9999]"
        style={{
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
