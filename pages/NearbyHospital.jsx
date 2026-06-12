import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function NearbyHospital() {

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {

    const fetchHospitals = async () => {

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

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4 text-primary">
        Hospitals
      </h1>

      <div className="row">

        {hospitals.map((hospital) => (

          <div
            key={hospital._id}
            className="col-md-6 mb-4"
          >
            <div className="card shadow">

              <div className="card-body">

                <h4 className="text-primary">
                  {hospital.name}
                </h4>

                <p>
                  State: {hospital.state}
                </p>

                <p>
                  City: {hospital.city}
                </p>

                <p>
                  Location: {hospital.location}
                </p>

                <p>
                  Contact: {hospital.contact}
                </p>

                <p>
                  Total Beds: {hospital.totalBeds}
                </p>

                <p>
                  Emergency Beds: {hospital.emergencyBeds}
                </p>

              </div>

            </div>
          </div>

        ))}

      </div>

    </div>
  );
}

export default NearbyHospital;