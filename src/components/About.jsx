import { profile } from "../data/content";
import Typewriter from "./Typewriter";

export default function About() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <section
      id="about"
      className="grid gap-8 px-4 py-16 sm:gap-10 sm:px-6 sm:py-20 md:grid-cols-2 md:px-9 md:py-24"
    >
      <div>
        <h2 className="reveal break-words text-[clamp(2.3rem,10vw,5.5rem)] font-black leading-[0.9] tracking-tight md:text-[clamp(3rem,6vw,5.5rem)]">
          {first}
          <span className="block pl-[0.3em]">{rest.join(" ")}</span>
        </h2>
        <div className="reveal mt-6 max-w-md space-y-4 leading-relaxed text-ink-soft sm:mt-8 md:ml-16 md:mt-10">
          {profile.bio.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-8 md:ml-16 md:mt-10">
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
