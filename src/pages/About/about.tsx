import "./About.css"; 
import Cat from '../../assets/photographs/Cat.jpg'
import Pigeon from '../../assets/photographs/Pigeon-BW.jpg'
import Beach from '../../assets/photographs/Beach Vibe.jpeg'
import Arrow from '../../assets/sketches/Arrow.jpg'
import IceCube from '../../assets/sketches/IceCube.jpg'
import Goku from '../../assets/sketches/Goku.jpg'
import Gowthaman from '../../assets/Gowthaman-Ganesan.jpg'

const About = () => {
  return (
    <div className="about-page">
      {/* Section: About Me */}
      <section className="about-me">
        <div className="photo-container">
          <img
            src={Gowthaman}
            alt="Your Name"
            className="profile-photo"
          />
        </div>
        <div className="about-description">
          <h2>About Me</h2>
          <p>
            Hello! I'm <span className="cyberpunk-text">Your Name</span>, a web
            developer with a passion for <span className="cyberpunk-text">photography</span> and{" "}
            <span className="cyberpunk-text">sketching</span>. I enjoy creating{" "}
            <span className="cyberpunk-text">futuristic designs</span> and
            exploring the boundaries of technology and art. Welcome to my
            corner of creativity!
          </p>
        </div>
      </section>

      {/* Section: Photography */}
      <section className="gallery photography">
        <h2 className="section-title">Photography</h2>
        <div className="photo-grid">
          <img src={Cat} alt="Photo 1" className="photo" />
          <img src={Pigeon} alt="Photo 2" className="photo" />
          <img src={Beach} alt="Photo 3" className="photo" />
        </div>
      </section>

      {/* Section: Sketches */}
      <section className="gallery sketches">
        <h2 className="section-title">Sketches</h2>
        <div className="photo-grid">
          <img src={Arrow} alt="Sketch 1" className="photo" />
          <img src={IceCube} alt="Sketch 2" className="photo" />
          <img src={Goku} alt="Sketch 3" className="photo" />
        </div>
      </section>
    </div>
  );
};

export default About;
