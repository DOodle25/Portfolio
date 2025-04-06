// import React, { useEffect } from "react";
// import "./parallax.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Parallax = () => {
//   useEffect(() => {
//     const welcomeMessages = [
//       "Bienvenido",
//       "Bienvenue",
//       "Willkommen",
//       "Benvenuto",
//       "Bem-vindo",
//       "Welkom",
//       "Добро пожаловать",
//       "欢迎",
//       "ようこそ",
//       "환영합니다",
//       "أهلا وسهلا",
//       "स्वागत है",
//       "Καλώς ήρθατε",
//       "ברוך הבא",
//       "Hoş geldiniz",
//       "Välkommen",
//       "Velkommen",
//       "Tervetuloa",
//       "Witaj",
//       "Vítejte",
//       "Üdvözöljük",
//       "Bun venit",
//       "ยินดีต้อนรับ",
//       "Chào mừng",
//     ];

//     function changeWelcomeMessage() {
//       const welcomeElement = document.querySelector(".preloader h1");
//       let currentIndex = 0;

//       const intervalId = setInterval(() => {
//         welcomeElement.textContent = welcomeMessages[currentIndex];
//         currentIndex = (currentIndex + 1) % welcomeMessages.length;
//       }, 200);
//       return () => clearInterval(intervalId);
//     }

//     const cleanupChangeWelcomeMessage = changeWelcomeMessage();

//     setTimeout(() => {
//       document.querySelector(".preloader").style.display = "none";
//       document.getElementById("object1").classList.add("as1");
//       document.getElementById("object2").classList.add("as2");
//       document.getElementById("object3").classList.add("as3");
//       document.getElementById("object4").classList.add("as4");
//       document.getElementById("object5").classList.add("as5");
//       document.getElementById("object6").classList.add("as6");
//     }, 4000);
//     return () => {
//       cleanupChangeWelcomeMessage();
//     };
//   }, []);

//   return (
//     <div className="bggiver">
//       <div
//         className="preloader"
//         style={{ textAlign: "center", alignItems: "center" }}
//       >
//         <h1 style={{ color: "white", fontSize: "10vw", marginTop: "40vh" }}>
//           Welcome
//         </h1>
//       </div>

//       <div className="container">
//         <div className="scroll-down-arrow">↓</div>
//         <img
//           src="s-0.svg"
//           alt=""
//           data-value="3"
//           className="object"
//           id="object1"
//         />
//         <img
//           src="s-1.svg"
//           alt=""
//           data-value="3"
//           className="object"
//           id="object2"
//         />
//         <img
//           src="s-2.svg"
//           alt=""
//           data-value="3"
//           className="object"
//           id="object3"
//         />
//         <img
//           src="name.svg"
//           alt=""
//           data-value="10"
//           className="object"
//           id="object4"
//         />
//         <img
//           src="s-4.svg"
//           alt=""
//           data-value="2"
//           className="object"
//           id="object5"
//         />
//         <img
//           src="s-5.svg"
//           alt=""
//           data-value="2"
//           className="object"
//           id="object6"
//         />
//       </div>
//       <div className="content-section"></div>
//     </div>
//   );
// };

// export default Parallax;








// import React, { useEffect, useState, useRef } from "react";
// import "./parallax.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Parallax = () => {
//   const [loadedImages, setLoadedImages] = useState(0);
//   const [totalImages, setTotalImages] = useState(0);
//   const [minDisplayTimePassed, setMinDisplayTimePassed] = useState(false);
//   const preloaderRef = useRef(null);
  
//   const imageUrls = [
//     "s-0.svg",
//     "s-1.svg",
//     "s-2.svg",
//     "name.svg",
//     "s-4.svg",
//     "s-5.svg"
//   ];

//   useEffect(() => {
//     setTotalImages(imageUrls.length);
    
//     // Load all images and track progress
//     imageUrls.forEach(url => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         setLoadedImages(prev => prev + 1);
//       };
//       img.onerror = () => {
//         console.error(`Failed to load image: ${url}`);
//         setLoadedImages(prev => prev + 1); // Count even if failed to load
//       };
//     });

//     // Set minimum display time (10 seconds)
//     const minDisplayTimer = setTimeout(() => {
//       setMinDisplayTimePassed(true);
//     }, 10000);

//     return () => clearTimeout(minDisplayTimer);
//   }, []);

//   useEffect(() => {
//     const welcomeMessages = [
//       "Bienvenido", "Bienvenue", "Willkommen", "Benvenuto", "Bem-vindo",
//       "Welkom", "Добро пожаловать", "欢迎", "ようこそ", "환영합니다",
//       "أهلا وسهلا", "स्वागत है", "Καλώς ήρθατε", "ברוך הבא", "Hoş geldiniz",
//       "Välkommen", "Velkommen", "Tervetuloa", "Witaj", "Vítejte",
//       "Üdvözöljük", "Bun venit", "ยินดีต้อนรับ", "Chào mừng"
//     ];

//     const welcomeElement = document.querySelector(".preloader h1");
//     let currentIndex = 0;
//     let intervalId;

//     // Only start changing messages if preloader is visible
//     if (preloaderRef.current) {
//       intervalId = setInterval(() => {
//         welcomeElement.textContent = welcomeMessages[currentIndex];
//         currentIndex = (currentIndex + 1) % welcomeMessages.length;
//       }, 200);
//     }

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     // Hide preloader when both conditions are met:
//     // 1. Minimum display time has passed (10 seconds)
//     // 2. All images are loaded
//     if (minDisplayTimePassed && loadedImages === totalImages && totalImages > 0) {
//       gsap.to(preloaderRef.current, {
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out",
//         onComplete: () => {
//           if (preloaderRef.current) {
//             preloaderRef.current.style.display = "none";
//           }
//           // Activate parallax elements
//           document.getElementById("object1")?.classList.add("as1");
//           document.getElementById("object2")?.classList.add("as2");
//           document.getElementById("object3")?.classList.add("as3");
//           document.getElementById("object4")?.classList.add("as4");
//           document.getElementById("object5")?.classList.add("as5");
//           document.getElementById("object6")?.classList.add("as6");
//         }
//       });
//     }
//   }, [minDisplayTimePassed, loadedImages, totalImages]);

//   const loadingProgress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

