import { memo } from "react";
import logo from "../assets/CarePlus.png";
import "./Header.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-container">
        <header className="header">
          <img src={logo} alt="CarePlus Clinic" onClick={() => navigate("/")} />
          <Nav />
        </header>
      </div>
    </>
  );
};

export default memo(Header);
