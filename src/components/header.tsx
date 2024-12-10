import { CustomStyle } from "../pages/home";
import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <a href="/">
      <div className="stack" style={{ "--stacks": 3 } as CustomStyle}>
        <span style={{ "--index": 0 } as CustomStyle}>GG</span>
        <span style={{ "--index": 1 } as CustomStyle}>GG</span>
        <span style={{ "--index": 2 } as CustomStyle}>GG</span>
      </div>
      </a>
      <div className="flex">
        <div>
          <a href="/about">About me</a>
        </div>
        <div>
          <a href="/credits">Credits</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
