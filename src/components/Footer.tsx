import mermaid from "@/assets/mermaid.png";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <>
      <footer className="bg-ink text-navy-foreground py-10 px-6 md:px-12 relative overflow-hidden">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-12 relative">
          <div>
            <img src={logo} alt="AskAnia" className="h-12 w-auto" />
            <p className="text-navy-foreground/60 text-sm mt-4 max-w-xs">
              Your friendly guide to making Poland feel like home.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-navy-foreground/70">
              <li>Starter Guide</li>
              <li>Consultations</li>
              <li>Community</li>
              <li>Newsletter</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-navy-foreground/70">
              <li>Email</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>FAQ</li>
            </ul>
          </div>

          <img
            src={mermaid}
            alt=""
            aria-hidden
            className="absolute right-0 top-0 h-full w-auto opacity-15 pointer-events-none"
          />
        </div>
      </footer>

      <section className="bg-navy text-navy-foreground py-12 px-6 md:px-12 text-center">
        <img src={logo} alt="AskAnia" className="h-12 w-auto mx-auto" />

        <p className="mt-8 max-w-xl mx-auto text-navy-foreground/70 text-sm">
          Trusted by newcomers across Poland — from first paperwork to finding
          their forever neighborhood.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { n: "2,000+", l: "People helped" },
            { n: "500+", l: "Questions answered" },
            { n: "98%", l: "Would recommend" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl text-primary">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-navy-foreground/60 mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-xs text-navy-foreground/40">
          © {new Date().getFullYear()} AskAnia. Made with care in Poland.
        </div>
      </section>
    </>
  );
}
