import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Doctors from '../pages/Doctors';
import Appointment from '../pages/Appointment';
import PatientServices from '../pages/PatientServices';
import PatientDashboard from '../pages/PatientDashboard';
import DoctorDashboard from '../pages/DoctorDashboard';
import BedAvailability from '../pages/BedAvailabilty';
import MedicalHistory from '../pages/MedicalHistory';
import NearbyHospital from '../pages/NearbyHospital';
import Layout from '../components/Layout';
import HospitalLogin from '../hospitalPages/HospitalLogin';
import HospitalDashboard from '../hospitalPages/HospitalDashborad';
import HospitalSignup from '../hospitalPages/HospitalSignup';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />

        <Route path="/login" element={
          <Layout>
            <Login />
          </Layout>
        } />

        <Route path="/register" element={
          <Layout>
            <Register />
          </Layout>
        } />

        <Route path="/hospital-register" element={
          <Layout>
            <HospitalSignup />
          </Layout>
        } />

        <Route path="/doctors" element={
          <Layout>
            <Doctors />
          </Layout>
        } />

        <Route path="/patient" element={
          <Layout>
            <PatientServices />
          </Layout>
        } />

        <Route path="/patient/:id/dashboard" element={
          <Layout>
            <PatientDashboard />
          </Layout>
        } />

        <Route path="/doctor" element={
          <Layout>
            <DoctorDashboard />
          </Layout>
        } />

        <Route path="/appointment" element={
          <Layout>
            <Appointment />
          </Layout>
        } />

        <Route path="/bed-availability" element={
          <Layout>
            <BedAvailability />
          </Layout>
        } />

        <Route path="/medical-history" element={
          <Layout>
            <MedicalHistory />
          </Layout>
        } />

        <Route path="/hospital" element={
          <Layout>
            <NearbyHospital />
          </Layout>
        } />

        <Route path="/signup" element={
          <Layout>
            <Register />
          </Layout>
        } />

        {/* Hospital Login Route */}
        <Route path="/hospital-login" element={
          <Layout>
            <HospitalLogin />
          </Layout>
        } />

        {/* Hospital Dashboard Route */}
        <Route path="/hospital/:id/dashboard" element={
          <Layout>
            <HospitalDashboard />
          </Layout>
        } />

      </Routes>

    </BrowserRouter>
  )
}

export default App
