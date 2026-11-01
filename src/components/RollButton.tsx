"use client";

import React from "react";

interface RollButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  variant?: "cream" | "coal" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const RollButton: React.FC<RollButtonProps> = ({
  children,
  variant = "cream",
  size = "md",
  icon,
  className = "",
  ...props
}) => {
  const letters = Array.from(children);

  const baseStyle =
    "roll-trigger group inline-flex select-none items-center justify-center font-['Sofia_Sans_Extra_Condensed',sans-serif] uppercase font-bold tracking-[0.06em] rounded-md transition-all duration-300 active:scale-[0.98] cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-[15px] gap-2",
    md: "px-5 py-2.5 text-[17px] gap-2.5",
    lg: "px-7 py-3.5 text-[20px] gap-3",
  };

  const variantStyles = {
    cream:
      "bg-[#f1ede6] text-[#0d0c0b] hover:bg-white shadow-sm",
    coal:
      "bg-[#161513] text-[#f1ede6] border border-[#2a2724] hover:border-[#6b665f] hover:bg-[#1f1d1a]",
    outline:
      "bg-transparent text-[#f1ede6] border border-[#2a2724] hover:border-[#f1ede6] hover:bg-[#f1ede6]/5",
  };

  return (
    <a
      {...props}
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative inline-block overflow-hidden whitespace-nowrap leading-none">
        {/* Default Layer */}
        <span className="inline-block" aria-hidden="true">
          {letters.map((char, i) => (
            <span
              key={`char-${i}`}
              className="roll-char"
              style={{ transitionDelay: `${i * 14}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>

        {/* Replacement Layer */}
        <span className="absolute inset-0 inline-block pointer-events-none" aria-hidden="true">
          {letters.map((char, i) => (
            <span
              key={`char-alt-${i}`}
              className="roll-char-alt"
              style={{ transitionDelay: `${i * 14}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>

        {/* Accessible screen reader label */}
        <span className="sr-only">{children}</span>
      </span>

      {icon && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </a>
  );
};
