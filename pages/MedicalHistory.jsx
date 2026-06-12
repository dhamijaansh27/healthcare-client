function MedicalHistory() {

  const history = [
    {
      id: 1,
      date: "15-05-2026",
      doctor: "Dr. Amit Sharma",
      diagnosis: "Hypertension",
      treatment: "Blood Pressure Medication"
    },
    {
      id: 2,
      date: "10-03-2026",
      doctor: "Dr. Priya Singh",
      diagnosis: "Migraine",
      treatment: "Pain Relief Therapy"
    },
    {
      id: 3,
      date: "20-01-2026",
      doctor: "Dr. Rahul Verma",
      diagnosis: "Knee Pain",
      treatment: "Physiotherapy"
    }
  ];

  return (
    <div className="container mt-5">

  <h2 className="mb-4">
    Medical History
  </h2>

  {history.map((record) => (

    <div
      key={record.id}
      className="card shadow mb-3"
    >

      <div className="card-body">

        <h5 className="card-title">
          {record.diagnosis}
        </h5>

        <p>
          <strong>Date:</strong> {record.date}
        </p>

        <p>
          <strong>Doctor:</strong> {record.doctor}
        </p>

        <p>
          <strong>Treatment:</strong> {record.treatment}
        </p>

      </div>

    </div>

  ))}

</div>
  );
}

export default MedicalHistory;