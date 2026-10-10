
import { useState } from "react";

import Navbar from "./components/Navbar";
import SplashCursor from "./components/SplashCursor";
import Chatbot from "./components/Chatbot";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIBuild from "./components/WhatIBuild";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Profiles from "./components/Profiles";

import ResumeContact from "./components/ResumeContact";
function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        PRESSURE_ITERATIONS={20}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR="#D4A373"
        COLOR_UPDATE_SPEED={10}
        SHADING={true}
        TRANSPARENT={true}
        RAINBOW_MODE={false}
      />

      <Navbar onAskAI={() => setChatOpen(true)} />

      <Chatbot
        open={chatOpen}
        setOpen={setChatOpen}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <WhatIBuild />
        <Projects />
        <Achievements />
        <Skills />
        <Profiles />
        <ResumeContact />
      </main>
    </>
  );
}

export default App;
