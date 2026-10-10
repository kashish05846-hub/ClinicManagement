import { memo, useState } from "react";
import "../CSS/Appointment.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

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
      !formData.doctor ||
      !formData.service ||
      !formData.date ||
      !formData.time
    ) {
      setSuccess("Please fill all required fields.");
      return;
    }

    setSuccess("Appointment booked successfully!");

    console.log("Appointment Data:", formData);
  };

  return (
    <div className="appointment-page">
      <div className="appointment-container">
        {/* LEFT SIDE */}
        <div className="appointment-info">
          <div className="appointment-icon">📅</div>

          <h1>Book an Appointment</h1>

          <p>
            Schedule your appointment with our experienced doctors and take the
            first step towards better health.
          </p>

          <div className="appointment-features">
            <div className="feature-item">
              <span>✓</span>
              <p>Experienced Doctors</p>
            </div>

            <div className="feature-item">
              <span>✓</span>
              <p>Modern Medical Facilities</p>
            </div>

            <div className="feature-item">
              <span>✓</span>
              <p>24/7 Patient Support</p>
            </div>
          </div>

          <div className="appointment-contact">
            <h3>Need Help?</h3>
            <p>📞 +91 98765 43210</p>
            <p>✉ careplusclinic@gmail.com</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="appointment-form-section">
          <div className="appointment-heading">
            <h2>Appointment Details</h2>
            <p>Please enter your details below</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              {/* NAME */}
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

              {/* EMAIL */}
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

            <div className="form-row">
              {/* PHONE */}
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* DOCTOR */}
              <div className="form-group">
                <label htmlFor="doctor">Select Doctor *</label>

                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                >
                  <option value="">Select a doctor</option>

                  <option value="Dr. John Smith">Dr. John Smith</option>

                  <option value="Dr. Sarah Williams">Dr. Sarah Williams</option>

                  <option value="Dr. Michael Brown">Dr. Michael Brown</option>

                  <option value="Dr. Emily Johnson">Dr. Emily Johnson</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              {/* SERVICE */}
              <div className="form-group">
                <label htmlFor="service">Select Service *</label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>

                  <option value="General Checkup">General Checkup</option>

                  <option value="Dental Care">Dental Care</option>

                  <option value="Cardiology">Cardiology</option>

                  <option value="Pediatrics">Pediatrics</option>

                  <option value="Laboratory">Laboratory</option>
                </select>
              </div>

              {/* DATE */}
              <div className="form-group">
                <label htmlFor="date">Appointment Date *</label>

                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              {/* TIME */}
              <div className="form-group">
                <label htmlFor="time">Appointment Time *</label>

                <input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group empty-group"></div>
            </div>

            {/* MESSAGE */}
            <div className="form-group full-width">
              <label htmlFor="message">Additional Information</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your concern..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* BUTTON */}
            <button type="submit" className="appointment-btn">
              Book Appointment
            </button>

            {success && (
              <p
                className={
                  success.includes("successfully")
                    ? "appointment-message success"
                    : "appointment-message error"
                }
              >
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(Appointment);
