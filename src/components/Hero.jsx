import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NAME = "Fesel Chirumban"; // edit freely

// src is optional: until the PNG exists, the emoji placeholder shows
const stickers = [
  { id: "laptop", src: "/stickers/laptop.png", emoji: "💻", rotate: -12,
    style: { top: "5%", left: "5%", width: "clamp(80px, 15vw, 220px)" } },
  { id: "keys", src: "/stickers/keyboard.png", emoji: "⌨️", rotate: 10,
    style: { top: "4%", right: "4%", width: "clamp(100px, 22vw, 340px)" } },
  { id: "phones", src: "/stickers/headphones.png", emoji: "🎧", rotate: -8,
    style: { bottom: "10%", left: "3%", width: "clamp(80px, 15vw, 210px)" } },
  { id: "ball", src: "/stickers/football.png", emoji: "⚽", rotate: 14,
    style: { bottom: "7%", left: "42%", width: "clamp(70px, 12vw, 170px)" } },
  { id: "phone", src: "/stickers/phone.png", emoji: "📱", rotate: -6,
    style: { bottom: "8%", right: "4%", width: "clamp(80px, 14vw, 200px)" } },
];

const outline = {
  filter:
    "drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff) drop-shadow(0 8px 12px rgba(0,0,0,.25))",
};

function Sticker({ s }) {
  return (
    <div className="sticker pointer-events-none absolute z-0" style={s.style}>
      <div className="floater" style={{ transform: `rotate(${s.rotate}deg)` }}>
        {s.src ? (
          <img
            src={s.src}
            alt=""
            style={outline}
            className="w-full h-auto"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "block";
            }}
          />
        ) : null}
        <div
          style={{ display: s.src ? "none" : "block", fontSize: "clamp(3rem,8vw,6rem)" }}
          className="text-center"
        >
          {s.emoji}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. entrance
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-line", { y: 70, opacity: 0, duration: 0.9, stagger: 0.15 })
          .from(
            ".sticker",
            {
              y: -120, scale: 0.5, opacity: 0, rotate: -20,
              duration: 0.9, stagger: 0.12, ease: "back.out(1.7)",
            },
            "-=0.6"
          )
          .from(".cue", { opacity: 0, y: 10, duration: 0.6 }, "-=0.2");

        // 2. gentle floating, starts after the entrance
        gsap.utils.toArray(".floater").forEach((el, i) => {
          gsap.to(el, {
            y: gsap.utils.random(-14, 14),
            rotation: "+=" + gsap.utils.random(-3, 3),
            duration: gsap.utils.random(2.5, 4),
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1.4 + i * 0.2,
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* sky */}
      <div
        className="absolute inset-x-0 top-0 h-3/5"
        style={{
          background: "linear-gradient(180deg, #9ec5e8 0%, #f3c7a8 70%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 55%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent)",
        }}
      />
      {/* grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* logo */}
      <p className="absolute left-5 top-4 z-20 text-sm font-extrabold leading-[0.9] tracking-tighter">
        {NAME.split(" ").map((w) => (
          <span key={w} className="block lowercase">{w}</span>
        ))}
      </p>

      {stickers.map((s) => <Sticker key={s.id} s={s} />)}

      {/* headline */}
      <div className="relative z-10 px-4 text-center">
        <h1 className="hero-line flex items-center justify-center gap-[0.25em] text-[clamp(2.5rem,9vw,8rem)] font-black uppercase leading-[0.95] tracking-tight">
          <span>Design</span>
          <span className="inline-block h-[0.6em] w-[1.1em] rounded-md border-2 border-ink bg-accent" />
          <span>Code</span>
        </h1>
        <h2 className="hero-line mt-1 text-[clamp(1.4rem,5.2vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight">
          Good taste, bad sleep.
        </h2>
      </div>

      {/* scroll cue */}
      <a href="#about" className="cue label absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        Meet {NAME.split(" ")[0]} ↓
      </a>
    </section>
  );
}