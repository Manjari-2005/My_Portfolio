import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Skills from "@/components/Skills";
import Terminal from "@/components/Terminal";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JerryGuide from "@/components/JerryGuide";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Terminal />
      <Projects />
      <Experience />
      <Journey />
      <Certifications />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
      <JerryGuide />
    </main>
  );
}