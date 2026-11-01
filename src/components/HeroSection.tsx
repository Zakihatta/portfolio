"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="sticky top-0 z-[1] h-svh min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[var(--background)] text-[var(--foreground)] pt-24 pb-8 sm:pb-12 px-6 sm:px-12 md:px-16 lg:px-20 transition-colors duration-400"
    >
      {/* 1. Hardware-Accelerated Video Background (Ultra-Lightweight 194KB) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-bg.gif"
        className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none transform-gpu"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* 2. Soft Dark Vignette / Contrast Layer */}
      <div
        className="absolute inset-0 bg-[var(--background)]/55 backdrop-blur-[1px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/60 pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Top Spacer */}
      <div className="relative z-10" />

      {/* 4. Center-Aligned Heading & Download CV Button */}
      <div className="relative z-10 max-w-5xl mx-auto my-auto py-8 text-center flex flex-col items-center justify-center">
        <h1 className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-[14vw] sm:text-[11vw] md:text-[8.5vw] lg:text-[104px] xl:text-[120px] font-extrabold uppercase leading-[0.9] tracking-[-0.01em] text-[var(--foreground)] text-center">
          <span className="block">HI, ZAKI HERE.</span>
          <span className="block text-[var(--foreground)]">
            I&apos;M A{" "}
            <em className="font-['Instrument_Serif',serif] font-normal italic lowercase tracking-normal text-[var(--foreground)]/95">
              Software Engineer.
            </em>
          </span>
        </h1>

        {/* Download CV Button: Points to real CV Zaki Hatta.pdf */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href="/CV Zaki Hatta.pdf"
            download="CV Zaki Hatta.pdf"
            className="group relative inline-flex items-center gap-3 border border-[var(--line)] bg-transparent px-8 py-3.5 font-['Instrument_Serif',serif] italic text-xl sm:text-2xl text-[var(--foreground)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.08] hover:border-[var(--foreground)]/50 active:scale-[0.99] cursor-pointer"
          >
            <span className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
              Download CV
            </span>
            <ArrowDown
              size={18}
              className="text-[var(--umber)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-1 group-hover:text-[var(--foreground)]"
            />
          </a>
        </div>
      </div>

      {/* 5. Bottom Cue Spacer */}
      <div className="relative z-10 text-center pb-2">
        <span className="text-xs uppercase tracking-widest text-[var(--stone)]/60">
          Scroll to unveil ↓
        </span>
      </div>
    </section>
  );
};
