import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(56,189,248,0.55)]"
      : "border border-white/20 bg-white/5 text-slate-100 backdrop-blur hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/10";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}
