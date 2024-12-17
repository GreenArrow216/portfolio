import "./about.css";
import "../Home/home.css";
import Cat from "../../assets/photographs/Cat.jpg";
import Pigeon from "../../assets/photographs/Pigeon-BW.jpg";
import Beach from "../../assets/photographs/Beach Vibe.jpeg";
import Arrow from "../../assets/sketches/Arrow.jpg";
import IceCube from "../../assets/sketches/IceCube.jpg";
import Goku from "../../assets/sketches/Goku.jpg";
import Gowthaman from "../../assets/Gowthaman-Ganesan.jpg";
import useLazyLoadImages from "../../hooks/useLazyLoadImages.tsx";
import GlitchText from "../../components/GlitchText/glitchText.tsx";

type ImgObj = {
  id: number;
  src: string;
  altText: string;
};

const sketches: ImgObj[] = [
  {
    id: 1,
    src: Arrow,
    altText: "arrow.jpg",
  },
  {
    id: 2,
    src: IceCube,
    altText: "iceCube.jpg",
  },
  { id: 3, src: Goku, altText: "goku.jpg" },
];

const photos: ImgObj[] = [
  { id: 1, src: Cat, altText: "Cat.jpg" },
  { id: 2, src: Pigeon, altText: "Pigeon.jpg" },
  { id: 3, src: Beach, altText: "Beach.jpg" },
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
      <section className="gallery photography">

      <GlitchText text="Photography" />
        <div className="photo-grid">
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.src}
              alt={photo.altText}
              className="photo"
            />
          ))}
        </div>
      </section>

      {/* Section: Sketches */}
      <section className="gallery sketches">
      <GlitchText text="Sketches" />
        <div className="photo-grid">
          {sketches.map((sketch) => (
            <img
              key={sketch.id}
              src={sketch.src}
              alt={sketch.altText}
              className="photo"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
