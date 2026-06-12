function DoctorCard({ doctor }) {
  return (
    <div>
      <img src={doctor.image} />

      <h3>{doctor.name}</h3>

      <p>{doctor.specialization}</p>

      <button>
        Book Appointment
      </button>
    </div>
  );
}