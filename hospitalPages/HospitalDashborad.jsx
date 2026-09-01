import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function HospitalDashboard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hospital, setHospital] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [patients, setPatients] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [medicineName, setMedicineName] = useState("");
  const [dosage, setDosage] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");

  const [showDoctorForm, setShowDoctorForm] =
  useState(false);

  const [doctorData, setDoctorData] =
  useState({

    name: "",
    specialization: "",
    experience: "",
    image: ""

  });

  const handleDoctorChange = (e) => {

    setDoctorData({

      ...doctorData,

      [e.target.name]: e.target.value

    });

  };

  const addDoctor = async () => {

    try {

      await axios.post(

        `${API_URL}/api/doctors/create`,

        {

          ...doctorData,

          hospitalId: hospital._id

        }

      );

      alert(
        "Doctor Added Successfully"
      );

      setShowDoctorForm(false);

      fetchDoctors();

    } catch (error) {

      console.log(error);

    }

  };

  const fetchAppointments = async () => {

      try {

        const response = await axios.get(
          `${API_URL}/api/appointments/hospital/${id}`
        );

        setAppointments(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    const fetchPatients = async () => {

        try {

          const response = await axios.get(
            `${API_URL}/api/appointments/hospital/${id}/patients`
          );

          setPatients(response.data);

        } catch (error) {

          console.log(error);

        }

    };

    const updateStatus = async (appointmentId, status) => {
  try {

    const response = await axios.put(
      `${API_URL}/api/appointments/${appointmentId}/status`,
      { status }
    );

    // Update the appointment immediately in the UI
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment._id === appointmentId
          ? {
              ...appointment,
              status: status
            }
          : appointment
      )
    );

    console.log("Status updated:", response.data);

  } catch (error) {

    console.error(
      "Status update error:",
      error.response?.data || error.message
    );

    alert("Failed to update appointment status");

  }
};

    const savePrescription = async () => {

      try {

        await axios.post(
          `${API_URL}/api/prescriptions/create`,
          {

            patientId:
            selectedAppointment.patientId._id,

            doctorId:
            selectedAppointment.doctorId._id,

            hospitalId:
            selectedAppointment.hospitalId,

            appointmentId:
            selectedAppointment._id,

            medicines: [
              {
                medicineName,
                dosage,
                duration
              }
            ],

            notes

          }
        );

        await axios.put(
          `${API_URL}/api/appointments/${selectedAppointment._id}/prescription`
        );

        alert(
          "Prescription Saved"
        );

        fetchAppointments();

        setActiveSection(
          "dashboard"
        );

      } catch(error) {

        console.log(error);

      }

    };

    const fetchDoctors = async () => {

    const response =
    await axios.get(

      `${API_URL}/api/doctors/hospital/${hospital._id}`

    );

    setDoctors(
      response.data
    );

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hospitalResponse = await axios.get(
          `${API_URL}/api/hospitals/${id}`
        );

        setHospital(hospitalResponse.data);

        const doctorResponse = await axios.get(
          `${API_URL}/api/doctors/hospital/${id}`
        );

        setDoctors(doctorResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAppointments();
    fetchPatients();
    fetchData();
  }, [id]);

  if (!hospital) {
    return (
      <div className="container mt-5 text-center">
        <h2>Loading...</h2>
      </div>
    );
  }

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
              col-12 col-md-3 col-lg-2
              bg-dark text-white p-3
              ${sidebarOpen ? "d-block" : "d-none"}
              d-md-block
            `}
            style={{
              minHeight: "100vh"
            }}
          >
          <h4 className="mb-4">Hospital Panel</h4>

          <div className="d-grid gap-2">
            <button
              className={`btn ${
                activeSection === "dashboard"
                  ? "btn-success"
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
                activeSection === "doctors"
                  ? "btn-success"
                  : "btn-outline-light"
              }`}
              onClick={() => {
                setActiveSection("doctors");
                setSidebarOpen(false);
              }}
            >
              Doctors
            </button>

            <button
              className={`btn ${
                activeSection === "patients"
                  ? "btn-success"
                  : "btn-outline-light"
              }`}
              onClick={() => {
                setActiveSection("patients");
                setSidebarOpen(false);
              }}
            >
              Patients
            </button>

            <button
            className="btn btn-danger mt-3"
              onClick={() => {
                localStorage.removeItem("hospital");
                navigate("/");
              }}>
              Logout
            </button>

            </div>
          
        </div>

        {/* Main Content */}
          <div className="col-12 col-md-9 col-lg-10 p-3">
          {activeSection === "dashboard" && (
          <>
          {/* Header */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2>{hospital.name}</h2>
              <p className="text-muted">
                {hospital.location}, {hospital.city}, {hospital.state}
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="row mb-4">

            <div className="col-12 col-md-4 mb-3">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                  <h6>Total Doctors</h6>
                  <h2>{doctors.length}</h2>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                  <h6>Total Beds</h6>
                  <h2>{hospital.totalBeds}</h2>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                  <h6>Emergency Beds</h6>
                  <h2>{hospital.emergencyBeds}</h2>
                </div>
              </div>
            </div>

          </div>

          {/* Hospital Details */}
          <div className="card shadow mb-4">
            <div className="card-header text-white bg-success">
              <h5>Hospital Information</h5>
            </div>

            <div className="card-body">

              <div className="row">

                <div className="col-md-4">
                  <p>
                    <strong>State:</strong> {hospital.state}
                  </p>
                </div>

                <div className="col-md-4">
                  <p>
                    <strong>City:</strong> {hospital.city}
                  </p>
                </div>

                <div className="col-md-4">
                  <p>
                    <strong>Location:</strong> {hospital.location}
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Doctors Table */}
          <div className="card shadow">

            <div className="card-header d-flex justify-content-between bg-success text-white">
              <h5>Doctors</h5>
              <button
            className="btn btn-success"
            onClick={() =>
              setShowDoctorForm(true)
            }
          >
            Add Doctor
          </button>
            </div>

            <div className="card-body">

              <div className="table-responsive">
                <table className="table table-striped table-hover">

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Specialization</th>
                    <th>Experience</th>
                  </tr>
                </thead>

                <tbody>

                  {doctors.map((doctor) => (
                    <tr key={doctor._id}>
                      <td>{doctor.name}</td>

                      <td>{doctor.specialization}</td>

                      <td>{doctor.experience}</td>

                    </tr>
                  ))}

                </tbody>

              </table>
              </div>

            </div>

          </div>

          {showDoctorForm && (

                  <div className="card shadow mt-3">

                    <div className="card-header bg-success text-white">

                      <h5>Add Doctor</h5>

                    </div>

                    <div className="card-body">

                      <div className="row">

                        <div className="col-md-6 mb-3">

                          <label>Name</label>

                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={doctorData.name}
                            onChange={handleDoctorChange}
                          />

                        </div>

                        <div className="col-md-6 mb-3">

                          <label>Specialization</label>

                          <input
                            type="text"
                            name="specialization"
                            className="form-control"
                            value={doctorData.specialization}
                            onChange={handleDoctorChange}
                          />

                        </div>

                      </div>

                      <div className="row">

                        <div className="col-md-6 mb-3">

                          <label>Experience</label>

                          <input
                            type="text"
                            name="experience"
                            className="form-control"
                            value={doctorData.experience}
                            onChange={handleDoctorChange}
                          />

                        </div>

                        <div className="col-md-6 mb-3">

                          <label>Image URL</label>

                          <input
                            type="text"
                            name="image"
                            className="form-control"
                            value={doctorData.image}
                            onChange={handleDoctorChange}
                          />

                        </div>

                      </div>

                      <button
                        className="btn btn-success me-2"
                        onClick={addDoctor}
                      >
                        Save Doctor
                      </button>

                      <button
                        className="btn btn-secondary"
                        onClick={() =>
                          setShowDoctorForm(false)
                        }
                      >
                        Cancel
                      </button>

                    </div>

                  </div>

                  )}

          <div className="card shadow mt-4">

            <div className="card-header bg-success text-white">

              <h4>Appointment Requests</h4>

            </div>

            <div className="card-body">

              <div className="table-responsive">
                <table className="table table-bordered">

                <thead>

                  <tr>

                    <th>Patient</th>
                    <th>Doctor</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Problem</th>
                    <th>Status</th>
                    <th>Action</th>

                  </tr>

                </thead>

                <tbody>

                

                  {appointments.map(
                    (appointment) => (

                    <tr key={appointment._id}>

                      <td>
                        {appointment.patientId?.name}
                      </td>

                      <td>
                        {appointment.doctorId?.name}
                      </td>

                      <td>
                        {appointment.appointmentDate}
                      </td>

                      <td>
                        {appointment.appointmentTime}
                      </td>

                      <td>
                        {appointment.problem}
                      </td>

                      <td>

                        <span
                          className={
                            appointment.status === "Approved"
                            ? "badge bg-success"
                            : appointment.status === "Rejected"
                            ? "badge bg-danger"
                            : "badge bg-warning"
                          }
                        >
                          {appointment.status}
                        </span>

                      </td>

                      <td>

                        {appointment.status ===
                          "Pending" && (

                          <>

                            <button
                              className="btn btn-success btn-sm me-2"
                              onClick={() =>
                                updateStatus(
                                  appointment._id,
                                  "Approved"
                                )
                              }
                            >
                              Approve
                            </button>

                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                updateStatus(
                                  appointment._id,
                                  "Rejected"
                                )
                              }
                            >
                              Reject
                            </button>

                          </>

                        )}

                      </td>
                      <td>

                        {appointment.status === "Approved" &&
                        !appointment.prescriptionAdded && (

                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                              setSelectedAppointment(
                                appointment
                              );

                              setActiveSection(
                                "prescription"
                              );
                            }}
                          >
                            Prescribe
                          </button>

                        )}

                        {appointment.prescriptionAdded && (

                          <span className="badge bg-success">
                            Prescription Added
                          </span>

                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>
              </div>

            </div>

          </div>
        </>
        )}


        {activeSection === "prescription" && (

          <div className="card shadow">

            <div className="card-header bg-success text-white">

              <h4>Create Prescription</h4>

            </div>

            <div className="card-body">

              <h5>
                Patient:
                {selectedAppointment?.patientId?.name}
              </h5>

              <h5>
                Doctor:
                {selectedAppointment?.doctorId?.name}
              </h5>

              <input
                className="form-control mb-2"
                placeholder="Medicine Name"
                value={medicineName}
                onChange={(e)=>
                  setMedicineName(
                    e.target.value
                  )
                }
              />

              <input
                className="form-control mb-2"
                placeholder="Dosage"
                value={dosage}
                onChange={(e)=>
                  setDosage(
                    e.target.value
                  )
                }
              />

              <input
                className="form-control mb-2"
                placeholder="Duration"
                value={duration}
                onChange={(e)=>
                  setDuration(
                    e.target.value
                  )
                }
              />

              <textarea
                className="form-control mb-3"
                placeholder="Notes"
                value={notes}
                onChange={(e)=>
                  setNotes(
                    e.target.value
                  )
                }
              />

              <button
                className="btn btn-success"
                onClick={savePrescription}
              >
                Save Prescription
              </button>

            </div>

          </div>

          )}  
        
        {activeSection === "doctors" && (

          <div className="card shadow">

            <div className="card-header text-white bg-success">
              <h4>Hospital Doctors</h4>
            </div>

            <div className="card-body">

              <table className="table table-striped">

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Specialization</th>
                    <th>Experience</th>
                    
                  </tr>
                </thead>

                <tbody>

                  {doctors.map((doctor) => (

                    <tr key={doctor._id}>

                      <td>{doctor.name}</td>

                      <td>{doctor.specialization}</td>

                      <td>{doctor.experience}</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

          )}

          {activeSection === "patients" && (

          <div className="card shadow">

            <div className="card-header text-white bg-success">
              <h4>Patients</h4>
            </div>

            <div className="card-body">

              <table className="table table-bordered">

                <thead>

                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>State</th>
                    <th>Doctor</th>
                  </tr>

                </thead>

                <tbody>

                  {patients.map((appointment) => (

                    <tr key={appointment._id}>

                      <td>{appointment.patientId?.name}</td>

                      <td>{appointment.patientId?.email}</td>

                      <td>{appointment.patientId?.phone}</td>

                      <td>{appointment.patientId?.state}</td>

                      <td>{appointment.doctorId?.name}</td>

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

export default HospitalDashboard;