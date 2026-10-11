import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NAME = "FESEL CHIRUMBAN"; // edit freely
const projectSlides = [
  ["/projects/luka.png", "/projects/unit-converter.png", "/projects/sound groove.png", "/projects/luka.png"],
  ["/projects/unit-converter.png", "/projects/sound groove.png", "/projects/luka.png", "/projects/unit-converter.png"],
  ["/projects/sound groove.png", "/projects/luka.png", "/projects/unit-converter.png", "/projects/sound groove.png"],
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
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
      <div className="relative z-10 px-4 text-center">
        <h1 className="hero-line flex items-center justify-center gap-[0.25em] text-[clamp(2.5rem,9vw,8rem)] font-black uppercase leading-[0.95] tracking-tight">
          <span>code</span>
          <div className="flex h-[0.7em] w-[1.2em] items-center justify-center overflow-hidden rounded-md bg-accent shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
            <div className="grid h-full w-full grid-cols-2 gap-[1px] overflow-hidden bg-[#f8f3ee]">
              {projectSlides[slideIndex].map((src, idx) => (
                <img
                  key={`${slideIndex}-${idx}`}
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ))}
            </div>
          </div>
          <span>build</span>
        </h1>
        <h2 className="hero-line mt-1 text-[clamp(1.4rem,5.2vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight">
          Student by day, developer by night.
        </h2>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="cue label absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
      >
        Meet {NAME.split(" ")[0]} ↓
      </a>
    </section>
  );
}
