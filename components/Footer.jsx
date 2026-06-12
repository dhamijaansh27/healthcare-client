import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-4   ">  
      <div className="container">

        <div className="row">

          <div className="col-md-4">
            <h4>
              <i className="bi bi-heart-pulse-fill me-2"></i>
              HealthCare+
            </h4>

            <p>
              Smart Healthcare Portal for patients,
              doctors, and healthcare services.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>

            <ul className="list-unstyled ">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/doctors" className="text-white">Doctors</Link></li>
              <li><Link to="/appointment" className="text-white">Appointments</Link></li>
              <li><Link className="text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>

            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              healthcare@gmail.com
            </p>

            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              +91 9876543210
            </p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          © 2026 HealthCare+ | All Rights Reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;