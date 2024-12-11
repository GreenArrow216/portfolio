import { useEffect } from "react";
import "./rainEffect.css"; // Import the styles
// import Rain from "../../sounds/Rain.mp3";
// import Thunder from '../../sounds/Thunder.mp3'

const RainEffect = () => {
  useEffect(() => {
    const rainContainer = document.querySelector(".rain-container")!;
    const numberOfDrops = 80;

    const createSplash = (raindrop: HTMLElement) => {
      const splash = document.createElement("div");
      splash.classList.add("splash");

      const dropX = raindrop.style.left;
      const dropY = window.innerHeight;

      splash.style.left = dropX;
      splash.style.top = `${dropY - 5}px`;

      rainContainer.appendChild(splash);

      setTimeout(() => {
        splash.remove();
      }, 300);
    };

    for (let i = 0; i < numberOfDrops; i++) {
      const raindrop = document.createElement("div");
      raindrop.classList.add("raindrop");

      raindrop.style.left = `${Math.random() * 100}vw`;

      const size = Math.random() * 0.5 + 0.5;
      raindrop.style.transform = `scale(${size})`;

      raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
      raindrop.style.animationDelay = `-${Math.random() * 2}s`;

      rainContainer.appendChild(raindrop);

      raindrop.addEventListener("animationiteration", () => {
        createSplash(raindrop);
      });
    }

    const createLightning = () => {
      const flash = document.createElement("div");
      flash.classList.add("lightning-flash");

      rainContainer.appendChild(flash);

      setTimeout(() => {
        flash.remove();
      }, 500);
    };

    const lightningInterval = setInterval(() => {
      if (Math.random() < 0.6) {
        createLightning();
      }
    }, 10000);

    return () => {
      clearInterval(lightningInterval);
    };
  }, []);

  return <div className="rain-container"></div>;
};

export default RainEffect;
