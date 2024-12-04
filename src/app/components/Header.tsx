"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; // Portfolio Icon

export default function Header() {
    // Smooth scroll handler
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (!section) {
            console.warn(`Section with ID "${sectionId}" not found.`);
            return;
        }
        section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header>
            {/* NAVBAR */}
            <nav className="flex items-center justify-between h-16 bg-[#070620] px-20">
                {/* LOGO */}
                <Link href="/" aria-label="Home" className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faBriefcase} className="text-[#00D9FF] text-2xl" />
                    <h1 className="text-[#00D9FF] text-xl font-bold font-sans">Portfolio</h1>
                </Link>

                {/* NAVBAR LINKS */}
                <ul className="flex gap-7">
                    {["home", "Projects", "Skills", "About"].map((section) => (
                        <li key={section}>
                            <button
                                onClick={() => handleScroll(section)}
                                className="relative py-1.5 text-white font-calibri text-lg group"
                                aria-label={`Scroll to ${section}`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00D9FF] group-hover:w-full transition-all"></span>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Download CV Button */}
                <a
                    href="/Noor Hassan CV.pdf" // Ensure this file exists in the public folder
                    download="Noor_Hassan_CV.pdf" // Specify the default download name
                    className="px-4 py-2 rounded-lg bg-[#00D9FF] text-white font-semibold hover:bg-[#32b3b8] transition-all duration-300 transform hover:scale-105 shadow-lg"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        boxShadow: "0px 0px 15px #00D9FF",
                    }}
                >
                    Download CV
                </a>
            </nav>
        </header>
    );
}
