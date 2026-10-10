import { memo } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <button className="login-button" onClick={() => navigate("/login")}>
        SignIn
      </button>
    </nav>
  );
};

export default memo(Nav);
