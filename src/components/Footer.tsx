"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const [timeString, setTimeString] = useState<string>("22:15 WIB");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setTimeString(`${formatted} WIB`);
      } catch {
        // Fallback gracefully
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Selected Works", href: "/#projects" },
    { label: "All Projects", href: "/projects" },
    { label: "Tools I Build With", href: "/#tools" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Zakihatta" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zaki-hatta-483109284" },
    { label: "Email", href: "mailto:zakihattamg@gmail.com" },
  ];

  return (
    <footer
      id="contact"
      aria-label="Footer"
      className="relative z-[6] w-full bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--line)] transition-colors duration-400"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Main Grid: 4 Hairline Rectangular Cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[var(--line)]">
          {/* Cell 1: Brand & Live Location */}
          <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-[var(--line)] flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="font-['Sofia_Sans_Extra_Condensed',sans-serif] text-3xl font-extrabold uppercase tracking-tight text-[var(--foreground)]">
                ZAKI HATTA
              </span>
              <p className="mt-1 font-['Instrument_Serif',serif] italic text-base text-[var(--umber)]">
                Software Engineer &amp; Designer
              </p>
            </div>

            <div className="mt-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 bg-emerald-500 rounded-full animate-pulse" />
                <span
                  suppressHydrationWarning
                  className="font-mono text-xs uppercase tracking-wider text-[var(--stone)]"
                >
                  Jakarta, ID — {timeString}
                </span>
              </div>
              <p className="text-xs text-[var(--mist)]">
                Available for freelance &amp; select roles
              </p>
            </div>
          </div>

          {/* Cell 2: Navigation Links */}
          <div className="p-8 sm:p-10 border-b md:border-b-0 lg:border-r border-[var(--line)] flex flex-col justify-between min-h-[220px]">
            <span className="font-['Instrument_Serif',serif] italic text-base text-[var(--stone)]">
              Navigation
            </span>

            <ul className="mt-6 space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 font-['Sofia_Sans_Extra_Condensed',sans-serif] text-lg font-bold uppercase tracking-wider text-[var(--umber)] transition-colors duration-300 hover:text-[var(--foreground)]"
                  >
                    <span className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cell 3: Social Links */}
          <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-[var(--line)] flex flex-col justify-between min-h-[220px]">
            <span className="font-['Instrument_Serif',serif] italic text-base text-[var(--stone)]">
              Connect
            </span>

            <ul className="mt-6 space-y-2.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-['Sofia_Sans_Extra_Condensed',sans-serif] text-lg font-bold uppercase tracking-wider text-[var(--umber)] transition-colors duration-300 hover:text-[var(--foreground)]"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-[var(--stone)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[var(--foreground)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cell 4: Direct Inquiry */}
          <div className="p-8 sm:p-10 flex flex-col justify-between min-h-[220px]">
            <span className="font-['Instrument_Serif',serif] italic text-base text-[var(--stone)]">
              Direct Inquiry
            </span>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:zakihattamg@gmail.com"
                className="block font-mono text-sm sm:text-base text-[var(--foreground)] hover:underline underline-offset-4 transition-colors"
              >
                zakihattamg@gmail.com
              </a>
              <p className="text-xs text-[var(--stone)] leading-relaxed">
                Send a project brief, collaboration proposal, or simply say hello.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="px-8 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--mist)]">
            &copy; 2026 ZAKI HATTA. ALL RIGHTS RESERVED.
          </span>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 border border-[var(--line)] bg-transparent px-4 py-2 font-['Instrument_Serif',serif] italic text-sm sm:text-base text-[var(--umber)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.06] hover:border-[var(--foreground)]/40 hover:text-[var(--foreground)] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp
              size={13}
              className="text-[var(--stone)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:text-[var(--foreground)]"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
