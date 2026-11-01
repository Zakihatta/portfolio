import React from "react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] active:scale-[0.99] cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-5 py-3 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#fafafa] text-[#09090b] hover:bg-white hover:shadow-sm font-semibold",
    secondary:
      "bg-[#121215] text-[#fafafa] border border-[#27272a] hover:bg-[#18181b] hover:border-[#3f3f46]",
    ghost:
      "bg-transparent text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#18181b]",
  };

  return (
    <a
      {...props}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </a>
  );
};
