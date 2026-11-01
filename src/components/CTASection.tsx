"use client";

import React from "react";
import { ScrollReveal } from "./ScrollReveal";

const RollText: React.FC<{ text: string }> = ({ text }) => {
  const letters = Array.from(text);
  return (
    <span className="relative inline-block overflow-hidden leading-none">
      <span className="block leading-none">
        {letters.map((char, i) => (
          <span
            key={`char-${i}`}
            className="roll-char"
            style={{ transitionDelay: `${i * 16}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="absolute inset-0 block leading-none" aria-hidden="true">
        {letters.map((char, i) => (
          <span
            key={`char-alt-${i}`}
            className="roll-char-alt"
            style={{ transitionDelay: `${i * 16}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
};

export const CTASection: React.FC = () => {
  return (
    <section
      id="cta"
      aria-label="Call to Action"
      className="relative z-[5] w-full bg-[var(--background)] text-[var(--foreground)] px-6 sm:px-12 md:px-16 lg:px-20 py-28 sm:py-36 md:py-44 flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-400"
    >
      <div className="mx-auto w-full max-w-6xl flex flex-col items-center justify-center">
        <ScrollReveal>
          {/* Main Display Heading */}
          <h2 className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-6xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[136px] font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-[var(--foreground)]">
            <span className="block">
              BUILD{" "}
              <em className="font-['Instrument_Serif',serif] font-normal italic lowercase tracking-normal text-[var(--foreground)]">
                something
              </em>
            </span>
            <span className="block mt-1 sm:mt-2 text-[var(--foreground)]">
              WORTH KEEPING
            </span>
          </h2>

          {/* Action Button: Adapts to Dark and Light modes */}
          <div className="mt-10 sm:mt-12 md:mt-14 flex justify-center">
            <a
              href="mailto:zakihattamg@gmail.com"
              className="roll-trigger group inline-flex select-none items-center justify-center bg-[var(--foreground)] text-[var(--background)] px-8 sm:px-10 py-4 sm:py-4.5 font-['Sofia_Sans_Extra_Condensed',sans-serif] text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-90 active:scale-[0.98] cursor-pointer shadow-xl"
            >
              <RollText text="WORK WITH ME" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
