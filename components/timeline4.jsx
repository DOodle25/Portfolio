// import React from "react";
// import styles from "./timeline4.module.css";
// import ProCodrrImage from "./assets/images/ProCodrr.webp";
// import EazyGradImage from "./assets/images/eazygrad.webp";
// import HarigurusImage from "./assets/images/harigurus.webp";
// import DID from "/DIDi.svg";
// import CC from "/CCi.png";
// import CS from "/CSi.svg";
// import DE from "/DEi.png";

// const Timeline = () => {
//   return (
//     <div 
//     // style={{marginTop:"-160px"}}
//     >
//       {/* <div className="marquee-w margin-help">
//         <div className="marquee color-specific reverse">
//           <span>
//             EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE&nbsp;
//           </span>
//         </div>
//         <div className="marquee marquee2 color-specific reverse2">
//           <span>
//             EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE&nbsp;
//           </span>
//         </div>
//       </div>
//       <div className="marquee-w marquee-w-2">
//         <div className="marquee marquee-2">
//           <span>
//             timeline timeline timeline timeline timeline timeline timeline
//             timeline timeline timeline&nbsp;
//           </span>
//         </div>
//         <div className="marquee marquee2 marquee2-2">
//           <span>
//             timeline timeline timeline timeline timeline timeline timeline
//             timeline timeline timeline&nbsp;
//           </span>
//         </div>
//       </div> */}
//     <section style={{marginTop:"-50px"}} className={styles.timelineContainer}>
//       <div className={styles.timelineItems}>
//         <div className={styles.separatorLine} />
//         <div className={styles.dot} />
//         <a href="https://github.com/DOodle25" className={styles.linkContainer}>
//           <div className={styles.imageWrapper}>
//             <img className={styles.image} src={CS} alt="" />
//             <span className={styles.projectLabel}>
//               Github
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className={styles.externalLinkIcon}
//               >
//                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                 <polyline points="15 3 21 3 21 9" />
//                 <line x1={10} y1={14} x2={21} y2={3} />
//               </svg>
//             </span>
//           </div>
//         </a>
//         <div className={styles.projectDetails}>
//           <h3 className={styles.projectTitle}>Computer science</h3>
//           <span className={styles.projectSubtitle}>(2021-2025)</span>
//           <p className={styles.projectDescription}>
//             Pursued a <span className="style1">Bachelor's degree</span> in{" "}
//             <span className="style1">Computer Science</span>. Achieved an SGPA
//             of <span className="style1">8.60</span>. During this period, worked
//             on various projects and participated in several hackathons. Gained
//             knowledge in important subjects such as
//           </p>
//           <ul className={styles.techList}>
//             <li className={styles.techItem}>DSA</li>
//             <li className={styles.techItem}>Operating Systems</li>
//             <li className={styles.techItem}>Discrete Mathematics</li>
//             <li className={styles.techItem}>Software Engineering</li>
//             <li className={styles.techItem}>Software Development</li>
//             {/* <li className={styles.techItem}>#mongoose</li>
//             <li className={styles.techItem}>#css</li>
//             <li className={styles.techItem}>#javascript</li>
//             <li className={styles.techItem}>#figma</li> */}
//           </ul>
//         </div>
//       </div>
//       <div className={styles.timelineItems2}>
//         <div className={styles.separatorLine2} />
//         <div className={styles.dot} />
//         <a
//           href="https://District-integrated-Dashboard.alynor.wiki"
//           className={styles.linkContainer}
//         >
//           <div className={styles.imageWrapper2}>
//             <img className={styles.image2} src={DID} alt="" />
//             <span className={styles.projectLabel2}>
//               DI Dashboard
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className={styles.externalLinkIcon}
//               >
//                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                 <polyline points="15 3 21 3 21 9" />
//                 <line x1={10} y1={14} x2={21} y2={3} />
//               </svg>
//             </span>
//           </div>
//         </a>
//         <div className={styles.projectDetails2}>
//           <h3 className={styles.projectTitle}>DI Dashboard</h3>
//           <span className={styles.projectSubtitle}>(2024)</span>
//           <p className={styles.projectDescription2}>
//             Worked on the{" "}
//             <span className="style1">District Integrated Dashboard</span>, a
//             comprehensive platform designed to manage and display district-level
//             data, <span className="style1">varous government schemes</span>. The
//             dashboard facilitated easy data access and{" "}
//             <span className="style1">visualization</span> for administrators,
//             helping them make decisions
//           </p>
//           <ul className={styles.techList}>
//             <li className={styles.techItem}>Django</li>
//             <li className={styles.techItem}>Python</li>
//             <li className={styles.techItem}>API</li>
//             <li className={styles.techItem}>React</li>
//             <li className={styles.techItem}>Axios</li>
//             <li className={styles.techItem}>Tailwind</li>
//             {/* <li className={styles.techItem}>#css</li>
//             <li className={styles.techItem}>#javascript</li>
//             <li className={styles.techItem}>#figma</li> */}
//           </ul>
//         </div>
//       </div>
//       <div className={styles.timelineItems}>
//         <div className={styles.separatorLine} />
//         <div className={styles.dot} />
//         <a href="https://www.alynor.wiki/" className={styles.linkContainer}>
//           <div className={styles.imageWrapper}>
//             <img className={styles.image} src={CC} alt="" />
//             <span className={styles.projectLabel}>
//               Code Canvas
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className={styles.externalLinkIcon}
//               >
//                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                 <polyline points="15 3 21 3 21 9" />
//                 <line x1={10} y1={14} x2={21} y2={3} />
//               </svg>
//             </span>
//           </div>
//         </a>
//         <div className={styles.projectDetails}>
//           <h3 className={styles.projectTitle}>Code Canvas</h3>
//           <span className={styles.projectSubtitle}>(2024)</span>
//           <p className={styles.projectDescription}>
//             Contributed to <span className="style1">CodeCanvas</span>, a
//             comprehensive platform offering a vast collection of{" "}
//             <span className="style1">code snippets</span>
//             in various programming languages. It provides users with the ability
//             to <span className="style1">browse</span> and{" "}
//             <span className="style1">contribute</span> their own code snippets.
//           </p>
//           <ul className={styles.techList}>
//             <li className={styles.techItem}>MongoDB</li>
//             <li className={styles.techItem}>Express</li>
//             <li className={styles.techItem}>React</li>
//             <li className={styles.techItem}>Node.js</li>
//             <li className={styles.techItem}>Axios</li>
//             <li className={styles.techItem}>MUI</li>
//             {/* <li className={styles.techItem}>#css</li>
//             <li className={styles.techItem}>#javascript</li>
//             <li className={styles.techItem}>#figma</li> */}
//           </ul>
//         </div>
//       </div>
//       <div className={styles.timelineItems2}>
//         <div className={styles.separatorLine2} />
//         <div className={styles.dot} />
//         <a href="https://www.alynor.wiki/" className={styles.linkContainer}>
//           <div className={styles.imageWrapper2}>
//             <img className={styles.image2} src={DE} alt="" />
//             <span className={styles.projectLabel2}>
//               Design
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className={styles.externalLinkIcon}
//               >
//                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                 <polyline points="15 3 21 3 21 9" />
//                 <line x1={10} y1={14} x2={21} y2={3} />
//               </svg>
//             </span>
//           </div>
//         </a>
//         <div className={styles.projectDetails2}>
//           <h3 className={styles.projectTitle}>Design</h3>
//           <span className={styles.projectSubtitle}>(2020-)</span>
//           <p className={styles.projectDescription2}>
//             Passionately exploring the diverse field of{" "}
//             <span className="style1">Design</span>, I have immersed myself in
//             understanding the intricacies of various design branches. From the
//             core <span className="style1">Principles of Design</span> that shape
//             all creative processes to mastering the technical aspects of{" "}
//             <span className="style1">3D Animations</span> and digital design
//             tools
//           </p>
//           <ul className={styles.techList}>
//             <li className={styles.techItem}>Principles of Design</li>
//             <li className={styles.techItem}>Blender</li>
//             <li className={styles.techItem}>Canva</li>
//             <li className={styles.techItem}>Figma</li>
//             <li className={styles.techItem}>Art History</li>
//             {/* <li className={styles.techItem}>#mongoose</li>
//             <li className={styles.techItem}>#css</li>
//             <li className={styles.techItem}>#javascript</li>
//             <li className={styles.techItem}>#figma</li> */}
//           </ul>
//         </div>
//       </div>
//       <div className={styles.verticalline}></div>
//     </section>
//     </div>
//   );
// };

