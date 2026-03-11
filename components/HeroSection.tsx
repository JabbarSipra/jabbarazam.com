import Button from "./Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const nodeItems = [
  { name: "Frontend", x: "12%", y: "22%" },
  { name: "API", x: "46%", y: "50%" },
  { name: "Workers", x: "77%", y: "24%" },
  { name: "Data", x: "72%", y: "78%" },
  { name: "Automation", x: "20%", y: "76%" },
];

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section id="home" className="relative flex min-h-screen items-center py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="fade-in-section space-y-8">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-100">
            Systems Engineer Portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="max-w-xl text-lg text-slate-300">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button href="#projects">Explore Projects</Button>
            <Button href="#contact" variant="secondary">
              Book an Intro Call
            </Button>
          </div>
        </div>

        <div className="fade-in-section relative h-[420px] rounded-3xl border border-cyan-300/20 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-2xl">
          <div className="absolute inset-4 rounded-2xl border border-white/10" />
          {nodeItems.map((node) => (
            <div
              key={node.name}
              className="floating-node absolute z-20 w-max rounded-xl border border-cyan-300/30 bg-slate-950/80 px-4 py-2 text-xs text-cyan-100 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
              style={{ left: node.x, top: node.y }}
            >
              {node.name}
            </div>
          ))}
          <svg className="absolute inset-0 h-full w-full p-8" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M18 24 L48 50 L78 25" stroke="url(#flow)" strokeWidth="1" fill="none" className="data-flow" />
            <path d="M48 50 L74 78" stroke="url(#flow)" strokeWidth="1" fill="none" className="data-flow" />
            <path d="M48 50 L23 77" stroke="url(#flow)" strokeWidth="1" fill="none" className="data-flow" />
          </svg>
        </div>
      </div>
    </section>
  );
}
