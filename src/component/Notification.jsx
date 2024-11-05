import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Notification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message || "Tidak ada notifikasi.";
  const returnPath = location.state?.returnPath || "/"; // Default path if not provided

  const handleReturn = () => {
    navigate(returnPath); // Navigate back to the specified path
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>
        <h2 className="text-xl font-bold text-green-700 mb-2">Notifikasi</h2>
        <p className="text-gray-600">{message}</p>
        <div className="mt-6">
          <button
            onClick={handleReturn}
            className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
