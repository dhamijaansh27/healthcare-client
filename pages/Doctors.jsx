import { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {

    const fetchDoctors = async () => {

      const response = await axios.get(
        `${API_URL}/api/doctors`
      );

      setDoctors(response.data);
    };

    fetchDoctors();

  }, []);

  return (
    <div className="container mt-5">

      <div className="row">

        {doctors.map((doctor) => (

          <div
            className="col-md-4 mb-4"
            key={doctor._id}
          >
            <div className="card shadow">

              <img
                src={doctor.image}
                alt={doctor.name}
                style={{
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body">

                <h5>{doctor.name}</h5>

                <p>
                  {doctor.specialization}
                </p>

                <p>
                  {doctor.experience}
                </p>

                <p>
                  {doctor.hospitalId?.name}
                </p>

                <button className="btn btn-primary w-100"
                  onClick = { () => {
                    navigate('/appointment');
                  }}>
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

