import Experience from "../components/Experience/experience";
import "./home.css";

interface CustomStyle extends React.CSSProperties {
  "--index"?: number;
}

const Home = () => {
  return (
    <div className="section">
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
      <Experience/>
    </div>
  );
};

export default Home;
