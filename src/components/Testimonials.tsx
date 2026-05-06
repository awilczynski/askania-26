import { SkylineDivider } from "./SkylineDivider";
import testimonialBlob from "@/assets/testimonial-blob.png";

const reviews = [
  {
    quote:
      "Ania walked me through my temporary residency application with the patience of a saint. I would have given up without her.",
    name: "Tomás R.",
    place: "Warsaw",
  },
  {
    quote:
      "I'd read a hundred forum posts before finding AskAnia. Within an hour I had a clear plan and actually felt calm about the move.",
    name: "Priya S.",
    place: "Wrocław",
  },
  {
    quote:
      "What I love most is how human it feels. It's not just info — it's understanding. Highly recommend to anyone landing in Poland.",
    name: "Lukas M.",
    place: "Gdańsk",
  },
];

export function Testimonials() {
  return (
    <section className="bg-stone relative">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl mb-4">What Our Community Says</h2>
          <div className="mx-auto h-[2px] w-16 bg-primary" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {reviews.map((r) => (
            <figure key={r.name} className="relative p-10 md:p-12">
              <img
                src={testimonialBlob}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] max-w-none object-contain pointer-events-none select-none"
              />
              <div className="relative">
                <p className="font-display text-2xl text-primary leading-none mb-4">"</p>
                <blockquote className="text-foreground/80 text-[15px] leading-relaxed mb-6">
                  {r.quote}
                </blockquote>
                <figcaption className="text-sm">
                  <span className="font-medium text-foreground">{r.name}</span>
                  <span className="text-muted-foreground"> · {r.place}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <SkylineDivider className="-mb-px" />
    </section>
  );
}
