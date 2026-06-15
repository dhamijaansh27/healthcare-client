import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function Doctors() {

  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchDoctors = async () => {

      try {

        const response = await axios.get(
          `${API_URL}/api/doctors`
        );

        setDoctors(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchDoctors();

  }, []);

  return (

    <div className="container py-5">

      <div className="text-center mb-5">

        <h2 className="fw-bold text-primary">
          Our Doctors
        </h2>

        <p className="text-muted">
          Meet our experienced healthcare specialists
        </p>

      </div>

      <div className="row">

        {doctors.map((doctor) => (

          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
            key={doctor._id}
          >

            <div
              className="card shadow border-0 h-100"
              style={{
                transition: "0.3s"
              }}
            >

              <div className="text-center pt-4">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/150";
                  }}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #0d6efd"
                  }}
                />

              </div>

              <div className="card-body text-center">

                <h4 className="fw-bold mb-2">
                  {doctor.name}
                </h4>

                <span className="badge bg-primary mb-3">
                  {doctor.specialization}
                </span>

                <p className="mb-2">
                  <strong>Experience:</strong>
                  <br />
                  {doctor.experience}
                </p>

                <p className="text-muted">
                  <i className="bi bi-hospital"></i>
                  {" "}
                  {doctor.hospitalId?.name}
                </p>

              </div>

              <div className="card-footer bg-white border-0">

                <button
                  className="btn btn-primary w-100"
                  onClick={() =>
                    navigate("/appointment")
                  }
                >
                  Book Appointment
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Doctors;