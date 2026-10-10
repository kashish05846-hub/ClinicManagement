import { memo } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Services.css";
import image from "../assets/LoginImage.png";

const services = [
  {
    id: 1,
    icon: "🩺",
    title: "General Checkup",
    description:
      "Complete health checkups, routine consultations, preventive care and early detection of common health conditions.",
  },
  {
    id: 2,
    icon: "❤️",
    title: "Cardiology",
    description:
      "Comprehensive heart care including cardiovascular consultation, monitoring and preventive healthcare.",
  },
  {
    id: 3,
    icon: "🦷",
    title: "Dental Care",
    description:
      "Professional dental services including routine checkups, cleaning, treatment and preventive oral care.",
  },
  {
    id: 4,
    icon: "👶",
    title: "Pediatrics",
    description:
      "Specialized healthcare for infants, children and teenagers with a focus on healthy growth and development.",
  },
  {
    id: 5,
    icon: "🧪",
    title: "Laboratory Services",
    description:
      "Reliable diagnostic testing and laboratory services to support accurate diagnosis and treatment.",
  },
  {
    id: 6,
    icon: "💊",
    title: "Pharmacy",
    description:
      "Convenient access to prescribed medicines and healthcare products with professional guidance.",
  },
  {
    id: 7,
    icon: "🧠",
    title: "Neurology",
    description:
      "Consultation and healthcare support for neurological conditions and nervous system health.",
  },
  {
    id: 8,
    icon: "🦴",
    title: "Orthopedics",
    description:
      "Care for bones, joints, muscles and movement-related conditions with personalized treatment plans.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="services-hero">
        <div className="services-hero-content">
          <p className="services-label">OUR HEALTHCARE SERVICES</p>

          <h1>
            Complete Care for
            <span> Better Health</span>
          </h1>

          <p>
            From routine checkups to specialized medical care, CarePlus Clinic
            provides reliable healthcare services designed around you and your
            family.
          </p>

          <button onClick={() => navigate("/appointment")}>
            Book Appointment
          </button>
        </div>

        <div className="services-hero-image">
          <img src={image} alt="CarePlus Clinic" />
        </div>
      </section>

      {/* =========================
          SERVICES LIST
      ========================= */}
      <section className="services-section">
        <div className="section-heading">
          <p className="section-label">WHAT WE OFFER</p>

          <h2>Our Medical Services</h2>

          <p>
            Quality healthcare services delivered by experienced medical
            professionals.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button onClick={() => navigate("/appointment")}>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          WHY OUR SERVICES
      ========================= */}
      <section className="service-benefits">
        <div className="section-heading">
          <p className="section-label">WHY CAREPLUS</p>

          <h2>Healthcare Designed Around You</h2>

          <p>
            We focus on making your healthcare experience simple, comfortable
            and dependable.
          </p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-number">01</div>

            <h3>Experienced Professionals</h3>

            <p>
              Our healthcare team brings experience, knowledge and dedication to
              every patient.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-number">02</div>

            <h3>Modern Technology</h3>

            <p>
              We use modern medical equipment and technology to support better
              diagnosis and care.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-number">03</div>

            <h3>Patient-Centered Care</h3>

            <p>
              Every service is designed with your comfort, safety and healthcare
              needs in mind.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <section className="services-cta">
        <h2>Ready to Take Care of Your Health?</h2>

        <p>Choose a service and schedule your appointment today.</p>

        <button onClick={() => navigate("/appointment")}>
          Book an Appointment
        </button>
      </section>
    </div>
  );
};

export default memo(Services);
