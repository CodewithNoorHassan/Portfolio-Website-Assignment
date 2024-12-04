"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const [showButton, setShowButton] = useState(false);

  // Show the button only when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />

      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-[#00D9FF] text-white rounded-full shadow-lg hover:bg-[#32b3b8] transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
          style={{
            boxShadow: "0px 0px 15px #00D9FF",
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
      )}
    </main>
  );
}
