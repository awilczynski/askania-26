import { SkylineDivider } from "./SkylineDivider";

const posts = [
  {
    title: "A Newcomer's Checklist",
    bullets: [
      "PESEL number — what & why",
      "Where to register (meldunek)",
      "Open your first Polish bank account",
    ],
  },
  {
    title: "Life in Poland",
    bullets: [
      "Best cities for expats",
      "Healthcare basics: NFZ explained",
      "Cultural quirks worth knowing",
    ],
  },
  {
    title: "Practical Tips",
    bullets: [
      "Renting your first flat",
      "Finding a doctor that speaks English",
      "Public transport like a local",
    ],
  },
];

export function Blog() {
  return (
    <section className="bg-peach/50 relative">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Fresh From the Blog</h2>
          <div className="mx-auto h-[2px] w-16 bg-primary" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((p) => (
            <article key={p.title}>
              <h3 className="font-display text-xl mb-4 text-primary">{p.title}</h3>
              <ul className="space-y-2 text-foreground/80 text-[15px]">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary">•</span> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <SkylineDivider className="-mb-px" />
    </section>
  );
}
