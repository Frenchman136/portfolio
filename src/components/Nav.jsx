import { profile } from "../data/content";

const links = [
  ["About", "#about"],
  ["Works", "#works"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 px-4 py-3 text-white mix-blend-difference sm:px-6 sm:py-4 md:px-9">
      <a
        href="#top"
        className="shrink-0 text-xs font-extrabold leading-[0.9] tracking-tighter sm:text-sm"
      >
        {profile.name.split(" ").map((w) => (
          <span key={w} className="block lowercase">
            {w}
          </span>
        ))}
      </a>
      <nav className="flex items-center gap-2 font-mono text-[0.55rem] uppercase tracking-[0.08em] sm:gap-4 sm:text-[0.65rem] md:gap-5 md:text-xs md:tracking-widest">
        {links.map(([label, href]) => (
          <a key={label} href={href} className="whitespace-nowrap">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
