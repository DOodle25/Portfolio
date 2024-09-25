import "./App.css";
import Parallax from "../components/parallax";
import Aboutme from "../components/Aboutme";
import Timeline from "../components/timeline2";
import Skills from "../components/skills"
import Socials from "../components/socials"
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
