import React from 'react';
import './timeline2.css';

const Timeline = () => {
  const timelineData = [
    {
      title: 'Parul University',
      date: '2021 - 2024',
      category: 'Education',
      description: (
        <>Pursued a <span className="style1">Bachelor's degree</span> in{" "}
        <span className="style1">Computer Science</span>. Achieved an SGPA
        of <span className="style1">8.60</span>. During this period,
        worked on various projects and participated in several hackathons.
        Gained knowledge in important subjects such as{" "} <br /><br/>
          <div className='Skill-holder2'>
          <span className="style2">DSA</span>{" "}
                <span className="style2">Operating Systems</span>{" "}
                <span className="style2">Discrete Mathematics</span>{" "}
                <span className="style2">Software Engineering</span>
                <span className="style2">Software Development</span>
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
        <span className="style1">Design</span>, I have immersed myself in
        understanding the intricacies of various design branches. From the
        core <span className="style1">Principles of Design</span> that
        shape all creative processes to mastering the technical aspects of{" "}
        <span className="style1">3D Animations</span> and digital design
        tools<br/><br/>
          <div className='Skill-holder2'>
            <span className="style2">Principles of Design</span>
                <span className="style2">Blender</span>
                <span className="style2">Canva</span>
                <span className="style2">Figma</span>
                <span className="style2">Art History</span>
          </div>
        </>
      ),
    },
    {
      title: 'Code-Canvas',
      date: '2024 - present',
      category: 'Project',
      description: (
        <><br/>
          Contributed to <span className="style1">CodeCanvas</span>, a
              comprehensive platform offering a vast collection of{" "}
              <span className="style1">code snippets</span>
              in various programming languages. It provides users with the
              ability to <span className="style1">browse</span> and{" "}
              <span className="style1">contribute</span> their own code
              snippets.<br/><br/>
              <div className="Skill-holder2" style={{ paddingBottom: "10px" }}>
                <span className="style2">MongoDB</span>{" "}
                <span className="style2">Express</span>{" "}
                <span className="style2">React</span>{" "}
                <span className="style2">Node.js</span>{" "}
                <span className="style2">Axios</span>{" "}
                <span className="style2">MUI</span>
              </div>
              <br/>
              <a
                href="https://github.com/orgs/ProjectCodeCanvas/"
                style={{ color: "black", textDecoration: "none" }}
              >
                Github/ Project Code Canvas
              </a>
        </>
      ),
    },
    {
      title: 'District Integrated Dashboard',
      date: '2024 - present',
      category: 'Project',
      description: (
        <><br/>
          Worked on the{" "}
              <span className="style1">District Integrated Dashboard</span>, a
              comprehensive platform designed to manage and display
              district-level data,{" "}
              <span className="style1">varous government schemes</span>. The
              dashboard facilitated easy data access and{" "}
              <span className="style1">visualization</span> for administrators,
              helping them make decisions.<br/><br/>
              <div className="Skill-holder2">
                <span className="style2">Django</span>{" "}
                <span className="style2">Python</span>{" "}
                <span className="style2">API</span>{" "}
                <span className="style2">React</span>{" "}
                <span className="style2">Axios</span>{" "}
                <span className="style2">Tailwind</span>{" "}
              </div>
              <br/>
              <a
                href="https://github.com/DOodle25/DID-django"
                style={{ color: "black", textDecoration: "none" }}
              >
                Github/ District Integrated Dashboard
              </a>
        </>
      ),
    },
    {
      title: 'Continuous Participation in Community',
      date: '2020 - present',
      category: 'Hobby',
      description: (
        <>Actively participated in over{" "}
        <span className="style1">8+ hackathons</span> such as{" "}
        <span className="style1">MLH</span>,{" "}
        <span className="style1">Odoo Combat</span>,{" "}
        <span className="style1">All India Hackathon</span>, and{" "}
        <span className="style1">CC3.0</span>. These events provided
        hands-on experience, collaboration with diverse teams, and the
        opportunity to tackle real-world challenges. Maintained an{" "}
        <span className="style1">active presence</span> on{" "}
        <span className="style1">LinkedIn</span> and{" "}
        <span className="style1">GitHub</span>, continuously contributing
        to open-source projects, sharing technical knowledge, and engaging
        with the developer community. This ongoing participation has
        enhanced my skills in areas such as{" "}<br/><br/>
        <div className="Skill-holder2">
          <span className="style2">Problem Solving</span>{" "}
          <span className="style2">Team Collaboration</span>{" "}
          <span className="style2">Full Stack Development</span>{" "}
          <span className="style2">Innovation</span>{" "}
          <span className="style2">Open Source Contributions</span>
        </div>
        </>
      ),
    },
    // {
    //   title: 'Open Source & Social Media',
    //   date: 'Ongoing',
    //   category: 'Activity',
    //   description: (
    //     <><br/>
    //       Actively contribute to open-source projects on GitHub, engage with the tech
    //       community, and maintain an active LinkedIn profile. Additionally, I dedicate time
    //       daily to design and drawing, continuously honing my creative skills.<br/>
    //     </>
    //   ),
    // },
  ];

  return (
    <div className="timeline2">
      <div className="outer2">
        {timelineData.map((item, index) => (
          <div className="card2" key={index}>
            <div className="info2">
              <section class="wrapper2">
                <div className="texto">{item.title}</div>
                {/* <div className="top2">{item.title}</div>
                <div className="bottom2" aria-hidden="true">{item.title}</div> */}
              </section>
              <h3 className="title2"></h3>
              <h4 className="date2"><span className="date-style2">{item.date}</span></h4>
              <h5 className="category2"><span className="category-style2">{item.category}</span></h5>
              <p className="mainContent2"><span className="mainContent-style2">{item.description}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
