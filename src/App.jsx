import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "./lib/gsap";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Works from "./components/Works";
import Services from "./components/Services";
import Contact from "./components/Contacts";

export default function App() {
  const root = useRef(null);

  useGSAP(
    () => {
      // Scroll reveals (skipped for reduced-motion users)
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(".reveal", { opacity: 0, y: 40 });
        ScrollTrigger.batch(".reveal", {
          start: "top 88%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              overwrite: true,
            }),
        });
      });

      // Services: highlight the row crossing the middle of the screen
      gsap.utils.toArray(".service").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 40%",
          toggleClass: { targets: el, className: "is-active" },
        });
      });

      // Re-measure once images have loaded
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);

      return () => {
        mm.revert();
        window.removeEventListener("load", refresh);
      };
    },
    { scope: root }
  );

  return (
    <main ref={root}>
      <Nav />
      <Hero />
      <About />
      <Marquee />
      <Works />
      <Services />
      <Contact />
    </main>
  );
}