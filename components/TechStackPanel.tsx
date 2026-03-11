import { useState } from "react";

interface TechStackPanelProps {
  category: string;
  technologies: { name: string; icon: string }[];
}

export default function TechStackPanel({ category, technologies }: TechStackPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/55 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40">
      <button
        type="button"
        className="flex w-full items-center justify-between p-5 text-left"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <h3 className="text-lg font-semibold text-white">{category}</h3>
        <span className="text-cyan-300">{isExpanded ? "−" : "+"}</span>
      </button>
      <div
        className={`grid overflow-hidden px-5 transition-[grid-template-rows,opacity,padding] duration-300 ${
          isExpanded ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-wrap gap-3 pt-2">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
