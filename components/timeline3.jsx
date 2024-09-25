import React from "react";
import "./timeline3.css";

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="demo-card-wrapper">
        <div className="demo-card demo-card--step1">
          <div className="head odd">
            <div className="number-box">
              <span>01</span>
            </div>
            <h2>
              <span className="small">2021-2025</span> Computer science
            </h2>
          </div>
          <div className="body">
            <p>
              Pursued a <span className="style1">Bachelor's degree</span> in{" "}
              <span className="style1">Computer Science</span>. Achieved an SGPA
              of <span className="style1">8.60</span>. During this period,
              worked on various projects and participated in several hackathons.
              Gained knowledge in important subjects such as{" "}
              <div className="Skill-holder">
                <span className="style2">DSA</span>{" "}
                <span className="style2">Operating Systems</span>{" "}
                <span className="style2">Discrete Mathematics</span>{" "}
                <span className="style2">Software Engineering</span>
                <span className="style2">Software Development</span>
              </div>
            </p>
          </div>
        </div>
        <div className="demo-card demo-card--step2">
          <div className="head">
            <div className="number-box">
              <span>02</span>
            </div>
            <h2>
              <span className="small">2020 - </span> Design
            </h2>
          </div>
          <div className="body">
            <p>
              Passionately exploring the diverse field of{" "}
              <span className="style1">Design</span>, I have immersed myself in
              understanding the intricacies of various design branches. From the
              core <span className="style1">Principles of Design</span> that
              shape all creative processes to mastering the technical aspects of{" "}
              <span className="style1">3D Animations</span> and digital design
              tools
              <div className="Skill-holder">
                <span className="style2">Principles of Design</span>
                <span className="style2">Blender</span>
                <span className="style2">Canva</span>
                <span className="style2">Figma</span>
                <span className="style2">Art History</span>
              </div>
            </p>
          </div>
        </div>
        <div className="demo-card demo-card--step3">
          <div className="head odd">
            <div className="number-box">
              <span>03</span>
            </div>
            <h2>
              <span className="small">2024</span> Code-Canvas
            </h2>
          </div>
          <div className="body">
            <p>
              Contributed to <span className="style1">CodeCanvas</span>, a
              comprehensive platform offering a vast collection of{" "}
              <span className="style1">code snippets</span>
              in various programming languages. It provides users with the
              ability to <span className="style1">browse</span> and{" "}
              <span className="style1">contribute</span> their own code
              snippets.
              <div className="Skill-holder" style={{ paddingBottom: "10px" }}>
                <span className="style2">MongoDB</span>{" "}
                <span className="style2">Express</span>{" "}
                <span className="style2">React</span>{" "}
                <span className="style2">Node.js</span>{" "}
                <span className="style2">Axios</span>{" "}
                <span className="style2">MUI</span>
              </div>
              <a
                href="https://github.com/orgs/ProjectCodeCanvas/"
                style={{ color: "black", textDecoration: "none" }}
              >
                Github/ProjectCodeCanvas
              </a>
            </p>
          </div>
        </div>
        <div className="demo-card demo-card--step4">
          <div className="head">
            <div className="number-box">
              <span>04</span>
            </div>
            <h2>
              <span className="small">2024</span> District Integrated Dashboard
            </h2>
          </div>
          <div className="body">
            <p>
              Worked on the{" "}
              <span className="style1">District Integrated Dashboard</span>, a
              comprehensive platform designed to manage and display
              district-level data,{" "}
              <span className="style1">varous government schemes</span>. The
              dashboard facilitated easy data access and{" "}
              <span className="style1">visualization</span> for administrators,
              helping them make decisions
              <div className="Skill-holder">
                <span className="style2">Django</span>{" "}
                <span className="style2">Python</span>{" "}
                <span className="style2">API</span>{" "}
                <span className="style2">React</span>{" "}
                <span className="style2">Axios</span>{" "}
                <span className="style2">Tailwind</span>{" "}
              </div>
              <a
                href="https://github.com/DOodle25/DID-django"
                style={{ color: "black", textDecoration: "none" }}
              >
                Github/DistrictIntegratedDashboard
              </a>
            </p>
          </div>
        </div>
        <div className="demo-card demo-card--step5">
          <div className="head odd">
            <div className="number-box">
              <span>05</span>
            </div>
            <h2>
              <span className="small">2020-</span> Continuous Participation in
              Community
            </h2>
          </div>
          <div className="body">
            <p>
              Actively participated in over{" "}
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
              enhanced my skills in areas such as{" "}
              <div className="Skill-holder">
                <span className="style2">Problem Solving</span>{" "}
                <span className="style2">Team Collaboration</span>{" "}
                <span className="style2">Full Stack Development</span>{" "}
                <span className="style2">Innovation</span>{" "}
                <span className="style2">Open Source Contributions</span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
