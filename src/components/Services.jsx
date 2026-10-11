import { services } from "../data/content";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-ink px-4 py-16 text-paper sm:px-6 sm:py-20 md:px-9 md:py-24"
    >
      <p className="label mb-8 text-center sm:mb-12">● What I can help with</p>
      <ol className="space-y-3 text-center sm:space-y-2">
        {services.map((s, i) => (
          <li
            key={s}
            className="service flex flex-wrap items-baseline justify-center gap-x-2"
          >
            <span className="font-mono text-[10px] text-paper/40">
              0{i + 1}.
            </span>
            <span className="service-name text-[clamp(1.5rem,7vw,5rem)] font-extrabold leading-tight transition-colors duration-300">
              {s}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
