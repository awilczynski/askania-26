import { motion } from "framer-motion";
import skyline from "@/assets/skyline.png";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section id="top" className="relative bg-navy text-navy-foreground overflow-hidden pb-0">
      <Navbar />

      {/* Skyline silhouette under logo */}
      <div className="relative pt-28 md:pt-32 -mb-px">
        <img
          src={skyline}
          alt="Warsaw skyline"
          className="w-full max-w-5xl mx-auto h-auto select-none pointer-events-none block translate-y-[2px]"
        />
      </div>

      {/* Peach content area */}
      <div className="bg-[#f9e4cd] text-peach-foreground">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-navy">
              Navigate Poland<br />with Confidence
            </h1>
            <p className="text-base md:text-lg text-navy/75 mb-8 max-w-xl">
              From bureaucratic mazes to cultural surprises, transform your Polish journey
              from overwhelming to achievable. Your step-by-step guide to thriving in Poland starts here.
            </p>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-sm font-medium hover:opacity-90 transition shadow-warm"
            >
              Get Your Guide
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
