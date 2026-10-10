import { memo, useState } from "react";
import logo from "../assets/CarePlus.png";
import "../CSS/Signup.css";
import LoginImage from "../assets/LoginImage.png";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Account created successfully!");

    console.log("Signup Data:", formData);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* LEFT IMAGE */}
        <div className="signup-image">
          <img src={LoginImage} alt="CarePlus Clinic" />
        </div>

        {/* RIGHT FORM */}
        <div className="signup-form-section">
          {/* LOGO */}
          <div className="signup-logo">
            <img src={logo} alt="CarePlus Clinic" />
          </div>

          {/* TITLE */}
          <div className="signup-heading">
            <h2>Create Account</h2>
            <p>Register to access your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>

              <div className="input-wrapper">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">Email</label>

              <div className="input-wrapper">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>

              <div className="input-wrapper">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
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
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>

              <div className="input-wrapper">
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* BUTTON */}
            <button type="submit" className="signup-btn">
              Create Account
            </button>

            {/* MESSAGE */}
            {message && (
              <p
                className={
                  message === "Account created successfully!"
                    ? "signup-message success"
                    : "signup-message error"
                }
              >
                {message}
              </p>
            )}
          </form>

          {/* LOGIN */}
          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Signup);
