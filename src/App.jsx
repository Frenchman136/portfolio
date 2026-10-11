import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Works from "./components/Works";
import Services from "./components/Services";
import Contact from "./components/Contacts";

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <Marquee />
      <Works />
      <Services />
      <Contact />
    </main>
  );
}