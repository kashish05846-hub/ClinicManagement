import { memo } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/About.css";
import Image from "../assets/LoginImage.png";
import doctor from "../assets/homedoctor.png";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-label">ABOUT CAREPLUS CLINIC</p>

          <h1>
            Caring for Your
            <span> Health</span>
          </h1>

          <p className="about-hero-text">
            At CarePlus Clinic, we are committed to providing quality healthcare
            with compassion, advanced technology, and experienced medical
            professionals.
          </p>

          <button
            className="about-btn"
            onClick={() => navigate("/appointment")}
          >
            Book Appointment
          </button>
        </div>

        <div className="about-hero-image">
          <img src={Image} alt="CarePlus Clinic" />
        </div>
      </section>

      {/* =========================
          WHO WE ARE
      ========================= */}
      <section className="who-section">
        <div className="who-image">
          <img src={doctor} alt="CarePlus Clinic Building" />
        </div>

        <div className="who-content">
          <p className="section-label">WHO WE ARE</p>

          <h2>
            Your <span>Health</span> Is Our
            <span> Priority</span>
          </h2>

          <p>
            CarePlus Clinic is a patient-focused healthcare center dedicated to
            delivering reliable and compassionate medical care.
          </p>

          <p>
            Our experienced doctors, trained staff, and modern facilities work
            together to provide comfortable and effective healthcare for every
            patient.
          </p>

          <div className="about-points">
            <div className="about-point">
              <span>✓</span>
              <p>Experienced Doctors</p>
            </div>

            <div className="about-point">
              <span>✓</span>
              <p>Modern Medical Equipment</p>
            </div>

            <div className="about-point">
              <span>✓</span>
              <p>Patient-Centered Care</p>
            </div>

            <div className="about-point">
              <span>✓</span>
              <p>24/7 Patient Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          MISSION & VISION
      ========================= */}
      <section className="mission-section">
        <div className="section-heading">
          <p className="section-label">OUR VALUES</p>

          <h2>Our Mission & Vision</h2>

          <p>
            We believe that quality healthcare should be accessible,
            comfortable, and centered around every patient's needs.
          </p>
        </div>

        <div className="mission-cards">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>

            <h3>Our Mission</h3>

            <p>
              To provide dependable, compassionate, and high-quality healthcare
              while putting our patients first.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">👁</div>

            <h3>Our Vision</h3>

            <p>
              To build a trusted healthcare environment where modern medicine
              and compassionate care come together.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">❤️</div>

            <h3>Our Values</h3>

            <p>
              We value trust, empathy, professionalism, respect, and dedication
              in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          WHY CHOOSE US
      ========================= */}
      <section className="why-section">
        <div className="section-heading">
          <p className="section-label">WHY CHOOSE CAREPLUS</p>

          <h2>Why Patients Trust Us</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <span className="why-number">01</span>

            <h3>Expert Doctors</h3>

            <p>
              Skilled medical professionals dedicated to providing personalized
              care.
            </p>
          </div>

          <div className="why-card">
            <span className="why-number">02</span>

            <h3>Modern Facilities</h3>

            <p>
              Comfortable facilities supported by modern healthcare technology.
            </p>
          </div>

          <div className="why-card">
            <span className="why-number">03</span>

            <h3>Patient First</h3>

            <p>
              Every decision is focused on patient safety, comfort, and
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <section className="about-cta">
        <h2>Take the First Step Towards Better Health</h2>

        <p>Our team is ready to support you and your family.</p>

        <button onClick={() => navigate("/appointment")}>
          Book an Appointment
        </button>
      </section>
    </div>
  );
};

export default memo(About);
