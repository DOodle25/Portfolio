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
            Pursued a <span className="style1">Bachelor's degree</span> in{' '}
          <span className="style1">Computer Science</span>. Achieved an SGPA of{' '}
          <span className="style1">8.60</span>. During this period, worked on various
          projects and participated in several hackathons. Gained knowledge in
          important subjects such as <div className='Skill-holder'>
            <span className="style2">DSA</span> <span className="style2">Operating Systems</span>{' '}
            <span className="style2">Discrete Mathematics</span>{' '}
            <span className="style2">Software Development</span>
          </div>
            </p>
            {/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              reiciendis deserunt doloribus consequatur, laudantium odio dolorum
              laboriosam.
            </p>
            <img src="http://placehold.it/1000x500" alt="Graphic" />
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              reiciendis deserunt doloribus consequatur, laudantium odio dolorum
              laboriosam.
            </p>
            <img src="http://placehold.it/1000x500" alt="Graphic" />
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              reiciendis deserunt doloribus consequatur, laudantium odio dolorum
              laboriosam.
            </p>
            <img src="http://placehold.it/1000x500" alt="Graphic" />
          </div>
        </div>
        <div className="demo-card demo-card--step5">
          <div className="head odd">
            <div className="number-box">
              <span>05</span>
            </div>
            <h2>
              <span className="small">2012 -</span> Traditional Art
            </h2>
          </div>
          <div className="body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              reiciendis deserunt doloribus consequatur, laudantium odio dolorum
              laboriosam.
            </p>
            <img src="http://placehold.it/1000x500" alt="Graphic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
