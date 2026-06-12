function Hero() {
  return (
    <div className="bg-blue-100 h-[80vh] flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-6xl font-bold">
          Smart Healthcare Portal
        </h1>

        <p className="mt-5 text-xl">
          Your Health, Our Priority
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 mt-6 rounded">
          Book Appointment
        </button>

      </div>
    </div>
  );
}

export default Hero;