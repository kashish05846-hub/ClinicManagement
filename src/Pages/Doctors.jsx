import { memo } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Doctors.css";
import image from "../assets/LoginImage.png";
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";
import doctor3 from "../assets/doctor3.png";
import doctor4 from "../assets/doctor4.png";

const doctors = [
  {
    id: 1,
    image: doctor1,
    name: "Dr. John Smith",
    specialization: "Cardiologist",
    experience: "12+ Years Experience",
    description:
      "Specialist in heart health, cardiovascular diagnosis and preventive care.",
    availability: "Mon - Fri",
  },
  {
    id: 2,
    image: doctor2,
    name: "Dr. Sarah Williams",
    specialization: "Pediatrician",
    experience: "10+ Years Experience",
    description:
      "Experienced in providing compassionate healthcare for infants, children and families.",
    availability: "Mon - Sat",
  },
  {
    id: 3,
    image: doctor3,
    name: "Dr. Michael Brown",
    specialization: "General Physician",
    experience: "15+ Years Experience",
    description:
      "Provides complete general health consultations, diagnosis and preventive care.",
    availability: "Tue - Sat",
  },
  {
    id: 4,
    image: doctor4,
    name: "Dr. Emily Johnson",
    specialization: "Dentist",
    experience: "8+ Years Experience",
    description:
      "Focused on preventive, restorative and cosmetic dental treatments.",
    availability: "Mon - Fri",
  },
];

const Doctors = () => {
  const navigate = useNavigate();

  return (
    <div className="doctors-page">
      {/* =========================
          HERO
      ========================= */}
      <section className="doctors-hero">
        <div className="doctors-hero-content">
          <p className="doctors-label">OUR MEDICAL TEAM</p>

          <h1>
            Meet Our
            <span> Expert Doctors</span>
          </h1>

          <p>
            Our experienced medical professionals are dedicated to providing
            personalized, reliable and compassionate healthcare for every
            patient.
          </p>

          <button onClick={() => navigate("/appointment")}>
            Book Appointment
          </button>
        </div>

        <div className="doctors-hero-image">
          <img src={image} alt="CarePlus Clinic" />
        </div>
      </section>

      {/* =========================
          DOCTORS
      ========================= */}
      <section className="doctors-section">
        <div className="section-heading">
          <p className="section-label">OUR SPECIALISTS</p>

          <h2>Experienced & Trusted Doctors</h2>

          <p>Choose the right doctor for your healthcare needs.</p>
        </div>

        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              {/* Doctor Image */}
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>

              {/* Doctor Info */}
              <div className="doctor-info">
                <h3>{doctor.name}</h3>

                <p className="doctor-specialization">{doctor.specialization}</p>

                <p className="doctor-experience">{doctor.experience}</p>

                <p className="doctor-description">{doctor.description}</p>

                <div className="doctor-bottom">
                  <div className="availability">
                    <span>●</span>
                    Available: {doctor.availability}
                  </div>

                  <button onClick={() => navigate("/appointment")}>Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          SPECIALIZATIONS
      ========================= */}
      <section className="specialization-section">
        <div className="section-heading">
          <p className="section-label">SPECIALIZATIONS</p>

          <h2>Medical Care For Every Need</h2>
        </div>

        <div className="specialization-grid">
          <div className="specialization-card">
            <div className="specialization-icon">❤️</div>
            <h3>Cardiology</h3>
            <p>Comprehensive care for heart and cardiovascular health.</p>
          </div>

          <div className="specialization-card">
            <div className="specialization-icon">🩺</div>
            <h3>General Medicine</h3>
            <p>Diagnosis, treatment and preventive healthcare.</p>
          </div>

          <div className="specialization-card">
            <div className="specialization-icon">👶</div>
            <h3>Pediatrics</h3>
            <p>Caring healthcare services for children and infants.</p>
          </div>

          <div className="specialization-card">
            <div className="specialization-icon">🦷</div>
            <h3>Dental Care</h3>
            <p>Complete dental services for healthy smiles.</p>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <section className="doctors-cta">
        <h2>Need to Consult a Doctor?</h2>

        <p>Book your appointment with our experienced medical team today.</p>

        <button onClick={() => navigate("/appointment")}>
          Book an Appointment
        </button>
      </section>
    </div>
  );
};

export default memo(Doctors);
