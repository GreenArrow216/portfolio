import "./home.css";
import OptiTwin from "../assets/Opti-twin.svg";
import OLora from "../assets/Orkney-Lora.jpg";
import Kissflow from "../assets/kissflow.svg";
import Mallow from "../assets/Mallow-tech.png"
import { useEffect } from "react";

export interface CustomStyle extends React.CSSProperties {
  "--index"?: number;
}

const Home = () => {

  return (
    <div className="sections" id={'scroll-container'}>
      <div className="stack" style={{ "--stacks": 3 } as CustomStyle}>
        <span style={{ "--index": 0 } as CustomStyle}>GOWTHAMAN GANESAN</span>
        <span style={{ "--index": 1 } as CustomStyle}>GOWTHAMAN GANESAN</span>
        <span style={{ "--index": 2 } as CustomStyle}>GOWTHAMAN GANESAN</span>
      </div>
      <div className="section-1">
        <div className="cyberpunk-box animate">
          <p>
            I'm a webdeveloper with{" "}
            <span className="cyberpunk-text">5 plus</span> years of experience
            in developing intuitive user interface and{" "}
            <span className="cyberpunk-text">mobile friendly responsive</span>{" "}
            websites. I have experience in HTML, CSS and JS. I have worked
            predominantly in modern framworks like{" "}
            <span className="cyberpunk-text">ReactJs</span> and{" "}
            <span className="cyberpunk-text">NextJs</span>
          </p>
        </div>
      </div>
      <div className="section-2">
        <div className="experience">
          <div className="company-logo">
            <img src={OptiTwin} alt={"opti-twin.logo"} />{" "}
            <p className="work-date">Feb 2023 - Dec 2024</p>
          </div>
          <div className="description">
            Successfully designed and deployed a website and mobile app within a
            tight three-month timeline using{" "}
            <span className="cyberpunk-text">
              TypeScript, Chakra UI, Apollo Client, and GraphQL
            </span>
            . Integrated advanced features like
            <span className="cyberpunk-text">drag-and-drop</span> and unique
            graph designs with <span className="cyberpunk-text">Visx</span>,
            ensuring type safety with GraphQL-codegen and seamless collaboration
            with backend teams. Migrated a React app to Next.js for improved
            performance and SEO, developed a{" "}
            <span className="cyberpunk-text">Storybook</span> component library
            for consistent UI, and utilized{" "}
            <span className="cyberpunk-text">Cypress</span> for BDD testing.
            Acted as <span className="cyberpunk-text">Scrum Master</span>,
            driving team collaboration and progress tracking, while gaining
            backend development experience in new domains.
          </div>
        </div>
        <div className="experience">
          <div className="company-logo">
            <img src={OLora} alt={"orkney-lora.logo"} />
            <p className="work-date">Jul 2022 - Feb 2023</p>
          </div>
          <div className="description">
            Worked as a part-time developer, developed a search SPA by
            integrating front-end and back-end, utilizing{" "}
            <span className="cyberpunk-text">
              Node.js, Express.js, and PostgreSQL
            </span>{" "}
            for API implementation. Designed and completed the search module,
            including wireframing, within 8 hours.
          </div>
        </div>
        <div className="experience">
          <div className="company-logo">
            <img src={Kissflow} alt={"Kissflow.logo"} />
            <p className="work-date">Feb 2021 - Aug 2021</p>
          </div>
          <div className="description">
            Developed a{" "}
            <span className="cyberpunk-text">new micro-frontend</span> service
            named Platform by migrating modules from other services.
            Successfully implemented and deployed bug-free search functionality
            for <span className="cyberpunk-text">mobile PWAs</span>. Gained
            hands-on experience with{" "}
            <span className="cyberpunk-text">Jenkins</span>, deploying two new
            features to production.
          </div>
        </div>
        <div className="experience">
          <div className="company-logo">
            <img src={Mallow} alt={"Mallow.logo"} />
            <p className="work-date">Oct 2018 - Jan 2021</p>
          </div>
          <div className="description">
            Designed responsive web apps using CSS/Bootstrap and established
            front-end coding standards. Built a fleet service SPA with HTML,
            CSS, JavaScript, and jQuery, and developed{" "}
            <span className="cyberpunk-text">4+ CRM modules</span> using {" "}
            <span className="cyberpunk-text">
              React, REST API, Redux, and Redux-Saga
            </span>
            . Created a <span className="cyberpunk-text">drag-and-drop</span>{" "}
            web application and contributed to Agile projects from inception.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
