import { useState } from "react";
// import "./App.scss";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
