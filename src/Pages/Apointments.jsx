import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Apointments.css";

const initialAppointments = [
  {
    id: "APT001",
    patient: "Rahul Sharma",
    doctor: "Dr. John Smith",
    service: "Cardiology",
    date: "2026-10-09",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: "APT002",
    patient: "Priya Verma",
    doctor: "Dr. Sarah Williams",
    service: "Pediatrics",
    date: "2026-10-09",
    time: "11:30 AM",
    status: "Pending",
  },
  {
    id: "APT003",
    patient: "Amit Kumar",
    doctor: "Dr. Michael Brown",
    service: "General Checkup",
    date: "2026-10-10",
    time: "01:00 PM",
    status: "Completed",
  },
  {
    id: "APT004",
    patient: "Anjali Singh",
    doctor: "Dr. Emily Johnson",
    service: "Dental Care",
    date: "2026-10-10",
    time: "03:30 PM",
    status: "Cancelled",
  },
  {
    id: "APT005",
    patient: "Rohit Yadav",
    doctor: "Dr. John Smith",
    service: "Cardiology",
    date: "2026-10-11",
    time: "09:30 AM",
    status: "Confirmed",
  },
];

const Appointments = () => {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState(initialAppointments);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Search and filter
  const filteredAppointments = appointments.filter((appointment) => {
    const query = search.toLowerCase();

    const matchesSearch = [
      appointment.id,
      appointment.patient,
      appointment.doctor,
      appointment.service,
    ].some((value) => value.toLowerCase().includes(query));

    const matchesStatus =
      statusFilter === "All" || appointment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Update appointment status
  const handleStatusChange = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: newStatus }
          : appointment,
      ),
    );
  };

  // Delete appointment
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?",
    );

    if (!confirmed) return;

    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id),
    );
  };

  const confirmedCount = appointments.filter(
    (item) => item.status === "Confirmed",
  ).length;

  const pendingCount = appointments.filter(
    (item) => item.status === "Pending",
  ).length;

  const completedCount = appointments.filter(
    (item) => item.status === "Completed",
  ).length;

  return (
    <div className="appointments-page">
      {/* Header */}
      <div className="appointments-header">
        <div>
          <p className="apt-label">CAREPLUS CLINIC</p>
          <h1>Appointments Management</h1>
          <p className="apt-subtitle">
            View and manage all patient appointments.
          </p>
        </div>

        <button
          className="apt-add-btn"
          onClick={() => navigate("/appointment")}
        >
          + New Appointment
        </button>
      </div>

      {/* Statistics */}
      <div className="apt-stats-grid">
        <div className="apt-stat-card">
          <div className="apt-stat-icon blue">📅</div>
          <div>
            <p>Total Appointments</p>
            <h2>{appointments.length}</h2>
          </div>
        </div>

        <div className="apt-stat-card">
          <div className="apt-stat-icon green">✓</div>
          <div>
            <p>Confirmed</p>
            <h2>{confirmedCount}</h2>
          </div>
        </div>

        <div className="apt-stat-card">
          <div className="apt-stat-icon orange">◷</div>
          <div>
            <p>Pending</p>
            <h2>{pendingCount}</h2>
          </div>
        </div>

        <div className="apt-stat-card">
          <div className="apt-stat-icon purple">✔</div>
          <div>
            <p>Completed</p>
            <h2>{completedCount}</h2>
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="appointments-box">
        <div className="apt-toolbar">
          <div>
            <h2>All Appointments</h2>
            <p>{filteredAppointments.length} appointments found</p>
          </div>

          <div className="apt-filters">
            <input
              type="search"
              placeholder="Search patient, doctor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search appointments"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter by status"
            >
              <option value="All">All Statuses</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="apt-table-wrapper">
          <table className="apt-table">
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Service</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="apt-id">{appointment.id}</td>

                    <td>
                      <strong>{appointment.patient}</strong>
                    </td>

                    <td>{appointment.doctor}</td>

                    <td>{appointment.service}</td>

                    <td>
                      <div className="apt-date">
                        {new Date(
                          `${appointment.date}T12:00:00`,
                        ).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                      <small>{appointment.time}</small>
                    </td>

                    <td>
                      <span
                        className={`apt-status apt-status-${appointment.status.toLowerCase()}`}
                      >
                        {appointment.status}
                      </span>
                    </td>

                    <td>
                      <div className="apt-actions">
                        <select
                          value={appointment.status}
                          onChange={(e) =>
                            handleStatusChange(appointment.id, e.target.value)
                          }
                          aria-label={`Change status for ${appointment.id}`}
                          title="Change appointment status"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>

                        <button
                          className="apt-delete-btn"
                          onClick={() => handleDelete(appointment.id)}
                          title="Delete appointment"
                          aria-label={`Delete ${appointment.id}`}
                        >
                          🗑
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="apt-empty">
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="apt-footer">
          Showing {filteredAppointments.length} of {appointments.length}{" "}
          appointments
        </div>
      </div>
    </div>
  );
};

export default memo(Appointments);
