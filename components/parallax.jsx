import React, { useEffect } from "react";
import "./parallax.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        welcomeElement.textContent = welcomeMessages[currentIndex];
        currentIndex = (currentIndex + 1) % welcomeMessages.length;
      }, 200);
      return () => clearInterval(intervalId);
    }

    const cleanupChangeWelcomeMessage = changeWelcomeMessage();

    setTimeout(() => {
      document.querySelector(".preloader").style.display = "none";
      document.getElementById("object1").classList.add("as1");
      document.getElementById("object2").classList.add("as2");
      document.getElementById("object3").classList.add("as3");
      document.getElementById("object4").classList.add("as4");
      document.getElementById("object5").classList.add("as5");
      document.getElementById("object6").classList.add("as6");
    }, 4000);
    return () => {
      cleanupChangeWelcomeMessage();
    };
  }, []);

  return (
    <div className="bggiver">
      <div
        className="preloader"
        style={{ textAlign: "center", alignItems: "center" }}
      >
        <h1 style={{ color: "white", fontSize: "10vw", marginTop: "40vh" }}>
          Welcome
        </h1>
      </div>

      <div className="container">
        <div className="scroll-down-arrow">↓</div>
        <img
          src="s-0.svg"
          alt=""
          data-value="3"
          className="object"
          id="object1"
        />
        <img
          src="s-1.svg"
          alt=""
          data-value="3"
          className="object"
          id="object2"
        />
        <img
          src="s-2.svg"
          alt=""
          data-value="3"
          className="object"
          id="object3"
        />
        <img
          src="name.svg"
          alt=""
          data-value="10"
          className="object"
          id="object4"
        />
        <img
          src="s-4.svg"
          alt=""
          data-value="2"
          className="object"
          id="object5"
        />
        <img
          src="s-5.svg"
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
