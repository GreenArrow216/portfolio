import OptiTwin from "../../assets/Opti-twin.svg";
import OLora from "../../assets/Orkney-Lora.jpg";
import Kissflow from "../../assets/kissflow.svg";
import Mallow from "../../assets/Mallow-tech.png";
import { useEffect, useState } from "react";
import "./experience.css";

const experiences = [
  {
    logo: OptiTwin, // Replace with actual paths
    description: "Experience description for first job.",
  },
  {
    logo: OLora,
    description: "Experience description for second job.",
  },
  {
    logo: Kissflow,
    description: "Experience description for third job.",
  },
  {
    logo: Mallow,
    description: "Experience description for fourth job.",
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBoardScrollActive, setBoardScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceContainer = document.querySelector(".section-2");
      if (!experienceContainer) return;

      const containerRect = experienceContainer.getBoundingClientRect();

      // Check if section-2 is fully visible
      if (
        containerRect.top <= 0 &&
        containerRect.bottom >= window.innerHeight
      ) {
        setBoardScrollActive(true);
      } else {
        setBoardScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isBoardScrollActive) return;

    let scrollDelta = 0; // Accumulate the scroll distance

    const handleBoardScroll = (event: WheelEvent) => {
      event.preventDefault();
      scrollDelta += event.deltaY;

      const scrollThreshold = 100; // Adjust this value for sensitivity

      if (scrollDelta > scrollThreshold) {
        setActiveIndex((prevIndex) => {
          const newIndex = Math.min(prevIndex + 1, experiences.length - 1);
          if (newIndex !== prevIndex) scrollDelta = 0; // Reset delta when index changes
          return newIndex;
        });
      } else if (scrollDelta < -scrollThreshold) {
        setActiveIndex((prevIndex) => {
          const newIndex = Math.max(prevIndex - 1, 0);
          if (newIndex !== prevIndex) scrollDelta = 0; // Reset delta when index changes
          return newIndex;
        });
      }
    };

    window.addEventListener("wheel", handleBoardScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleBoardScroll);
  }, [isBoardScrollActive]);

  return (
    <div className="section-2">
      <div className="boards">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`board-${index % 2 === 0 ? "left" : "right"} ${
              activeIndex === index ? "board-active" : ""
            }`}
          >
            <img src={exp.logo} alt={`logo-${index}`} />
          </div>
        ))}
        <div className="long-big-line-in-the-middle" />
      </div>
      <div className="description">
        {experiences.map((exp, index) => (
          <p
            key={index}
            className={`description ${
              activeIndex === index ? "visible" : "hidden"
            }`}
          >
            {exp.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Experience;
