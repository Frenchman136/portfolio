import { profile } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-paper-dark px-4 py-16 sm:px-6 sm:py-20 md:px-9 md:py-24"
    >
      <div className="reveal mx-auto max-w-3xl">
        <p className="label mb-5 sm:mb-6">A good idea starts with a hello.</p>
        <h2 className="text-[clamp(2rem,7vw,4.5rem)] font-black leading-[1] tracking-tight">
          Let's build something worth showing off.
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed sm:mt-6 sm:text-lg">
          Tell me what you're building. I'll bring design and code to make it
          real.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <a className="btn" href={`mailto:${profile.email}`}>
            Mail
          </a>
          <a
            className="btn"
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="btn"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="label mt-16 text-center text-ink-soft sm:mt-20 md:mt-24">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
