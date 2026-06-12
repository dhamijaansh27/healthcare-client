import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

function HospitalLogin() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        `${API_URL}/api/hospitals/login`,
        loginData
      );

      alert(response.data.message);
      
      localStorage.setItem(
        "hospital",
        JSON.stringify(response.data.hospital)
       );
      
      navigate(`/hospital/${response.data.hospital._id}/dashboard`);

    } catch (error) {

      alert("Invalid Email or Password");

    }

  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-header bg-success text-white text-center">
              <h3>
                <i className="bi bi-hospital me-2"></i>
                Hospital Login
              </h3>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">
                    Hospital Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Login
                </button>

                <p className="mt-2 text-center">
                  Haven't registered yet?
                  <Link to="/hospital-register" className="ms-1">
                    Register
                  </Link>
                </p>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HospitalLogin;