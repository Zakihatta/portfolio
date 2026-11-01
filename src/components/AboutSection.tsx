"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { TextRevealScroll } from "./TextRevealScroll";
import { ScrollReveal } from "./ScrollReveal";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="relative z-[2] min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] px-6 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-32 flex flex-col justify-center items-center overflow-hidden transition-colors duration-400"
    >
      <div className="mx-auto w-full max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-16">
            {/* Left Column: Portrait Photo with Subtle Drift Hover */}
            <div className="w-full max-w-[360px] lg:max-w-[400px] shrink-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--line)] bg-[var(--coal)] group shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/IMG4.webp"
                  alt="Portrait of Zaki Hatta"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover will-change-transform transform-gpu transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Right Column: Unified About Content */}
            <div className="flex-1 flex flex-col justify-between py-2 space-y-8">
              <div className="space-y-6">
                {/* Category Label */}
                <div className="inline-block border-b border-[var(--line)] pb-2">
                  <span className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-[var(--stone)]">
                    ABOUT ME
                  </span>
                </div>

                {/* Text Reveal on Scroll: dimOpacity raised to 0.45 for clear legibility (Point 3) */}
                <TextRevealScroll
                  revealMode="words"
                  startOffset={85}
                  endOffset={30}
                  dimOpacity={0.45}
                >
                  {/* Primary Statement */}
                  <p className="text-2xl sm:text-3xl lg:text-[34px] font-normal leading-[1.3] text-[var(--foreground)] [text-wrap:balance]">
                    I specialize in designing and building web and mobile apps that are not only fast and functional, but also feature a{" "}
                    <em className="font-['Instrument_Serif',serif] italic font-normal text-[var(--foreground)] lowercase text-[1.08em]">
                      clean UI/UX aesthetic
                    </em>{" "}
                    and a distinct design identity.
                  </p>

                  {/* Core Belief */}
                  <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed text-[var(--umber)]">
                    &ldquo;I believe that{" "}
                    <em className="font-['Instrument_Serif',serif] italic font-normal text-[var(--foreground)] text-[1.06em]">
                      unique creative taste
                    </em>{" "}
                    is the ultimate differentiator in today&apos;s digital landscape.&rdquo;
                  </p>
                </TextRevealScroll>
              </div>

              {/* Action Button: Rectangular Box Style with Hairline Border */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 border border-[var(--line)] bg-transparent px-6 py-3 font-['Instrument_Serif',serif] italic text-lg sm:text-xl text-[var(--foreground)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.08] hover:border-[var(--foreground)]/50 cursor-pointer"
                >
                  <span>Start a conversation</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
