import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <p className="logo">GG</p>
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
