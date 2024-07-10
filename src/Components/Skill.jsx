import CompHeading from "./ReuseableComp/CompHeading";
import ProgressBar from "./ReuseableComp/ProgressBar";

const Skill = () => {
  return (
    <div className="skill-container">
      <CompHeading firstText={"My"} secondText={"Skills"} />
      <div className="skill-cont">
        <div className="skill-cont1">
          <h3>Coding Skills</h3>
          <div>
            <ProgressBar title={"HTML"} percent={"90%"} />
            <ProgressBar title={"CSS"} percent={"85%"} />
            <ProgressBar title={"Javascript"} percent={"80%"} />
            <ProgressBar title={"React"} percent={"75%"} />
          </div>
        </div>
        <div className="skill-cont2">
          <h3>Professional Skills</h3>
          <div>
            <ProgressBar title={"Frontend Development"} percent={"82%"} />
            <ProgressBar title={"Graphic Design"} percent={"70%"} />
            <ProgressBar title={"Web Design"} percent={"35%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
