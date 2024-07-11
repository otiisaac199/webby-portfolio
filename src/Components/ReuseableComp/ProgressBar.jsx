const ProgressBar = ({ title, percent }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-text-cont">
        <h4>{title}</h4>
        <h4>{percent}</h4>
      </div>
      <div className="progress-bar-cont">
        <div className="progress-bar-content" style={{ width: percent }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
