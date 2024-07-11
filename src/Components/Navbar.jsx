// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="menu-container">
      <h2 className="menu-logo">Webby.</h2>
      <nav className="menu-nav-cont">
        <a to="/" className="active">
          Home
        </a>
        <a to="/about">About</a>
        <a to="/education">Education</a>
        <a to="/skill">Skill</a>
        <a to="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