// export default Timeline;



import React, { useState, useEffect } from "react";
import styles from "./timeline4.module.css";
import DID from "/DIDi.svg";
import CC from "/CCi.png";
import CS from "/CSi.svg";
import DE from "/DEi.png";

const projects = [
  {
    title: "Computer Science",
    subtitle: "(2021-2025)",
    description: `Pursued a Bachelor's degree in Computer Science. Achieved an SGPA of 8.60.
                  Worked on various projects and participated in several hackathons. Gained
                  knowledge in important subjects such as`,
    techItems: [
      "DSA",
      "Operating Systems",
      "Discrete Mathematics",
      "Software Engineering",
      "Software Development",
    ],
    link: "https://github.com/DOodle25",
    image: CS,
    alt: "Computer Science",
  },
  {
    title: "DI Dashboard",
    subtitle: "(2024)",
    description: `Worked on the District Integrated Dashboard, a platform for managing district-level data
                  and various government schemes. Facilitated easy data access and visualization for administrators.`,
    techItems: ["Django", "Python", "API", "React", "Axios", "Tailwind"],
    link: "https://District-integrated-Dashboard.alynor.wiki",
    image: DID,
    alt: "DI Dashboard",
  },
  {
    title: "Code Canvas",
    subtitle: "(2024)",
    description: `Contributed to CodeCanvas, a platform offering a vast collection of code snippets in various
                  programming languages. It allows users to browse and contribute their own code snippets.`,
    techItems: ["MongoDB", "Express", "React", "Node.js", "Axios", "MUI"],
    link: "https://www.alynor.wiki/",
    image: CC,
    alt: "Code Canvas",
  },
  {
    title: "Design",
    subtitle: "(2020-)",
    description: `Explored the field of Design, gaining expertise in design principles, 3D animations,
                  and digital design tools. Mastered various aspects of design theory and practice.`,
    techItems: [
      "Principles of Design",
      "Blender",
      "Canva",
      "Figma",
      "Art History",
    ],
    link: "https://www.alynor.wiki/",
    image: DE,
    alt: "Design",
  },
];