//   return (
//     <div className="bggiver">
//       <div
//         className="preloader"
//         ref={preloaderRef}
//         style={{ textAlign: "center", alignItems: "center" }}
//       >
//         <h1 style={{ color: "white", fontSize: "10vw", marginTop: "40vh" }}>
//           Welcome
//         </h1>
//         <div className="loading-bar-container">
//           <div 
//             className="loading-bar"
//             style={{ width: `${loadingProgress}%` }}
//           ></div>
//           <div className="loading-text">
//             Loading images: {loadedImages}/{totalImages}
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="scroll-down-arrow">↓</div>
//         <img
//           src="s-0.svg"
//           alt=""
//           data-value="3"
//           className="object"
//           id="object1"
//         />
//         <img
//           src="s-1.svg"
//           alt=""
//           data-value="3"
//           className="object"
//           id="object2"
//         />
//         <img
//           src="s-2.svg"
//           alt=""
//           data-value="3"
//           className="object"
//           id="object3"
//         />
//         <img
//           src="name.svg"
//           alt=""
//           data-value="10"
//           className="object"
//           id="object4"
//         />
//         <img
//           src="s-4.svg"
//           alt=""
//           data-value="2"
//           className="object"
//           id="object5"
//         />
//         <img
//           src="s-5.svg"
//           alt=""
//           data-value="2"
//           className="object"
//           id="object6"
//         />
//       </div>
//       <div className="content-section"></div>
//     </div>
//   );
// };

// export default Parallax;










// import React, { useEffect, useState, useRef } from "react";
// import "./parallax.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Parallax = () => {
//   const [loadedImages, setLoadedImages] = useState(0);
//   const [totalImages, setTotalImages] = useState(0);
//   const [minDisplayTimePassed, setMinDisplayTimePassed] = useState(false);
//   const preloaderRef = useRef(null);
//   const maskRef = useRef(null);
  
//   const imageUrls = [
//     "s-0.svg",
//     "s-1.svg",
//     "s-2.svg",
//     "name.svg",
//     "s-4.svg",
//     "s-5.svg"
//   ];

//   useEffect(() => {
//     setTotalImages(imageUrls.length);
    
//     // Load all images and track progress
//     imageUrls.forEach(url => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         setLoadedImages(prev => prev + 1);
//       };
//       img.onerror = () => {
//         console.error(`Failed to load image: ${url}`);
//         setLoadedImages(prev => prev + 1);
//       };
//     });

//     // Set minimum display time (10 seconds)
//     const minDisplayTimer = setTimeout(() => {
//       setMinDisplayTimePassed(true);
//     }, 10000);

//     return () => clearTimeout(minDisplayTimer);
//   }, []);

//   useEffect(() => {
//     const welcomeMessages = [
//       "Bienvenido", "Bienvenue", "Willkommen", "Benvenuto", "Bem-vindo",
//       "Welkom", "Добро пожаловать", "欢迎", "ようこそ", "환영합니다",
//       "أهلا وسهلا", "स्वागत है", "Καλώς ήρθατε", "ברוך הבא", "Hoş geldiniz",
//       "Välkommen", "Velkommen", "Tervetuloa", "Witaj", "Vítejte",
//       "Üdvözöljük", "Bun venit", "ยินดีต้อนรับ", "Chào mừng"
//     ];

//     const welcomeElement = document.querySelector(".preloader-content h1");
//     let currentIndex = 0;
//     let intervalId;

