// src/LoadingScreen.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import './LoadingScreen.css';

const LoadingScreen = () => {
  const counter3Ref = useRef<HTMLDivElement | null>(null);
  const loaderRef = useRef(null);
  const loadingScreenRef = useRef(null);

  useEffect(() => {
    const counter3 = counter3Ref.current;

    // Adding numbers to counter3 as an example
    if(counter3){
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement("div");
          div.className = "num";
          div.textContent = j.toString();
          counter3?.appendChild(div);
        }
      }


      const finalDiv = document.createElement("div");
      finalDiv.className = "num";
      finalDiv.textContent = "0";
      counter3.appendChild(finalDiv);
    }
    

    

    // Animation function
    function animate(counter: HTMLElement, duration: number, delay = 0) {
      const numHeight = counter.querySelector(".num")?.clientHeight;
      if (numHeight === undefined) {
        throw new Error("Element with class 'num' not found or does not have clientHeight.");
      }
      const totalDistance =
      (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    }

    // Apply animations with specified duration and delay
    if (counter3) {
      animate(counter3, 5);
    }
    const counter2 = document.querySelector(".counter-2");
    if (counter2 instanceof HTMLElement) {
      animate(counter2, 6);
    }
    const counter1 = document.querySelector(".counter-1");
    if (counter1 instanceof HTMLElement) {
      animate(counter1, 2, 4);
    }

    gsap.to(".digit", {
      top: "-150px",
      stagger: {
        amount: 0.25,
      },
      delay: 6,
      duration: 1,
      ease: "power4.inOut",
    });

    // Loader animations
    gsap.to(".loader-1", {
      width: 300,
      duration: 6,
      ease: "power2.inOut",
    });

    gsap.to(".loader-2", {
      width: 300,
      delay: 1.9,
      duration: 4.1,
      ease: "power2.inOut",
    });

    gsap.to(loaderRef.current, {
      background: "none",
      delay: 6,
      duration: 0.1,
    });

    // V-shape animation
    gsap.to(".loader-1", {
      rotate: 55, 
      transformOrigin: "right center",
      x: -140, 
      y: 0,
      duration: 0.5,
      delay: 6,
    });

    gsap.to(".loader-2", {
      rotate: -55, 
      transformOrigin: "left center",
      x: 135, 
      y: 0,
      duration: 0.5,
      delay: 6,
    });

    // Scale and rotate the entire loader
    gsap.to(loaderRef.current, {
      scale: 200,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(loaderRef.current, {
      rotate: 45,
      y: 500,
      x: 2000,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(loadingScreenRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 7.5,
      ease: "power1.inOut",
    });

    gsap.to("h1", {
      duration: 1.5,
      delay: 7,
      y: -80,
      ease: "power4.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  }, []);

  return (
    <div className="loading-screen" ref={loadingScreenRef}>
      <div className="loader" ref={loaderRef}>
        <div className="loader-1 bar"></div>
        <div className="loader-2 bar"></div>
      </div>

      <div className="counter">
        <div className="counter-1 digit">
          <div className="num ">0</div>
          <div className="num num1offset1">1</div>
        </div>

        <div className="counter-2 digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>

        <div className="counter-3 digit" ref={counter3Ref}>
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;