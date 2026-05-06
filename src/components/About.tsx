import ania from "@/assets/ania.png";

export function About() {
  return (
    <section className="bg-cream relative bg-[#fff1e6]">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-peach/60" aria-hidden />
              <img
                src={ania}
                alt="Ania, your Poland guide"
                className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-soft"
              />
            </div>
          </div>

          <div>
            <p className="font-script text-5xl md:text-6xl text-primary leading-none mb-2">
              Hi,
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">I'm Ania!</h2>
            <p className="text-foreground/80 leading-relaxed max-w-md">
              I've helped hundreds of newcomers find their footing in Poland — from
              paperwork puzzles to finding the best pierogi in town. Whatever brings
              you here, I'm here to make the journey easier, warmer, and a little more
              human.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-card">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-20">
          <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 md:gap-16 items-start max-w-5xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl text-foreground leading-tight md:text-right">
              Whether you're:
            </h3>
            <ul className="space-y-5 text-foreground/85 text-lg md:text-xl leading-relaxed">
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl leading-none mt-1">☆</span>
                <span>Planning your move to Poland.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl leading-none mt-1">☆</span>
                <span>Already here but feeling stuck.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl leading-none mt-1">☆</span>
                <span>Looking to optimize your Polish life.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl leading-none mt-1">☆</span>
                <span>Supporting a team relocating to Poland.</span>
              </li>
            </ul>
          </div>

          <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-center">
            <div className="h-[2px] w-64 mx-auto bg-primary mb-6" />
            <p className="text-foreground/85 text-lg md:text-xl leading-relaxed px-4">
              I've got your back with practical solutions, cultural insights, and a
              supportive community ready to welcome you.
            </p>
            <div className="h-[2px] w-64 mx-auto bg-primary mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
