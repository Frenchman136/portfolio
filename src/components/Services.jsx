import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="bg-ink px-5 py-24 text-paper md:px-9">
      <p className="label mb-12 text-center">● What I can help with</p>
      <ol className="space-y-2 text-center">
        {services.map((s, i) => (
          <li key={s} className="service">
            <span className="mr-3 font-mono text-[10px] text-paper/40">
              0{i + 1}.
            </span>
            <span className="service-name text-[clamp(2rem,7vw,5.5rem)] font-extrabold leading-tight transition-colors duration-300">
              {s}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
