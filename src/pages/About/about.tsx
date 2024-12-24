import "./about.css";
import "../Home/home.css";
import Arrow from "../../assets/sketches/Arrow.jpg";
import IceCube from "../../assets/sketches/IceCube.jpg";
import IronMan from "../../assets/sketches/IronMan.jpg";
import Gowthaman from "../../assets/Gowthaman-Ganesan.jpg";
import useLazyLoadImages from "../../hooks/useLazyLoadImages.tsx";
import GlitchText from "../../components/GlitchWord/glitchWord.tsx";
import Carousel, { CarouselObj } from "../../components/Carousel/carousel.tsx";
import { photos } from "../../constant.ts";

const sketches: CarouselObj[] = [
  {
    id: 1,
    image: Arrow,
    title: "Green Arrow",
    description: "Sketch of a Green Arrow",
  },
  {
    id: 2,
    image: IceCube,
    title: "Ice Cube",
    description: "Sometimes people call me nice cube",
  },
  {
    id: 3,
    image: IronMan,
    title: "Iron Man",
    description:
      "If you are nothing without the suit, you should not have the suit",
  },
];

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

      {/* Section: Photography */}
      <div className="tba">
        <section>
          <GlitchText text="Photography" />
          <Carousel carouselArr={photos} />
        </section>

        {/* Section: Sketches */}
        <section>
          <GlitchText text="Sketches" />
          <Carousel carouselArr={sketches} />
        </section>
      </div>
    </div>
  );
};

export default About;
