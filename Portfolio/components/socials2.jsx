import React, { useState } from "react";
import { FaTimes, FaArrowCircleLeft, FaDribbble, FaBehance, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./socials2.css";

const Socials = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [formActive, setFormActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardToggle = (id) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setActiveCard(id);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Adjust this timeout based on your CSS transition duration
  };

  const handleContactToggle = () => {
    setFormActive(!formActive);
  };

  return (
    <div className="cards">
      <div className="contact" onClick={handleContactToggle}>Contact Me</div>
      <div className={`contact-form ${formActive ? 'active' : ''}`}>
        <a href="#" className="close" onClick={(e) => { e.preventDefault(); handleContactToggle(); }}>
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
            <input type="submit" />
          </div>
        </form>
      </div>
      <div className={`card ${activeCard === 'overview' ? 'active' : ''}`} id="overview">
        <a className="card-toggle" onClick={() => handleCardToggle('overview')}>
          <FaArrowCircleLeft />
        </a>
        <div className="card-content">
          <div className="row">
            <div className="left col">
              <h2>
                Personal <strong>Social Card</strong>
              </h2>
              <p>
                Click one of the social icons below to switch between card or
                click Contact Me link to show the contact form card. <br />
                <em>
                  Make sure you're running this experiment in the latest Chrome
                  browser.
                </em>
              </p>
            </div>
            <div className="right col"></div>
          </div>
        </div>
      </div>
      <div className={`card ${activeCard === 'dribbble' ? 'active' : ''}`} id="dribbble">
        <a className="card-toggle" onClick={() => handleCardToggle('dribbble')}>
          <FaDribbble />
        </a>
        <div className="card-content">
          <div className="row">
            <div className="left col">
              <h2>
                My <strong>Dribbble</strong>
              </h2>
              <p>
                In ipsa reiciendis, eligendi labore dolores delectus facere
                perferendis ex architecto reprehenderit maxime exercitationem,
                libero itaque, at voluptatibus! Sit obcaecati repellat incidunt
                accusantium voluptas suscipit a consequuntur repudiandae nulla
                eius.
              </p>
            </div>
            <div className="right col">
              <img
                src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`card ${activeCard === 'behance' ? 'active' : ''}`} id="behance">
        <a className="card-toggle" onClick={() => handleCardToggle('behance')}>
          <FaBehance />
        </a>
        <div className="card-content">
          <div className="row">
            <div className="left col">
              <h2>
                My <strong>Behance</strong>
              </h2>
              <p>
                Quia fugit animi, iure error veritatis? Ipsa quis, deserunt
                illum culpa ab id mollitia nesciunt commodi aut dolores vero
                ipsam ut minima neque nam excepturi corporis obcaecati
                consequuntur accusantium laborum!
              </p>
            </div>
            <div className="right col">
              <img
                src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`card ${activeCard === 'linkedin' ? 'active' : ''}`} id="linkedin">
        <a className="card-toggle" onClick={() => handleCardToggle('linkedin')}>
          <FaLinkedin />
        </a>
        <div className="card-content">
          <div className="row">
            <div className="left col">
              <h2>
                My <strong>LinkedIn</strong>
              </h2>
              <p>
                Voluptas aliquam, perferendis laboriosam, cumque, autem vero
                pariatur dolorum tempora sint hic laborum distinctio suscipit
                magnam, porro provident maxime labore. Porro vel error quaerat
                consequatur sapiente? Nostrum at voluptatibus necessitatibus.
              </p>
            </div>
            <div className="right col">
              <img
                src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`card ${activeCard === 'twitter' ? 'active' : ''}`} id="twitter">
        <a className="card-toggle" onClick={() => handleCardToggle('twitter')}>
          <FaTwitter />
        </a>
        <div className="card-content">
          <div className="row">
            <div className="left col">
              <h2>
                My <strong>Twitter</strong>
              </h2>
              <p>
                Fugit veniam, animi architecto doloribus veritatis vitae sint
                doloremque possimus quae. Pariatur libero, veniam voluptatibus
                alias distinctio qui nostrum debitis voluptate amet hic repellat
                officiis nam quos vel doloremque praesentium.
              </p>
            </div>
            <div className="right col">
              <img
                src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
