import React from "react";
import "./skill.css";

const SkillBar = ({ active, skill }) => {
  return (
    <div className="progress">
      <span className="skill">
        {skill.name} <i className="val">{skill.percentage}</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={skill.percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: active ? skill.percentage : "1px" }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
