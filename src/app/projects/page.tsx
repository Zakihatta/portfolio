import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { allProjects } from "@/data/projects";

export const metadata = {
  title: "All Projects — Zaki Hatta",
  description: "Complete archive of software engineering projects, web applications, and digital systems built by Zaki Hatta.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-400">
      <Navbar />

      <section className="pt-36 sm:pt-44 pb-24 sm:pb-32 px-6 sm:px-12 md:px-16 lg:px-20 max-w-7xl mx-auto">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-['Instrument_Serif',serif] italic text-lg text-[var(--stone)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Heading */}
        <div className="pb-12 border-b border-[var(--line)]">
          <h1 className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight text-[var(--foreground)]">
            ALL PROJECTS
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[var(--umber)] leading-relaxed">
            A comprehensive index of digital systems, full-stack applications, and design token architectures engineered with focus on performance and craft.
          </p>
        </div>

        {/* Full Grid of Projects */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {allProjects.map((project) => (
            <article
              key={project.id}
              className="group border border-[var(--line)] bg-[var(--card)] flex flex-col justify-between overflow-hidden shadow-lg transition-all duration-400 hover:border-[var(--foreground)]/40"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--coal)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Details */}
                <div className="p-7 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--stone)]">
                    <span className="font-['Instrument_Serif',serif] italic text-base text-[var(--umber)]">
                      {project.industry}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-3xl sm:text-4xl font-bold uppercase tracking-wide text-[var(--foreground)] flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight
                      size={20}
                      className="text-[var(--stone)] group-hover:text-[var(--foreground)] transition-colors"
                    />
                  </h2>

                  <p className="text-sm text-[var(--umber)] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--stone)]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
