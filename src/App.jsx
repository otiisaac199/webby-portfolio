// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./mediaQuery.scss";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    // <Router>
    <div className="App">
      {/* <Switch> */}
      <Navbar />
      {/* <Route exact path="/"> */}
      <Home />
      {/* </Route> */}
      {/* <Route path="/about"> */}
      <About />
      {/* </Route> */}
      {/* <Route path="/education"> */}
      <Education />
      {/* </Route> */}
      {/* <Route path="/skill"> */}
      <Skill />
      {/* </Route> */}
      {/* <Route path="/contact"> */}
      <Contact />
      {/* </Route> */}
      <Footer />
      {/* </Switch> */}
    </div>
    // </Router>
  );
}

export default App;