//     if (preloaderRef.current) {
//       intervalId = setInterval(() => {
//         welcomeElement.textContent = welcomeMessages[currentIndex];
//         currentIndex = (currentIndex + 1) % welcomeMessages.length;
//       }, 200);
//     }

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     if (minDisplayTimePassed && loadedImages === totalImages && totalImages > 0) {
//       // Animate the mask to slide up and morph shape
//       gsap.to(maskRef.current, {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//         duration: 1.5,
//         ease: "power2.inOut",
//         onComplete: () => {
//           if (preloaderRef.current) {
//             preloaderRef.current.style.display = "none";
//           }
//           document.getElementById("object1")?.classList.add("as1");
//           document.getElementById("object2")?.classList.add("as2");
//           document.getElementById("object3")?.classList.add("as3");
//           document.getElementById("object4")?.classList.add("as4");
//           document.getElementById("object5")?.classList.add("as5");
//           document.getElementById("object6")?.classList.add("as6");
//         }
//       });

//       // Animate the content to fade out as it slides up
//       gsap.to(".preloader-content", {
//         y: -100,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.inOut"
//       });
//     }
//   }, [minDisplayTimePassed, loadedImages, totalImages]);

//   const loadingProgress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

//   return (
//     <div className="bggiver">
//       <div
//         className="preloader"
//         ref={preloaderRef}
//       >
//         <div className="preloader-mask" ref={maskRef}>
//           <div className="preloader-content">
//             <h1>Welcome</h1>
//             <div className="loading-bar-container">
//               <div 
//                 className="loading-bar"
//                 style={{ width: `${loadingProgress}%` }}
//               ></div>
//               <div className="loading-text">
//                 Loading images: {loadedImages}/{totalImages}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="scroll-down-arrow">↓</div>
//         <img src="s-0.svg" alt="" data-value="3" className="object" id="object1" />
//         <img src="s-1.svg" alt="" data-value="3" className="object" id="object2" />
//         <img src="s-2.svg" alt="" data-value="3" className="object" id="object3" />
//         <img src="name.svg" alt="" data-value="10" className="object" id="object4" />
//         <img src="s-4.svg" alt="" data-value="2" className="object" id="object5" />
//         <img src="s-5.svg" alt="" data-value="2" className="object" id="object6" />
//       </div>
//       <div className="content-section"></div>
//     </div>
//   );
// };

// export default Parallax;















// import React, { useEffect, useState, useRef } from "react";
// import "./parallax.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Parallax = () => {
//   const [loadedImages, setLoadedImages] = useState(0);
//   const [totalImages, setTotalImages] = useState(0);
//   const [readyToExit, setReadyToExit] = useState(false);
//   const preloaderRef = useRef(null);
//   const maskRef = useRef(null);
//   const startTimeRef = useRef(Date.now());
  
//   const imageUrls = [
//     "s-0.svg",
//     "s-1.svg",
//     "s-2.svg",
//     "name.svg",
//     "s-4.svg",
//     "s-5.svg"
//   ];

//   useEffect(() => {
//     setTotalImages(imageUrls.length);
    
//     // Load all images and track progress
//     imageUrls.forEach(url => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         setLoadedImages(prev => prev + 1);
//       };
//       img.onerror = () => {
//         console.error(`Failed to load image: ${url}`);
//         setLoadedImages(prev => prev + 1);
//       };
//     });

//     // Set minimum display time (10 seconds)
//     const minDisplayTimer = setTimeout(() => {
//       setReadyToExit(true);
//     }, 1000);

//     return () => clearTimeout(minDisplayTimer);
//   }, []);

//   useEffect(() => {
//     const welcomeMessages = [
//       "Bienvenido", "Bienvenue", "Willkommen", "Benvenuto", "Bem-vindo",
//       "Welkom", "Добро пожаловать", "欢迎", "ようこそ", "환영합니다",
//       "أهلا وسهلا", "स्वागत है", "Καλώς ήρθατε", "ברוך הבא", "Hoş geldiniz",
//       "Välkommen", "Velkommen", "Tervetuloa", "Witaj", "Vítejte",
//       "Üdvözöljük", "Bun venit", "ยินดีต้อนรับ", "Chào mừng"
//     ];

//     const welcomeElement = document.querySelector(".preloader-content h1");
//     let currentIndex = 0;
//     let intervalId;

//     if (preloaderRef.current) {
//       intervalId = setInterval(() => {
//         if (welcomeElement) {
//           welcomeElement.textContent = welcomeMessages[currentIndex];
//           currentIndex = (currentIndex + 1) % welcomeMessages.length;
//         }
//       }, 200);
//     }

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     if (readyToExit && loadedImages === totalImages && totalImages > 0) {
//       // Start parallax effect immediately when slide-out begins
//       document.getElementById("object1")?.classList.add("as1");
//       document.getElementById("object2")?.classList.add("as2");
//       document.getElementById("object3")?.classList.add("as3");
//       document.getElementById("object4")?.classList.add("as4");
//       document.getElementById("object5")?.classList.add("as5");
//       document.getElementById("object6")?.classList.add("as6");

//       // Animate the mask to slide up with shape morph
//       gsap.to(maskRef.current, {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//         duration: 1.5,
//         ease: "power2.inOut",
//         onComplete: () => {
//           if (preloaderRef.current) {
//             preloaderRef.current.style.display = "none";
//           }
//         }
//       });

//       // Animate content to fade as it slides up
//       gsap.to(".preloader-content", {
//         y: -100,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.inOut"
//       });
//     }
//   }, [readyToExit, loadedImages, totalImages]);

//   const loadingProgress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

//   return (
//     <div className="bggiver">
//       <div className="preloader" ref={preloaderRef}>
//         <div className="preloader-mask" ref={maskRef}>
//           <div className="preloader-content">
//             <h1>Welcome</h1>
//             <div className="loading-bar-container">
//               <div 
//                 className="loading-bar"
//                 style={{ width: `${loadingProgress}%` }}
//               ></div>
//               <div className="loading-text">
//                 Loading images: {loadedImages}/{totalImages}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="scroll-down-arrow">↓</div>
//         <img src="s-0.svg" alt="" data-value="3" className="object" id="object1" />
//         <img src="s-1.svg" alt="" data-value="3" className="object" id="object2" />
//         <img src="s-2.svg" alt="" data-value="3" className="object" id="object3" />
//         <img src="name.svg" alt="" data-value="10" className="object" id="object4" />
//         <img src="s-4.svg" alt="" data-value="2" className="object" id="object5" />
//         <img src="s-5.svg" alt="" data-value="2" className="object" id="object6" />
//       </div>
//       <div className="content-section"></div>
//     </div>
//   );
// };

// export default Parallax;















// import React, { useEffect, useState, useRef } from "react";
// import "./parallax.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Parallax = () => {
//   const [loadedImages, setLoadedImages] = useState(0);
//   const [totalImages, setTotalImages] = useState(0);
//   const [readyToExit, setReadyToExit] = useState(false);
//   const preloaderRef = useRef(null);
//   const maskRef = useRef(null);
//   const contentRef = useRef(null);
  
//   const imageUrls = [
//     "s-0.svg",
//     "s-1.svg",
//     "s-2.svg",
//     "name.svg",
//     "s-4.svg",
//     "s-5.svg"
//   ];

//   useEffect(() => {
//     setTotalImages(imageUrls.length);
    
//     // Load all images and track progress
//     imageUrls.forEach(url => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         setLoadedImages(prev => prev + 1);
//       };
//       img.onerror = () => {
//         console.error(`Failed to load image: ${url}`);
//         setLoadedImages(prev => prev + 1);
//       };
//     });

//     // Set minimum display time (10 seconds)
//     const minDisplayTimer = setTimeout(() => {
//       setReadyToExit(true);
//     }, 10000);

//     return () => clearTimeout(minDisplayTimer);
//   }, []);

//   useEffect(() => {
//     const welcomeMessages = [
//       "Bienvenido", "Bienvenue", "Willkommen", "Benvenuto", "Bem-vindo",
//       "Welkom", "Добро пожаловать", "欢迎", "ようこそ", "환영합니다",
//       "أهلا وسهلا", "स्वागत है", "Καλώς ήρθατε", "ברוך הבא", "Hoş geldiniz",
//       "Välkommen", "Velkommen", "Tervetuloa", "Witaj", "Vítejte",
//       "Üdvözöljük", "Bun venit", "ยินดีต้อนรับ", "Chào mừng"
//     ];

//     const welcomeElement = document.querySelector(".preloader-content h1");
//     let currentIndex = 0;
//     let intervalId;

//     if (preloaderRef.current) {
//       intervalId = setInterval(() => {
//         if (welcomeElement) {
//           welcomeElement.textContent = welcomeMessages[currentIndex];
//           currentIndex = (currentIndex + 1) % welcomeMessages.length;
//         }
//       }, 200);
//     }

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     if (readyToExit && loadedImages === totalImages && totalImages > 0) {
//       // Immediately show the parallax background
//       gsap.set(contentRef.current, { visibility: "visible" });
      
//       // Activate parallax elements
//       document.getElementById("object1")?.classList.add("as1");
//       document.getElementById("object2")?.classList.add("as2");
//       document.getElementById("object3")?.classList.add("as3");
//       document.getElementById("object4")?.classList.add("as4");
//       document.getElementById("object5")?.classList.add("as5");
//       document.getElementById("object6")?.classList.add("as6");

//       // Dynamic shape-changing animation
//       const morphShapes = [
//         "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Full rectangle
//         "polygon(0% 0%, 100% 0%, 80% 80%, 20% 80%)",     // Trapezoid
//         "polygon(0% 0%, 100% 0%, 100% 20%, 0% 20%)",    // Thin strip
//         "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"       // Disappeared
//       ];

//       gsap.to(maskRef.current, {
//         keyframes: [
//           { clipPath: morphShapes[1], duration: 0.5 },
//           { clipPath: morphShapes[2], duration: 0.5 },
//           { clipPath: morphShapes[3], duration: 0.5 }
//         ],
//         ease: "sine.inOut",
//         onComplete: () => {
//           if (preloaderRef.current) {
//             preloaderRef.current.style.display = "none";
//           }
//         }
//       });

//       // Content fade and scale animation
//       gsap.to(".preloader-content", {
//         y: -50,
//         scale: 0.9,
//         opacity: 0,
//         duration: 1,
//         ease: "back.in"
//       });
//     }
//   }, [readyToExit, loadedImages, totalImages]);

//   const loadingProgress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

//   return (
//     <div className="bggiver">
//       <div className="preloader" ref={preloaderRef}>
//         <div className="preloader-mask" ref={maskRef}>
//           <div className="preloader-content">
//             <h1>Welcome</h1>
//             <div className="loading-bar-container">
//               <div 
//                 className="loading-bar"
//                 style={{ width: `${loadingProgress}%` }}
//               ></div>
//               <div className="loading-text">
//                 Loading images: {loadedImages}/{totalImages}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container" ref={contentRef} style={{ visibility: "hidden" }}>
//         <div className="scroll-down-arrow">↓</div>
//         <img src="s-0.svg" alt="" data-value="3" className="object" id="object1" />
//         <img src="s-1.svg" alt="" data-value="3" className="object" id="object2" />
//         <img src="s-2.svg" alt="" data-value="3" className="object" id="object3" />
//         <img src="name.svg" alt="" data-value="10" className="object" id="object4" />
//         <img src="s-4.svg" alt="" data-value="2" className="object" id="object5" />
//         <img src="s-5.svg" alt="" data-value="2" className="object" id="object6" />
//       </div>
//       <div className="content-section"></div>
//     </div>
//   );
// };

// export default Parallax;










// import React, { useEffect, useState, useRef } from "react";
// import "./parallax.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Parallax = () => {
//   const [loadedImages, setLoadedImages] = useState(0);
//   const [totalImages, setTotalImages] = useState(0);
//   const [readyToExit, setReadyToExit] = useState(false);
//   const preloaderRef = useRef(null);
//   const maskRef = useRef(null);
//   const contentRef = useRef(null);
  
//   const imageUrls = [
//     "s-0.svg",
//     "s-1.svg",
//     "s-2.svg",
//     "name.svg",
//     "s-4.svg",
//     "s-5.svg"
//   ];

//   useEffect(() => {
//     setTotalImages(imageUrls.length);
    
//     // Load all images and track progress
//     imageUrls.forEach(url => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         setLoadedImages(prev => prev + 1);
//       };
//       img.onerror = () => {
//         console.error(`Failed to load image: ${url}`);
//         setLoadedImages(prev => prev + 1);
//       };
//     });

//     // Set minimum display time (10 seconds)
//     const minDisplayTimer = setTimeout(() => {
//       setReadyToExit(true);
//     }, 10000);

//     return () => clearTimeout(minDisplayTimer);
//   }, []);

//   useEffect(() => {
//     const welcomeMessages = [
//       "Bienvenido", "Bienvenue", "Willkommen", "Benvenuto", "Bem-vindo",
//       "Welkom", "Добро пожаловать", "欢迎", "ようこそ", "환영합니다",
//       "أهلا وسهلا", "स्वागत है", "Καλώς ήρθατε", "ברוך הבא", "Hoş geldiniz",
//       "Välkommen", "Velkommen", "Tervetuloa", "Witaj", "Vítejte",
//       "Üdvözöljük", "Bun venit", "ยินดีต้อนรับ", "Chào mừng"
//     ];

//     const welcomeElement = document.querySelector(".preloader-content h1");
//     let currentIndex = 0;
//     let intervalId;

//     if (preloaderRef.current) {
//       intervalId = setInterval(() => {
//         if (welcomeElement) {
//           welcomeElement.textContent = welcomeMessages[currentIndex];
//           currentIndex = (currentIndex + 1) % welcomeMessages.length;
//         }
//       }, 200);
//     }

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     if (readyToExit && loadedImages === totalImages && totalImages > 0) {
//       // Activate parallax immediately when transition begins
//       gsap.set(contentRef.current, { visibility: "visible" });
//       document.getElementById("object1")?.classList.add("as1");
//       document.getElementById("object2")?.classList.add("as2");
//       document.getElementById("object3")?.classList.add("as3");
//       document.getElementById("object4")?.classList.add("as4");
//       document.getElementById("object5")?.classList.add("as5");
//       document.getElementById("object6")?.classList.add("as6");

//       // Shape-shifting animation timeline
//       const tl = gsap.timeline();
      
//       // Animate the mask to reveal content through dynamic shapes
//       tl.to(maskRef.current, {
//         clipPath: "polygon(0% 0%, 100% 0%, 80% 20%, 20% 20%)",
//         duration: 0.6,
//         ease: "power2.inOut"
//       })
//       .to(maskRef.current, {
//         clipPath: "polygon(0% 0%, 100% 0%, 60% 10%, 40% 10%)",
//         duration: 0.4,
//         ease: "sine.inOut"
//       })
//       .to(maskRef.current, {
//         clipPath: "polygon(0% 0%, 100% 0%, 55% 5%, 45% 5%)",
//         duration: 0.3,
//         ease: "sine.out"
//       })
//       .to(maskRef.current, {
//         clipPath: "polygon(0% 0%, 100% 0%, 50% 0%, 50% 0%)",
//         duration: 0.4,
//         ease: "power2.out",
//         onComplete: () => {
//           if (preloaderRef.current) {
//             preloaderRef.current.style.display = "none";
//           }
//         }
//       });

//       // Content animation (moves up while shape shifts)
//       gsap.to(".preloader-content", {
//         y: -100,
//         opacity: 0,
//         scale: 0.95,
//         duration: 1.2,
//         ease: "power2.inOut"
//       });
//     }
//   }, [readyToExit, loadedImages, totalImages]);

//   const loadingProgress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

//   return (
//     <div className="bggiver">
//       <div className="preloader" ref={preloaderRef}>
//         <div className="preloader-mask" ref={maskRef}>
//           <div className="preloader-content">
//             <h1>Welcome</h1>
//             <div className="loading-bar-container">
//               <div 
//                 className="loading-bar"
//                 style={{ width: `${loadingProgress}%` }}
//               ></div>
//               <div className="loading-text">
//                 Loading images: {loadedImages}/{totalImages}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container" ref={contentRef} style={{ visibility: "hidden" }}>
//         <div className="scroll-down-arrow">↓</div>
//         <img src="s-0.svg" alt="" data-value="3" className="object" id="object1" />
//         <img src="s-1.svg" alt="" data-value="3" className="object" id="object2" />
//         <img src="s-2.svg" alt="" data-value="3" className="object" id="object3" />
//         <img src="name.svg" alt="" data-value="10" className="object" id="object4" />
//         <img src="s-4.svg" alt="" data-value="2" className="object" id="object5" />
//         <img src="s-5.svg" alt="" data-value="2" className="object" id="object6" />
//       </div>
//       <div className="content-section"></div>
//     </div>
//   );
// };

// export default Parallax;




















// import React, { useEffect, useState, useRef } from "react";
// import "./parallax.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Parallax = () => {
//   const [loadedImages, setLoadedImages] = useState(0);
//   const [totalImages, setTotalImages] = useState(0);
//   const [readyToExit, setReadyToExit] = useState(false);
//   const [finalWelcome, setFinalWelcome] = useState(false);
//   const preloaderRef = useRef(null);
//   const maskRef = useRef(null);
//   const contentRef = useRef(null);
//   const welcomeTextRef = useRef(null);
  
//   const imageUrls = [
//     "s-0.svg",
//     "s-1.svg",
//     "s-2.svg",
//     "name.svg",
//     "s-4.svg",
//     "s-5.svg"
//   ];


//   useEffect(() => {
//     if (readyToExit && loadedImages === totalImages && totalImages > 0) {
//       setFinalWelcome(true);
      
//       // Add a fade-out class instead of display: none immediately
//       document.querySelector(".loading-bar-container")?.classList.add("fade-out");
//     }
//   }, [readyToExit, loadedImages, totalImages]);
  

//   useEffect(() => {
//     setTotalImages(imageUrls.length);
    
//     // Load all images and track progress
//     imageUrls.forEach(url => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         setLoadedImages(prev => prev + 1);
//       };
//       img.onerror = () => {
//         console.error(`Failed to load image: ${url}`);
//         setLoadedImages(prev => prev + 1);
//       };
//     });

//     // Set minimum display time (10 seconds)
//     const minDisplayTimer = setTimeout(() => {
//       setReadyToExit(true);
//     }, 2000);

//     return () => clearTimeout(minDisplayTimer);
//   }, []);

//   useEffect(() => {
//     if (!finalWelcome) {
//       const welcomeMessages = [
//         "Bienvenido", "Bienvenue", "Willkommen", "Benvenuto", "Bem-vindo",
//         "Welkom", "Добро пожаловать", "欢迎", "ようこそ", "환영합니다",
//         "أهلا وسهلا", "स्वागत है", "Καλώς ήρθατε", "ברוך הבא", "Hoş geldiniz",
//         "Välkommen", "Velkommen", "Tervetuloa", "Witaj", "Vítejte",
//         "Üdvözöljük", "Bun venit", "ยินดีต้อนรับ", "Chào mừng"
//       ];

//       let currentIndex = 0;
//       let intervalId;

//       if (welcomeTextRef.current) {
//         intervalId = setInterval(() => {
//           welcomeTextRef.current.textContent = welcomeMessages[currentIndex];
//           currentIndex = (currentIndex + 1) % welcomeMessages.length;
//         }, 200);
//       }

//       return () => clearInterval(intervalId);
//     }
//   }, [finalWelcome]);

//   // useEffect(() => {
//   //   if (readyToExit && loadedImages === totalImages && totalImages > 0) {
//   //     // Set final welcome text and stop changing
//   //     setFinalWelcome(true);
//   //     if (welcomeTextRef.current) {
//   //       welcomeTextRef.current.textContent = "Welcome";
//   //       // document.querySelector(".loading-bar-container").style.display = "none";
//   //       // document.querySelector(".loading-bar").style.display = "none";
//   //     }

//   //     // Activate parallax immediately
//   //     gsap.set(contentRef.current, { visibility: "visible" });
//   //     document.getElementById("object1")?.classList.add("as1");
//   //     document.getElementById("object2")?.classList.add("as2");
//   //     document.getElementById("object3")?.classList.add("as3");
//   //     document.getElementById("object4")?.classList.add("as4");
//   //     document.getElementById("object5")?.classList.add("as5");
//   //     document.getElementById("object6")?.classList.add("as6");

//   //     // Create animation timeline
//   //     const tl = gsap.timeline();

//   //     // Animate the mask (speeding up with rounded corners)
//   //     tl.to(maskRef.current, {
//   //       // clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 80%)",
//   //       // borderRadius: "0px",
//   //       borderRadius: "10px",
//   //       // duration: 0.5,
//   //       duration: 0.5,
//   //       y: "-50%",
//   //       ease: "power2.inOut"
//   //     })
//   //     .to(maskRef.current, {
//   //       // clipPath: "polygon(0% 0%, 100% 0%, 100% 30%, 0% 30%)",
//   //       // borderRadius: "20px 20px 0 0",
//   //       borderRadius: "20px",
//   //       // duration: 0.3,
//   //       duration: 0.75,
//   //       ease: "power2.in",
//   //       y: "-100%",
//   //     })
//   //     .to(maskRef.current, {
//   //       // clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//   //       // borderRadius: "40px 40px 0 0",
//   //       borderRadius: "0px",
//   //       // duration: 0.2,
//   //       duration: 1.25,
//   //       y: "-200%",
//   //       ease: "power2.out",
//   //       onComplete: () => {
//   //         if (preloaderRef.current) {
//   //           preloaderRef.current.style.display = "none";
//   //         }
//   //       }
//   //     });

//   //     // Animate content (speeding up as it moves up)

//   //     gsap.to(".preloader-content", {
//   //       y: "-200%",
//   //       // opacity: 0,
//   //       // duration: 10,
//   //       duration: 2.5,
//   //       ease: "power2.in"
//   //     });
      
//   //   }
//   // }, [readyToExit, loadedImages, totalImages]);

//   useEffect(() => {
//     if (readyToExit && loadedImages === totalImages && totalImages > 0) {
//       // Set final welcome text and stop changing
//       setFinalWelcome(true);
//       if (welcomeTextRef.current) {
//         welcomeTextRef.current.textContent = "Welcome";
//         // document.querySelector(".loading-bar-container").style.display = "none";
//         // document.querySelector(".loading-bar").style.display = "none";
//       }

//       // Activate parallax immediately
//       gsap.set(contentRef.current, { visibility: "visible" });
//       document.getElementById("object1")?.classList.add("as1");
//       document.getElementById("object2")?.classList.add("as2");
//       document.getElementById("object3")?.classList.add("as3");
//       document.getElementById("object4")?.classList.add("as4");
//       document.getElementById("object5")?.classList.add("as5");
//       document.getElementById("object6")?.classList.add("as6");
//       preloaderRef.current.style.display = "none";

//       // // Create animation timeline
//       // const tl = gsap.timeline();

//       // // Animate the mask (speeding up with rounded corners)
//       // tl.to(maskRef.current, {
//       //   // clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 80%)",
//       //   // borderRadius: "0px",
//       //   // borderRadius: "10px",
//       //   // duration: 0.5,
//       //   // duration: 2.5,
//       //   duration: 1,
//       //   y: "-200%",
//       //   ease: "power2.inOut",
//       //   onComplete: () => {
//       //     if (preloaderRef.current) {
//       //       preloaderRef.current.style.display = "none";
//       //     }
//       //   }
//       // });

//       // Animate content (speeding up as it moves up)

//       // gsap.to(".preloader-content", {
//       //   y: "-200%",
//       //   // opacity: 0,
//       //   // duration: 10,
//       //   // duration: 2.5,
//       //   duration: 1,
//       //   ease: "power2.in"
//       // });
      
//     }
//   }, [readyToExit, loadedImages, totalImages]);


//   const loadingProgress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

//   return (
//     <div className="bggiver">
//       <div className="preloader" ref={preloaderRef}>
//         <div className="preloader-mask" ref={maskRef}>
//           <div className="preloader-content">
//             <h1 className="preloader-content" ref={welcomeTextRef}>Welcome</h1>
//             {loadingProgress < 100 && (
//             <div className="loading-bar-container">
//               <div 
//                 className="loading-bar"
//                 style={{ width: `${loadingProgress}%` }}
//               ></div>
//               <div className="loading-text">
//                 Loading images: {loadedImages}/{totalImages}
//               </div>
//             </div>)}
//           </div>
//         </div>
//       </div>

//       <div className="container" ref={contentRef} style={{ visibility: "hidden" }}>
//         <div className="scroll-down-arrow">↓</div>
//         <img src="s-0.svg" alt="" data-value="3" className="object" id="object1" />
//         <img src="s-1.svg" alt="" data-value="3" className="object" id="object2" />
//         <img src="s-2.svg" alt="" data-value="3" className="object" id="object3" />
//         <img src="name.svg" alt="" data-value="10" className="object" id="object4" />
//         <img src="s-4.svg" alt="" data-value="2" className="object" id="object5" />
//         <img src="s-5.svg" alt="" data-value="2" className="object" id="object6" />
//       </div>
//       <div className="content-section"></div>
//     </div>
//   );
// };

// export default Parallax;









// import React, { useEffect, useState, useRef } from "react";
// import "./parallax.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Parallax = () => {
//   const [loadedImages, setLoadedImages] = useState(0);
//   const [totalImages, setTotalImages] = useState(0);
//   const [readyToExit, setReadyToExit] = useState(false);
//   const [finalWelcome, setFinalWelcome] = useState(false);
//   const [minimumTimePassed, setMinimumTimePassed] = useState(false);
//   const preloaderRef = useRef(null);
//   const maskRef = useRef(null);
//   const contentRef = useRef(null);
//   const welcomeTextRef = useRef(null);
  
//   const imageUrls = [
//     "s-0.svg",
//     "s-1.svg",
//     "s-2.svg",
//     "name.svg",
//     "s-4.svg",
//     "s-5.svg"
//   ];

//   useEffect(() => {
//     setTotalImages(imageUrls.length);
    
//     // Load all images and track progress
//     imageUrls.forEach(url => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         setLoadedImages(prev => prev + 1);
//       };
//       img.onerror = () => {
//         console.error(`Failed to load image: ${url}`);
//         setLoadedImages(prev => prev + 1);
//       };
//     });

//     // Set minimum display time (4 seconds)
//     const minDisplayTimer = setTimeout(() => {
//       setMinimumTimePassed(true);
//     }, 4000);

//     return () => clearTimeout(minDisplayTimer);
//   }, []);

//   useEffect(() => {
//     // Check if we can exit (minimum time passed and all images loaded)
//     if (minimumTimePassed && loadedImages === totalImages && totalImages > 0) {
//       setReadyToExit(true);
//     }
//   }, [minimumTimePassed, loadedImages, totalImages]);

//   useEffect(() => {
//     if (readyToExit) {
//       // Set final welcome text and stop changing
//       setFinalWelcome(true);
//       if (welcomeTextRef.current) {
//         welcomeTextRef.current.textContent = "Welcome";
//       }

//       // Smooth fade out animation
//       gsap.to(".loading-bar-container", {
//         opacity: 0,
//         duration: 0.5,
//         ease: "power2.out"
//       });

//       // Animate the welcome text and mask
//       const tl = gsap.timeline();
//       tl.to(welcomeTextRef.current, {
//         y: -20,
//         // opacity: 0,
//         duration: 0.5,
//         ease: "power2.in"
//       })
//       .to(maskRef.current, {
//         y: "-100%",
//         opacity: 0,
//         duration: 0.75,
//         ease: "power2.inOut"
//       }, "-=0.25")
//       .set(preloaderRef.current, {
//         display: "none"
//       })
//       .set(contentRef.current, {
//         visibility: "visible"
//       }, "-=0.5");

//       // Activate parallax elements
//       document.getElementById("object1")?.classList.add("as1");
//       document.getElementById("object2")?.classList.add("as2");
//       document.getElementById("object3")?.classList.add("as3");
//       document.getElementById("object4")?.classList.add("as4");
//       document.getElementById("object5")?.classList.add("as5");
//       document.getElementById("object6")?.classList.add("as6");
//     }
//   }, [readyToExit]);

//   useEffect(() => {
//     if (!finalWelcome) {
//       const welcomeMessages = [
//         "Bienvenido", "Bienvenue", "Willkommen", "Benvenuto", "Bem-vindo",
//         "Welkom", "Добро пожаловать", "欢迎", "ようこそ", "환영합니다",
//         "أهلا وسهلا", "स्वागत है", "Καλώς ήρθατε", "ברוך הבא", "Hoş geldiniz",
//         "Välkommen", "Velkommen", "Tervetuloa", "Witaj", "Vítejte",
//         "Üdvözöljük", "Bun venit", "ยินดีต้อนรับ", "Chào mừng"
//       ];

//       let currentIndex = 0;
//       let intervalId;

//       if (welcomeTextRef.current) {
//         intervalId = setInterval(() => {
//           welcomeTextRef.current.textContent = welcomeMessages[currentIndex];
//           currentIndex = (currentIndex + 1) % welcomeMessages.length;
//         }, 200);
//       }

//       return () => clearInterval(intervalId);
//     }
//   }, [finalWelcome]);

//   const loadingProgress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

//   return (
//     <div className="bggiver">
//       <div className="preloader" ref={preloaderRef}>
//         <div className="preloader-mask" ref={maskRef}>
//           <div className="preloader-content">
//             <h1 className="welcome-text" ref={welcomeTextRef}>Welcome</h1>
//             <div className="loading-bar-container">
//               <div 
//                 className="loading-bar"
//                 style={{ width: `${loadingProgress}%` }}
//               ></div>
//               <div className="loading-text">
//                 Loading images: {loadedImages}/{totalImages}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container" ref={contentRef} style={{ visibility: "hidden" }}>
//         <div className="scroll-down-arrow">↓</div>
//         <img src="s-0.svg" alt="" data-value="3" className="object" id="object1" />
//         <img src="s-1.svg" alt="" data-value="3" className="object" id="object2" />
//         <img src="s-2.svg" alt="" data-value="3" className="object" id="object3" />
//         <img src="name.svg" alt="" data-value="10" className="object" id="object4" />
//         <img src="s-4.svg" alt="" data-value="2" className="object" id="object5" />
//         <img src="s-5.svg" alt="" data-value="2" className="object" id="object6" />
//       </div>
//       <div className="content-section"></div>
//     </div>
//   );
// };

// export default Parallax;




// import React, { useEffect, useState, useRef } from "react";
// import "./parallax.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Parallax = () => {
//   const [finalWelcome, setFinalWelcome] = useState(false);
//   const [loadedImages, setLoadedImages] = useState(0);
//   const [totalImages, setTotalImages] = useState(0);
//   const [readyToExit, setReadyToExit] = useState(false);
//   const [minimumTimePassed, setMinimumTimePassed] = useState(false);
//   const preloaderRef = useRef(null);
//   const maskRef = useRef(null);
//   const contentRef = useRef(null);
//   const welcomeTextRef = useRef(null);
//   const loadingBarRef = useRef(null);
  
//   const imageUrls = [
//     "s-0.svg",
//     "s-1.svg",
//     "s-2.svg",
//     "name.svg",
//     "s-4.svg",
//     "s-5.svg"
//   ];

//   useEffect(() => {
//     setTotalImages(imageUrls.length);
    
//     // Load all images and track progress
//     imageUrls.forEach(url => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         setLoadedImages(prev => prev + 1);
//       };
//       img.onerror = () => {
//         console.error(`Failed to load image: ${url}`);
//         setLoadedImages(prev => prev + 1);
//       };
//     });

//     // Set minimum display time (4 seconds)
//     const minDisplayTimer = setTimeout(() => {
//       setMinimumTimePassed(true);
//     }, 4000);

//     return () => clearTimeout(minDisplayTimer);
//   }, []);

//   useEffect(() => {
//     // Animate loading bar growth smoothly
//     if (loadingBarRef.current) {
//       gsap.to(loadingBarRef.current, {
//         width: `${(loadedImages / totalImages) * 100}%`,
//         duration: 0.5,
//         ease: "power2.out"
//       });
//     }
//   }, [loadedImages, totalImages]);

//   useEffect(() => {
//     // Check if we can exit (minimum time passed and all images loaded)
//     if (minimumTimePassed && loadedImages === totalImages && totalImages > 0) {
//       setReadyToExit(true);
//     }
//   }, [minimumTimePassed, loadedImages, totalImages]);

//   useEffect(() => {
//     if (readyToExit) {
//       // Set final welcome text and stop changing
//       setFinalWelcome(true);
//       clearInterval(welcomeTextRef.current);
//       welcomeTextRef.current.textContent = "Welcome";
      
//       // Final exit animation sequence
//       const tl = gsap.timeline();
      
//       // 1. Animate loading elements out
//       tl.to(".loading-bar-container", {
//         opacity: 0,
//         y: 20,
//         duration: 0.5,
//         ease: "power2.in"
//       })
//       // 2. Animate welcome text up and fade
//       .to(welcomeTextRef.current, {
//         y: -40,
//         opacity: 0,
//         duration: 0.75,
//         ease: "power2.inOut"
//       }, "-=0.3")
//       // 3. Animate mask up and fade
//       .to(maskRef.current, {
//         y: "-100%",
//         opacity: 0,
//         duration: 0,
//         ease: "power2.in"
//       })
//       // 4. Hide preloader and show content
//       .set(preloaderRef.current, {
//         display: "none"
//       })
//       .set(contentRef.current, {
//         visibility: "visible"
//       }, "-=0.5");

//       // Activate parallax elements
//       document.getElementById("object1")?.classList.add("as1");
//       document.getElementById("object2")?.classList.add("as2");
//       document.getElementById("object3")?.classList.add("as3");
//       document.getElementById("object4")?.classList.add("as4");
//       document.getElementById("object5")?.classList.add("as5");
//       document.getElementById("object6")?.classList.add("as6");
//     }
//   }, [readyToExit]);

//   useEffect(() => {
//     if (!finalWelcome && welcomeTextRef.current) {
//       const welcomeMessages = [
//         "Welcome" ,"Bienvenido", "Bienvenue", "Willkommen", "Benvenuto", "Bem-vindo",
//         "Welkom", "Добро пожаловать", "欢迎", "ようこそ", "환영합니다",
//         "أهلا وسهلا", "स्वागत है", "Καλώς ήρθατε", "ברוך הבא", "Hoş geldiniz",
//         "Välkommen", "Velkommen", "Tervetuloa", "Witaj", "Vítejte",
//         "Üdvözöljük", "Bun venit", "ยินดีต้อนรับ", "Chào mừng"
//       ];

//       let currentIndex = 0;
//    // Initial setup
//    welcomeTextRef.current.textContent = welcomeMessages[currentIndex];
//    gsap.set(welcomeTextRef.current, { opacity: 1, scale: 1 });

//    const changeText = () => {
//      currentIndex = (currentIndex + 1) % welcomeMessages.length;
     
//      // Animate text out
//      gsap.to(welcomeTextRef.current, {
//        opacity: 0,
//        scale: 0.9,
//        duration: 0.2,
//        ease: "power2.in",
//        onComplete: () => {
//          // Change text
//          welcomeTextRef.current.textContent = welcomeMessages[currentIndex];
//          // Animate new text in
//          gsap.fromTo(welcomeTextRef.current, 
//            { opacity: 1, scale: 1.1 },
//            { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
//          );
//        }
//      });
//    };

//    const intervalId = setInterval(changeText, 300);

//    return () => clearInterval(intervalId);
//  }
// }, [finalWelcome]);


//   const loadingProgress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

//   return (
//     <div className="bggiver">
//       <div className="preloader" ref={preloaderRef}>
//         <div className="preloader-mask" ref={maskRef}>
//           <div className="preloader-content">
//             <h1 className="welcome-text" ref={welcomeTextRef}></h1>
//             <div className="loading-bar-container">
//               <div 
//                 className="loading-bar"
//                 ref={loadingBarRef}
//                 style={{ width: "0%" }}
//               ></div>
//               <div className="loading-text">
//                 Loading images: {loadedImages}/{totalImages}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container" ref={contentRef} style={{ visibility: "hidden" }}>
//         <div className="scroll-down-arrow">↓</div>
//         <img src="s-0.svg" alt="" data-value="3" className="object" id="object1" />
//         <img src="s-1.svg" alt="" data-value="3" className="object" id="object2" />
//         <img src="s-2.svg" alt="" data-value="3" className="object" id="object3" />
//         <img src="name.svg" alt="" data-value="10" className="object" id="object4" />
//         <img src="s-4.svg" alt="" data-value="2" className="object" id="object5" />
//         <img src="s-5.svg" alt="" data-value="2" className="object" id="object6" />
//       </div>
//       <div className="content-section"></div>
//     </div>
//   );
// };

// export default Parallax;

























import React, { useEffect, useState, useRef } from "react";
import "./parallax.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  const [finalWelcome, setFinalWelcome] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [readyToExit, setReadyToExit] = useState(false);
  const [minimumTimePassed, setMinimumTimePassed] = useState(false);
  const preloaderRef = useRef(null);
  const maskRef = useRef(null);
  const contentRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const loadingBarRef = useRef(null);
  const object4Ref = useRef(null);
  
  const imageUrls = [
    "s-0.svg",
    "s-1.svg",
    "s-2.svg",
    "name.svg",
    "s-4.svg",
    "s-5.svg"
  ];

  useEffect(() => {
    setTotalImages(imageUrls.length);
    
    // Load all images and track progress
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setLoadedImages(prev => prev + 1);
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${url}`);
        setLoadedImages(prev => prev + 1);
      };
    });

    // Set minimum display time (4 seconds)
    const minDisplayTimer = setTimeout(() => {
      setMinimumTimePassed(true);
    }, 4000);

    return () => clearTimeout(minDisplayTimer);
  }, []);

  useEffect(() => {
    // Animate loading bar growth smoothly
    if (loadingBarRef.current) {
      gsap.to(loadingBarRef.current, {
        width: `${(loadedImages / totalImages) * 100}%`,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [loadedImages, totalImages]);

  useEffect(() => {
    // Check if we can exit (minimum time passed and all images loaded)
    if (minimumTimePassed && loadedImages === totalImages && totalImages > 0) {
      setReadyToExit(true);
    }
  }, [minimumTimePassed, loadedImages, totalImages]);

  useEffect(() => {
    if (readyToExit) {
      // Set final welcome text and stop changing
      setFinalWelcome(true);
      clearInterval(welcomeTextRef.current);
      welcomeTextRef.current.textContent = "Welcome";
      
      // Final exit animation sequence
      const tl = gsap.timeline();
      
      // 1. Animate loading elements out
      tl.to(".loading-bar-container", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.in"
      })
      // 2. Animate welcome text up and fade
      .to(welcomeTextRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.75,
        ease: "power2.inOut"
      }, "-=0.3")
      // 3. Animate mask up and fade
      .to(maskRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0,
        ease: "power2.in"
      })
      // 4. Hide preloader and show content
      .set(preloaderRef.current, {
        display: "none"
      })
      .set(contentRef.current, {
        visibility: "visible"
      }, "-=0.5");

      // Activate parallax elements
      document.getElementById("object1")?.classList.add("as1");
      document.getElementById("object2")?.classList.add("as2");
      document.getElementById("object3")?.classList.add("as3");
      document.getElementById("object4")?.classList.add("as4");
      document.getElementById("object5")?.classList.add("as5");
      document.getElementById("object6")?.classList.add("as6");

      // Start floating animation for object4
      if (object4Ref.current) {
        gsap.to(object4Ref.current, {
          y: "+=20",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }
  }, [readyToExit]);

  useEffect(() => {
    if (!finalWelcome && welcomeTextRef.current) {
      const welcomeMessages = [
        "Welcome", "Bienvenido", "Bienvenue", "Willkommen", "Benvenuto", "Bem-vindo",
        "Welkom", "Добро пожаловать", "欢迎", "ようこそ", "환영합니다",
        "أهلا وسهلا", "स्वागत है", "Καλώς ήρθατε", "ברוך הבא", "Hoş geldiniz",
        "Välkommen", "Velkommen", "Tervetuloa", "Witaj", "Vítejte",
        "Üdvözöljük", "Bun venit", "ยินดีต้อนรับ", "Chào mừng", "Welcome"
      ];

      let currentIndex = 0;
      // Initial setup
      welcomeTextRef.current.textContent = welcomeMessages[currentIndex];
      gsap.set(welcomeTextRef.current, { opacity: 1, scale: 1 });

      const changeText = () => {
        currentIndex = (currentIndex + 1) % welcomeMessages.length;
        
        // If this is the last message, don't change anymore
        if (welcomeMessages[currentIndex] === "Welcome") {
          setFinalWelcome(true);
          return;
        }
        
        // Animate text out
        gsap.to(welcomeTextRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            // Change text
            welcomeTextRef.current.textContent = welcomeMessages[currentIndex];
            // Animate new text in
            gsap.fromTo(welcomeTextRef.current, 
              { opacity: 1, scale: 1.1 },
              { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
            );
          }
        });
      };

      const intervalId = setInterval(changeText, 400);

      return () => clearInterval(intervalId);
    }
  }, [finalWelcome]);

  const loadingProgress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

  return (
    <div className="bggiver">
      <div className="preloader" ref={preloaderRef}>
        <div className="preloader-mask" ref={maskRef}>
          <div className="preloader-content">
            <h1 className="welcome-text" ref={welcomeTextRef}></h1>
            <div className="loading-bar-container">
              <div 
                className="loading-bar"
                ref={loadingBarRef}
                style={{ width: "0%" }}
              ></div>
              <div className="loading-text">
                Loading images: {loadedImages}/{totalImages}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" ref={contentRef} style={{ visibility: "hidden" }}>
        <div className="scroll-down-arrow">↓</div>
        <img src="s-0.svg" alt="" data-value="3" className="object" id="object1" />
        <img src="s-1.svg" alt="" data-value="3" className="object" id="object2" />
        <img src="s-2.svg" alt="" data-value="3" className="object" id="object3" />
        <img 
          src="name.svg" 
          alt="" 
          data-value="10" 
          className="object" 
          id="object4" 
          ref={object4Ref}
        />
        <img src="s-4.svg" alt="" data-value="2" className="object" id="object5" />
        <img src="s-5.svg" alt="" data-value="2" className="object" id="object6" />
      </div>
      <div className="content-section"></div>
    </div>
  );
};

export default Parallax;