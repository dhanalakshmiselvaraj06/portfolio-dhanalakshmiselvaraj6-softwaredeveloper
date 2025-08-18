import { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Academic from "./components/Academic";
import Certifications from "./components/Certifications";
import Award from "./components/Award";
import Contacts from "./components/Contacts";

import './App.css'

function App() {
   const [darkMode, setDarkMode] = useState(false);
 

  return (
       <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-5xl mx-auto p-6 space-y-12">
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Academic />
        <Certifications />
        <Award />
        <Contacts />
      </main>
    </div>
  )
}

export default App
