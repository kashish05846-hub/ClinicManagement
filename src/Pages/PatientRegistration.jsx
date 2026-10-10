import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/PatientRegistration.css";

const PatientRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    email: "",
    bloodGroup: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    emergencyName: "",
    emergencyPhone: "",
    medicalHistory: "",
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
      !formData.firstName ||
      !formData.lastName ||
      !formData.dateOfBirth ||
      !formData.gender ||
      !formData.phone ||
      !formData.email ||
      !formData.bloodGroup ||
      !formData.address
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    setMessage("Patient registered successfully!");

    console.log("Patient Data:", formData);
  };

  return (
    <div className="patient-registration-page">
      {/* PAGE HEADER */}
      <div className="registration-header">
        <div>
          <p className="page-label">CAREPLUS CLINIC</p>

          <h1>Patient Registration</h1>

          <p className="page-subtitle">Add a new patient to the clinic.</p>
        </div>

        <button className="back-btn" onClick={() => navigate("/patients")}>
          ← Back to Patients
        </button>
      </div>

      {/* FORM CONTAINER */}
      <div className="registration-box">
        <div className="registration-title">
          <h2>Patient Information</h2>

          <p>Please enter the patient's details carefully.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* =========================
              PERSONAL INFORMATION
          ========================= */}
          <div className="form-section">
            <h3>Personal Information</h3>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>

                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>

                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth *</label>

                <input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender *</label>

                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>

                  <option value="Male">Male</option>

                  <option value="Female">Female</option>

                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* =========================
              CONTACT INFORMATION
          ========================= */}
          <div className="form-section">
            <h3>Contact Information</h3>

            <div className="form-grid">
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

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bloodGroup">Blood Group *</label>

                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Select Blood Group</option>

                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="address">Address *</label>

              <textarea
                id="address"
                name="address"
                rows="3"
                placeholder="Enter complete address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-grid three-column">
              <div className="form-group">
                <label htmlFor="city">City</label>

                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">State</label>

                <input
                  id="state"
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>

                <input
                  id="pincode"
                  type="text"
                  name="pincode"
                  placeholder="Enter pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* =========================
              EMERGENCY CONTACT
          ========================= */}
          <div className="form-section">
            <h3>Emergency Contact</h3>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="emergencyName">Contact Name</label>

                <input
                  id="emergencyName"
                  type="text"
                  name="emergencyName"
                  placeholder="Emergency contact name"
                  value={formData.emergencyName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="emergencyPhone">Contact Phone</label>

                <input
                  id="emergencyPhone"
                  type="tel"
                  name="emergencyPhone"
                  placeholder="Emergency contact number"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* =========================
              MEDICAL HISTORY
          ========================= */}
          <div className="form-section">
            <h3>Medical Information</h3>

            <div className="form-group full-width">
              <label htmlFor="medicalHistory">
                Medical History / Additional Information
              </label>

              <textarea
                id="medicalHistory"
                name="medicalHistory"
                rows="5"
                placeholder="Enter previous medical history, allergies, current medications, etc."
                value={formData.medicalHistory}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/patients")}
            >
              Cancel
            </button>

            <button type="submit" className="save-btn">
              Register Patient
            </button>
          </div>

          {message && (
            <p
              className={
                message.includes("successfully")
                  ? "registration-message success"
                  : "registration-message error"
              }
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default memo(PatientRegistration);
