import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function PatientLogin() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/patients/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "patient",
        JSON.stringify(response.data.patient)
      );

      navigate(
        `/patient/${response.data.patient._id}/dashboard`
      );

    } catch (error) {

      alert(
        
        "Login failed because of " + error.response?.data?.message
      );

    }

  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-header bg-primary text-white text-center">
              <h3>
                <i
                className="bi bi-person-circle px-2"
                style={{ fontSize: "2rem" }}
              ></i>
                Patient Login</h3>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Email</label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Login
                </button>

                <p className="mt-3 text-center">
                  Haven't registered yet?
                  <Link to="/signup" className="ms-2">
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

export default PatientLogin;