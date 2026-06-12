function BedAvailability() {

  const hospitals = [
    {
      id: 1,
      name: "City Hospital",
      generalBeds: 25,
      icuBeds: 5,
      emergencyBeds: 3
    },
    {
      id: 2,
      name: "Apollo Hospital",
      generalBeds: 18,
      icuBeds: 2,
      emergencyBeds: 4
    },
    {
      id: 3,
      name: "Max Hospital",
      generalBeds: 30,
      icuBeds: 8,
      emergencyBeds: 6
    }
  ];

  return (
    <div className="row">

  {hospitals.map((hospital) => (

    <div className="col-md-4 mb-4" key={hospital.id}>

      <div className="card shadow">

        <div className="card-body">

          <h5 className="card-title">
            <i className="bi bi-hospital-fill me-2"></i>
            {hospital.name}
          </h5>

          <p>🛏 General Beds: {hospital.generalBeds}</p>

          <p>🚑 ICU Beds: {hospital.icuBeds}</p>

          <p>⚕ Emergency Beds: {hospital.emergencyBeds}</p>

          <button className="btn btn-primary w-100">
            View Details
          </button>

        </div>

      </div>

    </div>

  ))}

</div>
  );
}

export default BedAvailability;