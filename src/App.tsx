import React from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="relative min-h-screen text-text selection:bg-primary/30 selection:text-white bg-bg">
      <Background />
      <Header />

      <main className="relative z-10">
        <Hero />
        {/* TrustStrip is integrated into Hero */}
        <About />
        <Services />
        <Projects />
        <Process />
        <TechStack />
        <WhyWorkWithMe />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
