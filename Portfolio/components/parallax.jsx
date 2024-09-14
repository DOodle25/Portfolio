import React, { useRef, useEffect, useState } from "react";
import "./parallax.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

gsap.registerPlugin(ScrollTrigger);


const Parallax = () => {
  useEffect(() => {
    const welcomeMessages = [
      "Bienvenido",
      "Bienvenue",
      "Willkommen",
      "Benvenuto",
      "Bem-vindo",
      "Welkom",
      "Добро пожаловать",
      "欢迎",
      "ようこそ",
      "환영합니다",
      "أهلا وسهلا",
      "स्वागत है",
      "Καλώς ήρθατε",
      "ברוך הבא",
      "Hoş geldiniz",
      "Välkommen",
      "Velkommen",
      "Velkommen",
      "Tervetuloa",
      "Witaj",
      "Vítejte",
      "Üdvözöljük",
      "Bun venit",
      "ยินดีต้อนรับ",
      "Chào mừng",
    ];

    function changeWelcomeMessage() {
      const welcomeElement = document.querySelector(".preloader h1");
      if (welcomeElement) {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
          welcomeElement.textContent = welcomeMessages[currentIndex];
          currentIndex = (currentIndex + 1) % welcomeMessages.length;
        }, 200); // Change message every 2 seconds

        // Return a cleanup function to clear the interval
        return () => clearInterval(intervalId);
      }
    }

    const cleanupChangeWelcomeMessage = changeWelcomeMessage();

    function parallax(e) {
      document.querySelectorAll(".object").forEach(function (move) {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

    document.addEventListener("mousemove", parallax);

    const imagesLoadedHandler = () => {
      let imagesLoaded = 0;
      const images = document.querySelectorAll("img");
      images.forEach(function (img) {
        img.addEventListener("load", () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            setTimeout(() => {
              document.querySelector(".preloader").style.display = "none";
              document.getElementById("object1").classList.add("as1");
              document.getElementById("object2").classList.add("as2");
              document.getElementById("object3").classList.add("as3");
              document.getElementById("object4").classList.add("as4");
              document.getElementById("object5").classList.add("as5");
              document.getElementById("object6").classList.add("as6");
            }, 10000); // 1 seconds in milliseconds
          }
        });
        if (img.complete) {
          imagesLoaded++;
        }
      });
      if (imagesLoaded === images.length) {
        setTimeout(() => {
          document.querySelector(".preloader").style.display = "none";
          document.getElementById("object1").classList.add("as1");
          document.getElementById("object2").classList.add("as2");
          document.getElementById("object3").classList.add("as3");
          document.getElementById("object4").classList.add("as4");
          document.getElementById("object5").classList.add("as5");
          document.getElementById("object6").classList.add("as6");
        }, 10000); // 10 seconds in milliseconds
      }
    };

    window.addEventListener("load", imagesLoadedHandler());


    // GSAP animation for scroll
    gsap.fromTo(
      ".scroll-down-arrow",
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: ".container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".scroll-down-text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );


    

    // Cleanup function to remove event listeners and intervals
    return () => {
      document.removeEventListener("mousemove", parallax);
      window.removeEventListener("load", imagesLoadedHandler());
      cleanupChangeWelcomeMessage();
    };
  }, []);


  return (
    <div>
      <div
        className="preloader"
        style={{ textAlign: "center", alignItems: "center" }}
      >
        <h1 style={{ color: "white", fontSize: "10vw", marginTop: "40vh" }}>
          Welcome
        </h1>
      </div>
      {/* <div className="banner-section">
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa fa-github"></i>
        </a>
      </div> */}
      {/* <div className="container">
        <img src="images/bk.svg" alt="" style={{ width: "105%" }} />
      </div> */}
      <div className="container">
        <div className="scroll-down-arrow">↓</div>
        <div className="scroll-down-text">Welcome</div>
        <img
          src="../src/assets/images/s-0.svg"
          // src="https://drive.google.com/thumbnail?id=1aFfsfxVSgeofszsZqcWxuIO0QflP5UGV"
          alt=""
          data-value="3"
          className="object"
          id="object1"
        />
        <img
          src="../src/assets/images/s-1.svg"
          // src="https://drive.google.com/thumbnail?id=1fuaB1PQh_WGYslKwaJ_TvvV-sbYBEbxO"
          alt=""
          data-value="3"
          className="object"
          id="object2"
        />
        <img
          src="../src/assets/images/s-2.svg"
          alt=""
          data-value="3"
          className="object"
          id="object3"
        />
        <img
          src="../src/assets/images/name.svg"
          alt=""
          data-value="10"
          className="object"
          id="object4"
        />
        <img
          src="../src/assets/images/s-4.svg"
          alt=""
          data-value="2"
          className="object"
          id="object5"
        />
        <img
          src="../src/assets/images/s-5.svg"
          alt=""
          data-value="2"
          className="object"
          id="object6"
        />
      </div>
      <div className="content-section"></div>
    </div>
  );
};

export default Parallax;
