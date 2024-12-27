import "./about.css";
import "../Home/home.css";
import Gowthaman from "../../assets/Gowthaman-Ganesan.jpg";
import useLazyLoadImages from "../../hooks/useLazyLoadImages.tsx";
import GlitchText from "../../components/GlitchWord/glitchWord.tsx";
import Carousel from "../../components/Carousel/carousel.tsx";
import { photos, projects, sketches } from "../../constant.ts";
import Badge from "../../components/Badge/badge.tsx";

const About = () => {
  useLazyLoadImages();
  return (
    <div className="about-page">
      {/* Section: About Me */}
      <GlitchText text="About me" />
      <section className="about-me">
        <div className="photo-container">
          <img src={Gowthaman} alt="Your Name" className="profile-photo" />
        </div>
        <div className="about-description">
          <p>
            <span className="cyberpunk-text">Greetings!</span> I'm Gowthaman
            Ganesan — a web developer by day, night, and everything in between.
            Crafting sleek, responsive designs is my passion, but when I step
            away from the keyboard, you’ll find me{" "}
            <span className="cyberpunk-text">capturing moments</span> through my
            lens or <span className="cyberpunk-text">sketching ideas</span> that
            merge art and imagination. Welcome to my digital realm!
          </p>
        </div>
      </section>

      <section className="photos-container">
        <div>
          <GlitchText text="Photography" />
          <Carousel carouselArr={photos} />
        </div>

        {/* Section: Sketches */}
        <div>
          <GlitchText text="Sketches" />
          <Carousel carouselArr={sketches} />
        </div>
      </section>

      <div className="project-container">
        <GlitchText text="Projects" />
        <div className="projects">
          {projects.map((project) => (
            <div className="project-details" key={project.id}>
              <p className="cyberpunk-text">{project.title}</p>
              <p className="desc">{project.desc}</p>
              <Badge>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </Badge>
              <Badge>
                <a
                  href={project.netlifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Netlify
                </a>
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
