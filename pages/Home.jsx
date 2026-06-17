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
            

            <div className="text-center pt-4">

                <img
                  src="data:image/jpeg;base64,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"
                  alt="img"
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
                  Dr. Sanjay Singh
                </h4>

                <span className="badge bg-primary mb-3">
                  Physician
                </span>

                <p className="mb-2">
                  <strong>Experience:</strong>
                  <br />
                  5 years.
                </p>

                <p className="text-muted">
                  <i className="bi bi-hospital"></i>
                  {" "}
                  Ganga Mata Hospital
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

          <div className="col-md-4">
            

            <div className="text-center pt-4">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUl2kyQV4psqeZi6WTQmf2IarzLj7qLuXtDkrgm_oAWA&s=10"
                  alt="img"
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
                  Dr. Riya Sharma
                </h4>

                <span className="badge bg-primary mb-3">
                  Cardiologist
                </span>

                <p className="mb-2">
                  <strong>Experience:</strong>
                  <br />
                  5 years
                </p>

                <p className="text-muted">
                  <i className="bi bi-hospital"></i>
                  {" "}
                  Ganga Mata Hospital
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
            

          <div className="col-md-4">
            

            <div className="text-center pt-4">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzw9uF7ZksLU0zjGiBDCs7_Te3S6_yg8xulkFJi1-XQ&s=10"
                  alt="img"
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
                  Dr. Ajay Kapoor
                </h4>

                <span className="badge bg-primary mb-3">
                  Orthopedic
                </span>

                <p className="mb-2">
                  <strong>Experience:</strong>
                  <br />
                  9 years
                </p>

                <p className="text-muted">
                  <i className="bi bi-hospital"></i>
                  {" "}
                  Aiims Delhi
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