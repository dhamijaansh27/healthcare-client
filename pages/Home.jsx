import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <div className="container">

          <h1 className="display-4 fw-bold">
            Your Health, Our Priority
          </h1>

          <p className="lead">
            Book appointments, find doctors, check bed availability
            and manage your health records.
          </p>

          <button
            className="btn btn-outline-light btn-lg me-3"
            onClick={() => navigate("/appointment")}
          >
            Book Appointment
          </button>

          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => navigate("/doctors")}
          >
            Find Doctors
          </button>

        </div>
      </div>

      <div className="row justify-content-center py-5">

        {/* Patient Login Card */}
        <div className="col-md-4 mb-4">

          <div className="card shadow-lg text-center h-100">

            <div className="card-body">

              <i
                className="bi bi-person-circle text-primary"
                style={{ fontSize: "5rem" }}
              ></i>

              <h3 className="mt-3">
                Patient Portal
              </h3>

              <p>
                Book appointments, view prescriptions,
                medical history and hospital information.
              </p>

              <button
                className="btn btn-primary w-100"
                onClick={() => navigate("/login")}
              >
                Patient Login
              </button>

            </div>

          </div>

        </div>

        {/* Hospital Login Card */}
        <div className="col-md-4 mb-4">

          <div className="card shadow-lg text-center h-100">

            <div className="card-body">

              <i
                className="bi bi-hospital text-success"
                style={{ fontSize: "5rem" }}
              ></i>

              <h3 className="mt-3">
                Hospital Portal
              </h3>

              <p>
                Manage doctors, appointments,
                beds availability and patient records.
              </p>

              <button
                className="btn btn-success w-100"
                onClick={() => navigate("/hospital-login")}
              >
                Hospital Login
              </button>

            </div>

          </div>
        </div>

      </div>

      {/* Services Section */}
      <div className="container py-5">

        <h2 className="text-center mb-5">
          Our Services
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow text-center h-100"
            onClick={() => navigate("/appointment")}>
              <div className="card-body">
                <i className="bi bi-calendar-check-fill fs-1 text-primary"></i>
                <h4 className="mt-3">Appointments</h4>
                <p>Book appointments with specialists.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center h-100"
            onClick={() => navigate("/doctors")}>
              <div className="card-body">
                <i className="bi bi-person-badge-fill fs-1 text-success"></i>
                <h4 className="mt-3">Doctors</h4>
                <p>Find experienced doctors.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center h-100"
            onClick={() => navigate("/hospital")} >
              <div className="card-body">
                <i className="bi bi-hospital-fill fs-1 text-danger"></i>
                <h4 className="mt-3">Hospitals</h4>
                <p>Locate nearby hospitals instantly.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Statistics Section */}
      <div className="bg-light py-5">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">
                1000+
              </h2>
              <p>Patients</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-success">
                150+
              </h2>
              <p>Doctors</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-danger">
                25+
              </h2>
              <p>Hospitals</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-warning">
                5000+
              </h2>
              <p>Appointments</p>
            </div>

          </div>

        </div>

      </div>

      {/* Specialists Section */}
      <div className="container py-5">

        <h2 className="text-center mb-5">
          Top Specialists
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
                className="card-img-top"
                alt="Doctor"
                style={{
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body text-center">

                <h5>Dr. Amit Sharma</h5>

                <p>Cardiologist</p>

                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/appointment")}
                >
                  Book Appointment
                </button>

              </div>

            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                className="card-img-top"
                alt="Doctor"
                style={{
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body text-center">

                <h5>Dr. Priya Singh</h5>

                <p>Neurologist</p>

                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/appointment")}
                >
                  Book Appointment
                </button>

              </div>

            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f"
                className="card-img-top"
                alt="Doctor"
                style={{
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body text-center">

                <h5>Dr. Rahul Verma</h5>

                <p>Orthopedic</p>

                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/appointment")}
                >
                  Book Appointment
                </button>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Emergency Section */}
      <div className="container py-5">

        <div className="card bg-danger text-white text-center shadow">

          <div className="card-body">

            <h2>
              <i className="bi bi-telephone-fill me-2"></i>
              Emergency Assistance
            </h2>

            <p>
              Need urgent medical help?
            </p>

            <h3>108</h3>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;