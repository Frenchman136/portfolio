import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-paper-dark px-5 py-24 md:px-9">
      <div className="reveal mx-auto max-w-3xl">
        <p className="label mb-6">A good idea starts with a hello.</p>
        <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1] tracking-tight">
          Let's build something worth showing off.
        </h2>
        <p className="mt-6 max-w-lg text-lg">
          Tell me what you're building. I'll bring design and code to make it real.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <a className="btn" href={`mailto:${profile.email}`}>Mail</a>
          <a className="btn" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <p className="label mt-24 text-center text-ink-soft">© {new Date().getFullYear()} {profile.name}</p>
    </section>
  );
}