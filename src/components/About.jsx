import { profile } from "../data/content";

export default function About() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <section id="about" className="grid gap-10 px-5 py-20 md:grid-cols-2 md:px-9">
      <div>
        <h2 className="text-[clamp(3.5rem,11vw,9rem)] font-black leading-[0.9] tracking-tight">
          {first}
          <span className="block pl-[0.4em]">{rest.join(" ")}</span>
        </h2>
        <div className="mt-10 max-w-md space-y-4 leading-relaxed text-ink-soft md:ml-16">
          {profile.bio.map((line) => <p key={line}>{line}</p>)}
        </div>
      </div>
      <img
        src="/me.jpg"
        alt={profile.name}
        className="aspect-[4/5] w-full object-cover bg-paper-dark"
      />
    </section>
  );
}