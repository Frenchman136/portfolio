import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NAME = "FESEL CHIRUMBAN"; // edit freely
const projectSlides = [
  "/projects/luka.png",
  "/projects/unit-converter.png",
  "/projects/sound groove.png",
];

export default function Hero() {
  const root = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % projectSlides.length);
    }, 1500);

    return () => window.clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-line", {
          y: 70,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
        }).from(".cue", { opacity: 0, y: 10, duration: 0.6 }, "-=0.2");
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-3 sm:px-6"
      id="top"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/hero/hero-bg-compressed.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          style={{
            filter: "saturate(1.2) contrast(1.1) brightness(1.08)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* sky */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(158,197,232,0.9) 0%, rgba(243,199,168,0.7) 58%, rgba(255,255,255,0.12) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 18%, rgba(255,255,255,0.42), rgba(255,255,255,0) 40%), linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0) 52%)",
        }}
      />
      {/* grid */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* headline */}
      <div className="relative z-10 w-full max-w-[1100px] px-2 text-center">
        <h1 className="hero-line flex flex-wrap items-center justify-center gap-[0.18em] text-[clamp(2.2rem,9vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-ink/80 sm:gap-[0.22em]">
          <span>code</span>
          <div className="flex h-[0.8em] w-[1.15em] min-h-[2.5rem] min-w-[2.5rem] items-center justify-center overflow-hidden rounded-md bg-accent shadow-[0_6px_18px_rgba(0,0,0,0.12)] sm:h-[0.78em] sm:w-[1.1em]">
            <img
              src={projectSlides[slideIndex]}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <span>build</span>
        </h1>
        <h2 className="hero-line mx-auto mt-2 max-w-[22ch] text-[clamp(1rem,3.4vw,4.5rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.04em] text-ink/75 sm:max-w-[30ch]">
          Student by day, developer by night.
        </h2>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="cue label absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-gray-200/90"
      >
        Meet {NAME.split(" ")[0]} ↓
      </a>
    </section>
  );
}
