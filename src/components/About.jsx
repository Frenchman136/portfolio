import { profile } from "../data/content";
import Typewriter from "./Typewriter";

export default function About() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <section
      id="about"
      className="grid gap-10 px-5 py-24 md:grid-cols-2 md:px-9"
    >
      <div>
        <h2 className="reveal break-words text-[clamp(2.5rem,12vw,5rem)] font-black leading-[0.9] tracking-tight md:text-[clamp(2.5rem,6vw,6rem)]">
          {first}
          <span className="block pl-[0.3em]">{rest.join(" ")}</span>
        </h2>
        <div className="reveal mt-10 max-w-md space-y-4 leading-relaxed text-ink-soft md:ml-16">
          {profile.bio.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-10 md:ml-16">
          <Typewriter text="Remember: every great project starts as an ugly first draft." />
        </div>
      </div>
      <img
        src="/profile/profile.webp"
        alt={profile.name}
        width="800"
        height="1000"
        loading="lazy"
        decoding="async"
        className="reveal aspect-[4/5] w-full bg-paper-dark object-cover"
      />
    </section>
  );
}
