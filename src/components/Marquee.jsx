import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { marquee } from "../data/content";

export default function Marquee() {
  const track = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(track.current, {
          xPercent: -50,
          duration: 25,
          ease: "none",
          repeat: -1,
        });
      });
      return () => mm.revert();
    },
    { scope: track },
  );

  const items = [...marquee, ...marquee]; // two identical halves

  return (
    <div className="overflow-hidden border-y border-ink/20 py-4 sm:py-6">
      <div ref={track} className="flex w-max">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="px-4 text-[clamp(1.15rem,4vw,1.5rem)] font-extrabold uppercase tracking-tight sm:px-8"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
