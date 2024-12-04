"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("Contact");
        if (!contactSection) {
            console.warn("Contact section not found!");
            return;
        }
        contactSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-start pt-20 text-white">
                <header className="flex flex-row items-center justify-between w-[1150px] mx-auto px-10">
                    {/* Text Content */}
                    <div className="flex flex-col items-start text-left">
                        <h2
                            className="text-3xl font-light text-gray-300"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            Hello, It's Me
                        </h2>
                        <h1
                            className="text-6xl font-bold text-white leading-tight mb-2"
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                textShadow: "0px 0px 5px rgba(255, 255, 255, 0.8), 0px 0px 5px #00D9FF",
                            }}
                        >
                            Noor Hassan
                        </h1>

                        {/* Typing Animation */}
                        <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            And I'm a{" "}
                            <span className="typing-text font-bold text-[26px]">
                                <Typewriter
                                    words={["Frontend Developer", "Graphic Designer", "Textile Designer", "Data Entry Expert"]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h3>
                        <style jsx>{`
                            .typing-text {
                                background: linear-gradient(to right, #d946ef, #3b82f6);
                                -webkit-background-clip: text;
                                color: transparent;
                            }
                        `}</style>
                        <p className="max-w-lg text-gray-400 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            I am a passionate frontend developer with a knack for creating visually stunning and user-friendly web applications.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-6 mt-6">
                            <a
                                href="https://www.behance.net/IAMNOORHASSAN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-[#00D9FF] hover:text-[#00b3b8] transition-all"
                                style={{ textShadow: "0px 0px 10px #00D9FF" }}
                                aria-label="Follow me on Behance"
                            >
                                <FontAwesomeIcon icon={faBehance} />
                            </a>
                            <a
                                href="https://www.facebook.com/share/12MQqNwNQmZ/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-[#00D9FF] hover:text-[#00b3b8] transition-all"
                                style={{ textShadow: "0px 0px 10px #00D9FF" }}
                                aria-label="Follow me on Facebook"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/imnoorhassan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-[#00D9FF] hover:text-[#00b3b8] transition-all"
                                style={{ textShadow: "0px 0px 10px #00D9FF" }}
                                aria-label="Connect with me on LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>

                        {/* Contact Button */}
                        <button
                            onClick={scrollToContact}
                            className="mt-6 px-8 py-3 rounded-full bg-[#00D9FF] text-white font-semibold hover:bg-[#32b3b8] transition-all duration-300 transform hover:scale-105 shadow-lg"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                boxShadow: "0px 0px 15px #00D9FF",
                            }}
                            aria-label="Contact me"
                        >
                            Contact Me
                        </button>
                    </div>

                    {/* Profile Picture */}
                    <div className="relative ml-10">
                        <img
                            src="/noor.jpg"
                            alt="Noor Hassan - Frontend Developer"
                            className="w-52 h-52 rounded-full object-cover border-4 border-[#00D9FF]"
                            style={{
                                boxShadow: "0 0 20px #00D9FF, 0 0 40px rgba(0, 217, 255, 0.6)",
                            }}
                        />
                    </div>
                </header>
            </section>
        </div>
    );
}
