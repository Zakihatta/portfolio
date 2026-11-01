"use client";

import React, { useEffect, useRef } from "react";

interface TextRevealScrollProps {
  children: React.ReactNode;
  revealMode?: "words" | "chars";
  startOffset?: number; // % of viewport height from top where reveal starts (default: 85)
  endOffset?: number;   // % of viewport height from top where reveal completes (default: 35)
  dimOpacity?: number;  // opacity for unrevealed text (default: 0.22)
  className?: string;
}

function createWordSpan(word: string, dimOpacity: number): HTMLSpanElement {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.display = "inline";
  span.style.opacity = String(dimOpacity);
  span.style.willChange = "opacity";
  return span;
}

function createCharSpan(char: string, dimOpacity: number): HTMLSpanElement {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.display = "inline";
  span.style.opacity = String(dimOpacity);
  span.style.willChange = "opacity";
  return span;
}

function processNodeRecursively(
  el: Node,
  revealMode: "words" | "chars",
  dimOpacity: number,
  segments: HTMLElement[]
) {
  const children = Array.from(el.childNodes);
  for (const node of children) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || "";
      if (!text.length) continue;

      const frag = document.createDocumentFragment();

      if (revealMode === "chars") {
        for (const char of text) {
          if (char === " ") {
            frag.appendChild(document.createTextNode(" "));
          } else {
            const span = createCharSpan(char, dimOpacity);
            frag.appendChild(span);
            segments.push(span);
          }
        }
      } else {
        // Reveal mode: "words"
        const parts = text.split(/(\s+)/);
        for (const part of parts) {
          if (!part) continue;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
          } else {
            const span = createWordSpan(part, dimOpacity);
            frag.appendChild(span);
            segments.push(span);
          }
        }
      }

      node.parentNode?.replaceChild(frag, node);
      continue;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) continue;
    const childEl = node as HTMLElement;
    if (childEl.tagName === "BR") {
      childEl.style.display = "inline";
      childEl.style.opacity = String(dimOpacity);
      childEl.style.willChange = "opacity";
      segments.push(childEl);
      continue;
    }

    processNodeRecursively(childEl, revealMode, dimOpacity, segments);
  }
}

export const TextRevealScroll: React.FC<TextRevealScrollProps> = ({
  children,
  revealMode = "words",
  startOffset = 85,
  endOffset = 35,
  dimOpacity = 0.22,
  className = "",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const segmentsRef = useRef<HTMLElement[]>([]);
  const isVisibleRef = useRef<boolean>(false);
  const rafRef = useRef<number>(0);

  const startOffsetRef = useRef(startOffset);
  const endOffsetRef = useRef(endOffset);
  const dimOpacityRef = useRef(dimOpacity);

  startOffsetRef.current = startOffset;
  endOffsetRef.current = endOffset;
  dimOpacityRef.current = dimOpacity;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Reset segments & process DOM
    const allSegments: HTMLElement[] = [];
    processNodeRecursively(root, revealMode, dimOpacityRef.current, allSegments);

    if (allSegments.length === 0) return;
    segmentsRef.current = allSegments;

    const computeReveal = () => {
      if (!isVisibleRef.current || !rootRef.current || segmentsRef.current.length === 0) return;

      const rect = rootRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const startPx = vh * (startOffsetRef.current / 100);
      const endPx = vh * (endOffsetRef.current / 100);
      const totalRange = Math.max(rect.height + (startPx - endPx), 1);
      const scrolled = startPx - rect.top;
      const progress = Math.min(Math.max(scrolled / totalRange, 0), 1);

      const total = segmentsRef.current.length;
      const litCount = Math.floor(progress * total);
      const dim = dimOpacityRef.current;

      segmentsRef.current.forEach((seg, i) => {
        if (i < litCount) {
          seg.style.opacity = "1";
        } else if (i === litCount) {
          const frac = progress * total - litCount;
          seg.style.opacity = String(dim + frac * (1 - dim));
        } else {
          seg.style.opacity = String(dim);
        }
      });
    };

    const scheduleReveal = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(computeReveal);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0]?.isIntersecting ?? false;
        if (isVisibleRef.current) {
          scheduleReveal();
        }
      },
      { rootMargin: "200px 0px 200px 0px", threshold: 0 }
    );

    observer.observe(root);
    window.addEventListener("scroll", scheduleReveal, { passive: true });
    window.addEventListener("resize", scheduleReveal, { passive: true });

    // Initial calculation on mount
    scheduleReveal();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", scheduleReveal);
      window.removeEventListener("resize", scheduleReveal);
      observer.disconnect();
      segmentsRef.current = [];
    };
  }, [revealMode]);

  return (
    <div ref={rootRef} className={`relative w-full ${className}`}>
      {children}
    </div>
  );
};
