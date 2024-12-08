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
      <div className="section-2">
        <div className="experience">
          <div className="company-logo">Company logo</div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised
          </div>
          {/* <div className="company-logo">Company Logo</div>
          <div className="description">
            
          </div> */}
        </div>
        <div className="experience">
          <div className="company-logo">Company logo</div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised
          </div>
        </div>
        <div className="experience">
          <div className="company-logo">Company logo</div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
