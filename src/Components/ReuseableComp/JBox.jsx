import { FaRegCalendarAlt } from "react-icons/fa";

const JBox = ({ time, title, text }) => {
  return (
    <div className="jbox-cont">
      <p className="jbox-time">
        <FaRegCalendarAlt />
        {time}
      </p>
      <h3 className="jbox-title">{title}</h3>
      <p className="jbox-text">{text}</p>
    </div>
  );
};

export default JBox;
