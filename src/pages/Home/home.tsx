import Experience from "../../components/Experience/experience.tsx";
import "./home.css";
import "../../mediaQueries.css"
import GlitchText from "../../components/GlitchText/glitchText.tsx";

const Home = () => {
  return (
    <div className="section">
      <div className="section-1">
        <GlitchText text="GOWTHAMAN GANESAN"/>
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
        <div className="scroll-text">Scroll</div>
      </div>
      <Experience />
    </div>
  );
};

export default Home;
