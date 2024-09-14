import React, { useState, useEffect, useRef } from "react";
import "./Aboutme.css";
import {
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaNewspaper,
  FaBehance,
} from "react-icons/fa";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GitHubCalendar from "react-github-calendar";

// Import all images
import subtitleImgGreen from "./assets/images/subtitle-img-green.png";
import photo from "../src/assets/images/s-6.svg";
const roles = ["Developer", "Designer", "Programmer"];

const Aboutme = () => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const photoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the image
    gsap.fromTo(
      photoRef.current,
      {
        x: "-100vw",
        opacity: 1,
        rotation: 720,
      },
      {
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: photoRef.current,
          start: "top 100%",
          end: "top 80%",
          scrub: true,
        },
      }
    );

    // Role switcher animation
    const interval = setInterval(() => {
      setActiveRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

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
            {/* Add your social links here */}
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
          marginLeft: '10px',
          marginRight: '10px',
          alignItems: 'center',
          overflow: 'visible',
          fontFamily: 'Arial, sans-serif', // Change to your desired font family
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className="github-calendar-2022">
          <GitHubCalendar
            username="DOodle25"
            year={2022}
            hideColorLegend
            transformData={selectDateRange}
            labels={{
              totalCount: '',
            }}
            width={1200}
            theme={{
              light: ['hsl(86, 54%, 70%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)'],
              dark: ['hsl(86, 54%, 70%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)'],
            }}
            style={{ marginRight: '4px'}}
          />
        </div>
        
        <GitHubCalendar
          username="DOodle25"
          year={2023}
          hideColorLegend
          labels={{
            totalCount: '',
          }}
          width={1200}
          theme={{
            light: ['hsl(86, 54%, 70%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)'],
            dark: ['hsl(86, 54%, 70%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)', 'hsl(86, 45%, 54%)'],
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
    <div className="marquee-w margin-help">
      <div className="marquee color-specific ">
          <span>EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE&nbsp;</span>
      </div>
      <div className="marquee marquee2 color-specific">
          <span>EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE&nbsp;</span>
      </div>
    </div>
    <div className="marquee-w marquee-w-2">
      <div className="marquee marquee-2">
          <span>timeline timeline timeline timeline timeline timeline timeline timeline timeline timeline timeline timeline timeline&nbsp;</span>
      </div>
      <div className="marquee marquee2 marquee2-2">
          <span>timeline timeline timeline timeline timeline timeline timeline timeline timeline timeline timeline timeline timeline&nbsp;</span>
      </div>
    </div>
    </div>
  );
};

export default Aboutme;
