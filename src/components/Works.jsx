import { projects } from "../data/content";

export default function Works() {
  return (
    <section id="works" className="px-5 pb-24 pt-20 md:px-9">
      <p className="label mb-6 text-right">Selected work</p>
      <h2 className="mb-12 text-center text-[clamp(4rem,16vw,14rem)] font-black uppercase leading-none tracking-tight">
        Works<sup className="align-top text-[0.18em]">{projects.length}</sup>
      </h2>

      <div className="grid border-t border-ink/30 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`reveal border-b border-ink/30 p-5 md:p-8 ${i % 2 === 0 ? "md:border-r" : ""}`}
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                width="1600"
                height="1000"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full bg-paper-dark object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <h3 className="text-3xl font-extrabold tracking-tight">
                {p.title}
              </h3>
              <div className="flex shrink-0 gap-1">
                <a
                  href={p.live}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
                <a
                  href={p.repo}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
            <p className="mt-2 text-lg">{p.type}</p>
            <p className="mt-1">Client: {p.client}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              {p.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
