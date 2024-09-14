// import React from 'react';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNodeJs, FaReact, FaDatabase, FaPython, FaGit, FaGithub } from 'react-icons/fa';
// import './skills.css';

// const SkillsComponent = () => {
//   return (
//     <div className="custom-skills-container">
//       <h2 className="custom-skills-title"></h2>
//       <div className="custom-skills-grid">
//         <div className="border-boxing">
//         <div className="custom-skill">
//           <FaHtml5 className="custom-skill-icon" />
//           <p>HTML</p>
//         </div>
//         </div>
//         <div className="border-boxing">
//         <div className="custom-skill">
//           <FaCss3Alt className="custom-skill-icon" />
//           <p>CSS</p>
//           </div>
//         </div>
//         <div className="border-boxing">
//         <div className="custom-skill">
//           <FaJsSquare className="custom-skill-icon" />
//           <p>JavaScript</p>
//           </div>
//         </div>
//         <div className="border-boxing">
//         <div className="custom-skill">
//           <FaBootstrap className="custom-skill-icon" />
//           <p>Bootstrap</p>
//           </div>
//         </div>
//         <div className="border-boxing">
//         <div className="custom-skill">
//           <FaNodeJs className="custom-skill-icon" />
//           <p>Node.js</p>
//           </div>
//         </div>
//         <div className="border-boxing">
//         <div className="custom-skill">
//           <FaReact className="custom-skill-icon" />
//           <p>React</p>
//           </div>
//         </div>
//         <div className="border-boxing">
//         <div className="custom-skill">
//           <FaDatabase className="custom-skill-icon" />
//           <p>MongoDB</p>
//           </div>
//         </div>
//         <div className="border-boxing">
//         <div className="custom-skill">
//           <FaPython className="custom-skill-icon" />
//           <p>Python</p>
//           </div>
//         </div>
//         <div className="border-boxing">
//         <div className="custom-skill">
//           <FaGit className="custom-skill-icon" />
//           <p>Git</p>
//           </div>
//         </div>
//         <div className="border-boxing">
//         <div className="custom-skill">
//           <FaGithub className="custom-skill-icon" />
//           <p>GitHub</p>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsComponent;



// import React, { useState, useEffect } from 'react';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNodeJs, FaReact, FaDatabase, FaPython, FaGit, FaGithub } from 'react-icons/fa';
// import './skills.css';

// const skills = [
//   { icon: <FaHtml5 />, name: 'HTML' },
//   { icon: <FaCss3Alt />, name: 'CSS' },
//   { icon: <FaJsSquare />, name: 'JavaScript' },
//   { icon: <FaBootstrap />, name: 'Bootstrap' },
//   { icon: <FaNodeJs />, name: 'Node.js' },
//   { icon: <FaReact />, name: 'React' },
//   { icon: <FaDatabase />, name: 'MongoDB' },
//   { icon: <FaPython />, name: 'Python' },
//   { icon: <FaGit />, name: 'Git' },
//   { icon: <FaGithub />, name: 'GitHub' },
// ];

// const SkillsComponent = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % skills.length);
//     }, 1500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="skills-helper">
//     <div className="marquee-w">
//       <div className="marquee color-specific">
//           <span>Skills Skills Skills Skills Skills Skills Skills Skills&nbsp;</span>
//       </div>
//       <div className="marquee marquee2 color-specific">
//           <span>Skills Skills Skills Skills Skills Skills Skills Skills&nbsp;</span>
//       </div>
//     </div>
//     <div className="marquee-w marquee-w-2">
//       <div className="marquee marquee-2">
//           <span>Languages Languages Languages Languages Languages Languages Languages&nbsp;</span>
//       </div>
//       <div className="marquee marquee2 marquee2-2">
//           <span>Languages Languages Languages Languages Languages Languages Languages&nbsp;</span>
//       </div>
//     </div>
//     <div className="custom-skills-container">
//       <h2 className="custom-skills-title"></h2>
//       <div className="custom-skills-grid">
//         {skills.map((skill, index) => (
//           <div className="border-boxing" key={index}>
//             <div
//               className={`custom-skill ${
//                 index === activeIndex ? 'active-skill' : ''
//               }`}
//             >
//               <div className="custom-skill-icon">{skill.icon}</div>
//               <p>{skill.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default SkillsComponent;




