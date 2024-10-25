import React, { useState, useEffect, useCallback } from "react";
import {
  FaTimes,
  FaArrowCircleLeft,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaTerminal,
} from "react-icons/fa";
import "./socials.css";

const socialData = {
  overview: {
    link: "#",
    description:
      "I’m an active developer, programmer, and designer with over 16 years of experience in traditional art, and more than 3 years in programming and development. My journey in the tech world began with a passion for creating and problem-solving, which quickly transitioned from art to coding. Over the past few years, I’ve honed my skills in web development, building dynamic, responsive applications, and experimenting with various technologies. I approach each project with creativity and precision, always seeking new ways to blend my artistic background with technical innovation.",
    linkText: "Learn More",
    linkUrl: "#",
  },
  github: {
    link: "https://github.com/DOodle25",
    description:
      "Explore my GitHub, where I have built up a diverse portfolio of 25+ repositories over the past 1+ years. With more than 1,000 contributions spanning across multiple projects, I’m constantly refining my skills in development, hosting projects, and experimenting with new technologies. Some of my projects are hosted with custom domain names using GitHub Pages, offering real-time demonstrations of my work. My repository covers everything from full-stack web applications to creative coding experiments, making it a hub for open-source enthusiasts and collaborators.",
    linkText: "github.com/DOodle25",
    linkUrl: "https://github.com/DOodle25",
  },
  linkedin: {
    link: "https://www.linkedin.com/in/dipen-patel-792296260/",
    description:
      "Connect with me on LinkedIn, where I actively engage with over 1,800+ followers and generate more than 10,000 impressions through my posts and connections. I share updates on my development work, programming insights, and design projects, making it a great platform to stay updated on my latest professional endeavors. Whether you’re looking to connect, collaborate, or follow my journey as a developer and designer, LinkedIn offers a window into my active work and industry involvement. Feel free to connect with me, and let's exchange ideas and opportunities. LinkedIn.",
    linkText: "linkedin.com/in/dipen-patel",
    linkUrl: "https://www.linkedin.com/in/dipen-patel-792296260/",
  },
  leetcode: {
    link: "https://leetcode.com/DIPEN125",
    description:
      "While I’ve solved over 150+ coding challenges on LeetCode, my approach emphasizes depth over quantity. I focus on tackling each problem from multiple angles, often writing and testing code locally to explore the most efficient solutions. Though the number may seem modest, my commitment to honing my problem-solving skills shines through in the quality of my work. I use LeetCode as a tool to deepen my understanding of algorithms and data structures, helping me apply these skills effectively in real-world development.",
    linkText: "leetcode.com/DIPEN125",
    linkUrl: "https://leetcode.com/DIPEN125",
  },
  PersonalWebsite: {
    link: "http://www.alynor.wiki",
    description:
      "My personal website is an evolving showcase of my ongoing projects, creative design work, and coding experiments. I continuously update the site with new content, including personal projects and artwork, making it a dynamic hub for everything I create. You can explore my portfolio through interactive sections like “Port 1,” “Port 2,” and “Port 3,” each leading to different hosted projects with detailed descriptions and live demos. Whether you’re interested in my development work or my design artistry, you’ll find plenty of material to explore.",
    linkText: "Visit My Site",
    linkUrl: "http://www.alynor.wiki",
  },
};

const Socials = () => {
  const [activeCard, setActiveCard] = useState("overview");
  const [formActive, setFormActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoCycle, setAutoCycle] = useState(true);

  useEffect(() => {
    if (!autoCycle) return;

    const cards = [
      // "overview",
      "github",
      "linkedin",
      "leetcode",
      "PersonalWebsite",
    ];
    const intervalId = setInterval(() => {
      setActiveCard((prevCard) => {
        const currentIndex = cards.indexOf(prevCard);
        const nextIndex = (currentIndex + 1) % cards.length;
        return cards[nextIndex];
      });
    }, 1800);

    return () => clearInterval(intervalId);
  }, [autoCycle]);

  const handleCardToggle = useCallback(
    (id) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveCard(id);
      setAutoCycle(false);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  const handleContactToggle = useCallback(() => {
    setFormActive((prevFormActive) => !prevFormActive);
  }, []);

  const handleContactClick = () => {
    const link = socialData[activeCard].link || "#";
    window.open(link, "_blank");
  };

  const { description, linkText, linkUrl } = socialData[activeCard];

  const isWhiteIcon = ["github", "leetcode"].includes(activeCard);

  return (
    <div className="cards" style={{ marginTop: "15px" }}>
      <div
        className="contact"
        onClick={handleContactClick}
        role="button"
        tabIndex="0"
      >
        Contact Me
      </div>
      <div className={`contact-form ${formActive ? "active" : ""}`}>
        <a
          href="#"
          className="close"
          onClick={(e) => {
            e.preventDefault();
            handleContactToggle();
          }}
          role="button"
          tabIndex="0"
        >
          <FaTimes />
        </a>
        <form>
          <div className="control">
            <input type="text" id="name" />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="control">
            <input type="text" id="email" />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="control">
            <input type="text" id="url" />
            <label htmlFor="url">Website</label>
          </div>
          <div className="control">
            <textarea id="message" />
            <label htmlFor="message">Message</label>
          </div>
          <div className="control submit">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
      {[
        // "overview",
        "github",
        "linkedin",
        "leetcode",
        "PersonalWebsite",
      ].map((card) => (
        <div
          key={card}
          className={`card ${activeCard === card ? "active" : ""}`}
          id={card}
        >
          <a
            className="card-toggle"
            onClick={() => handleCardToggle(card)}
            role="button"
            tabIndex="0"
          >
            {card === "overview" && (
              <FaArrowCircleLeft
                className={`icon ${isWhiteIcon ? "white" : "black"}`}
              />
            )}
            {card === "github" && (
              <FaGithub className={`icon ${isWhiteIcon ? "white" : ""}`} />
            )}
            {card === "linkedin" && (
              <FaLinkedin className={`icon ${isWhiteIcon ? "white" : ""}`} />
            )}
            {card === "leetcode" && (
              <FaCode className={`icon ${isWhiteIcon ? "white" : ""}`} />
            )}
            {card === "PersonalWebsite" && (
              <FaTerminal className={`icon ${isWhiteIcon ? "white" : ""}`} />
            )}
          </a>
          <div className="card-content">
            <div className="row">
              <div className="left col">
                <h2>
                  My{" "}
                  <strong>
                    {card === "PersonalWebsite"
                      ? "Website"
                      : card.charAt(0).toUpperCase() + card.slice(1)}
                  </strong>
                </h2>
                <p>{description}</p>
                <br />
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-section"
                >
                  {linkText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Socials;
