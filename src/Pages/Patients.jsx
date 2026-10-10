import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Patients.css";

const Patients = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const patients = [
    {
      id: "P001",
      name: "Rahul Sharma",
      age: 28,
      gender: "Male",
      phone: "+91 98765 43210",
      email: "rahul@gmail.com",
      bloodGroup: "B+",
      status: "Active",
    },
    {
      id: "P002",
      name: "Priya Verma",
      age: 34,
      gender: "Female",
      phone: "+91 91234 56789",
      email: "priya@gmail.com",
      bloodGroup: "O+",
      status: "Active",
    },
    {
      id: "P003",
      name: "Amit Kumar",
      age: 41,
      gender: "Male",
      phone: "+91 99887 66554",
      email: "amit@gmail.com",
      bloodGroup: "A+",
      status: "Inactive",
    },
    {
      id: "P004",
      name: "Anjali Singh",
      age: 25,
      gender: "Female",
      phone: "+91 87654 32109",
      email: "anjali@gmail.com",
      bloodGroup: "AB+",
      status: "Active",
    },
    {
      id: "P005",
      name: "Rohit Yadav",
      age: 37,
      gender: "Male",
      phone: "+91 96543 21098",
      email: "rohit@gmail.com",
      bloodGroup: "O-",
      status: "Active",
    },
  ];

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.id.toLowerCase().includes(search.toLowerCase()) ||
      patient.phone.includes(search),
  );

  return (
    <div className="patients-page">
      {/* =========================
          HEADER
      ========================= */}
      <div className="patients-header">
        <div>
          <p className="page-label">CAREPLUS CLINIC</p>

          <h1>Patients Management</h1>

          <p className="page-subtitle">
            Manage and view all registered patients.
          </p>
        </div>

        <button
          className="add-patient-btn"
          onClick={() => navigate("/patients-registration")}
        >
          + Add Patient
        </button>
      </div>

      {/* =========================
          STATS
      ========================= */}
      <div className="patient-stats">
        <div className="patient-stat-card">
          <div className="patient-stat-icon">👥</div>

          <div>
            <p>Total Patients</p>
            <h2>1,248</h2>
          </div>
        </div>

        <div className="patient-stat-card">
          <div className="patient-stat-icon">✓</div>

          <div>
            <p>Active Patients</p>
            <h2>1,180</h2>
          </div>
        </div>

        <div className="patient-stat-card">
          <div className="patient-stat-icon">+</div>

          <div>
            <p>New This Month</p>
            <h2>86</h2>
          </div>
        </div>

        <div className="patient-stat-card">
          <div className="patient-stat-icon">📅</div>

          <div>
            <p>Appointments Today</p>
            <h2>32</h2>
          </div>
        </div>
      </div>

      {/* =========================
          TABLE BOX
      ========================= */}
      <div className="patients-box">
        <div className="patients-toolbar">
          <div>
            <h2>All Patients</h2>

            <p>{filteredPatients.length} patients found</p>
          </div>

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search patient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="patients-table-wrapper">
          <table className="patients-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Blood Group</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.id}</td>

                    <td>
                      <div className="patient-name">
                        <div className="patient-avatar">
                          {patient.name.charAt(0)}
                        </div>

                        <div>
                          <strong>{patient.name}</strong>
                          <small>{patient.email}</small>
                        </div>
                      </div>
                    </td>

                    <td>{patient.age}</td>

                    <td>{patient.gender}</td>

                    <td>{patient.phone}</td>

                    <td>
                      <span className="blood-group">{patient.bloodGroup}</span>
                    </td>

                    <td>
                      <span
                        className={
                          patient.status === "Active"
                            ? "status active"
                            : "status inactive"
                        }
                      >
                        {patient.status}
                      </span>
                    </td>

                    <td>
                      <div className="action-buttons">
                        <button className="edit-btn" title="Edit">
                          ✎
                        </button>

                        <button className="delete-btn" title="Delete">
                          🗑
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-patient">
                    No patients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* =========================
            PAGINATION
        ========================= */}
        <div className="pagination">
          <p>Showing {filteredPatients.length} patients</p>

          <div className="pagination-buttons">
            <button disabled>‹</button>

            <button className="current-page">1</button>

            <button>2</button>

            <button>3</button>

            <button>›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Patients);
