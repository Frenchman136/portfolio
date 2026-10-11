import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

export default function Typewriter({ text }) {
  const box = useRef(null);
  const out = useRef(null);

  useGSAP(
    () => {
      const state = { n: 0 };
      const write = () => {
        out.current.textContent = text.slice(0, Math.round(state.n));
      };
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        write();
        gsap.to(state, {
          n: text.length,
          duration: text.length * 0.06,
          ease: "none",
          onUpdate: write,
          scrollTrigger: { trigger: box.current, start: "top 85%", once: true },
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        out.current.textContent = text;
      });

      return () => mm.revert();
    },
    { scope: box, dependencies: [text] }
  );

  return (
    <div
      ref={box}
      className="min-h-28 w-64 -rotate-3 bg-[#f6f2ea] p-4 font-mono text-xs leading-relaxed shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
    >
      <span ref={out} />
      <span className="caret" />
    </div>
  );
}