import React from "react";
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
import "./skills2.css";

const skillsIcons = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaDatabase />, name: "MongoDB" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaGit />, name: "Git" },
//   { icon: <FaGithub />, name: "GitHub" },
//   { icon: <SiMysql />, name: "MySQL" },
//   { icon: <SiExpress />, name: "Express.js" },
//   { icon: <FaGitAlt />, name: "Git Bash" },
//   { icon: <SiCanva />, name: "Canva" },
//   { icon: <SiFigma />, name: "Figma" },
//   { icon: <SiBlender />, name: "Blender" },
];
const skillsIcons2 = [
    // { icon: <FaHtml5 />, name: "HTML" },
    // { icon: <FaCss3Alt />, name: "CSS" },
    // { icon: <FaJsSquare />, name: "JavaScript" },
    // { icon: <FaBootstrap />, name: "Bootstrap" },
    // { icon: <FaNodeJs />, name: "Node.js" },
    // { icon: <FaReact />, name: "React" },
    // { icon: <FaDatabase />, name: "MongoDB" },
    // { icon: <FaPython />, name: "Python" },
    // { icon: <FaGit />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaGitAlt />, name: "Git Bash" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiBlender />, name: "Blender" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },

  ];
  const skillsIcons3 = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <FaGit />, name: "Git" },

    // { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    // { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaNodeJs />, name: "Node.js" },
    // { icon: <FaReact />, name: "React" },
    { icon: <FaPython />, name: "Python" },
  //   { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiMysql />, name: "MySQL" },
  //   { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaGitAlt />, name: "Git Bash" },
  //   { icon: <SiCanva />, name: "Canva" },
  //   { icon: <SiBlender />, name: "Blender" },
  { icon: <FaDatabase />, name: "MongoDB" },

  ];

const SkillsComponent = () => {
  return (
    <div className="inf-scrl__container">
      {/* Scroll Section 1 */}
      <div className="inf-scrl__scroll" style={{ '--time': '20s' }}>
        <div>
          {skillsIcons.map((skill, index) => (
            <span key={index} className="skill-icon">{skill.icon}</span>
          ))}
        </div>
        <div>
          {skillsIcons.map((skill, index) => (
            <span key={index} className="skill-icon">{skill.icon}</span>
          ))}
        </div>
      </div>

      {/* Scroll Section 2 */}
      <div className="inf-scrl__scroll" style={{ '--time': '30s' }}>
        <div>
          {skillsIcons.map((skill, index) => (
            <span key={index} className="skill-icon">{skill.icon}</span>
          ))}
        </div>
        <div>
          {skillsIcons2.map((skill, index) => (
            <span key={index} className="skill-icon">{skill.icon}</span>
          ))}
        </div>
      </div>

      {/* Scroll Section 3 */}
      <div className="inf-scrl__scroll" style={{ '--time': '25s' }}>
        <div>
          {skillsIcons.map((skill, index) => (
            <span key={index} className="skill-icon">{skill.icon}</span>
          ))}
        </div>
        <div>
          {skillsIcons3.map((skill, index) => (
            <span key={index} className="skill-icon">{skill.icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
