import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Appointment from "./Appointment.jsx";
import NearbyHospital from "./NearbyHospital.jsx";
const token = localStorage.getItem("token");
const API_URL = import.meta.env.VITE_API_URL;

import axios from "axios";

function PatientDashboard() {
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [prescriptions, setPrescriptions] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();


  const [isEditing, setIsEditing] = useState(false);

  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    state: "",
    address: ""
  });

  const upcomingAppointments =
  appointments.filter(
    appointment =>
      appointment.status === "Approved"
  );

  const fetchAppointments =
async (patientId) => {

  try {

    const response = await axios.get(
      `${API_URL}/api/appointments/patient/${patientId}`,
      {
      headers:{
      Authorization:
      `Bearer ${token}`
      }
    }
      
    );

    setAppointments(
      response.data
    );

  } catch (error) {

    console.log(error);

  }

};


  const fetchPrescriptions = async (patientId) => {
    try {

      const response = await axios.get(
        `${API_URL}/api/prescriptions/patient/${patientId}`
      );

      setPrescriptions(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    const patientData = JSON.parse(
      localStorage.getItem("patient")
    );

    if (patientData) {

      setEditForm({
        name: patientData.name,
        email: patientData.email,
        phone: patientData.phone,
        age: patientData.age,
        gender: patientData.gender,
        state: patientData.state,
        address: patientData.address
      });

    }

    setPatient(patientData);
    if (patientData) {

    fetchAppointments(
      patientData._id
    );

    fetchPrescriptions(
      patientData._id
    );

  }
  }, []);

  if (!patient) {
    return (
      <div className="container mt-5 text-center">
        <h2>Loading...</h2>
      </div>
    );
  }

  const handleEditChange = (e) => {

    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });

  };

  const updateProfile = async () => {

    try {

      const response = await axios.put(
        `${API_URL}/api/patients/${patient._id}`,
        editForm
      );

      setPatient(response.data.patient);

      localStorage.setItem(
        "patient",
        JSON.stringify(response.data.patient)
      );

      setIsEditing(false);

      alert("Profile Updated Successfully");

    } catch (error) {

      console.log(error);

      alert("Failed to Update Profile");

    }

  };

  const totalAppointments = appointments.length;
  const totalPrescription = prescriptions.length;

  const pendingAppointments = appointments.filter(
    appointment => appointment.status === "Pending"
  ).length;

  const approvedAppointments = appointments.filter(
    appointment => appointment.status === "Approved"
  ).length;


  return (
    <div className="container-fluid">
      <div className="row">

        <div className="d-md-none p-2 bg-dark">

          <button
            className="btn btn-light"
            onClick={() =>
              setSidebarOpen(!sidebarOpen)
            }
          >
            ☰ Menu
          </button>

        </div>
        {/* Sidebar */}
        <div
          className={`
            bg-dark text-white p-3
            ${sidebarOpen ? "d-block" : "d-none"}
            d-md-block
          `}
          style={{
            width: "250px",
            minHeight: "100vh"
          }}
        >
          
          <h3 className="mb-4">
            Patient Portal
          </h3>

          <div className="d-grid gap-2">

            <button
              className={`btn ${
                activeSection === "dashboard"
                  ? "btn-primary"
                  : "btn-outline-light"
              }`}
              onClick={() => {
                setActiveSection("dashboard");
                setSidebarOpen(false);
              }}
            >
              Dashboard
            </button>

            <button
              className={`btn ${
                activeSection === "appointments"
                  ? "btn-primary"
                  : "btn-outline-light"
              }`}
              onClick={() => {
                setActiveSection("appointments");
                setSidebarOpen(false);
              }}
            >
              Appointments
            </button>

            <button
              className={`btn ${
                activeSection === "profile"
                  ? "btn-primary"
                  : "btn-outline-light"
              }`}
              onClick={() => {
                setActiveSection("profile");
                setSidebarOpen(false);
              }}
            >
              Profile
            </button>

            <button
              className={`btn ${
                activeSection === "bookAppointment"
                  ? "btn-primary"
                  : "btn-outline-light"
              }`}
              onClick={() => {
                setActiveSection("bookAppointment");
                setSidebarOpen(false);
              }}
            >
              Book Appointment
            </button>

            <button
              className={`btn ${
                activeSection === "prescriptions"
                  ? "btn-primary"
                  : "btn-outline-light"
              }`}
              onClick={() => {
                setActiveSection("prescriptions");
                setSidebarOpen(false);
              }}
            >
              Prescriptions
            </button>

            <button
              className={`btn ${
                activeSection === "nearbyHospitals"
                  ? "btn-primary"
                  : "btn-outline-light"
              }`}
              onClick={() => {
                setActiveSection("nearbyHospitals");
                setSidebarOpen(false);
              }}
            >
              Hospitals
            </button>

            <button
              className="btn btn-danger mt-3"
              onClick={() => {
                localStorage.removeItem("patient");
                navigate("/");
              }}
            >
              Logout
            </button>

            </div>

            

          

        </div>

        {/* Main Content */}
        <div className="col p-3 p-md">
          {activeSection === "dashboard" && (
            <>
            <div className="card shadow-sm mb-4">

            <div className="card-body">

              <h2>
                Welcome, {patient.name}
              </h2>

              <p className="text-muted">
                Manage your healthcare services
              </p>

            </div>

          </div>

          {/* Statistics */}
          <div className="row mb-4">

            <div className="col-md-3">

              <div className="card shadow border-0">

                <div className="card-body text-center">

                  <h6>Total Appointments</h6>

                  <h2>{totalAppointments}</h2>

                </div>

              </div>

            </div>

            <div className="col-md-3">

              <div className="card shadow border-0">

                <div className="card-body text-center">

                  <h6>Pending Appointments</h6>

                  <h2>{pendingAppointments}</h2>

                </div>

              </div>

            </div>

            <div className="col-md-3">

              <div className="card shadow border-0">

                <div className="card-body text-center">

                  <h6>Approved Appointments</h6>

                  <h2>{approvedAppointments}</h2>

                </div>

              </div>

            </div>

            <div className="col-md-3">

              <div className="card shadow border-0">

                <div className="card-body text-center">

                  <h6>Prescriptions</h6>

                  <h2>{totalPrescription}</h2>

                </div>

              </div>

            </div>

          </div>

          {/* Profile */}
          <div className="card shadow mb-4">

            <div className="card-header bg-primary text-white">

              <h4>Patient Profile</h4>

            </div>

            <div className="card-body">

              <div className="row">

                <div className="col-md-6">
                  <p><strong>Name:</strong> {patient.name}</p>
                  <p><strong>Email:</strong> {patient.email}</p>
                  <p><strong>Phone:</strong> {patient.phone}</p>
                </div>

                <div className="col-md-6">
                  <p><strong>Age:</strong> {patient.age}</p>
                  <p><strong>Gender:</strong> {patient.gender}</p>
                  <p><strong>State:</strong> {patient.state}</p>
                </div>

              </div>

              <p>
                <strong>Address:</strong> {patient.address}
              </p>

            </div>

          </div>

          {/* Upcoming Appointments */}
          <div className="card shadow mb-4">

            <div className="card-header bg-primary text-white">

              <h4>Upcoming Appointments</h4>

            </div>

            <div className="card-body">

              <div className="table-responsive">
                <table className="table table-striped">

                <thead>

                  <tr>
                    <th>Doctor</th>
                    <th>Hospital</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

  {appointments.length > 0 ? (

    upcomingAppointments.map((appointment) => (

      <tr key={appointment._id}>

        <td>
          {appointment.doctorId?.name}
        </td>

        <td>
          {appointment.hospitalId?.name}
        </td>

        <td>
          {appointment.appointmentDate}
        </td>

        <td>
          {appointment.appointmentTime}
        </td>

        <td>

          <span
            className={
              appointment.status === "Approved"
                ? "badge bg-success"
                : "badge bg-warning"
            }
          >
            {appointment.status}
          </span>

        </td>

      </tr>

    ))

                  ) : (

                    <tr>

                      <td
                        colSpan="5"
                        className="text-center"
                      >
                        No Appointments Found
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>
              </div>

            </div>

          </div>
            </>
          )}


          {/* Profile  section */}

          {activeSection === "profile" && (

        <div className="card shadow">

          <div className="card-header bg-primary text-white">

            <h4>Patient Profile</h4>

          </div>

          <div className="card-body">

            {!isEditing ? (

              <>

                <p>
                  <strong>Name:</strong>
                  {patient.name}
                </p>

                <p>
                  <strong>Email:</strong>
                  {patient.email}
                </p>

                <p>
                  <strong>Phone:</strong>
                  {patient.phone}
                </p>

                <p>
                  <strong>Age:</strong>
                  {patient.age}
                </p>

                <p>
                  <strong>Gender:</strong>
                  {patient.gender}
                </p>

                <p>
                  <strong>State:</strong>
                  {patient.state}
                </p>

                <p>
                  <strong>Address:</strong>
                  {patient.address}
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    setIsEditing(true)
                  }
                >
                  Edit Profile
                </button>

              </>

            ) : (

              <>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={editForm.name}
                      onChange={handleEditChange}
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={editForm.email}
                      onChange={handleEditChange}
                    />

                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={editForm.phone}
                      onChange={handleEditChange}
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Age
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={editForm.age}
                      onChange={handleEditChange}
                    />

                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Gender
                    </label>

                    <select
                      className="form-select"
                      name="gender"
                      value={editForm.gender}
                      onChange={handleEditChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      State
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      value={editForm.state}
                      onChange={handleEditChange}
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Address
                  </label>

                  <textarea
                    rows="3"
                    className="form-control"
                    name="address"
                    value={editForm.address}
                    onChange={handleEditChange}
                  />

                </div>

                <div className="d-flex gap-2">

                  <button
                    className="btn btn-primary"
                    onClick={updateProfile}
                  >
                    Save Changes
                  </button>

                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>

                </div>

              </>

            )}

          </div>

        </div>

        )}
          
          {activeSection === "bookAppointment" && (

          
            <div className="card-body">

              <Appointment 
                setActiveSection={setActiveSection}
                fetchAppointments={fetchAppointments}
              />

            </div>

          )}


          {activeSection === "nearbyHospitals" && (

          

            <div className="card-body">

              <NearbyHospital />

            </div>

          )}

          {activeSection === "appointments" && (

          <div className="card shadow">

            <div className="card-header bg-primary text-white">
              <h4>My Appointments</h4>
            </div>

            <div className="card-body">

              <table className="table table-striped">

                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>Hospital</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  {appointments.map((appointment) => (

                    <tr key={appointment._id}>

                      <td>
                        {appointment.doctorId?.name}
                      </td>

                      <td>
                        {appointment.hospitalId?.name}
                      </td>

                      <td>
                        {appointment.appointmentDate}
                      </td>

                      <td>
                        {appointment.appointmentTime}
                      </td>

                      <td>
                        {appointment.status}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

          )}

          {activeSection === "prescriptions" && (

          <div className="card shadow">

            <div className="card-header bg-primary text-white">

              <h4>
                My Prescriptions
              </h4>

            </div>

            <div className="card-body">

              <table className="table table-bordered">

                <thead>

                  <tr>

                    <th>Doctor</th>
                    <th>Hospital</th>
                    <th>Date</th>
                    <th>Medicines</th>
                    <th>Download</th>

                  </tr>

                </thead>

                <tbody>

                  {prescriptions.map(
                    prescription => (

                    <tr
                      key={prescription._id}
                    >

                      <td>
                        {prescription.doctorId?.name}
                      </td>

                      <td>
                        {prescription.hospitalId?.name}
                      </td>

                      <td>

                        {
                          new Date(
                            prescription.createdAt
                          ).toLocaleDateString()
                        }

                      </td>

                      <td>

                        {
                          prescription.medicines.length
                        } Medicines

                      </td>

                      <td>

                        <a
                          href={`${API_URL}/api/prescriptions/download/${prescription._id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          Download PDF
                        </a>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

          )}

        </div>

      </div>
    </div>
  );
}

export default PatientDashboard;