// import React, { useState, useEffect } from 'react';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNodeJs, FaReact, FaDatabase, FaPython, FaGit, FaGithub } from 'react-icons/fa';
// import './skills.css';

// const skills = [
//   { icon: <FaHtml5 />, name: 'HTML' },
//   { icon: <FaCss3Alt />, name: 'CSS' },
//   { icon: <FaJsSquare />, name: 'JavaScript' },
//   { icon: <FaBootstrap />, name: 'Bootstrap' },
//   { icon: <FaNodeJs />, name: 'Node.js' },
//   { icon: <FaReact />, name: 'React' },
//   { icon: <FaDatabase />, name: 'MongoDB' },
//   { icon: <FaPython />, name: 'Python' },
//   { icon: <FaGit />, name: 'Git' },
//   { icon: <FaGithub />, name: 'GitHub' },
// ];

// const SkillsComponent = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % skills.length);
//     }, 1000); // Change every 1 second
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="skills-helper">
//       <div className="marquee-w">
//         <div className="marquee color-specific">
//           <span>Skills Skills Skills Skills Skills Skills Skills &nbsp;</span>
//         </div>
//         <div className="marquee marquee2 color-specific">
//           <span>Skills Skills Skills Skills Skills Skills Skills&nbsp;</span>
//         </div>
//       </div>
//       <div className="marquee-w marquee-w-2">
//         <div className="marquee marquee-2">
//           <span>Languages Languages Languages Languages Languages Languages Languages&nbsp;</span>
//         </div>
//         <div className="marquee marquee2 marquee2-2">
//           <span>Languages Languages Languages Languages Languages Languages Languages&nbsp;</span>
//         </div>
//       </div>
//       <div className="custom-skills-container">
//         <h2 className="custom-skills-title"></h2>
//         <div className="custom-skills-grid">
//           {skills.map((skill, index) => (
//             <div className="ag-courses-item" key={index}>
//               <a href="#" className={`ag-courses-item_link ${index === activeIndex ? 'active-skill' : ''}`}>
//                 <div className="ag-courses-item_bg"></div>
//                 <div className="ag-courses-item_title">
//                   <div className="custom-skill-icon">{skill.icon}</div>
//                   <p>{skill.name}</p>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsComponent;





import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNodeJs, FaReact, FaDatabase, FaPython, FaGit, FaGithub } from 'react-icons/fa';
import './skills.css';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaDatabase />, name: 'MongoDB' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaGit />, name: 'Git' },
  { icon: <FaGithub />, name: 'GitHub' },
];

const SkillsComponent = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [phase, setPhase] = useState('odd'); // 'odd' or 'even'

  useEffect(() => {
    const updateActiveIndices = () => {
      if (phase === 'odd') {
        const newIndices = skills.map((_, index) => index % 2 !== 0 ? index : null).filter(index => index !== null);
        setActiveIndices(newIndices);
      } else {
        const newIndices = skills.map((_, index) => index % 2 === 0 ? index : null).filter(index => index !== null);
        setActiveIndices(newIndices);
      }
    };

    updateActiveIndices(); // Set initial active indices based on phase

    const interval = setInterval(() => {
      setPhase(prevPhase => (prevPhase === 'odd' ? 'even' : 'odd'));
    }, 3000); // Switch phase every 3 seconds

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className="skills-helper">
      <div className="marquee-w">
        <div className="marquee color-specific">
          <span>Skills Skills Skills Skills Skills Skills Skills Skills&nbsp;</span>
        </div>
        <div className="marquee marquee2 color-specific">
          <span>Skills Skills Skills Skills Skills Skills Skills Skills&nbsp;</span>
        </div>
      </div>
      <div className="marquee-w marquee-w-2">
        <div className="marquee marquee-2">
          <span>Languages Languages Languages Languages Languages Languages Languages&nbsp;</span>
        </div>
        <div className="marquee marquee2 marquee2-2">
          <span>Languages Languages Languages Languages Languages Languages Languages&nbsp;</span>
        </div>
      </div>
      <div className="custom-skills-container">
        <h2 className="custom-skills-title"></h2>
        <div className="custom-skills-grid">
          {skills.map((skill, index) => (
            <div className="border-boxing" key={index}>
              <div
                className={`custom-skill ${
                  activeIndices.includes(index) ? 'active-skill' : ''
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
