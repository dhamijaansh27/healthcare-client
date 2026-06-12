import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function Appointment({ setActiveSection,fetchAppointments }) {

  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const today = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const patient = JSON.parse(
    localStorage.getItem("patient")
  );

  const [formData, setFormData] = useState({
    hospitalId: "",
    doctorId: "",
    appointmentDate: "",
    appointmentTime: "",
    problem: ""
  });

  useEffect(() => {

    const fetchHospitals = async () => {

       if (!patient) {
        navigate("/login");
      }

      try {

        const response = await axios.get(
          `${API_URL}/api/hospitals`
        );

        setHospitals(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchHospitals();

  }, []);

  const handleHospitalChange = async (e) => {

    const hospitalId = e.target.value;
    console.log("selected Hospital", hospitalId);

    setFormData({
      ...formData,
      hospitalId,
      doctorId: ""
    });

    try {

      const response = await axios.get(
        `${API_URL}/api/doctors/hospital/${hospitalId}`
      );

      setDoctors(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    if (!patient) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      console.log("TOKEN =", token);

      await axios.post(
        `${API_URL}/api/appointments/create`,
        {
          patientId: patient._id,
          hospitalId: formData.hospitalId,
          doctorId: formData.doctorId,
          appointmentDate: formData.appointmentDate,
          appointmentTime: formData.appointmentTime,
          problem: formData.problem
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      await fetchAppointments(
        patient._id
      );

      alert("Appointment Booked Successfully");
      

      setFormData({
        hospitalId: "",
        doctorId: "",
        appointmentDate: "",
        appointmentTime: "",
        problem: ""
      });

      setDoctors([]);
      setActiveSection("dashboard");

    } catch (error) {

      console.log(error);

      alert("Failed to book appointment");

    }

  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">
                Book Appointment
              </h3>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                {/* Hospital */}

                <div className="mb-3">

                  <label className="form-label">
                    Select Hospital
                  </label>

                  <select
                    className="form-select"
                    value={formData.hospitalId}
                    onChange={handleHospitalChange}
                    required
                  >

                    <option value="">
                      Select Hospital
                    </option>

                    {hospitals.map((hospital) => (

                      <option
                        key={hospital._id}
                        value={hospital._id}
                      >
                        {hospital.name}
                      </option>

                    ))}

                  </select>

                </div>

                {/* Doctor */}

                <div className="mb-3">

                  <label className="form-label">
                    Select Doctor
                  </label>

                  <select
                    className="form-select"
                    value={formData.doctorId}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        doctorId: e.target.value
                      })
                    }
                    required
                  >

                    <option value="">
                      Select Doctor
                    </option>

                    {doctors.map((doctor) => (

                      <option
                        key={doctor._id}
                        value={doctor._id}
                      >
                        {doctor.name} - {doctor.specialization}
                      </option>

                    ))}

                  </select>

                </div>

                {/* Date */}

                <div className="mb-3">

                  <label className="form-label">
                    Appointment Date
                  </label>

                  <input
                    type="date"
                    className="form-control"
                    min={today}
                    value={formData.appointmentDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        appointmentDate: e.target.value
                      })
                    }
                    required
                  />

                </div>

                {/* Time */}

                <div className="mb-3">

                  <label className="form-label">
                    Appointment Time
                  </label>

                  <input
                    type="time"
                    className="form-control"
                    value={formData.appointmentTime}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        appointmentTime: e.target.value
                      })
                    }
                    required
                  />

                </div>

                {/* Problem */}

                <div className="mb-3">

                  <label className="form-label">
                    Describe Your Problem
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    value={formData.problem}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        problem: e.target.value
                      })
                    }
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Book Appointment
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Appointment;