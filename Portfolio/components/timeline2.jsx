import React from 'react';
import './timeline2.css';

const Timeline = () => {
  const timelineData = [
    {
      title: 'Parul University',
      date: '2021 - 2024',
      category: 'Education',
      description: (
        <><br/>Pursued a <span className="style1">Bachelor's degree</span> in{' '}
          <span className="style1">Computer Science</span>. Achieved an SGPA of{' '}
          <span className="style1">8.60</span>. During this period, worked on various
          projects and participated in several hackathons. Gained knowledge in
          important subjects such as <br /><br/>
          <div className='Skill-holder'>
            <span className="style2">DSA</span> <span className="style2">Operating Systems</span>{' '}
            <span className="style2">Discrete Mathematics</span>{' '}
            <span className="style2">Software Development</span>
          </div>
        </>
      ),
    },
    {
      title: 'National-Level Hackathon',
      date: 'Project 2024',
      category: 'Project',
      description: (
        <><br/>
          Working on a comprehensive Library Management System. Additionally,
          developed a <span className="style1">Code Canvas</span> project that
          enabled real-time code collaboration and visualization.<br/><br/>
          <div className='Skill-holder'>
            <span className="style2">DSA</span> <span className="style2">Operating Systems</span>{' '}
            <span className="style2">Discrete Mathematics</span>{' '}
            <span className="style2">Software Development</span>
          </div>
        </>
      ),
    },
    {
      title: 'Freelance Projects',
      date: '2018 - 2021',
      category: 'Experience',
      description: (
        <><br/>
          Developing a <span className="style1">District Integrated Dashboard</span> for local
          government administration, enhancing data management and reporting
          capabilities. Solutions were provided for architects, car dealerships,
          schools, designers, and photographers.<br/>
        </>
      ),
    },
    {
      title: 'MSU',
      date: '2016 - 2018',
      category: 'Education',
      description: (
        <><br/>
          Earned a <span className="style1">B.Design degree</span> in{' '}
          <span className="style1">Design</span> from MSU, focusing on creative and technical
          aspects of design, which laid the foundation for my interest and skills in both<br/>
          design and development.
        </>
      ),
    },
    {
      title: 'Hackathons',
      date: 'Competitions 2024',
      category: 'Competitions',
      description: (
        <><br/>
          Participated in various hackathons including <span className="style1">Odoo Combat 2024</span>,{' '}
          <span className="style1">MLH</span>, and{' '}
          <span className="style1">AllIndiaHackathon</span>. Gained valuable experience and
          recognition through these events, showcasing my skills and innovation.<br/>
        </>
      ),
    },
    {
      title: 'Open Source & Social Media',
      date: 'Ongoing',
      category: 'Activity',
      description: (
        <><br/>
          Actively contribute to open-source projects on GitHub, engage with the tech
          community, and maintain an active LinkedIn profile. Additionally, I dedicate time
          daily to design and drawing, continuously honing my creative skills.<br/>
        </>
      ),
    },
  ];

  return (
    <div className="timeline">
      <div className="outer">
        {timelineData.map((item, index) => (
          <div className="card" key={index}>
            <div className="info">
              <section class="wrapper">
                <div className="top">{item.title}</div>
                <div className="bottom" aria-hidden="true">{item.title}</div>
              </section>
              <h3 className="title"></h3>
              <h4 className="date"><spam className="date-style">{item.date}</spam></h4>
              <h5 className="category"><spam className="category-style">{item.category}</spam></h5>
              <p className="mainContent"><spam className="mainContent-style">{item.description}</spam></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
