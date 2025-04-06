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



// import React, { useState, useEffect } from "react";
// import styles from "./timeline4.module.css";
// import DID from "/DIDi.svg";
// import CC from "/CCi.png";
// import CS from "/CSi.svg";
// import DE from "/DEi.png";

// const projects = [
//   {
//     title: "Computer Science",
//     subtitle: "(2021-2025)",
//     description: `Pursued a Bachelor's degree in Computer Science. Achieved an SGPA of 8.60.
//                   Worked on various projects and participated in several hackathons. Gained
//                   knowledge in important subjects such as`,
//     techItems: [
//       "DSA",
//       "Operating Systems",
//       "Discrete Mathematics",
//       "Software Engineering",
//       "Software Development",
//     ],
//     link: "https://github.com/DOodle25",
//     image: CS,
//     alt: "Computer Science",
//   },
//   {
//     title: "DI Dashboard",
//     subtitle: "(2024)",
//     description: `Worked on the District Integrated Dashboard, a platform for managing district-level data
//                   and various government schemes. Facilitated easy data access and visualization for administrators.`,
//     techItems: ["Django", "Python", "API", "React", "Axios", "Tailwind"],
//     link: "https://District-integrated-Dashboard.alynor.wiki",
//     image: DID,
//     alt: "DI Dashboard",
//   },
//   {
//     title: "Code Canvas",
//     subtitle: "(2024)",
//     description: `Contributed to CodeCanvas, a platform offering a vast collection of code snippets in various
//                   programming languages. It allows users to browse and contribute their own code snippets.`,
//     techItems: ["MongoDB", "Express", "React", "Node.js", "Axios", "MUI"],
//     link: "https://www.alynor.wiki/",
//     image: CC,
//     alt: "Code Canvas",
//   },
//   {
//     title: "Design",
//     subtitle: "(2020-)",
//     description: `Explored the field of Design, gaining expertise in design principles, 3D animations,
//                   and digital design tools. Mastered various aspects of design theory and practice.`,
//     techItems: [
//       "Principles of Design",
//       "Blender",
//       "Canva",
//       "Figma",
//       "Art History",
//     ],
//     link: "https://www.alynor.wiki/",
//     image: DE,
//     alt: "Design",
//   },
// ];

// const Timeline = () => {
//   const [selectedTechIndices, setSelectedTechIndices] = useState(
//     projects.map(() => 0) // Initialize an array of indices for each project
//   );

//   // Set interval to change highlighted tech item in a loop for each project independently
//   useEffect(() => {
//     const intervals = projects.map((_, projectIndex) =>
//       setInterval(() => {
//         setSelectedTechIndices((prevIndices) => {
//           const newIndices = [...prevIndices];
//           const totalTechItems = projects[projectIndex].techItems.length;
//           newIndices[projectIndex] =
//             (prevIndices[projectIndex] + 1) % totalTechItems;
//           return newIndices;
//         });
//       }, 1000) // Adjust time (1000ms = 1 second) for speed of changing
//     );

//     return () => {
//       // Clear all intervals when the component unmounts
//       intervals.forEach((interval) => clearInterval(interval));
//     };
//   }, []);

