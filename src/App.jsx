
import "./App.css";
import useScrollSnap from "react-use-scroll-snap";
import { useRef, useEffect } from "react";
import Parallax from "../components/parallax";
import Aboutme from "../components/Aboutme";
import Timeline from "../components/timeline4";
import Skills from "../components/skills2";
import Socials from "../components/socials";
import Footer from "../components/footer";

function App() {
  return (
    <>
      <Parallax />
      <Aboutme />
      <Timeline />
      <Socials />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
