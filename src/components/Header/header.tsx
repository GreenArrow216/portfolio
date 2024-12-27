import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <a href="/">
        <p className="logo">GG</p>
      </a>
      <div className="flex">
        <div>
          <a href="/about">About me</a>
        </div>
        {/* <div>
          <a href="/credits">Credits</a>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
