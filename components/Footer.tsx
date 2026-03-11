const footerColumns = [
  {
    title: "Product",
    links: ["Projects", "Case Studies", "Tools", "Roadmap"],
  },
  {
    title: "Knowledge",
    links: ["Blog", "Guides", "Open Source", "Newsletter"],
  },
  {
    title: "Community",
    links: ["Discussions", "Mentorship", "Events", "Resources"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers", "Privacy"],
  },
];

const socials = ["GitHub", "X", "LinkedIn", "YouTube"];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-4">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">{column.title}</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {column.links.map((link) => (
                <li key={link}>
                  <a className="transition-colors hover:text-cyan-200" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 pt-6 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Jabbar Azam. Built like a product.</p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a key={social} href="#" className="rounded-md border border-white/10 px-3 py-1 transition hover:border-cyan-300/50 hover:text-cyan-200">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
