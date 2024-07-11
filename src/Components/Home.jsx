import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-content">
        <h1>Hi, I'm Oti Isaac</h1>
        <h3>Frontend Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          placeat architecto impedit corrupti mollitia eos natus consequuntur
          recusandae maxime, vitae voluptas repudiandae dolorem eaque, animi,
          rem veniam! Asperiores, officia delectus!
        </p>
        <div className="button-cont">
          <a>Hire Me</a>
          <a>Let's Talk</a>
        </div>
        <div className="home-icons">
          <a>
            <FaLinkedinIn />
          </a>
          <a>
            <FaTwitter />
          </a>
          <a>
            <FiGithub />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
