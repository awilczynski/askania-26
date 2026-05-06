import { useState } from "react";
import { SkylineDivider } from "./SkylineDivider";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-navy text-navy-foreground relative">
      <div className="mx-auto max-w-3xl px-6 md:px-12 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-3">
            Ready to Make Poland Feel Like Home?
          </h2>
          <p className="uppercase tracking-[0.3em] text-xs text-navy-foreground/70">
            Let's get you started
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="grid md:grid-cols-2 gap-6"
        >
          <Field label="Your name">
            <input
              required
              type="text"
              placeholder="Jane Doe"
              className="w-full bg-transparent border-b border-navy-foreground/30 py-3 text-navy-foreground placeholder:text-navy-foreground/40 focus:border-primary focus:outline-none transition"
            />
          </Field>
          <Field label="Email address">
            <input
              required
              type="email"
              placeholder="you@email.com"
              className="w-full bg-transparent border-b border-navy-foreground/30 py-3 text-navy-foreground placeholder:text-navy-foreground/40 focus:border-primary focus:outline-none transition"
            />
          </Field>
          <Field label="Where are you now?">
            <input
              type="text"
              placeholder="Country"
              className="w-full bg-transparent border-b border-navy-foreground/30 py-3 text-navy-foreground placeholder:text-navy-foreground/40 focus:border-primary focus:outline-none transition"
            />
          </Field>
          <Field label="Top question for Ania">
            <input
              type="text"
              placeholder="Visa, housing, work…"
              className="w-full bg-transparent border-b border-navy-foreground/30 py-3 text-navy-foreground placeholder:text-navy-foreground/40 focus:border-primary focus:outline-none transition"
            />
          </Field>

          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-sm font-medium hover:opacity-90 transition shadow-warm"
            >
              {submitted ? "Thank you — talk soon!" : "Ask Ania Today"}
            </button>
          </div>
        </form>
      </div>

      <SkylineDivider className="-mb-px opacity-60" />
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm text-navy-foreground/70 mb-1">{label}</span>
      {children}
    </label>
  );
}
