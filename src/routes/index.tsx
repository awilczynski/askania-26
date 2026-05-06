import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Trust } from "@/components/Trust";
import { Journey } from "@/components/Journey";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream">
      <Hero />
      <About />
      <Trust />
      <Journey />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  );
}
