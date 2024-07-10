import { useState } from "react";
// import "./App.scss";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import MyJourney from "./Components/MyJourney";
import Skill from "./Components/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <MyJourney />
      <Skill />
    </div>
  );
}

export default App;
