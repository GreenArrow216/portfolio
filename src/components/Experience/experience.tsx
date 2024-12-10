import OptiTwin from "../../assets/Opti-twin.svg";
import OLora from "../../assets/Orkney-Lora.jpg";
import Kissflow from "../../assets/kissflow.svg";
import Mallow from "../../assets/Mallow-tech.png";
import { useEffect, useState } from "react";
import './experience.css'

const experiences = [
    {
      logo: OptiTwin, // Replace with actual paths
      description: 'Experience description for first job.',
    },
    {
      logo: OLora,
      description: 'Experience description for second job.',
    },
    {
      logo: Kissflow,
      description: 'Experience description for third job.',
    },
    {
      logo: Mallow,
      description: 'Experience description for fourth job.',
    },
  ];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      // Get the experience container
      const experienceContainer = document.querySelector('.section-2');
      if (!experienceContainer) return;
  
      // Get the container's position relative to the viewport
      const containerRect = experienceContainer.getBoundingClientRect();
  
      // Check if the container is in view
      if (containerRect.top <= window.innerHeight && containerRect.bottom >= 0) {
        const boardElements = document.querySelectorAll('.board-left, .board-right');
        boardElements.forEach((el, index) => {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setActiveIndex(index);
          }
        });
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="section-2">
      <div className="boards">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`board-${index % 2 === 0 ? 'left' : 'right'} ${
              activeIndex === index ? 'board-active' : ''
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
              activeIndex === index ? 'visible' : 'hidden'
            }`}
          >
            {exp.description}
          </p>
        ))}
      </div>
    </div>
  )
};

export default Experience;
