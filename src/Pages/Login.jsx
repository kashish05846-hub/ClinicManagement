import { memo, useState } from "react";
import logo from "../assets/CarePlus.png";
import "../CSS/Login.css";
import LoginImage from "../assets/LoginImage.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setMessage("Please enter your email/username and password.");
      return;
    }

    setMessage("Login successful!");

    console.log("Login data:", formData);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* LEFT IMAGE */}
        <div className="login-image">
          <img src={LoginImage} alt="CarePlus Clinic" />
        </div>

        {/* RIGHT SIDE */}
        <div className="login-form-section">
          {/* LOGO */}
          <div className="login-logo">
            <img src={logo} alt="CarePlus Clinic" className="careplus-logo" />
          </div>

          {/* WELCOME */}
          <div className="welcome-text">
            <h2>Welcome Back!</h2>
            <p>Login to your account</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            {/* USERNAME */}
            <div className="form-group">
              <label htmlFor="username">Email or Username</label>

              <div className="input-wrapper">
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Enter your email or username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="input-wrapper">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* OPTIONS */}
            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />

                <span>Remember me</span>
              </label>

              <a href="#" onClick={(e) => e.preventDefault()}>
                Forgot password?
              </a>
            </div>

            {/* LOGIN BUTTON */}
            <button type="submit" className="login-btn">
              Login
            </button>

            {/* MESSAGE */}
            {message && (
              <p
                className={
                  message === "Login successful!"
                    ? "message success"
                    : "message error"
                }
              >
                {message}
              </p>
            )}
          </form>

          {/* REGISTER */}
          <p className="register-text">
            Don't have an account?
            <Link to="/signup"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
