import CompHeading from "./ReuseableComp/CompHeading";
import JBox from "./ReuseableComp/JBox";

const MyJourney = () => {
  return (
    <div className="journey-container">
      <CompHeading firstText={"My"} secondText={"Journey"} />
      <div className="journey-content">
        <div className="edu-cont">
          <h3>Education</h3>
          <div className="edu-content">
            <JBox
              time={""}
              title={"BSc Degree-University"}
              text={
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, voluptatum sequi. Veritatis itaque laborum enim rem quam, iure distinctio suscipit?"
              }
            />
            <JBox
              time={""}
              title={"BSc Degree-University"}
              text={
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, voluptatum sequi. Veritatis itaque laborum enim rem quam, iure distinctio suscipit?"
              }
            />
            <JBox
              time={""}
              title={"BSc Degree-University"}
              text={
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, voluptatum sequi. Veritatis itaque laborum enim rem quam, iure distinctio suscipit?"
              }
            />
          </div>
        </div>
        <div className="exp-cont">
          <h3>Experience</h3>
          <div className="exp-content">
            <JBox
              time={""}
              title={"Web Development Tutor"}
              text={
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, voluptatum sequi. Veritatis itaque laborum enim rem quam, iure distinctio suscipit?"
              }
            />
            <JBox
              time={""}
              title={"Web Development Tutor"}
              text={
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, voluptatum sequi. Veritatis itaque laborum enim rem quam, iure distinctio suscipit?"
              }
            />
            <JBox
              time={""}
              title={"Web Development Tutor"}
              text={
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, voluptatum sequi. Veritatis itaque laborum enim rem quam, iure distinctio suscipit?"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
