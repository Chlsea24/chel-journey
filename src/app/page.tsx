import Hero from "./components/hero"; // 'Hero' is the function name
import About from "./components/about";
import Timeline from "./components/timeline";
import Skill from "./components/skills";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Timeline />
      <Skill />
      <Contact />
    </main>
  );
}