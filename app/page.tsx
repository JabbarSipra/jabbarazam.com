const navItems = ["Products", "Solutions", "Developers", "Resources", "Pricing"];

export default function Home() {
  return (
    <div className="page-shell">
      <div className="top-gradient" aria-hidden="true" />
      <header className="navbar-wrapper">
        <nav className="navbar">
          <a className="brand" href="#" aria-label="Aurora Web Studio home">
            Aurora Web Studio
          </a>
          <ul className="nav-links" aria-label="Main navigation">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a className="text-link" href="#">
              Sign in
            </a>
            <a className="primary-pill" href="#">
              Contact sales
            </a>
          </div>
        </nav>
      </header>

      <main className="hero-wrapper">
        <p className="hero-label">FULL-SERVICE WEB DEVELOPMENT AGENCY</p>
        <h1>Payments-grade digital experiences for modern brands.</h1>
        <p className="hero-copy">
          We design, build, and optimize high-performance websites and web apps
          that look world-class and convert like crazy.
        </p>
        <div className="hero-actions">
          <a className="cta-main" href="#">
            Start your project
          </a>
          <a className="cta-ghost" href="#">
            See our work
          </a>
        </div>
      </main>
    </div>
  );
}
