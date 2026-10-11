const swatches = [
  ["paper", "bg-paper border border-ink/20"],
  ["paper-dark", "bg-paper-dark"],
  ["ink", "bg-ink"],
  ["ink-soft", "bg-ink-soft"],
  ["accent", "bg-accent"],
];

export default function App() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-16">
      <section>
        <p className="label mb-4">Display</p>
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.9] tracking-tight">
          Design + Code
        </h1>
        <h2 className="mt-2 text-[clamp(1.75rem,5vw,4rem)] font-extrabold uppercase leading-none tracking-tight">
          Good taste, bad sleep.
        </h2>
      </section>

      <section>
        <p className="label mb-4">Body</p>
        <p className="max-w-md leading-relaxed text-ink-soft">
          An independent designer and developer bringing thoughtful design and
          practical code together.
        </p>
      </section>

      <section>
        <p className="label mb-4">Colors</p>
        <div className="flex flex-wrap gap-4">
          {swatches.map(([name, cls]) => (
            <div key={name}>
              <div className={`h-20 w-20 rounded-lg ${cls}`} />
              <p className="label mt-2">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="label mb-4">Buttons</p>
        <div className="flex gap-2">
          <a href="#" className="btn">View</a>
          <a href="#" className="btn">Project</a>
        </div>
      </section>
    </main>
  );
}