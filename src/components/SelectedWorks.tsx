"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { allProjects } from "@/data/projects";

export const SelectedWorks: React.FC = () => {
  // Show 3 featured projects on homepage
  const featuredProjects = allProjects.slice(0, 3);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      aria-label="Selected Works"
      className="relative z-[3] w-full bg-[var(--background)] text-[var(--foreground)] px-6 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-32 transition-colors duration-400"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header with "View All Projects" button at the top */}
        <ScrollReveal>
          <div className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-[var(--line)]">
            <div className="space-y-3 max-w-xl">
              <h2 className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[var(--foreground)]">
                SELECTED WORKS
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--umber)] [text-wrap:balance]">
                A curated selection of production applications and digital systems engineered with high craft.
              </p>
            </div>

            {/* Top View All Projects Button */}
            <div className="shrink-0">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2.5 border border-[var(--line)] bg-transparent px-5 py-2.5 font-['Instrument_Serif',serif] italic text-base sm:text-lg text-[var(--foreground)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[var(--card)] hover:border-[var(--foreground)]/50 active:scale-[0.98]"
              >
                <span>View All Projects</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Featured Projects: Centered in neutral position, expands symmetrically on hover */}
        <div className="space-y-10 sm:space-y-14 flex flex-col items-center w-full">
          {featuredProjects.map((project, idx) => {
            const isHovered = activeHoverId === project.id;

            return (
              <ScrollReveal
                key={project.id}
                delay={idx * 70}
                className="w-full flex justify-center"
              >
                <article
                  onMouseEnter={() => setActiveHoverId(project.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`group relative overflow-hidden border border-[var(--line)] bg-[var(--card)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[var(--foreground)]/40 shadow-xl ${
                    isHovered ? "w-full" : "w-full lg:w-[640px] xl:w-[700px]"
                  }`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col lg:flex-row items-stretch lg:h-[440px] cursor-pointer"
                  >
                    {/* 1. Preview Visual Card: Centered compact size, maintains exact dimensions */}
                    <div className="relative w-full lg:w-[640px] xl:w-[700px] lg:shrink-0 h-[280px] sm:h-[340px] lg:h-full overflow-hidden bg-[var(--coal)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover will-change-transform transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      />

                      {/* Subtle dark gradient overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-[var(--background)]/35 to-transparent pointer-events-none"
                        aria-hidden="true"
                      />

                      {/* Bottom Info on Preview Card */}
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between z-10">
                        <div>
                          <span className="font-['Instrument_Serif',serif] italic text-base sm:text-lg text-[var(--umber)]">
                            {project.industry}
                          </span>
                          <h3 className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-3xl sm:text-4xl lg:text-[42px] font-bold uppercase tracking-tight text-[var(--foreground)] leading-none mt-1 flex items-center gap-2">
                            <span>{project.title}</span>
                            <ArrowUpRight
                              size={20}
                              className="opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[var(--foreground)]"
                            />
                          </h3>
                        </div>

                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--stone)]">
                          {project.id} / 03
                        </span>
                      </div>
                    </div>

                    {/* 2. Side Detail Drawer: Slides in along X-axis when hovered */}
                    <div
                      className={`w-full overflow-hidden flex flex-col justify-between p-7 sm:p-9 lg:p-10 border-t lg:border-t-0 border-[var(--line)] bg-[var(--card)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHovered
                          ? "lg:flex-1 lg:opacity-100 lg:translate-x-0 lg:border-l"
                          : "lg:w-0 lg:p-0 lg:opacity-0 lg:translate-x-8 lg:border-l-0 pointer-events-none"
                      }`}
                    >
                      {/* Monogram Box & Category Badges */}
                      <div className="space-y-6">
                        <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]">
                          <div className="flex h-10 w-10 items-center justify-center border border-[var(--line)] bg-[var(--coal)] text-[var(--foreground)] font-['Sofia_Sans_Extra_Condensed',sans-serif] text-lg font-bold">
                            {project.monogram}
                          </div>

                          <span className="font-['Instrument_Serif',serif] italic text-base text-[var(--stone)]">
                            {project.industry}
                          </span>
                        </div>

                        {/* Category Badges */}
                        <div className="flex flex-wrap gap-2">
                          {project.categories.map((cat) => (
                            <span
                              key={cat}
                              className="border border-[var(--line)] px-2.5 py-1 text-xs font-medium text-[var(--stone)]"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-3 pt-2">
                          <h4 className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[var(--foreground)]">
                            {project.title}
                          </h4>

                          <p className="text-xs sm:text-sm leading-relaxed text-[var(--umber)]">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Release Year & Action Cue */}
                      <div className="pt-6 mt-4 border-t border-[var(--line)] flex items-center justify-between">
                        <span className="font-['Instrument_Serif',serif] italic text-sm text-[var(--stone)]">
                          Click card to open repository / demo
                        </span>
                        <span className="font-mono text-xs text-[var(--stone)]">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
