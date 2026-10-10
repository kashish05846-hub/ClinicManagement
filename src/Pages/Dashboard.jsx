import { memo } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      {/* =========================
          HEADER
      ========================= */}
      <div className="dashboard-header">
        <div>
          <p className="dashboard-small-title">CAREPLUS CLINIC</p>

          <h1>Admin Dashboard</h1>

          <p>Welcome back! Here's what's happening today.</p>
        </div>

        <button
          className="dashboard-appointment-btn"
          onClick={() => navigate("/appointments")}
        >
          View Appointment
        </button>
      </div>

      {/* =========================
          STAT CARDS
      ========================= */}
      <div className="stats-grid" onClick={() => navigate("/patients")}>
        <div className="stat-card">
          <div className="stat-icon">👥</div>

          <div>
            <p>Total Patients</p>
            <h2>1,248</h2>
            <span className="positive">+12% this month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🩺</div>

          <div>
            <p>Total Doctors</p>
            <h2>48</h2>
            <span className="positive">+4 new this month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📅</div>

          <div>
            <p>Today's Appointments</p>
            <h2>32</h2>
            <span className="normal">8 remaining</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💳</div>

          <div>
            <p>Pending Payments</p>
            <h2>₹18,450</h2>
            <span className="warning">12 pending</span>
          </div>
        </div>
      </div>

      {/* =========================
          MAIN DASHBOARD
      ========================= */}
      <div className="dashboard-grid">
        {/* APPOINTMENTS OVERVIEW */}
        <div className="dashboard-box appointments-box">
          <div className="box-header">
            <div>
              <h2>Appointments Overview</h2>
              <p>Appointments this week</p>
            </div>

            <select>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>

          {/* SIMPLE CHART */}
          <div className="chart">
            <div className="chart-y-axis">
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
            </div>

            <div className="chart-area">
              <div className="chart-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="bars">
                <div className="bar-item">
                  <div className="bar" style={{ height: "65%" }}></div>
                  <small>Mon</small>
                </div>

                <div className="bar-item">
                  <div className="bar" style={{ height: "80%" }}></div>
                  <small>Tue</small>
                </div>

                <div className="bar-item">
                  <div className="bar" style={{ height: "50%" }}></div>
                  <small>Wed</small>
                </div>

                <div className="bar-item">
                  <div className="bar" style={{ height: "90%" }}></div>
                  <small>Thu</small>
                </div>

                <div className="bar-item">
                  <div className="bar" style={{ height: "70%" }}></div>
                  <small>Fri</small>
                </div>

                <div className="bar-item">
                  <div className="bar" style={{ height: "55%" }}></div>
                  <small>Sat</small>
                </div>

                <div className="bar-item">
                  <div className="bar" style={{ height: "30%" }}></div>
                  <small>Sun</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="dashboard-box quick-actions">
          <div className="box-header">
            <div>
              <h2>Quick Actions</h2>
              <p>Frequently used actions</p>
            </div>
          </div>

          <button onClick={() => navigate("/appointment")}>
            <span>📅</span>
            Book Appointment
          </button>

          <button onClick={() => navigate("/doctors")}>
            <span>🩺</span>
            View Doctors
          </button>

          <button onClick={() => navigate("/patients")}>
            <span>👥</span>
            Manage Patients
          </button>

          <button>
            <span>💊</span>
            Manage Medicines
          </button>

          <button>
            <span>📊</span>
            View Reports
          </button>
        </div>
      </div>

      {/* =========================
          RECENT APPOINTMENTS
      ========================= */}
      <div className="dashboard-box recent-box">
        <div className="box-header">
          <div>
            <h2>Recent Appointments</h2>
            <p>Latest patient appointments</p>
          </div>

          <button className="view-all">View All</button>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Sharma</td>
                <td>Dr. John Smith</td>
                <td>08 Oct 2026</td>
                <td>10:00 AM</td>
                <td>
                  <span className="status confirmed">Confirmed</span>
                </td>
              </tr>

              <tr>
                <td>Priya Verma</td>
                <td>Dr. Sarah Williams</td>
                <td>08 Oct 2026</td>
                <td>11:30 AM</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>

              <tr>
                <td>Amit Kumar</td>
                <td>Dr. Michael Brown</td>
                <td>08 Oct 2026</td>
                <td>01:00 PM</td>
                <td>
                  <span className="status confirmed">Confirmed</span>
                </td>
              </tr>

              <tr>
                <td>Anjali Singh</td>
                <td>Dr. Emily Johnson</td>
                <td>08 Oct 2026</td>
                <td>03:30 PM</td>
                <td>
                  <span className="status cancelled">Cancelled</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default memo(Dashboard);
