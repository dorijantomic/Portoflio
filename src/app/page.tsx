import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Knowledge from "@/components/Knowledge";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Knowledge />
      <Projects />
      <Contact />
    </main>
  );
}
