import React, { useState, useEffect, useRef } from "react";
import "./Aboutme.css";
import {
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaNewspaper,
  FaBehance,
} from "react-icons/fa";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GitHubCalendar from "react-github-calendar";

import subtitleImgGreen from "/subtitle-img-green.png";
import photo from "/s-6.svg";
const roles = ["Developer", "Designer", "Programmer"];

const Aboutme = () => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const photoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      ScrollTrigger.kill();
    };
  }, []);

  const selectDateRange = (contributions) => {
    const startDate = new Date("2022-07-01");
    const endDate = new Date("2022-12-31");

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= startDate && date < endDate;
    });
  };

  return (
    <div className="All-About">
      <div className="aboutme-container">
        <div className="aboutme-photo-background">
          <div className="aboutme-photo">
            <img ref={photoRef} src={photo} alt="Profile" />
          </div>
        </div>
        <div className="aboutme-content">
          <div className="aboutme-header">
            <img src={subtitleImgGreen} alt="Subtitle" />
            <h1>A glimpse into my world</h1>
          </div>
          <div className="aboutme-info">
            <h2>Let me introduce Myself</h2>
            <h3>Dipen Patel</h3>
            <div className="aboutme-roles">
              {roles.map((role, index) => (
                <div
                  key={role}
                  className={`role ${
                    index === activeRoleIndex ? "active" : ""
                  }`}
                >
                  {role}
                </div>
              ))}
            </div>
            <p>
              I am a passionate individual with experience in development,
              design, and programming. My goal is to create impactful solutions
              and continuously improve my skills.
            </p>
          </div>
          <hr className="socials-line" />
          <div className="aboutme-socials">
            <a
              href="https://www.linkedin.com/in/dipenpatel/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://your-resume-download-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaFileAlt size={35} />
            </a>
            <a href="https://your-blog-link" target="_blank" rel="noreferrer">
              <FaNewspaper size={35} />
            </a>
            <a
              href="https://your-behance-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaBehance size={35} />
            </a>
            <a>
              <button className="btn btn-secondary">
                <span>Contact Me</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          alignItems: "center",
          overflow: "visible",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="github-calendar-2022">
          <GitHubCalendar
            username="DOodle25"
            year={2022}
            hideColorLegend
            transformData={selectDateRange}
            labels={{
              totalCount: "",
            }}
            width={1200}
            theme={{
              light: [
                "hsl(86, 54%, 70%)",
                "hsl(86, 45%, 54%)",
                "hsl(86, 45%, 54%)",
                "hsl(86, 45%, 54%)",
                "hsl(86, 45%, 54%)",
              ],
              dark: [
                "hsl(86, 54%, 70%)",
                "hsl(86, 45%, 54%)",
                "hsl(86, 45%, 54%)",
                "hsl(86, 45%, 54%)",
                "hsl(86, 45%, 54%)",
              ],
            }}
            style={{ marginRight: "4px" }}
          />
        </div>

        <GitHubCalendar
          username="DOodle25"
          year={2023}
          hideColorLegend
          labels={{
            totalCount: "",
          }}
          width={1200}
          theme={{
            light: [
              "hsl(86, 54%, 70%)",
              "hsl(86, 45%, 54%)",
              "hsl(86, 45%, 54%)",
              "hsl(86, 45%, 54%)",
              "hsl(86, 45%, 54%)",
            ],
            dark: [
              "hsl(86, 54%, 70%)",
              "hsl(86, 45%, 54%)",
              "hsl(86, 45%, 54%)",
              "hsl(86, 45%, 54%)",
              "hsl(86, 45%, 54%)",
            ],
          }}
        />

        <style>
          {`
          .react-activity-calendar__count {
            display: none;
          }
        `}
        </style>
      </div>
      {/* <div className="svg-text"> */}
        {/* <div className="svg-style">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#5C9322" fill-opacity="1" d="M0,160L34.3,160C68.6,160,137,160,206,138.7C274.3,117,343,75,411,80C480,85,549,139,617,170.7C685.7,203,754,213,823,213.3C891.4,213,960,203,1029,218.7C1097.1,235,1166,277,1234,288C1302.9,299,1371,277,1406,266.7L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        </div> */}
      {/* <div className="marquee-w margin-help">
        <div className="marquee color-specific reverse">
          <span>
            EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE&nbsp;
          </span>
        </div>
        <div className="marquee marquee2 color-specific reverse2">
          <span>
            EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE&nbsp;
          </span>
        </div>
      </div>
      <div className="marquee-w marquee-w-2">
        <div className="marquee marquee-2">
          <span>
            timeline timeline timeline timeline timeline timeline timeline
            timeline timeline timeline&nbsp;
          </span>
        </div>
        <div className="marquee marquee2 marquee2-2">
          <span>
            timeline timeline timeline timeline timeline timeline timeline
            timeline timeline timeline&nbsp;
          </span>
        </div>
      </div> */}
      </div>
    // </div>
  );
};

export default Aboutme;
