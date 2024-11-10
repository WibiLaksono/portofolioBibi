import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/Hero"
import About from "./components/about"
import Project from "./components/projects";
import Footer from "./components/footer"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div>
      <Analytics/>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Footer/>
    </div>
  );
}
