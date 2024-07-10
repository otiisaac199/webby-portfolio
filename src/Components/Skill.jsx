import CompHeading from "./ReuseableComp/CompHeading";

const Skill = () => {
  return (
    <div className="skill-container">
      <CompHeading firstText={"My"} secondText={"Skills"} />
      <div className="skill-cont">
        <div className="skill-cont1">
          <h3>Coding Skills</h3>
          <div></div>
        </div>
        <div className="skill-cont2">
          <h3>Professional Skills</h3>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