//   return (
//     <div>
//       <section className={styles.timelineContainer}>
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className={
//               index % 2 === 0 ? styles.timelineItems : styles.timelineItems2
//             }
//           >
//             <div
//               className={index % 2 === 0 ? styles.separatorLine : styles.separatorLine2}
//             />
//             <div className={styles.dot} />
//             <a href={project.link} className={styles.linkContainer}>
//               <div
//                 className={index % 2 === 0 ? styles.imageWrapper : styles.imageWrapper2}
//               >
//                 <img
//                   className={index % 2 === 0 ? styles.image : styles.image2}
//                   src={project.image}
//                   alt={project.alt}
//                 />
//                 <span
//                   className={index % 2 === 0 ? styles.projectLabel : styles.projectLabel2}
//                 >
//                   {project.title}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={16}
//                     height={16}
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className={styles.externalLinkIcon}
//                   >
//                     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                     <polyline points="15 3 21 3 21 9" />
//                     <line x1={10} y1={14} x2={21} y2={3} />
//                   </svg>
//                 </span>
//               </div>
//             </a>
//             <div
//               className={
//                 index % 2 === 0
//                   ? styles.projectDetails
//                   : styles.projectDetails2
//               }
//             >
//               <h3 className={styles.projectTitle}>{project.title}</h3>
//               <span className={styles.projectSubtitle}>{project.subtitle}</span>
//               <p
//                 className={
//                   index % 2 === 0
//                     ? styles.projectDescription
//                     : styles.projectDescription2
//                 }
//               >
//                 {project.description}
//               </p>
//               <ul className={styles.techList}>
//                 {project.techItems.map((techItem, idx) => (
//                   <li
//                     key={idx}
//                     className={
//                       idx === selectedTechIndices[index]
//                         ? `${styles.techItem} ${styles.highlightedTechItem}` // Apply special styling to selected tech item
//                         : styles.techItem
//                     }
//                   >
//                     {techItem}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//         <div className={styles.verticalline}></div>
//       </section>
//     </div>
//   );
// };

// export default Timeline;




// import React, { useState, useEffect, useRef } from "react";
// import styles from "./timeline4.module.css";
// import DID from "/DIDi.svg";
// import CC from "/CCi.png";
// import CS from "/CSi.svg";
// import DE from "/DEi.png";
// import GIT from "/GIT.png"; // Add your Gauraj InfoTech logo
// import BXL from "/CCi.png"; // Add your ByteXL logo

// const Timeline = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const timelineRef = useRef(null);

//   const experiences = [
//     {
//       type: "education",
//       title: "Computer Science",
//       subtitle: "May 2021 - May 2025",
//       description: `Pursuing Bachelor's degree in Computer Science with GPA: 3.46/4.0. 
//                     Coursework includes Data Structures & Algorithms, OOP with C++, 
//                     Operating Systems, Discrete Mathematics, and Software Engineering. 
//                     Actively participating in hackathons and developing various projects. Certified in Software 
//                     Engineering (NPTEL Elite) and Data Analytics with Python (NPTEL Silver+Elite).`,
//       techItems: [
//         "Data Structures & Algorithms",
//         "Operating Systems",
//         "Discrete Mathematics",
//         "Software Engineering",
//         "Azure Fundamentals",
//       ],
//       link: "https://github.com/DOodle25",
//       image: CS,
//       alt: "Computer Science",
//     },
//     {
//       type: "work",
//       title: "SDE Intern",
//       company: "Gauraj InfoTech",
//       subtitle: "Dec 2024 – Present",
//       description: `Developed StarOneCRM - a comprehensive CRM system with admin, customer, 
//                     and employee roles featuring three-layer authentication and social logins. 
//                     Implemented real-time communication using Socket.io and integrated Stripe 
//                     for payments with advanced data grid functionalities handling 4000+ records.`,
//       techItems: [
//         "Node.js",
//         "React",
//         "Socket.io",
//         "Stripe API",
//         "MongoDB",
//         "Authentication",
//       ],
//       link: "#", // Add your CRM link if available
//       image: GIT,
//       alt: "Gauraj InfoTech",
//     },
//     {
//       type: "project",
//       title: "District Integrated Dashboard",
//       subtitle: "Feb 2024 - Oct 2024",
//       description: `Led a 3-member team to develop a dashboard for Mehsana government initiatives, 
//                     featuring dynamic front-end design with 7+ pages and interactive data visuals. 
//                     Processed over 13,850 logs under high traffic conditions with Django backend.`,
//       techItems: [
//         "Django",
//         "Python",
//         "React",
//         "Chart.js",
//         "Tailwind",
//         "API Integration",
//       ],
//       link: "https://github.com/DOodle25/DID",
//       image: DID,
//       alt: "DI Dashboard",
//     },
//     {
//       type: "work",
//       title: "SDE Intern",
//       company: "ByteXL",
//       subtitle: "May 2024 – July 2024",
//       description: `Contributed to CodeCanvas development in a 6-member team, gaining full-stack 
//                     experience. Worked on 7+ live projects with Azure deployment and Linux 
//                     environments, integrating AI-driven solutions into applications.`,
//       techItems: [
//         "MERN Stack",
//         "Azure",
//         "Linux",
//         "AI Integration",
//         "System Design",
//         "Software Testing",
//       ],
//       link: "https://www.alynor.wiki/",
//       image: BXL,
//       alt: "ByteXL",
//     },
//     {
//       type: "project",
//       title: "Code Canvas",
//       subtitle: "May 2024 - Present",
//       description: `Collaborated on a platform for component distribution with user contributions 
//                     in 12+ languages. Developed responsive 8+ page web app with React and 
//                     implemented secure authentication using Passport.js.`,
//       techItems: [
//         "MongoDB",
//         "Express",
//         "React",
//         "Node.js",
//         "Passport.js",
//         "MUI",
//       ],
//       link: "https://github.com/DOodle25/Code-Canvas",
//       image: CC,
//       alt: "Code Canvas",
//     },
//     {
//       type: "skill",
//       title: "Design",
//       subtitle: "Dec 2019 - Present",
//       description: `Combining technical skills with design expertise. Proficient in Figma, Blender, 
//                     and traditional sketching with a decade of experience. Used my Design skills and development skills to build more then 3 portfolio site current site being one of them.`,
//       techItems: [
//         "Figma",
//         "Blender",
//         "Canva",
//         "UI/UX Principles",
//         "Art History",
//         "Digital Design",
//       ],
//       link: "https://www.alynor.wiki/",
//       image: DE,
//       alt: "Design",
//     },
//   ];

//   // Animation for tech items
//   const [selectedTechIndices, setSelectedTechIndices] = useState(
//     experiences.map(() => 0)
//   );

//   useEffect(() => {
//     const intervals = experiences.map((_, index) =>
//       setInterval(() => {
//         setSelectedTechIndices((prevIndices) => {
//           const newIndices = [...prevIndices];
//           const totalTechItems = experiences[index].techItems.length;
//           newIndices[index] = (prevIndices[index] + 1) % totalTechItems;
//           return newIndices;
//         });
//       }, 2000)
//     );

//     return () => intervals.forEach((interval) => clearInterval(interval));
//   }, []);

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.animateIn);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     if (timelineRef.current) {
//       const items = timelineRef.current.querySelectorAll(`.${styles.timelineItems}, .${styles.timelineItems2}`);
//       items.forEach((item) => observer.observe(item));
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={timelineRef}>
//       <section className={styles.timelineContainer}>
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className={
//               index % 2 === 0 ? styles.timelineItems : styles.timelineItems2
//             }
//             onMouseEnter={() => setActiveIndex(index)}
//             onMouseLeave={() => setActiveIndex(null)}
//           >
//             <div
//               className={index % 2 === 0 ? styles.separatorLine : styles.separatorLine2}
//             />
//             <div 
//               className={`${styles.dot} ${
//                 activeIndex === index ? styles.dotActive : ""
//               }`}
//             />
//             <a href={exp.link} className={styles.linkContainer}>
//               <div
//                 className={index % 2 === 0 ? styles.imageWrapper : styles.imageWrapper2}
//               >
//                 <img
//                   className={index % 2 === 0 ? styles.image : styles.image2}
//                   src={exp.image}
//                   alt={exp.alt}
//                 />
//                 <span
//                   className={index % 2 === 0 ? styles.projectLabel : styles.projectLabel2}
//                 >
//                   {exp.type === "work" ? exp.company : exp.title}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={16}
//                     height={16}
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className={styles.externalLinkIcon}
//                   >
//                     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                     <polyline points="15 3 21 3 21 9" />
//                     <line x1={10} y1={14} x2={21} y2={3} />
//                   </svg>
//                 </span>
//               </div>
//             </a>
//             <div
//               className={
//                 index % 2 === 0
//                   ? styles.projectDetails
//                   : styles.projectDetails2
//               }
//             >
//               <h3 className={styles.projectTitle}>
//                 {exp.title}
//                 {exp.company && (
//                   <span className={styles.companyName}> | {exp.company}</span>
//                 )}
//               </h3>
//               <span className={styles.projectSubtitle}>{exp.subtitle}</span>
//               <p
//                 className={
//                   index % 2 === 0
//                     ? styles.projectDescription
//                     : styles.projectDescription2
//                 }
//               >
//                 {exp.description}
//               </p>
//               <div className={styles.techContainer}>
//                 <ul className={styles.techList}>
//                   {exp.techItems.map((techItem, idx) => (
//                     <li
//                       key={idx}
//                       className={
//                         idx === selectedTechIndices[index]
//                           ? `${styles.techItem} ${styles.highlightedTechItem}`
//                           : styles.techItem
//                       }
//                     >
//                       {techItem}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className={styles.verticalline}></div>
//       </section>
//     </div>
//   );
// };

// export default Timeline;




import React, { useState, useEffect, useRef } from "react";
import styles from "./timeline4.module.css";
import DID from "/DIDi.svg";
import CC from "/CCi.png";
import CS from "/CSi.svg";
import DE from "/DEi.png";
import GIT from "/GIT.png";
import BXL from "/CCi.png";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const timelineRef = useRef(null);

  const experiences = [
    // {
    //   type: "education",
    //   title: "Computer Science",
    //   subtitle: "July 2021 – May 2025",
    //   description: `Pursuing <span class="${styles.highlight}">Bachelor's degree</span> in Computer Science with <span class="${styles.highlight}">GPA: 3.46/4.0</span>. 
    //                 Coursework includes <span class="${styles.highlight}">Data Structures & Algorithms</span>, <span class="${styles.highlight}">OOP with C++</span>, 
    //                 <span class="${styles.highlight}">Operating Systems</span>, <span class="${styles.highlight}">Discrete Mathematics</span>, and <span class="${styles.highlight}">Software Engineering</span>. 
    //                 <span class="${styles.highlight}">Qualified GATE</span> with All India Rank of <span class="${styles.highlight}">8129</span>. Certified in <span class="${styles.highlight}">Software 
    //                 Engineering (NPTEL Elite)</span> and <span class="${styles.highlight}">Data Analytics with Python (NPTEL Silver+Elite)</span>.`,
    //   techItems: [
    //     "Data Structures & Algorithms",
    //     "Operating Systems",
    //     "Discrete Mathematics",
    //     "Software Engineering",
    //     "Azure Fundamentals",
    //     "GATE Qualified",
    //   ],
    //   link: "https://github.com/DOodle25",
    //   image: CS,
    //   alt: "Computer Science",
    // },
    {
      type: "education",
      title: "B.Tech in Computer Science",
      subtitle: "Parul University | July 2021 – May 2025",
      description: `
        Pursuing <span class="${styles.highlight}">Bachelor's degree</span> with current <span class="${styles.highlight}">GPA: 3.46/4.0</span>.
        <br/>
        <span class="${styles.highlight}">Qualified GATE 2024</span> (CS) with <span class="${styles.highlight}">AIR 8129</span>,
        <span class="${styles.highlight}">Solved 150+ LeetCode</span> problems,
        <span class="${styles.highlight}">Finalist in OdooCombat 2024</span>,
        Participant in <span class="${styles.highlight}">5+ hackathons</span> (MLH, etc.).
        
        <br/>
        <span class="${styles.highlight}">NPTEL Elite</span> in Software Engineering 
        <span class="${styles.highlight}">NPTEL Silver+Elite</span> in Data Analytics with Python 
        <span class="${styles.highlight}">CISCO</span> Introduction to Cybersecurity 
        <span class="${styles.highlight}">Harvard's CS50 & CS50 Web</span> completion
        
        <br/>
        <strong>Activities:</strong>
        Member of <span class="${styles.highlight}">A.S.M.P.</span> (Professional Mentorship Program)
        Contributor to <span class="${styles.highlight}">Technical Club</span>
        <span class="${styles.highlight}">College Reading Club</span> for English LRWS
      `,
      techItems: [
        "Data Structures & Algorithms",
        "OOP with C++",
        "Operating Systems",
        "Discrete Mathematics",
        "Azure Fundamentals",
        "GATE Qualified (AIR 8129)",
        "NPTEL Elite Certifications",
        "LeetCode 150+",
        "Hackathon Participant",
      ],
      link: "https://github.com/DOodle25", // Or university link if available
      image: CS,
      alt: "Computer Science Education",
    },
    {
      type: "work",
      title: "SDE Intern",
      company: "Gauraj InfoTech",
      subtitle: "Dec 2024 – Present",
      description: `Developed <span class="${styles.highlight}">StarOneCRM</span> - a comprehensive CRM system with <span class="${styles.highlight}">admin, customer, and employee roles</span> featuring <span class="${styles.highlight}">three-layer authentication</span> and <span class="${styles.highlight}">social logins</span>.
                    <br/>Enabled <span class="${styles.highlight}">task/request creation</span> with admins having functionality to assign tasks. Implemented <span class="${styles.highlight}">real-time communication</span> using <span class="${styles.highlight}">Socket.io</span>.
                    <br/>Built <span class="${styles.highlight}">middleware authentication</span> and <span class="${styles.highlight}">role-based routing</span> for three user types with <span class="${styles.highlight}">40+ backend methods</span> and <span class="${styles.highlight}">50+ frontend calls</span>.
                    <br/>Integrated <span class="${styles.highlight}">Stripe for payments</span> with advanced data grid functionalities handling <span class="${styles.highlight}">4000+ test records</span> and <span class="${styles.highlight}">200+ deployments</span>.`,
      techItems: [
        "Node.js",
        "React",
        "Socket.io",
        "Stripe API",
        "MongoDB",
        "Authentication",
        "Role-Based Access",
      ],
      link: "https://Star-One-CRM.alynor.wiki/",
      image: GIT,
      alt: "Gauraj InfoTech",
    },
    {
      type: "project",
      title: "District Integrated Dashboard",
      subtitle: "Feb 2024 - Oct 2024",
      description: `Led a <span class="${styles.highlight}">3-member team</span> to develop a dashboard for <span class="${styles.highlight}">Mehsana government initiatives</span>, 
                    featuring <span class="${styles.highlight}">dynamic front-end design</span> with <span class="${styles.highlight}">7+ pages</span> and <span class="${styles.highlight}">interactive data visuals</span>.
                    <br/>Processed over <span class="${styles.highlight}">13,850 logs</span> under high traffic conditions with <span class="${styles.highlight}">Django backend</span>.
                    <br/>Published <span class="${styles.highlight}">research paper</span> with DOI: <span class="${styles.highlight}">10.13140/RG.2.2.18738.21448/1</span>`,
      techItems: [
        "Django",
        "Python",
        "React",
        "Chart.js",
        "Tailwind",
        "API Integration",
        "Research Publication",
      ],
      link: "https://District-Integrated-Dashboard.alynor.wiki/",
      image: DID,
      alt: "DI Dashboard",
    },
    {
      type: "work",
      title: "SDE Intern",
      company: "ByteXL",
      subtitle: "May 2024 – July 2024",
      description: `Contributed to <span class="${styles.highlight}">CodeCanvas 2</span> development in a <span class="${styles.highlight}">6-member team</span>, gaining <span class="${styles.highlight}">full-stack experience</span>.
                    <br/>Worked on <span class="${styles.highlight}">7+ live projects</span> with <span class="${styles.highlight}">Azure deployment</span> and <span class="${styles.highlight}">Linux environments</span>.
                    <br/>Gained experience in <span class="${styles.highlight}">complete SDLC</span>, <span class="${styles.highlight}">system design</span>, and <span class="${styles.highlight}">software testing</span>.
                    <br/>Integrated <span class="${styles.highlight}">AI-driven solutions</span> into applications and managed projects on <span class="${styles.highlight}">GitHub</span>.`,
      techItems: [
        "MERN Stack",
        "Azure",
        "Linux",
        "AI Integration",
        "System Design",
        "Software Testing",
        "GitHub Collaboration",
      ],
      link: "https://doodle25.github.io/DomainHosting/Project-CodeCanvas-Login-Signup/Code-Canvas-Landing-Page.html",
      image: BXL,
      alt: "ByteXL",
    },
    // {
    //   type: "project",
    //   title: "Code Canvas",
    //   subtitle: "May 2024 - Present",
    //   description: `Collaborated on a platform for <span class="${styles.highlight}">component distribution</span> with user contributions in <span class="${styles.highlight}">12+ languages</span>.
    //                 <br/>Developed <span class="${styles.highlight}">responsive 8+ page web app</span> with <span class="${styles.highlight}">React</span> and implemented <span class="${styles.highlight}">secure authentication</span> using <span class="${styles.highlight}">Passport.js</span>.
    //                 <br/>Managed <span class="${styles.highlight}">server-side operations</span>, <span class="${styles.highlight}">database interactions</span>, and <span class="${styles.highlight}">API calls</span> with <span class="${styles.highlight}">Node.js and Express</span>.
    //                 <br/>Supported languages include <span class="${styles.highlight}">HTML5, CSS3, JavaScript, React, Angular</span> and more.`,
    //   techItems: [
    //     "MongoDB",
    //     "Express",
    //     "React",
    //     "Node.js",
    //     "Passport.js",
    //     "MUI",
    //     "Multi-language Support",
    //   ],
    //   link: "https://github.com/DOodle25/Code-Canvas",
    //   image: CC,
    //   alt: "Code Canvas",
    // },
    {
      type: "skill",
      title: "Design & Development",
      subtitle: "Dec 2019 - Present",
      description: `Combining <span class="${styles.highlight}">technical skills</span> with <span class="${styles.highlight}">design expertise</span>. Proficient in <span class="${styles.highlight}">Figma, Blender</span>, and traditional sketching with a <span class="${styles.highlight}">decade of experience</span>.
                    <br/>Built <span class="${styles.highlight}">3+ portfolio sites</span> including current one at <span class="${styles.highlight}">alynor.wiki</span>.
                    <br/><span class="${styles.highlight}">Solved 150+ Leetcode</span> problems with multiple achievements.
                    <br/>Participated in <span class="${styles.highlight}">5+ hackathons</span> (MLH, OdooCombat 2024 Finalist) and completed <span class="${styles.highlight}">Harvard's CS50 and CS50 Web</span> courses.`,
      techItems: [
        "Figma",
        "Blender",
        "Canva",
        "UI/UX Principles",
        "LeetCode",
        "Hackathons",
        "CS50 Certified",
      ],
      link: "https://www.alynor.wiki/",
      image: DE,
      alt: "Design",
    },
  ];

  const [selectedTechIndices, setSelectedTechIndices] = useState(
    experiences.map(() => 0)
  );

  useEffect(() => {
    const intervals = experiences.map((_, index) =>
      setInterval(() => {
        setSelectedTechIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          const totalTechItems = experiences[index].techItems.length;
          newIndices[index] = (prevIndices[index] + 1) % totalTechItems;
          return newIndices;
        });
      }, 2000)
    );

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(`.${styles.timelineItems}, .${styles.timelineItems2}`);
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  // Function to handle HTML with spans
  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div ref={timelineRef}>
      <section className={styles.timelineContainer}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={
              index % 2 === 0 ? styles.timelineItems : styles.timelineItems2
            }
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={index % 2 === 0 ? styles.separatorLine : styles.separatorLine2}
            />
            <div 
              className={`${styles.dot} ${
                activeIndex === index ? styles.dotActive : ""
              }`}
            />
            <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.linkContainer}>
              <div
                className={index % 2 === 0 ? styles.imageWrapper : styles.imageWrapper2}
              >
                <img
                  className={index % 2 === 0 ? styles.image : styles.image2}
                  src={exp.image}
                  alt={exp.alt}
                />
                <span
                  className={index % 2 === 0 ? styles.projectLabel : styles.projectLabel2}
                >
                  {exp.type === "work" ? exp.company : exp.title}
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
              <h3 className={styles.projectTitle}>
                {exp.title}
                {exp.company && (
                  <span className={styles.companyName}> | {exp.company}</span>
                )}
              </h3>
              <span className={styles.projectSubtitle}>{exp.subtitle}</span>
              <p
                className={
                  index % 2 === 0
                    ? styles.projectDescription
                    : styles.projectDescription2
                }
                dangerouslySetInnerHTML={createMarkup(exp.description)}
              />
              <div className={styles.techContainer}>
                <ul className={styles.techList}>
                  {exp.techItems.map((techItem, idx) => (
                    <li
                      key={idx}
                      className={
                        idx === selectedTechIndices[index]
                          ? `${styles.techItem} ${styles.highlightedTechItem}`
                          : styles.techItem
                      }
                    >
                      {techItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.verticalline}></div>
      </section>
    </div>
  );
};

export default Timeline;