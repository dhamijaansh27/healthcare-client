import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const patient = JSON.parse(
      localStorage.getItem("patient")
    );

    const hospital = JSON.parse(
      localStorage.getItem("hospital")
    );

    const isLoggedIn = patient || hospital;

  return (
    <nav className="bg-white shadow-md flex justify-between items-center sticky top-0 z-50 fixed-top w-full">
        <ul
          className="nav nav-pills nav-fill w-100 gap-2 p-1 bg-primary shadow-sm"
          style={{
            "--bs-nav-link-color": "white",
            "--bs-nav-pills-link-active-color": "#0d6efd",
            "--bs-nav-pills-link-active-bg": "white"
          }}
        >
          <li className="nav-item">
              <h3 className="text-2xl font-bold d-flex align-items-center">&nbsp;
                <i className="bi bi-hospital"></i>&nbsp;
                  HealthCare+
              </h3>
          </li>
          <li className="nav-item">
            <button
              className="nav-link rounded-pill"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link rounded-pill"
              onClick={() => navigate("/doctors")}
            >
              Doctors
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link rounded-pill"
              onClick={() => navigate("/hospital")}
            >
              Hospitals
            </button>
          </li>

          {!isLoggedIn && (
          <>
          <li className="nav-item">
            <div className="dropdown">
                <button
                  className="nav-link rounded-pill dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Login
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => navigate("/login")}
                    >
                      Patient Login
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => navigate("/hospital-login")}
                    >
                      Hospital Login
                    </button>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <div className="dropdown">
                <button
                  className="nav-link rounded-pill dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Register
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => navigate("/signup")}
                    >
                      Patient Register
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => navigate("/hospital-register")}
                    >
                      Hospital Register
                    </button>
                </li>
              </ul>
            </div>
          </li>
          </>
          )}
          
          {isLoggedIn && (
            <>
            <li className="nav-item">

                <button
                  className="nav-link rounded-pill"
                  onClick={() => {

                    if (patient) {

                      navigate(
                        `/patient/${patient._id}/dashboard`
                      );

                    } else {

                      navigate(
                        `/hospital/${hospital._id}/dashboard`
                      );

                    }

                  }}
                >
                  Dashboard
                </button>

              </li>

              <li className="nav-item">

                <button
                  className="nav-link rounded-pill btn-danger"
                  onClick={() => {

                    localStorage.removeItem(
                      "patient"
                    );

                    localStorage.removeItem(
                      "hospital"
                    );

                    localStorage.removeItem(
                      "token"
                    );

                    navigate("/");

                    window.location.reload();

                  }}
                >
                  Logout
                </button>

              </li>
            </>
          )}
        </ul>
    </nav>
  );
}

export default Navbar;