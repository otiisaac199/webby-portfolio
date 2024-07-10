import { useState } from "react";
// import "./App.scss";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import MyJourney from "./Components/MyJourney";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <MyJourney />
    </div>
  );
}

export default App;
