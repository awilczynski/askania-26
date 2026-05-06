import { SkylineDivider } from "./SkylineDivider";

const cards = [
  {
    title: "Free Starter Guide",
    body: "Download our 25-page PDF covering visas, registration, banking, and your first 30 days in Poland.",
    cta: "Download",
  },
  {
    title: "1:1 Consultation",
    body: "Book a 45-minute video call with Ania for personalized guidance on your unique situation.",
    cta: "Book a Call",
  },
  {
    title: "Ask Ania Anything",
    body: "Drop a question in our community space — get thoughtful answers from Ania and fellow newcomers.",
    cta: "Post a Question",
  },
  {
    title: "Newsletter Insights",
    body: "Monthly tips, policy updates, and stories straight to your inbox — no spam, just substance.",
    cta: "Subscribe",
  },
];

export function Journey() {
  return (
    <section id="journey" className="bg-navy text-navy-foreground relative">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-3">Start Your Journey</h2>
          <p className="text-navy-foreground/70 uppercase tracking-[0.3em] text-xs">
            How we can help
          </p>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {cards.map((c) => (
            <div
              key={c.title}
              className="border border-navy-foreground/15 rounded-md p-8 hover:border-primary/60 transition-colors"
            >
              <h3 className="font-display text-xl mb-3">{c.title}</h3>
              <p className="text-navy-foreground/70 text-[15px] leading-relaxed mb-6">{c.body}</p>
              <button className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-sm text-sm font-medium hover:bg-primary hover:text-primary-foreground transition">
                {c.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>

      <SkylineDivider className="-mb-px opacity-60" />
    </section>
  );
}
