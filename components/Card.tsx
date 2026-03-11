import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export default function Card({ title, description, icon, className = "" }: CardProps) {
  return (
    <article
      className={`group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10 hover:shadow-[0_0_36px_rgba(34,211,238,0.2)] ${className}`}
    >
      {icon ? <div className="mb-4 text-cyan-300">{icon}</div> : null}
      <h3 className="mb-3 text-xl font-semibold text-slate-100">{title}</h3>
      <p className="text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}
