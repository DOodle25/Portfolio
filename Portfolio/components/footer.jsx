import React from "react";
import "./footer.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelopeOpen,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="bubbles">
          {Array.from({ length: 128 }).map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                "--size": `${2 + Math.random() * 4}rem`,
                "--distance": `${6 + Math.random() * 4}rem`,
                "--position": `${-5 + Math.random() * 110}%`,
                "--time": `${2 + Math.random() * 2}s`,
                "--delay": `${-1 * (2 + Math.random() * 2)}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="content">
          {/* <footer className="footer-section">
            <div className="container">
              <div className="footer-cta pt-5 pb-5">
                <div className="row">
                  <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                      <FaMapMarkerAlt />
                      <div className="cta-text">
                        <h4>Find us</h4>
                        <span>1010 Avenue, SW 54321, Chandigarh</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                      <FaPhone />
                      <div className="cta-text">
                        <h4>Call us</h4>
                        <span>9876543210</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                      <FaEnvelopeOpen />
                      <div className="cta-text">
                        <h4>Mail us</h4>
                        <span>mail@info.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-content pt-5 pb-5">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">
                      <div className="footer-logo">
                        <a href="index.html">
                          <img
                            src="https://i.ibb.co/QDy827D/ak-logo.png"
                            className="img-fluid"
                            alt="logo"
                          />
                        </a>
                      </div>
                      <div className="footer-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut consectetur
                          adipisicing elit. Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                      <div className="footer-social-icon">
                        <span>Follow us</span>
                        <a href="#">
                          <FaFacebookF className="facebook-bg" />
                        </a>
                        <a href="#">
                          <FaTwitter className="twitter-bg" />
                        </a>
                        <a href="#">
                          <FaGooglePlusG className="google-bg" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="footer-widget">
                      <div className="footer-widget-heading">
                        <h3>Useful Links</h3>
                      </div>
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Portfolio</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Our Services</a>
                        </li>
                        <li>
                          <a href="#">Expert Team</a>
                        </li>
                        <li>
                          <a href="#">Contact us</a>
                        </li>
                        <li>
                          <a href="#">Latest News</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                      <div className="footer-widget-heading">
                        <h3>Subscribe</h3>
                      </div>
                      <div className="footer-text mb-25">
                        <p>
                          Don’t miss to subscribe to our new feeds, kindly fill
                          the form below.
                        </p>
                      </div>
                      <div className="subscribe-form">
                        <form action="#">
                          <input type="text" placeholder="Email Address" />
                          <button>
                            <FaTelegramPlane />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div className="copyright-text">
                      <p>
                        Copyright © 2018, All Rights Reserved{" "}
                        <a href="https://codepen.io/anupkumar92/">Anup</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div className="footer-menu">
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">Terms</a>
                        </li>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                        <li>
                          <a href="#">Policy</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer> */}
        </div>
      </div>

      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
            {/* After reviewing this after years, I can't remember why I added this but it isn't necessary for the blob effect */}
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Footer;
