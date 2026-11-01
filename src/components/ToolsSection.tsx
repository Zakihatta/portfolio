"use client";

import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface ToolItem {
  category: string;
  name: string;
}

const tools: ToolItem[] = [
  // Row 1
  { category: "Frontend", name: "NEXT.JS" },
  { category: "Frontend", name: "REACT" },
  { category: "Language", name: "TYPESCRIPT" },
  { category: "Styling", name: "TAILWIND CSS" },

  // Row 2
  { category: "Backend", name: "NODE.JS" },
  { category: "Mobile", name: "REACT NATIVE" },
  { category: "Language", name: "PYTHON" },
  { category: "Data", name: "SQL AND NOSQL" },

  // Row 3
  { category: "Cloud", name: "AWS" },
  { category: "DevOps", name: "DOCKER" },
  { category: "GIS", name: "ARCGIS PRO" },
  { category: "CMS", name: "WORDPRESS" },
];

export const ToolsSection: React.FC = () => {
  return (
    <section
      id="tools"
      aria-label="Tools I Build With"
      className="relative z-[4] min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] px-6 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-32 md:py-40 flex flex-col justify-center transition-colors duration-400"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-[var(--line)]">
            <h2 className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[var(--foreground)]">
              TOOLS I BUILD WITH
            </h2>

            <p className="md:max-w-md text-sm sm:text-base leading-relaxed text-[var(--umber)] md:text-right [text-wrap:balance]">
              The languages, frameworks and platforms I reach for most,
              from the first prototype to the server it runs on.
            </p>
          </div>
        </ScrollReveal>

        {/* 4x3 Typographic Grid with Sibling Dimming Focus */}
        <ScrollReveal delay={100}>
          <div className="dim-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">
            {tools.map((tool, idx) => (
              <div
                key={`${tool.name}-${idx}`}
                className="dim-item group flex flex-col justify-between bg-[var(--background)] p-8 sm:p-9 md:p-10 min-h-[160px] sm:min-h-[180px] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[var(--card)] cursor-default"
              >
                {/* Category in Instrument Serif italic */}
                <span className="font-['Instrument_Serif',serif] italic text-base sm:text-lg text-[var(--stone)] group-hover:text-[var(--foreground)] transition-colors">
                  {tool.category}
                </span>

                {/* Tool Name in Sofia Sans Extra Condensed uppercase */}
                <h3 className="mt-8 font-['Sofia_Sans_Extra_Condensed',sans-serif] text-3xl sm:text-4xl lg:text-[40px] font-bold uppercase tracking-tight text-[var(--foreground)] transition-colors">
                  {tool.name}
                </h3>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
