import { SkylineDivider } from "./SkylineDivider";
import trustBlob from "@/assets/trust-blob.png";

const items = [
  {
    title: "Clear, Practical Advice",
    body: "Step-by-step guidance written for real people — no jargon, no legal speak, just what you need to do next.",
  },
  {
    title: "Local Knowledge",
    body: "From PESEL to NIP, ZUS to apartment hunting — built on years of helping newcomers settle in.",
  },
  {
    title: "Friendly Support",
    body: "Real human answers when forms and forums fall short. We're here when you need a calm voice.",
  },
  {
    title: "Community Connection",
    body: "Join a network of people building lives in Poland — meet-ups, resources, and shared stories.",
  },
];

export function Trust() {
  return (
    <section className="bg-stone relative">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Why People Trust AskAnia</h2>
          <div className="mx-auto h-[2px] w-16 bg-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-4xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="relative p-10 md:p-12">
              <img
                src={trustBlob}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] max-w-none object-contain pointer-events-none select-none"
              />
              <div className="relative">
                <h3 className="font-display text-xl mb-3 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-[15px]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SkylineDivider className="-mb-px" />
    </section>
  );
}
