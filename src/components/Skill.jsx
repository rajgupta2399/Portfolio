import React, { useState } from "react";
import "./skill.css";
import skillData from "../data/skillData";
import SkillBar from "./SkillBar";
const Skill = ({active}) => {
  const [skills, setSkills] = useState(skillData);
  return (
    <div className="container skills">
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <div className="row skill-content">
        <div className="col-lg-6">
          {
            skills.slice(0, 4).map((skill) => (
            <SkillBar key={skill._id} skill={skill} active={active}/>
          ))}
        </div>
        <div className="col-lg-6">
          {
            skills.slice(4, 8).map((skill) => (
            <SkillBar key={skill._id} skill={skill} active={active}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
