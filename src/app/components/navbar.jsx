"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navVisible, setNavVisible] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        setNavVisible(true); // Mengaktifkan animasi saat pertama kali muncul
    }, []);

    return (
        <div className={`fixed w-full top-0 z-50 flex justify-center mt-5 ${navVisible ? "slide-in" : ""}`}>
            <div className="flex justify-center pt-5 w-[90vw] bg-purple-100 rounded-lg">
                <nav className="flex justify-between items-center w-full h-[7vh] relative rounded-lg">
                    <div className="text-black font-Funnel_Sans ml-10 mb-5 text-lg p-3 rounded-lg font-medium">
                        <Link href="/">Halo <span className="font-bold">Semuanya</span></Link>
                    </div>

                    {/* Hamburger icon for small screens */}
                    <div className="sm:hidden mr-10 mb-5 text-black cursor-pointer" onClick={toggleMenu}>
                        {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </div>

                    {/* Desktop menu */}
                    <ul className="hidden mr-10 mb-5 sm:flex flex-row text-xl items-center gap-8 text-black font-Funnel_Sans">
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
                        className={`sm:hidden absolute top-[9.34vh] left-0 w-full rounded-lg bg-purple-100 flex flex-col items-center gap-4 py-4 text-black font-Funnel_Sans transition-all duration-300 ease-in-out transform z-10 ${
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
        </div>
    );
}
