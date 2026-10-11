import { memo } from "react";
import { Link } from "react-router-dom";
import "../CSS/ModernEquipment.css";

const equipmentList = [
  {
    icon: "🩻",
    title: "Digital X-Ray",
    category: "IMAGING",
    description:
      "Digital imaging technology supports detailed views to assist medical evaluation.",
    features: ["Digital image capture", "Diagnostic support"],
  },
  {
    icon: "🫀",
    title: "ECG Machine",
    category: "HEART CARE",
    description:
      "Records the electrical activity of the heart to support cardiac assessment.",
    features: ["Heart activity recording", "Quick test workflow"],
  },
  {
    icon: "🩺",
    title: "Patient Monitoring",
    category: "MONITORING",
    description:
      "Monitoring equipment helps healthcare professionals observe important vital signs.",
    features: ["Vital sign display", "Bedside monitoring"],
  },
  {
    icon: "〰️",
    title: "Ultrasound System",
    category: "DIAGNOSTIC IMAGING",
    description:
      "Ultrasound technology uses sound waves to produce images for clinical evaluation.",
    features: ["Real-time imaging", "Non-invasive scanning"],
  },
  {
    icon: "🧪",
    title: "Lab Analyzer",
    category: "LABORATORY",
    description:
      "Laboratory analysis equipment supports the testing and assessment of patient samples.",
    features: ["Sample analysis", "Organized test workflow"],
  },
  {
    icon: "🌡️",
    title: "Digital Vitals Station",
    category: "PATIENT CARE",
    description:
      "Digital devices help record measurements such as temperature, pulse and blood pressure.",
    features: ["Digital measurements", "Easy-to-read results"],
  },
];

const ModernEquipment = () => {
  return (
    <div className="equipment-page">
      {/* Hero Section */}
      <section className="equipment-hero">
        <div className="equipment-hero-content">
          <p className="equipment-eyebrow">
            <span className="equipment-eyebrow-dot"></span>
            CAREPLUS CLINIC · SMARTER HEALTHCARE
          </p>

          <h1>
            Modern Equipment.
            <br />
            <span>Thoughtful Care.</span>
          </h1>

          <p className="equipment-hero-description">
            Discover the technology behind modern healthcare. Our focus is on
            supporting medical professionals with appropriate tools for patient
            assessment and care.
          </p>

          <div className="equipment-hero-buttons">
            <Link to="/appointment" className="equipment-primary-btn">
              Book Appointment <span>↗</span>
            </Link>

            <a href="#equipment-list" className="equipment-secondary-btn">
              Explore Equipment <span>↓</span>
            </a>
          </div>

          <div className="equipment-highlights">
            <div>
              <span className="highlight-icon">✓</span>
              <p>Patient-focused care</p>
            </div>
            <div>
              <span className="highlight-icon">✓</span>
              <p>Modern diagnostic tools</p>
            </div>
          </div>
        </div>

        {/* CSS-built Medical Illustration */}
        <div className="equipment-hero-visual">
          <div className="equipment-visual-orbit"></div>

          <div className="equipment-visual-badge badge-top">
            <span className="visual-badge-icon">✚</span>
            <div>
              <strong>Care comes first</strong>
              <small>Technology with purpose</small>
            </div>
          </div>

          <div className="equipment-monitor">
            <div className="monitor-header">
              <div className="monitor-brand">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <small>VITALS DISPLAY</small>
              <span className="monitor-status">●</span>
            </div>

            <div className="monitor-screen">
              <p>LIVE MONITORING</p>

              <div className="monitor-reading">
                <div>
                  <small>HEART RATE</small>
                  <strong>
                    72 <span>BPM</span>
                  </strong>
                </div>
                <div className="reading-heart">♥</div>
              </div>

              <svg
                className="ecg-line"
                viewBox="0 0 320 100"
                role="img"
                aria-label="Illustrative heart rhythm waveform"
              >
                <path
                  d="M0 53 H43 L55 43 L66 60 L80 10 L96 82 L111 48 H144 L158 53 H176 L191 35 L206 58 L219 20 L234 76 L250 52 H320"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="monitor-bottom">
                <span>
                  <i></i> Monitoring display
                </span>
                <span>Illustration</span>
              </div>
            </div>

            <div className="monitor-stand"></div>
            <div className="monitor-base"></div>
          </div>

          <div className="equipment-visual-badge badge-bottom">
            <div className="visual-shield">✚</div>
            <div>
              <strong>Better-informed care</strong>
              <small>Supporting clinical decisions</small>
            </div>
          </div>

          <div className="equipment-visual-circle circle-one"></div>
          <div className="equipment-visual-circle circle-two"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="equipment-intro">
        <p className="equipment-section-label">OUR TECHNOLOGY</p>
        <h2>
          The right tools for
          <span> better healthcare.</span>
        </h2>
        <p>
          Different medical needs require different tools. Explore some commonly
          used equipment categories and how they support care.
        </p>
      </section>

      {/* Equipment Cards */}
      <section className="equipment-grid-section" id="equipment-list">
        <div className="equipment-grid-heading">
          <div>
            <p className="equipment-section-label">EQUIPMENT OVERVIEW</p>
            <h2>Explore Our Equipment</h2>
          </div>
          <span className="equipment-count">
            {String(equipmentList.length).padStart(2, "0")} CATEGORIES
          </span>
        </div>

        <div className="equipment-grid">
          {equipmentList.map((item, index) => (
            <article className="equipment-card" key={item.title}>
              <div className="equipment-card-top">
                <div className="equipment-icon-box">
                  <span>{item.icon}</span>
                </div>
                <span className="equipment-card-number">0{index + 1}</span>
              </div>

              <p className="equipment-card-category">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="equipment-card-description">{item.description}</p>

              <div className="equipment-features">
                {item.features.map((feature) => (
                  <span key={feature}>
                    <span className="equipment-check">✓</span>
                    {feature}
                  </span>
                ))}
              </div>

              <div className="equipment-card-footer">
                <span>Medical technology</span>
                <span className="equipment-card-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Supporting Features */}
      <section className="equipment-care-section">
        <div className="equipment-care-heading">
          <p className="equipment-section-label">BEYOND THE EQUIPMENT</p>
          <h2>
            Technology is one part.
            <br />
            <span>Care makes the difference.</span>
          </h2>
        </div>

        <div className="equipment-care-items">
          <div>
            <span className="care-item-icon">01</span>
            <h3>Patient Comfort</h3>
            <p>
              A considerate approach helps patients feel informed and supported
              during their visit.
            </p>
          </div>

          <div>
            <span className="care-item-icon">02</span>
            <h3>Trained Professionals</h3>
            <p>
              Equipment should be operated by appropriately trained healthcare
              professionals.
            </p>
          </div>

          <div>
            <span className="care-item-icon">03</span>
            <h3>Responsible Use</h3>
            <p>
              Appropriate use, maintenance and hygiene are important parts of
              clinical equipment management.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="equipment-cta">
        <div>
          <p className="equipment-section-label">WE ARE HERE TO HELP</p>
          <h2>Your health deserves thoughtful care.</h2>
          <p>Connect with our team to learn more about available services.</p>
        </div>

        <Link to="/appointment" className="equipment-cta-btn">
          Book an Appointment <span>↗</span>
        </Link>
      </section>
    </div>
  );
};

export default memo(ModernEquipment);
