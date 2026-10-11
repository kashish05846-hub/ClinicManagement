import { memo, useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav-wrapper">
      {/* Three-line menu button */}
      <button
        type="button"
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation links */}
      <div className={`nav ${menuOpen ? "nav-open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/doctors" onClick={closeMenu}>
          Doctors
        </Link>

        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <button
          type="button"
          className="login-button"
          onClick={() => {
            closeMenu();
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default memo(Nav);
