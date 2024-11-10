"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll's Link component

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="flex justify-center pt-5 sticky top-0 z-20 bg-purple-100">
            <nav className="flex justify-between items-center rounded-lg w-[90vw] h-[7vh] relative">
                <div className="text-black font-Funnel_Sans text-lg p-3 rounded-lg font-medium">
                    <Link href="/">Portofolio <span className="font-bold">Bibi</span></Link>
                </div>
                
                {/* Hamburger icon for small screens */}
                <div className="sm:hidden text-black cursor-pointer" onClick={toggleMenu}>
                    {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </div>

                {/* Desktop menu */}
                <ul className="hidden sm:flex flex-row text-xl items-center gap-8 text-black font-Funnel_Sans">
                    <li className="hover:font-bold">
                        <ScrollLink to="hero" smooth={true} duration={500} offset={-100}>
                            Home
                        </ScrollLink>
                    </li>
                    <li className="hover:font-bold">
                        <ScrollLink to="about" smooth={true} duration={500} offset={-100}>
                            About
                        </ScrollLink>
                    </li>
                    <li className="hover:font-bold">
                        <ScrollLink to="projects" smooth={true} duration={500} offset={-100}>
                            Project
                        </ScrollLink>
                    </li>
                    <li className="hover:font-bold">
                        <ScrollLink to="footer" smooth={true} duration={500} offset={-100}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>

                {/* Mobile menu */}
                <ul
                    className={`sm:hidden absolute top-[9.34vh] left-0 w-full bg-purple-100 flex flex-col items-center gap-4 py-4 text-black font-Funnel_Sans transition-all duration-300 ease-in-out transform z-10 ${
                        menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                    }`}
                >
                    <li className="hover:font-bold">
                        <ScrollLink to="hero" smooth={true} duration={500} offset={-100} onClick={toggleMenu}>
                            Home
                        </ScrollLink>
                    </li>
                    <li className="hover:font-bold">
                        <ScrollLink to="about" smooth={true} duration={500} offset={-100} onClick={toggleMenu}>
                            About
                        </ScrollLink>
                    </li>
                    <li className="hover:font-bold">
                        <ScrollLink to="projects" smooth={true} duration={500} offset={-100} onClick={toggleMenu}>
                            Project
                        </ScrollLink>
                    </li>
                    <li className="hover:font-bold">
                        <ScrollLink to="footer" smooth={true} duration={500} offset={-100} onClick={toggleMenu}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
