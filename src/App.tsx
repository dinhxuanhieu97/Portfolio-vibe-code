/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Certificates from "./components/Certificates";
import StyleLibrary from "./components/StyleLibrary";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="relative min-h-screen text-[var(--color-text)] selection:bg-[var(--color-primary)]/30 selection:text-white">
      <Background />
      <Header />

      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Blog />
        <Certificates />
        <StyleLibrary />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
