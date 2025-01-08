import React from 'react';
import './footer2.css'; // Updated CSS file

const Footer = () => {
  return (
    <>
      <body>
        <div className="footer-main"></div>
        <footer className="footer-container">
          <div className="footer-waves">
            <div className="footer-wave" id="footer-wave1"></div>
          </div>
          <ul className="footer-social-icon">
            <li>
              <a
                className="footer-icon fab fa-instagram"
                href="https://www.instagram.com/iamjakariya/"
              ></a>
            </li>
            <li>
              <a
                className="footer-icon fab fa-youtube"
                href="https://www.youtube.com/@recklet"
              ></a>
            </li>
            <li>
              <a
                className="footer-icon fab fa-facebook-f"
                href="https://www.facebook.com/ReckletGaming/"
              ></a>
            </li>
            <li>
              <a
                className="footer-icon fab fa-telegram"
                href="https://telegram.me/reckletdevelopers"
              ></a>
            </li>
          </ul>
          <ul className="footer-menu">
            <li>
              <a href="/index.html">Home</a>
            </li>
            <li>
              <a href="/details/about-contact-us.html">About Us</a>
            </li>
            <li>
              <a href="/details/privacypolicy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="/details/terms-and-conditions.html">
                Terms & Conditions
              </a>
            </li>
          </ul>
          <p>Ⓒ2023 StroZone Developer | All Rights Reserved</p>
        </footer>
      </body>
    </>
  );
};

export default Footer;
