import { memo } from "react";
import "./Footer.css";
import medikit from "../assets/medikit.jpg";
import doctor from "../assets/doctor.jpg";
import images from "../assets/images.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-section">
      <div className="doctors">
        <span onClick={() => navigate("/doctors")}>
          <img src={doctor} alt="Not found" />
          <h3>Expert Doctors</h3>
        </span>
        <p>
          With years of experience, our doctors provide the best care for your
          health.
        </p>
      </div>
      <div className="medikit">
        <span onClick={() => navigate("/equipment")}>
          <img src={medikit} alt="Not found" />
          <h3>Modern Equipment</h3>
        </span>
        <p>
          We use the latest medical technology to ensure accurate diagnosis and
          effective treatment.
        </p>
      </div>
      <div className="contact">
        <span onClick={() => navigate("/contact")}>
          <img src={images} alt="Not found" />
          <h3>24/7 Support</h3>
        </span>
        <p>
          We are always here for you, providing round-the-clock support and
          assistance whenever you need us. Your health and well-being are our
          priority.
        </p>
      </div>
    </div>
  );
};

export default memo(Footer);
