import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Methodology from "./components/Methodology";
import Services from "./components/Services";
import GetInTouch from "./components/GetInTouch";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Methodology />
      <Services />
      <GetInTouch />
    </main>
  );
}
