import { memo } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Doctors from "./Pages/Doctors";
import Services from "./Pages/Services";
import Signup from "./Pages/Signup.jsx";
import Appointment from "./Pages/Appointment";
import LearnMore from "./Pages/LearnMore";

import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Patients from "./Pages/Patients";
import PatientRegistration from "./Pages/PatientRegistration";
import DoctorRegistration from "./Pages/DoctorRegistration";
import Appointments from "./Pages/Apointments";
import Prescription from "./Pages/Prescription";
import ModernEquipment from "./Pages/ModernEquipment.jsx";

const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route
            path="/patients-registration"
            element={<PatientRegistration />}
          />
          <Route path="/doctor-registration" element={<DoctorRegistration />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/modern-equipment" element={<ModernEquipment />} />

          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default memo(App);
