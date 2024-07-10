import { useState } from "react";
import "./App.scss";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Education from "./Components/Education";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
    </div>
  );
}

export default App;
