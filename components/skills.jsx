import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaPython,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import {
  SiMysql,
  SiExpress,
  SiCanva,
  SiFigma,
  SiBlender,
} from "react-icons/si";
import "./skills.css";

const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaDatabase />, name: "MongoDB" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaGit />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <FaGitAlt />, name: "Git Bash" },
  { icon: <SiCanva />, name: "Canva" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiBlender />, name: "Blender" },
];

const SkillsComponent = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const updateActiveIndices = () => {
      const startIndex = phase % skills.length;
      const newIndices = [
        startIndex,
        (startIndex + 1) % skills.length,
        (startIndex + 2) % skills.length,
        (startIndex + 3) % skills.length,
      ];
      setActiveIndices(newIndices);
    };

    updateActiveIndices();

    const interval = setInterval(() => {
      setPhase((prevPhase) => prevPhase + 1);
    }, 400);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className="skills-helper">
      <div className="marquee-w">
        <div className="marquee color-specific">
          <span>
            Skills Skills Skills Skills Skills Skills Skills Skills&nbsp;
          </span>
        </div>
        <div className="marquee marquee2 color-specific">
          <span>
            Skills Skills Skills Skills Skills Skills Skills Skills&nbsp;
          </span>
        </div>
      </div>
      <div className="marquee-w marquee-w-2">
        <div className="marquee marquee-2">
          <span>
            Languages Languages Languages Languages Languages Languages
            Languages&nbsp;
          </span>
        </div>
        <div className="marquee marquee2 marquee2-2">
          <span>
            Languages Languages Languages Languages Languages Languages
            Languages&nbsp;
          </span>
        </div>
      </div>
      <div className="custom-skills-container">
        <h2 className="custom-skills-title"></h2>
        <div className="custom-skills-grid">
          {skills.map((skill, index) => (
            <div className="border-boxing" key={index}>
              <div
                className={`custom-skill ${
                  activeIndices.includes(index) ? "active-skill" : ""
                }`}
              >
                <div className="custom-skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
