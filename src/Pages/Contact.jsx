import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Contact.css";
import image from "../assets/LoginImage.png";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

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
      !formData.subject ||
      !formData.message
    ) {
      setStatus("Please fill all fields.");
      return;
    }

    setStatus("Your message has been sent successfully!");

    console.log("Contact Data:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-label">GET IN TOUCH</p>

          <h1>
            We're Here to
            <span> Help You</span>
          </h1>

          <p>
            Have a question, need assistance, or want to schedule an
            appointment? Our team is ready to help you with your healthcare
            needs.
          </p>

          <button onClick={() => navigate("/appointment")}>
            Book Appointment
          </button>
        </div>

        <div className="contact-hero-image">
          <img src={image} alt="CarePlus Clinic" />
        </div>
      </section>

      {/* =========================
          CONTACT INFORMATION
      ========================= */}
      <section className="contact-info-section">
        <div className="contact-card">
          <div className="contact-icon">📍</div>

          <h3>Our Location</h3>

          <p>
            123 Care Street,
            <br />
            Medical City, India
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📞</div>

          <h3>Phone Number</h3>

          <p>
            +91 98765 43210
            <br />
            +91 91234 56789
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">✉</div>

          <h3>Email Address</h3>

          <p>
            careplusclinic@gmail.com
            <br />
            support@careplusclinic.com
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">🕒</div>

          <h3>Opening Hours</h3>

          <p>
            Mon - Sat: 9:00 AM - 8:00 PM
            <br />
            Sunday: Emergency Only
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT FORM + MAP
      ========================= */}
      <section className="contact-main">
        {/* CONTACT FORM */}
        <div className="contact-form-section">
          <div className="section-heading">
            <p className="section-label">SEND US A MESSAGE</p>

            <h2>How Can We Help?</h2>

            <p>
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>

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

            <div className="contact-form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="send-message-btn">
              Send Message
            </button>

            {status && (
              <p
                className={
                  status.includes("successfully")
                    ? "form-status success"
                    : "form-status error"
                }
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* MAP / LOCATION */}
        <div className="map-section">
          <div className="map-placeholder">
            <div className="map-icon">📍</div>

            <h3>CarePlus Clinic</h3>

            <p>123 Care Street, Medical City, India</p>

            <button
              onClick={() =>
                window.open("https://www.google.com/maps", "_blank")
              }
            >
              View on Google Maps
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          EMERGENCY CTA
      ========================= */}
      <section className="emergency-section">
        <div>
          <p className="emergency-small">NEED IMMEDIATE ASSISTANCE?</p>

          <h2>We're Available for You</h2>

          <p>For urgent medical assistance, please call our support team.</p>
        </div>

        <a href="tel:+919876543210">📞 Call Now</a>
      </section>
    </div>
  );
};

export default memo(Contact);
