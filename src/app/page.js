import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/Hero"
import About from "./components/about"
import Project from "./components/projects";
import Footer from "./components/footer"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Footer/>
    </div>
  );
}
