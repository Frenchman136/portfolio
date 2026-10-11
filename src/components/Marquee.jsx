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
        gsap.to(track.current, { xPercent: -50, duration: 25, ease: "none", repeat: -1 });
      });
      return () => mm.revert();
    },
    { scope: track }
  );

  const items = [...marquee, ...marquee]; // two identical halves

  return (
    <div className="overflow-hidden border-y border-ink/20 py-6">
      <div ref={track} className="flex w-max">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="px-8 text-2xl font-extrabold uppercase tracking-tight">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}