import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Notification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message || "Tidak ada notifikasi.";
  const returnPath = location.state?.returnPath || "/";

  const handleReturn = () => {
    navigate(returnPath);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg py-10 px-5 max-w-lg w-full text-center sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-4xl sm:text-5xl md:text-6xl" />
        </div>
        <h2 className="text-xl font-bold text-green-700 mb-2 sm:text-2xl md:text-3xl">
          Notifikasi
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          {message}
        </p>
        <div className="mt-6">
          <button
            onClick={handleReturn}
            className="inline-block bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 sm:py-3 sm:px-6 md:px-8">
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
