import "./header.css";
import header from "../../assets/img/header.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React JS & Node JS</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={header} alt="header" />
    </div>
  );
};

export default Header;
