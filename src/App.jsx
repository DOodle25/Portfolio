// import "./App.css";
// import Parallax from "../components/parallax";
// import Aboutme from "../components/Aboutme";
// import Timeline from "../components/timeline3";
// import Skills from "../components/skills"
// import Socials from "../components/socials"
// import Footer from "../components/footer";
// function App() {
//   return (
//     <>
//       <Parallax />
//       <Aboutme />
//       <Timeline />
//       <Socials />
//       <Skills />
//       <Footer />
//     </>
//   );
// }

// export default App;


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
  const scrollRef = useRef(null);

  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    // <section className="scroll-container" ref={scrollRef}>
      // <div>
      <Parallax />
      <Aboutme />
      // </div>
      <Timeline />
      // <div>
      <Socials />
      <Skills />
      <Footer />
      // </div>
    // </section>
  );
}

export default App;
