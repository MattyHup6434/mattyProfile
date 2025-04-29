import React, { useState } from "react";
import AvatarComponent from "./components/AvatarComponent";
import SkillsComponent from "./components/SkillsComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import HeaderComponent from "./components/head-foot/HeaderComponent";
import FooterComponent from "./components/head-foot/FooterComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    >
      <HeaderComponent toggleDarkMode={toggleDarkMode} />

      <main>
        <section id="about" className="my-12 px-4 sm:px-8 md:px-16">
          <AvatarComponent darkMode={darkMode} />
        </section>

        <section id="projects" className="my-12 px-4 sm:px-8 md:px-16">
          <ProjectsComponent darkMode={darkMode} />
        </section>

        <section id="skills" className="my-12 px-4 sm:px-8 md:px-16">
          <SkillsComponent darkMode={darkMode} />
        </section>

   
      </main>

      <FooterComponent />
    </div>
  );
}

export default App;
