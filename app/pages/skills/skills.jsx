'use client'

import React, { useEffect, useState } from 'react';
import './Skills.css'; // Custom CSS for styling

const Skills = () => {
  const [progress, setProgress] = useState({
    "Web Development": 0,
    "Graphics Design": 0,
    "UI/UX Design": 0,
    "Adobe Suite": 0,
    "MS Suite": 0,
  });

  const skillLevels = {
    "Web Development": 85,
    "Graphics Design": 80,
    "UI/UX Design": 75,
    "Adobe Suite": 70,
    "MS Suite": 90,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skillLevels);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="skills-inside-frame">
      <h2 className='contacts-inside-header'>My Skills</h2>
      <div className="skills-list-frame">
        {Object.keys(skillLevels).map((skill) => (
        <div key={skill} className="skill">
          <span className="skill-label w-2/12">{skill}</span>
          <div className="skill-bar w-10/12">
            <div className="skill-progress" style={{ width: `${progress[skill]}%` }} />
          </div>
          <span className="skill-percent">{progress[skill]}%</span>
        </div>
        ))}
      </div>
      <div className='flex justify-between'>
        <div></div>
        <div>
          <a 
            href="/docs/CV.pdf" 
            download="Twalibu/CV.pdf" 
            className="Downloaded-CV"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
