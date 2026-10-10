import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/DoctorRegistration.css";

const DoctorRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    specialization: "",
    qualification: "",
    experience: "",
    consultationFee: "",
    licenseNumber: "",
    availableDays: "",
    address: "",
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

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "gender",
      "specialization",
      "qualification",
      "experience",
      "consultationFee",
      "licenseNumber",
      "availableDays",
      "address",
    ];

    const isIncomplete = requiredFields.some(
      (field) => !String(formData[field]).trim(),
    );

    if (isIncomplete) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setMessage("Doctor details submitted successfully!");

    // Frontend demo: data is not saved to a database yet.
    console.log("Doctor Details:", formData);
  };

  return (
    <div className="doctor-registration-page">
      {/* Page Header */}
      <div className="doctor-registration-header">
        <div>
          <p className="dr-page-label">CAREPLUS CLINIC</p>
          <h1>Doctor Registration</h1>
          <p className="dr-page-subtitle">
            Register a new doctor and add professional details.
          </p>
        </div>

        <button
          type="button"
          className="dr-back-btn"
          onClick={() => navigate("/doctors")}
        >
          &larr; Back to Doctors
        </button>
      </div>

      {/* Form */}
      <div className="doctor-registration-card">
        <div className="dr-card-heading">
          <h2>Doctor Information</h2>
          <p>Fields marked with * are required.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <section className="dr-form-section">
            <h3>Personal Information</h3>

            <div className="dr-form-grid">
              <div className="dr-form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="dr-form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="dr-form-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              <div className="dr-form-group">
                <label htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Contact Details */}
          <section className="dr-form-section">
            <h3>Contact Information</h3>

            <div className="dr-form-grid">
              <div className="dr-form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="doctor@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="dr-form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="dr-form-group dr-full-width">
                <label htmlFor="address">Clinic / Contact Address *</label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  placeholder="Enter complete address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          {/* Professional Details */}
          <section className="dr-form-section">
            <h3>Professional Information</h3>

            <div className="dr-form-grid">
              <div className="dr-form-group">
                <label htmlFor="specialization">Specialization *</label>
                <select
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select specialization</option>
                  <option value="General Physician">General Physician</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Dentist">Dentist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Orthopedic">Orthopedic</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="dr-form-group">
                <label htmlFor="qualification">Qualification *</label>
                <input
                  id="qualification"
                  name="qualification"
                  type="text"
                  placeholder="e.g. MBBS, MD"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="dr-form-group">
                <label htmlFor="experience">Experience (Years) *</label>
                <input
                  id="experience"
                  name="experience"
                  type="number"
                  min="0"
                  placeholder="Years of experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="dr-form-group">
                <label htmlFor="consultationFee">Consultation Fee (₹) *</label>
                <input
                  id="consultationFee"
                  name="consultationFee"
                  type="number"
                  min="0"
                  placeholder="Enter fee"
                  value={formData.consultationFee}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="dr-form-group">
                <label htmlFor="licenseNumber">Medical License Number *</label>
                <input
                  id="licenseNumber"
                  name="licenseNumber"
                  type="text"
                  placeholder="Enter registration number"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="dr-form-group">
                <label htmlFor="availableDays">Available Days *</label>
                <select
                  id="availableDays"
                  name="availableDays"
                  value={formData.availableDays}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select availability</option>
                  <option value="Monday - Friday">Monday - Friday</option>
                  <option value="Monday - Saturday">Monday - Saturday</option>
                  <option value="All Days">All Days</option>
                  <option value="Weekends Only">Weekends Only</option>
                </select>
              </div>
            </div>
          </section>

          {/* Form Buttons */}
          <div className="dr-form-actions">
            <button
              type="button"
              className="dr-cancel-btn"
              onClick={() => navigate("/doctors")}
            >
              Cancel
            </button>

            <button type="submit" className="dr-save-btn">
              Register Doctor
            </button>
          </div>

          {message && (
            <p
              className={
                message.includes("successfully")
                  ? "dr-message success"
                  : "dr-message error"
              }
              role="status"
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default memo(DoctorRegistration);
