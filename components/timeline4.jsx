import React from 'react';
import styles from './timeline4.module.css';

const Timeline = () => {
    const timelineData = [
        {
          title: 'Parul University',
          date: '2021 - 2024',
          category: 'Education',
          description: (
            <>Pursued a <span className={styles.style1}>Bachelor's degree</span> in{" "}
            <span className={styles.style1}>Computer Science</span>. Achieved an SGPA
            of <span className={styles.style1}>8.60</span>. During this period,
            worked on various projects and participated in several hackathons.
            Gained knowledge in important subjects such as{" "} <br /><br />
            <div className={styles.SkillHolder}>
              <span className={styles.style2}>DSA</span>{" "}
              <span className={styles.style2}>Operating Systems</span>{" "}
              <span className={styles.style2}>Discrete Mathematics</span>{" "}
              <span className={styles.style2}>Software Engineering</span>
              <span className={styles.style2}>Software Development</span>
            </div>
            </>
          ),
        },
        {
          title: 'Design',
          date: '2020 - present',
          category: 'Hobby',
          description: (
            <>Passionately exploring the diverse field of{" "}
            <span className={styles.style1}>Design</span>, I have immersed myself in
            understanding the intricacies of various design branches. From the
            core <span className={styles.style1}>Principles of Design</span> that
            shape all creative processes to mastering the technical aspects of{" "}
            <span className={styles.style1}>3D Animations</span> and digital design
            tools<br /><br />
            <div className={styles.SkillHolder}>
              <span className={styles.style2}>Principles of Design</span>
              <span className={styles.style2}>Blender</span>
              <span className={styles.style2}>Canva</span>
              <span className={styles.style2}>Figma</span>
              <span className={styles.style2}>Art History</span>
            </div>
            </>
          ),
        },
        {
          title: 'Code-Canvas',
          date: '2024 - present',
          category: 'Project',
          description: (
            <><br />
            Contributed to <span className={styles.style1}>CodeCanvas</span>, a
            comprehensive platform offering a vast collection of{" "}
            <span className={styles.style1}>code snippets</span>
            in various programming languages. It provides users with the
            ability to <span className={styles.style1}>browse</span> and{" "}
            <span className={styles.style1}>contribute</span> their own code
            snippets.<br /><br />
            {/* <div className={styles.SkillHolder} style={{ paddingBottom: "10px" }}>
              <span className={styles.style2}>MongoDB</span>{" "}
              <span className={styles.style2}>Express</span>{" "}
              <span className={styles.style2}>React</span>{" "}
              <span className={styles.style2}>Node.js</span>{" "}
              <span className={styles.style2}>Axios</span>{" "}
              <span className={styles.style2}>MUI</span>
            </div>
            <br /> */}
            {/* <a
              href="https://github.com/orgs/ProjectCodeCanvas/"
              style={{ color: "black", textDecoration: "none" }}
            >
              Github/ProjectCodeCanvas
            </a> */}
            </>
          ),
        },
        {
          title: 'District Integrated Dashboard',
          date: '2024 - present',
          category: 'Project',
          description: (
            <><br />
            Worked on the{" "}
            <span className={styles.style1}>District Integrated Dashboard</span>, a
            comprehensive platform designed to manage and display
            district-level data,{" "}
            <span className={styles.style1}>various government schemes</span>. The
            dashboard facilitated easy data access and{" "}
            <span className={styles.style1}>visualization</span> for administrators,
            helping them make decisions.<br /><br />
            <div className={styles.SkillHolder}>
              <span className={styles.style2}>Django</span>{" "}
              <span className={styles.style2}>Python</span>{" "}
              <span className={styles.style2}>API</span>{" "}
              <span className={styles.style2}>React</span>{" "}
              <span className={styles.style2}>Axios</span>{" "}
              <span className={styles.style2}>Tailwind</span>{" "}
            </div>
            <br />
            {/* <a
              href="https://github.com/DOodle25/DID-django"
              style={{ color: "black", textDecoration: "none" }}
            >
              Github/DistrictIntegratedDashboard
            </a> */}
            </>
          ),
        },
        {
          title: 'Continuous Participation in Community',
          date: '2020 - present',
          category: 'Hobby',
          description: (
            <>Actively participated in over{" "}
            <span className={styles.style1}>8+ hackathons</span> such as{" "}
            <span className={styles.style1}>MLH</span>,{" "}
            <span className={styles.style1}>Odoo Combat</span>,{" "}
            <span className={styles.style1}>All India Hackathon</span>, and{" "}
            <span className={styles.style1}>CC3.0</span>. These events provided
            hands-on experience, collaboration with diverse teams, and the
            opportunity to tackle real-world challenges. Maintained an{" "}
            <span className={styles.style1}>active presence</span> on{" "}
            <span className={styles.style1}>LinkedIn</span> and{" "}
            <span className={styles.style1}>GitHub</span>, continuously contributing
            to open-source projects, sharing technical knowledge, and engaging
            with the developer community. This ongoing participation has
            enhanced my skills in areas such as{" "}<br /><br />
            <div className={styles.SkillHolder}>
              <span className={styles.style2}>Problem Solving</span>{" "}
              <span className={styles.style2}>Team Collaboration</span>{" "}
              <span className={styles.style2}>Full Stack Development</span>{" "}
              <span className={styles.style2}>Innovation</span>{" "}
              <span className={styles.style2}>Open Source Contributions</span>
            </div>
            </>
          ),
        },
      ];
      

  return (
    <div className={styles.timeline}>
      <div className={styles.outer}>
        {timelineData.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.info}>
              <section className={styles.wrapper}>
                <div className={styles.top}>{item.title}</div>
                <div className={styles.bottom} aria-hidden="true">{item.title}</div>
              </section>
              <h3 className={styles.title}></h3>
              <h4 className={styles.date}><span className={styles.dateStyle}>{item.date}</span></h4>
              <h5 className={styles.category}><span className={styles.categoryStyle}>{item.category}</span></h5>
              <p className={styles.mainContent}><span className={styles.mainContentStyle}>{item.description}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
