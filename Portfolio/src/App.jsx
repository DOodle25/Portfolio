import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parallax from "../components/parallax";
import Aboutme from "../components/Aboutme";
import Timeline from "../components/timeline3";
import Skills from "../components/skills"
import Socials from "../components/socials2"
import Footer from "../components/footer2";
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
