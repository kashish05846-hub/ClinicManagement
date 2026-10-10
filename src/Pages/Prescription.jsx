import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Prescription.css";

const Prescription = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    date: new Date().toISOString().slice(0, 10),
    diagnosis: "",
    notes: "",
    followUpDate: "",
  });

  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "",
      dosage: "",
      frequency: "",
      duration: "",
      instructions: "",
    },
  ]);

  const [nextId, setNextId] = useState(2);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleMedicineChange = (id, field, value) => {
    setMedicines((prev) =>
      prev.map((medicine) =>
        medicine.id === id ? { ...medicine, [field]: value } : medicine,
      ),
    );

    setMessage("");
  };

  const addMedicine = () => {
    setMedicines((prev) => [
      ...prev,
      {
        id: nextId,
        name: "",
        dosage: "",
        frequency: "",
        duration: "",
        instructions: "",
      },
    ]);

    setNextId((prev) => prev + 1);
  };

  const removeMedicine = (id) => {
    setMedicines((prev) => prev.filter((medicine) => medicine.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.patient ||
      !formData.doctor ||
      !formData.date ||
      !formData.diagnosis.trim()
    ) {
      setMessage("Please fill in all required patient and diagnosis fields.");
      return;
    }

    if (
      medicines.some(
        (medicine) =>
          !medicine.name.trim() ||
          !medicine.dosage.trim() ||
          !medicine.frequency ||
          !medicine.duration.trim(),
      )
    ) {
      setMessage(
        "Please complete the medicine name, dosage, frequency and duration.",
      );
      return;
    }

    const prescriptionData = {
      ...formData,
      medicines,
    };

    console.log("Prescription:", prescriptionData);

    setMessage(
      "Prescription prepared successfully. Connect the backend to save it permanently.",
    );
  };

  return (
    <div className="prescription-page">
      {/* Header */}
      <div className="prescription-header">
        <div>
          <p className="prescription-label">CAREPLUS CLINIC</p>
          <h1>Create Prescription</h1>
          <p className="prescription-subtitle">
            Prepare a prescription for your patient.
          </p>
        </div>

        <button
          type="button"
          className="prescription-back-btn"
          onClick={() => navigate("/appointments")}
        >
          &larr; Back to Appointments
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Patient Information */}
        <section className="prescription-card">
          <div className="prescription-card-heading">
            <div className="prescription-heading-icon">👤</div>
            <div>
              <h2>Patient Information</h2>
              <p>Select the patient and prescribing doctor.</p>
            </div>
          </div>

          <div className="prescription-grid">
            <div className="prescription-field">
              <label htmlFor="patient">Patient Name *</label>
              <select
                id="patient"
                name="patient"
                value={formData.patient}
                onChange={handleChange}
                required
              >
                <option value="">Select patient</option>
                <option value="Rahul Sharma">Rahul Sharma</option>
                <option value="Priya Verma">Priya Verma</option>
                <option value="Amit Kumar">Amit Kumar</option>
                <option value="Anjali Singh">Anjali Singh</option>
                <option value="Rohit Yadav">Rohit Yadav</option>
              </select>
            </div>

            <div className="prescription-field">
              <label htmlFor="doctor">Doctor Name *</label>
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select doctor</option>
                <option value="Dr. John Smith">Dr. John Smith</option>
                <option value="Dr. Sarah Williams">Dr. Sarah Williams</option>
                <option value="Dr. Michael Brown">Dr. Michael Brown</option>
                <option value="Dr. Emily Johnson">Dr. Emily Johnson</option>
              </select>
            </div>

            <div className="prescription-field">
              <label htmlFor="date">Prescription Date *</label>
              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="prescription-field">
              <label htmlFor="followUpDate">Follow-up Date</label>
              <input
                id="followUpDate"
                type="date"
                name="followUpDate"
                min={formData.date}
                value={formData.followUpDate}
                onChange={handleChange}
              />
            </div>

            <div className="prescription-field full-width">
              <label htmlFor="diagnosis">Diagnosis *</label>
              <textarea
                id="diagnosis"
                name="diagnosis"
                rows="3"
                placeholder="Enter the doctor's diagnosis..."
                value={formData.diagnosis}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Medicines */}
        <section className="prescription-card">
          <div className="prescription-card-heading medicine-heading">
            <div className="prescription-heading-icon">💊</div>

            <div>
              <h2>Medicines</h2>
              <p>Add medicines and their prescribed instructions.</p>
            </div>

            <button
              type="button"
              className="add-medicine-btn"
              onClick={addMedicine}
            >
              + Add Medicine
            </button>
          </div>

          {medicines.map((medicine, index) => (
            <div className="medicine-entry" key={medicine.id}>
              <div className="medicine-entry-title">
                <h3>Medicine {index + 1}</h3>

                {medicines.length > 1 && (
                  <button
                    type="button"
                    className="remove-medicine-btn"
                    onClick={() => removeMedicine(medicine.id)}
                    aria-label={`Remove medicine ${index + 1}`}
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="prescription-grid">
                <div className="prescription-field">
                  <label htmlFor={`medicine-name-${medicine.id}`}>
                    Medicine Name *
                  </label>
                  <input
                    id={`medicine-name-${medicine.id}`}
                    type="text"
                    placeholder="Enter prescribed medicine"
                    value={medicine.name}
                    onChange={(e) =>
                      handleMedicineChange(medicine.id, "name", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="prescription-field">
                  <label htmlFor={`dosage-${medicine.id}`}>Dosage *</label>
                  <input
                    id={`dosage-${medicine.id}`}
                    type="text"
                    placeholder="e.g. 500 mg"
                    value={medicine.dosage}
                    onChange={(e) =>
                      handleMedicineChange(
                        medicine.id,
                        "dosage",
                        e.target.value,
                      )
                    }
                    required
                  />
                </div>

                <div className="prescription-field">
                  <label htmlFor={`frequency-${medicine.id}`}>
                    Frequency *
                  </label>
                  <select
                    id={`frequency-${medicine.id}`}
                    value={medicine.frequency}
                    onChange={(e) =>
                      handleMedicineChange(
                        medicine.id,
                        "frequency",
                        e.target.value,
                      )
                    }
                    required
                  >
                    <option value="">Select frequency</option>
                    <option value="Once daily">Once daily</option>
                    <option value="Twice daily">Twice daily</option>
                    <option value="Three times daily">Three times daily</option>
                    <option value="As prescribed">As prescribed</option>
                  </select>
                </div>

                <div className="prescription-field">
                  <label htmlFor={`duration-${medicine.id}`}>Duration *</label>
                  <input
                    id={`duration-${medicine.id}`}
                    type="text"
                    placeholder="e.g. 5 days"
                    value={medicine.duration}
                    onChange={(e) =>
                      handleMedicineChange(
                        medicine.id,
                        "duration",
                        e.target.value,
                      )
                    }
                    required
                  />
                </div>

                <div className="prescription-field full-width">
                  <label htmlFor={`instructions-${medicine.id}`}>
                    Medicine Instructions
                  </label>
                  <input
                    id={`instructions-${medicine.id}`}
                    type="text"
                    placeholder="e.g. Take after food, if prescribed"
                    value={medicine.instructions}
                    onChange={(e) =>
                      handleMedicineChange(
                        medicine.id,
                        "instructions",
                        e.target.value,
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Additional Instructions */}
        <section className="prescription-card">
          <div className="prescription-card-heading">
            <div className="prescription-heading-icon">📝</div>
            <div>
              <h2>Additional Instructions</h2>
              <p>Enter relevant advice for the patient.</p>
            </div>
          </div>

          <div className="prescription-field">
            <label htmlFor="notes">Doctor's Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              placeholder="Enter follow-up advice or other instructions..."
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Actions */}
        <div className="prescription-actions">
          <button
            type="button"
            className="prescription-cancel-btn"
            onClick={() => navigate("/appointments")}
          >
            Cancel
          </button>

          <button type="submit" className="prescription-save-btn">
            Prepare Prescription
          </button>
        </div>

        {message && (
          <p className="prescription-message" role="status">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default memo(Prescription);
