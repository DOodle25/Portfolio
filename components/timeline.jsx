import React from 'react';
 import './timeline.css';

const Timeline = () => {
  return (
    <ul className="timeline">
      {/* Item 1 */}
      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="flag">Parul University</span>
            <span className="time-wrapper"><span className="time">2021 - 2024 <span className='style3'>Education</span></span></span>
          </div>
          <div className="desc">
            Pursued a <span className='style1'>Bachelor's degree</span> in <span className='style1'>Computer Science</span>. Achieved an SGPA of <span className='style1'>8.60</span>. During this period, worked on various projects and participated in several hackathons. Gained knowledge in important subjects such as <br /><span className='style2'>DSA</span>  <span className='style2'>Operating Systems</span>  <span className='style2'>Discrete Mathematics</span>  <span className='style2'>Software Development</span>
          </div>
        </div>
      </li>
  {/* Item 2 */}
  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
        <span className="flag">National-Level Hackathon</span>
        <span className="time-wrapper"><span className="time"><span className='style3'>Project</span> 2024</span></span>
      </div>
      <div className="desc">
        Working on a comprehensive Library Management System. Additionally, developed a <span className='style1'>Code Canvas</span> project that enabled real-time code collaboration and visualization.
      </div>
    </div>
  </li>

  {/* Item 3 */}
  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="flag">Freelance Projects</span>
        <span className="time-wrapper"><span className="time">2018 - 2021</span></span>
      </div>
      <div className="desc">
        Developing a <span className='style1'>District Integrated Dashboard</span> for local government administration, enhancing data management and reporting capabilities. Solutions were provided for architects, car dealerships, schools, designers, and photographers.
      </div>
    </div>
  </li>

  {/* Item 4 */}
  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
        <span className="flag">MSU</span>
        <span className="time-wrapper"><span className="time">2016 - 2018</span></span>
      </div>
      <div className="desc">
        Earned a <span className='style1'>B.Design degree</span> in <span className='style1'>Design</span> from MSU, focusing on creative and technical aspects of design, which laid the foundation for my interest and skills in both design and development.
      </div>
    </div>
  </li>

  {/* Item 5 */}
  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="flag">Hackathons</span>
        <span className="time-wrapper"><span className="time"><span className='style3'>Competitions</span> 2024</span></span>
      </div>
      <div className="desc">
        Participated in various hackathons including <span className='style1'>Odoo Combat 2024</span>, <span className='style1'>MLH</span>, and <span className='style1'>AllIndiaHackathon</span>. Gained valuable experience and recognition through these events, showcasing my skills and innovation.
      </div>
    </div>
  </li>

  {/* Item 6 */}
  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
        <span className="flag">Open Source & Social Media</span>
        <span className="time-wrapper"><span className="time">Ongoing</span></span>
      </div>
      <div className="desc">
        Actively contribute to open-source projects on GitHub, engage with the tech community, and maintain an active LinkedIn profile. Additionally, I dedicate time daily to design and drawing, continuously honing my creative skills.
      </div>
    </div>
  </li>
</ul>
  );
};

export default Timeline;
