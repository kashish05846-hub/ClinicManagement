import { memo } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/LearnMore.css";
import doctor from "../assets/homedoctor.png";
import clinicBuilding from "../assets//LoginImage.png";

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-more-page">
      {/* HERO SECTION */}
      <section className="learn-hero">
        <div className="learn-hero-content">
          <span className="small-title">ABOUT CAREPLUS CLINIC</span>

          <h1>
            Better Care.
            <br />
            Better Health.
          </h1>

          <p>
            At CarePlus Clinic, we are committed to providing compassionate,
            reliable, and modern healthcare for you and your family.
          </p>

          <button
            className="appointment-btn"
            onClick={() => navigate("/appointment")}
          >
            Book Appointment
          </button>
        </div>

        <div className="learn-hero-image">
          <img src={doctor} alt="CarePlus Clinic" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-careplus">
        <div className="about-image">
          <img src={clinicBuilding} alt="CarePlus Clinic Building" />
        </div>

        <div className="about-content">
          <span className="section-label">WHO WE ARE</span>

          <h2>
            Your Health Is Our
            <span> Priority</span>
          </h2>

          <p>
            CarePlus Clinic is a patient-focused healthcare center dedicated to
            delivering quality medical care. Our experienced doctors and trained
            staff work together to make every patient's healthcare journey
            comfortable and stress-free.
          </p>

          <p>
            From routine checkups to specialized treatments, we use modern
            medical technology and follow professional healthcare practices to
            provide dependable care.
          </p>

          <div className="about-points">
            <div className="about-point">
              <span>✓</span>
              <p>Experienced Medical Professionals</p>
            </div>

            <div className="about-point">
              <span>✓</span>
              <p>Modern Healthcare Facilities</p>
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

      {/* SERVICES */}
      <section className="care-services">
        <div className="section-heading">
          <span className="section-label">WHAT WE PROVIDE</span>

          <h2>Quality Healthcare Services</h2>

          <p>
            Our clinic provides a wide range of healthcare services designed
            around your needs.
          </p>
        </div>

        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">🩺</div>
            <h3>General Checkup</h3>
            <p>
              Regular health examinations and preventive healthcare for all age
              groups.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">❤️</div>
            <h3>Cardiology</h3>
            <p>Professional cardiovascular care and heart health monitoring.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🦷</div>
            <h3>Dental Care</h3>
            <p>Complete dental care for a healthy and confident smile.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">👶</div>
            <h3>Pediatrics</h3>
            <p>
              Dedicated healthcare services for children and growing families.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-careplus">
        <div className="section-heading">
          <span className="section-label">WHY CHOOSE US</span>

          <h2>We Care About Your Well-Being</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <span>01</span>
            <h3>Expert Doctors</h3>
            <p>
              Our doctors bring knowledge, experience, and dedication to every
              consultation.
            </p>
          </div>

          <div className="why-card">
            <span>02</span>
            <h3>Modern Equipment</h3>
            <p>
              Advanced technology helps our medical team provide accurate
              diagnosis and treatment.
            </p>
          </div>

          <div className="why-card">
            <span>03</span>
            <h3>Patient Support</h3>
            <p>
              We are always here to make your healthcare experience easier and
              more comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="learn-cta">
        <h2>Ready to Take Care of Your Health?</h2>

        <p>Schedule your appointment with CarePlus Clinic today.</p>

        <button onClick={() => navigate("/appointment")}>
          Book an Appointment
        </button>
      </section>
    </div>
  );
};

export default memo(LearnMore);
