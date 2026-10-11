import { projects } from "../data/content";

export default function Works() {
  return (
    <section
      id="works"
      className="px-4 pb-16 pt-16 sm:px-6 sm:pb-20 md:px-9 md:pb-24 md:pt-20"
    >
      <p className="label mb-5 text-right sm:mb-6">Selected work</p>
      <h2 className="mb-8 text-center text-[clamp(3rem,13vw,10rem)] font-black uppercase leading-none tracking-tight sm:mb-10 md:mb-12 md:text-[clamp(5rem,12vw,10rem)]">
        Works<sup className="align-top text-[0.18em]">{projects.length}</sup>
      </h2>

      <div className="grid border-t border-ink/30 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`reveal border-b border-ink/30 p-4 sm:p-5 md:p-8 ${i % 2 === 0 ? "md:border-r" : ""}`}
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
            <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <h3 className="min-w-0 break-words text-[clamp(1.35rem,5vw,2rem)] font-extrabold tracking-tight">
                {p.title}
              </h3>
              <div className="flex shrink-0 gap-1">
                <a
                  href={p.live}
                  className="btn min-h-10 px-3 py-2 text-[0.65rem] sm:text-xs"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
                <a
                  href={p.repo}
                  className="btn min-h-10 px-3 py-2 text-[0.65rem] sm:text-xs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
            <p className="mt-2 text-base sm:text-lg">{p.type}</p>
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
