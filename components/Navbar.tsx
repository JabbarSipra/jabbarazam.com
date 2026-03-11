const navLinks = ["Projects", "Blogs", "Developer Community", "Tools", "About", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-[70px] w-full max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-lg font-semibold tracking-wide text-white">
          Jabbar<span className="text-cyan-300">.dev</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="transition hover:text-cyan-200">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
