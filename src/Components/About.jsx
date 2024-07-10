import Button from "./ReuseableComp/Button";
import CompHeading from "./ReuseableComp/CompHeading";

const About = () => {
  return (
    <div className="about-container">
      <CompHeading firstText={"About"} secondText={"Me"} />
      <div className="about-content">
        <div className="about-logo">
          <div className="about-logo-content"></div>
        </div>
        <h3>Frontend Developer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis
          neque. Nulla facilisi. Donec auctor, nunc vel lobortis consectetur,
          felis justo malesuada lectus, non condimentum ipsum ex vel ipsum.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec sagittis nisi in arcu consequat, sed
          semper ex hendrerit. Donec lobortis, nisi eget sollicitudin tristique,
          neque neque fermentum lectus, non consectetur neque lectus eu justo.
          Sed quis consectetur nisi. Nulla facilisi. Donec auctor, nunc vel
          lobortis consectetur, felis justo malesuaci luctus et ultrices posuere
          cubilia Curae; Donec sagittis nis
        </p>
        <Button btnTitle={"Read More"} />
      </div>
    </div>
  );
};

export default About;
