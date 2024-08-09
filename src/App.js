import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import "remixicon/fonts/remixicon.css";
import "boxicons/css/boxicons.min.css";

import "./App.css";
import Header from "./components/Header";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import { useRef, useState } from "react";

function App() {
  
  const [aboutActive, setAboutActive] = useState(false);
  const homeRef = useRef();
  const aboutRef = useRef();
  const resumeRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const sections = [
    {
      name: "header",
      ref: homeRef,
      active: true,
    },
    {
      name: "about",
      ref: aboutRef,
      active: false,
    },
    {
      name: "resume",
      ref: resumeRef,
      active: false,
    },
    {
      name: "portfolio",
      ref: portfolioRef,
      active: false,
    },
    {
      name: "contact",
      ref: contactRef,
      active: false,
    },
  ];

  const handleSectionActive = (target) => {
    console.log(target);
    sections.map((section) => {
      section.ref.current.classList.remove("section-show");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("section-show");
        if (section.name === "about") {
          setAboutActive(true);
        }
      }
      return section;
    });
  };
  return (
    <>
      <Header
        refrence={homeRef}
        sectionActive={handleSectionActive}
        aboutActive={setAboutActive}
      />
      <About refrence={aboutRef} aboutActive={aboutActive} />
      <Resume refrence={resumeRef} />
      <Portfolio refrence={portfolioRef} />
      <Contact refrence={contactRef} />
    </>
  );
}

export default App;
