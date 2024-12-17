import { useEffect, useState } from "react";
import OptiTwin from "../../assets/companies/Opti-twin.svg";
import OLora from "../../assets/companies/Orkney-Lora.jpg";
import Kissflow from "../../assets/companies/Kissflow.svg";
import Mallow from "../../assets/companies/Mallow-tech.png";
import "./experience.css";
import GlitchText from "../GlitchText/glitchText"

const experiences = [
  {
    logo: OptiTwin, // Replace with actual paths
    description: (
      <>
        <div className="experience-date">
          <GlitchText text="Feb 2023 - Dec 2024" />
        </div>
        Successfully designed and deployed a website and mobile app within a
        tight three-month timeline using{" "}
        <span className="cyberpunk-text">
          TypeScript, Chakra UI, Apollo Client, and GraphQL
        </span>
        . Integrated advanced features like{" "}
        <span className="cyberpunk-text">drag-and-drop</span> and unique graph
        designs with <span className="cyberpunk-text">Visx</span>, ensuring type
        safety with GraphQL-codegen and seamless collaboration with backend
        teams. Migrated a React app to Next.js for improved performance and SEO,
        developed a <span className="cyberpunk-text">Storybook</span> component
        library for consistent UI, and utilized{" "}
        <span className="cyberpunk-text">Cypress</span> for BDD testing. Acted
        as <span className="cyberpunk-text">Scrum Master</span>, driving team
        collaboration and progress tracking, while gaining backend development
        experience in new domains.
      </>
    ),
  },
  {
    logo: OLora,
    description: (
      <>
        <div className="experience-date">
          <GlitchText text="Jul 2022 - Jan 2023" />
        </div>
        Worked as a part-time developer, developed a search SPA by integrating
        front-end and back-end, utilizing{" "}
        <span className="cyberpunk-text">
          Node.js, Express.js, and PostgreSQL
        </span>{" "}
        for API implementation. Designed and completed the search module,
        including wireframing, within 8 hours.
      </>
    ),
  },
  {
    logo: Kissflow,
    description: (
      <>
        <div className="experience-date">
          <GlitchText text="Feb 2021 - Aug 2021" />
        </div>
        Developed a <span className="cyberpunk-text">new micro-frontend</span>{" "}
        service named Platform by migrating modules from other services.
        Successfully implemented and deployed bug-free search functionality for{" "}
        <span className="cyberpunk-text">mobile PWAs</span>. Gained hands-on
        experience with <span className="cyberpunk-text">Jenkins</span>,
        deploying two new features to production.
      </>
    ),
  },
  {
    logo: Mallow,
    description: (
      <>
        <div className="experience-date">
          <GlitchText text="Oct 2018 - Jan 2021" />
        </div>
        Designed responsive web apps using CSS/Bootstrap and established
        front-end coding standards. Built a fleet service SPA with{" "}
        <span className="cyberpunk-text">
          HTML, CSS, JavaScript, and jQuery
        </span>
        , and developed <span className="cyberpunk-text">4+ CRM modules</span>{" "}
        using{" "}
        <span className="cyberpunk-text">
          React, REST API, Redux, and Redux-Saga
        </span>
        . Created a <span className="cyberpunk-text">drag-and-drop</span> web
        application and contributed to{" "}
        <span className="cyberpunk-text">Agile projects</span> from inception.
      </>
    ),
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isBoardScrollActive) return;

    let scrollDelta = 0;

    const handleBoardScroll = (event: WheelEvent) => {
      if (activeIndex === 0 && event.deltaY < 0) {
        setBoardScrollActive(false);
        return;
      }

      event.preventDefault();
      scrollDelta += event.deltaY;

      const scrollThreshold = 200;

      if (scrollDelta > scrollThreshold) {
        setActiveIndex((prevIndex) => {
          const newIndex = Math.min(prevIndex + 1, experiences.length - 1);
          if (newIndex !== prevIndex) scrollDelta = 0;
          return newIndex;
        });
      } else if (scrollDelta < -scrollThreshold) {
        setActiveIndex((prevIndex) => {
          const newIndex = Math.max(prevIndex - 1, 0);
          if (newIndex !== prevIndex) scrollDelta = 0;
          return newIndex;
        });
      }
    };

    window.addEventListener("wheel", handleBoardScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleBoardScroll);
  }, [isBoardScrollActive, activeIndex]);

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
      <div className="description-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`description ${
              activeIndex === index ? "visible" : "hidden"
            }`}
          >
            {exp.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
