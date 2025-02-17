import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills3D from "./components/Skills3D";

export default function Home() {
  return (
    <div>
     <Navbar />
     <Hero />
     <AboutMe />
     <Skills3D/>
    </div>
  );
}