const Timeline = () => {
  const [selectedTechIndices, setSelectedTechIndices] = useState(
    projects.map(() => 0) // Initialize an array of indices for each project
  );

  // Set interval to change highlighted tech item in a loop for each project independently
  useEffect(() => {
    const intervals = projects.map((_, projectIndex) =>
      setInterval(() => {
        setSelectedTechIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          const totalTechItems = projects[projectIndex].techItems.length;
          newIndices[projectIndex] =
            (prevIndices[projectIndex] + 1) % totalTechItems;
          return newIndices;
        });
      }, 1000) // Adjust time (1000ms = 1 second) for speed of changing
    );

    return () => {
      // Clear all intervals when the component unmounts
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div>
      <section className={styles.timelineContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={
              index % 2 === 0 ? styles.timelineItems : styles.timelineItems2
            }
          >
            <div
              className={index % 2 === 0 ? styles.separatorLine : styles.separatorLine2}
            />
            <div className={styles.dot} />
            <a href={project.link} className={styles.linkContainer}>
              <div
                className={index % 2 === 0 ? styles.imageWrapper : styles.imageWrapper2}
              >
                <img
                  className={index % 2 === 0 ? styles.image : styles.image2}
                  src={project.image}
                  alt={project.alt}
                />
                <span
                  className={index % 2 === 0 ? styles.projectLabel : styles.projectLabel2}
                >
                  {project.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.externalLinkIcon}
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1={10} y1={14} x2={21} y2={3} />
                  </svg>
                </span>
              </div>
            </a>
            <div
              className={
                index % 2 === 0
                  ? styles.projectDetails
                  : styles.projectDetails2
              }
            >
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <span className={styles.projectSubtitle}>{project.subtitle}</span>
              <p
                className={
                  index % 2 === 0
                    ? styles.projectDescription
                    : styles.projectDescription2
                }
              >
                {project.description}
              </p>
              <ul className={styles.techList}>
                {project.techItems.map((techItem, idx) => (
                  <li
                    key={idx}
                    className={
                      idx === selectedTechIndices[index]
                        ? `${styles.techItem} ${styles.highlightedTechItem}` // Apply special styling to selected tech item
                        : styles.techItem
                    }
                  >
                    {techItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className={styles.verticalline}></div>
      </section>
    </div>
  );
};

export default Timeline;
