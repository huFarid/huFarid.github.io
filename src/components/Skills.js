import React from 'react';
import '../css/Skills.css'; 
 
const skillsData = [
  { name: 'Python', proficiency: 90 },
  { name: 'C#', proficiency: 80 },
  { name: 'SQL Server', proficiency: 70 },
  { name: '.NET API', proficiency: 85 },
  { name: 'JavaScript', proficiency: 95 },
];

const getColor = (proficiency) => {
  if (proficiency >= 80) return '#4CAF50';  
  if (proficiency >= 50) return '#FFEB3B';  
  return '#F44336';  
};

const SkillBar = ({ name, proficiency }) => {
  const color = getColor(proficiency);

  return (
    <div className="skill-bar-container">
      <div className="skill-bar-header">
        <span>{name}</span>
        <span>{proficiency}%</span>
      </div>
      <div className="skill-bar-background">
        <div className="skill-bar-fill" style={{ width: `${proficiency}%`, backgroundColor: color }} />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills Proficiency</h2>
      {skillsData.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
      ))}
    </div>
  );
};

export default Skills;
