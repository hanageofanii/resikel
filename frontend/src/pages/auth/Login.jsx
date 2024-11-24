import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", Katasandi: "" });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Masukan email anda";
    }
    if (!formData.password) {
      newErrors.password = "Masukan Kata Sandi anda";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data); // Hasil login dari backend
      setShowPopup(true); // Tampilkan popup berhasil login

      setTimeout(() => {
        setShowPopup(false);
        navigate("/"); // Arahkan ke beranda
      }, 2000);
    } catch (error) {
      // Tampilkan pesan error dari backend
      if (error.response && error.response.data.msg) {
        setErrors({ apiError: error.response.data.msg });
        setShowPopup(true); // Tampilkan popup error
        // Tunggu 2 detik sebelum refresh halaman
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error("Login error:", error);
        setErrors({ apiError: "Terjadi kesalahan. Silakan coba lagi." });
        setShowPopup(true);

        // Tunggu 2 detik sebelum refresh halaman
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-green-200">
      <div className="md:w-1/2 flex items-center justify-center p-4">
        <img
          src="./src/assets/images/mascot.png"
          alt="Person recycling with two bins and plants"
          className="h-[600px] w-auto"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-8">MASUK</h1>
        <p className="mb-6">Masukkan email anda untuk masuk.</p>
        <form onSubmit={handleSignIn} className="w-full md:w-96 space-y-6">
          <div>
            <input
              type="email"
              name="email"
              placeholder="contoh@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="*****"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border rounded mb-1"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <a href="#" className="text-sm text-blue-500">
            Lupa Kata Sandi?
          </a>
          {/* Centering the button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-400 text-white py-3 px-8 rounded mt-2 w-full"
            >
              MASUK
            </button>
          </div>
        </form>
        <a href="/Reg" className="text-sm text-gray-700 mt-6">
          Belum punya akun? daftar disini.
        </a>

        {/* Popup Notification */}
        {showPopup && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center space-x-4">
              <span
                className={`text-3xl ${
                  errors.apiError ? "text-red-500" : "text-green-500"
                }`}
              >
                {errors.apiError ? "❌" : "✅"}
              </span>
              <div>
                <p className="text-xl">
                  {errors.apiError ? "Login Gagal!" : "Berhasil Masuk!"}
                </p>
                <p className="mt-4">
                  {errors.apiError
                    ? errors.apiError
                    : "Mengalihkan ke beranda..."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
