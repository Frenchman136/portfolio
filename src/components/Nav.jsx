import { profile } from "../data/content";

const links = [
  ["About", "#about"],
  ["Works", "#works"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 text-white mix-blend-difference md:px-9">
      <a href="#top" className="text-sm font-extrabold leading-[0.9] tracking-tighter">
        {profile.name.split(" ").map((w) => (
          <span key={w} className="block lowercase">{w}</span>
        ))}
      </a>
      <nav className="flex gap-5 font-mono text-xs uppercase tracking-widest">
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className={label === "Contact" ? "" : "hidden md:inline"}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}