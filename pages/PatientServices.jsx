import {useNavigate} from 'react-router-dom';

function PatientDashboard() {
  const navigate = useNavigate();
  
  return (
    <div className="container mt-4">
  <div className="row g-4">

    <div className="col-md-4">
      <div className="card shadow"
       style={{ cursor: "pointer" }}
       onClick={() => navigate("/appointment")}
      >
        <div className="card-body text-center">
          <i className="bi bi-calendar-check-fill fs-1 text-primary"></i>
          <h5>Book Appointment</h5>
          <p>Schedule appointments with doctors.</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow"
       style={{ cursor: "pointer" }}
       onClick={() => navigate("/hospital")}
      >
        <div className="card-body text-center">
          <i className="bi bi-hospital-fill fs-1 text-success"></i>
          <h5>Nearby Hospitals</h5>
          <p>Find hospitals near your location.</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow"
       style={{ cursor: "pointer" }}
       onClick={() => navigate("/bed-availability")}
      >
        <div className="card-body text-center">
          <i class="bi bi-house-fill fs-1 text-warning"></i>
          <h5>Bed Availability</h5>
          <p>Check available hospital beds.</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow"
       style={{ cursor: "pointer" }}
       onClick={() => navigate("/medical-history")}
      >
        <div className="card-body text-center">
          <i className="bi bi-file-medical-fill fs-1 text-info"></i>
          <h5>Medical History</h5>
          <p>View your medical records and history.</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow"
       style={{ cursor: "pointer" }}
       onClick={() => navigate("/prescriptions")}
      >
        <div className="card-body text-center">
          <i className="bi bi-card-checklist fs-1 text-info"></i>
          <h5>Prescriptions</h5>
          <p>View your prescriptions and medications.</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow"
       style={{ cursor: "pointer" }}
       onClick={() => navigate("/profile")}
      >
        <div className="card-body text-center">
          <i className="bi bi-person-circle fs-1 text-info"></i>
          <h5>Profile</h5>
          <p>View and update your profile information.</p>
        </div>
      </div>
    </div>

  </div>
</div>
  );
}

export default PatientDashboard;