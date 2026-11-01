"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Moon, Sun } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Read persisted theme
    const savedTheme = localStorage.getItem("porto_theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    // Scroll listener for Navbar transparency (Point 10)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape key and body lock for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    if (isCurrentlyDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("porto_theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("porto_theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { label: "About", href: "/#about", num: "01" },
    { label: "Projects", href: "/projects", num: "02" },
    { label: "Tools", href: "/#tools", num: "03" },
    { label: "Contact", href: "/#contact", num: "04" },
  ];

  return (
    <>
      {/* 1. Desktop & Mobile Sticky Header Bar */}
      <header
        className={`fixed top-0 inset-x-0 z-40 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-md shadow-sm py-0"
            : "border-b border-transparent bg-transparent py-1 sm:py-2"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-stretch justify-between px-6 sm:px-12 md:px-0">
          {/* Mobile Left Brand */}
          <div className="flex md:hidden items-center py-4">
            <Link
              href="/#hero"
              className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-2xl font-extrabold uppercase tracking-tight text-[var(--foreground)]"
            >
              ZAKI HATTA
            </Link>
          </div>

          {/* Desktop Left: Page Navigation in Rectangular Bordered Grid Cells */}
          <nav
            aria-label="Desktop Page Navigation"
            className="hidden md:flex items-stretch border-l border-[var(--line)]"
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center justify-center border-r border-[var(--line)] px-7 py-3.5 font-['Instrument_Serif',serif] italic text-base sm:text-lg text-[var(--umber)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.06] hover:text-[var(--foreground)]"
              >
                <span className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop Right: Theme Toggle & Social Icon Buttons */}
          <div className="hidden md:flex items-stretch">
            {/* Light / Dark Mode Toggle (Point 1) */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
              className="group flex items-center justify-center border-l border-[var(--line)] px-4 sm:px-5 py-3.5 text-[var(--umber)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.06] hover:text-[var(--foreground)] cursor-pointer"
            >
              {mounted && !isDark ? (
                <Moon
                  size={17}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-12"
                />
              ) : (
                <Sun
                  size={17}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45"
                />
              )}
            </button>

            {/* GitHub Button */}
            <a
              href="https://github.com/Zakihatta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group flex items-center justify-center border-l border-[var(--line)] px-4 sm:px-5 py-3.5 text-[var(--umber)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.06] hover:text-[var(--foreground)]"
            >
              <svg
                className="size-4 fill-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/zaki-hatta-483109284"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group flex items-center justify-center border-l border-[var(--line)] px-4 sm:px-5 py-3.5 text-[var(--umber)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.06] hover:text-[var(--foreground)]"
            >
              <svg
                className="size-4 fill-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.31a1.63 1.63 0 1 0 1.63 1.63c0-.9-.73-1.63-1.63-1.63z" />
              </svg>
            </a>

            {/* Email Button */}
            <a
              href="mailto:zakihattamg@gmail.com"
              aria-label="Send Email"
              className="group flex items-center justify-center border-l border-r border-[var(--line)] px-4 sm:px-5 py-3.5 text-[var(--umber)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.06] hover:text-[var(--foreground)]"
            >
              <Mail
                size={17}
                className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
            </a>
          </div>

          {/* Mobile Right: Morphing Hamburger Button (Point 9) */}
          <div className="flex md:hidden items-center py-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="relative flex h-10 w-10 flex-col items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--foreground)] transition-colors"
            >
              <span
                className={`block h-0.5 w-4 bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileMenuOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1 w-3"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* 2. Motion Overlay Menu for Mobile (Point 9 - Inspired by MotionOverlayMenu) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-[var(--overlay-bg)] p-8 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-95"
        }`}
      >
        {/* Top Bar inside Overlay */}
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-6">
          <span className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-3xl font-extrabold uppercase tracking-tight text-[var(--foreground)]">
            ZAKI HATTA
          </span>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--foreground)] cursor-pointer"
          >
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span className="absolute h-0.5 w-4 bg-current rotate-45" />
              <span className="absolute h-0.5 w-4 bg-current -rotate-45" />
            </span>
          </button>
        </div>

        {/* Main Navigation Links with Staggered Reveal & Tabular Numbers */}
        <nav className="my-auto py-8">
          <ul className="flex flex-col gap-6">
            {navLinks.map((item, idx) => (
              <li
                key={item.label}
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 70}ms` : "0ms",
                }}
                className={`transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-6 opacity-0"
                }`}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-baseline gap-4 text-[var(--foreground)] transition-colors"
                >
                  <span className="font-['Instrument_Serif',serif] italic text-base text-[var(--stone)]">
                    {item.num}
                  </span>
                  <span className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-5xl font-extrabold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Bar inside Overlay: Theme Toggle + Socials */}
        <div className="space-y-6 border-t border-[var(--line)] pt-6">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2.5 border border-[var(--line)] px-4 py-2 font-['Instrument_Serif',serif] italic text-base text-[var(--foreground)]"
            >
              {mounted && !isDark ? <Moon size={15} /> : <Sun size={15} />}
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>

            <div className="flex items-center gap-4 text-[var(--umber)]">
              <a
                href="https://github.com/Zakihatta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/zaki-hatta-483109284"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <a
            href="mailto:zakihattamg@gmail.com"
            className="block font-mono text-xs text-[var(--stone)]"
          >
            zakihattamg@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};
