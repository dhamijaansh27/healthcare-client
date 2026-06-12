function DoctorDashboard() {

  return (
    <div className="flex">

      <aside className="bg-green-700 text-white w-64 h-screen p-5">

        <h2 className="text-2xl">
          Doctor Dashboard
        </h2>

        <ul className="mt-8 space-y-4">
          <li>Patients</li>
          <li>Appointments</li>
          <li>Prescriptions</li>
          <li>Reports</li>
        </ul>

      </aside>

      <div className="p-10">

        <h1 className="text-4xl">
          Welcome Doctor
        </h1>

      </div>

    </div>
  );
}

export default DoctorDashboard;