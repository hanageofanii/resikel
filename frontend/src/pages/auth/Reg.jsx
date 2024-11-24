import { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/users", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        repeatPassword: formData.repeatPassword,
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }

    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Masukan Nama Lengkap anda";
    }
    if (!formData.email) {
      newErrors.email = "Masukan email anda";
    }
    if (!formData.phone) {
      newErrors.phone = "Masukan Nomor Telepon anda";
    }
    if (!formData.password) {
      newErrors.password = "Masukan Kata Sandi anda";
    }
    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = "Kata Sandi tidak sesuai";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setShowPopup(true);

    setTimeout(() => {
      window.location.href = "/Login";
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">DAFTAR</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg mb-2">Nama lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama"
              className="w-full p-3 border rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-lg mb-2">Email aktif*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="contoh@gmail.com"
              className="w-full p-3 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-lg mb-2">Nomor telepon*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+62-xxxxxxx"
              className="w-full p-3 border rounded-lg"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-lg mb-2">Password*</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="*****"
              className="w-full p-3 border rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-lg mb-2">Ulangi password*</label>
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              placeholder="*****"
              className="w-full p-3 border rounded-lg"
            />
            {errors.repeatPassword && (
              <p className="text-red-500 text-sm">{errors.repeatPassword}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-orange-400 text-white font-bold rounded-lg"
            >
              DAFTAR
            </button>
          </div>
        </form>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center space-x-4">
              {/* Icon and text */}
              <span className="text-3xl text-green-500">✅</span>
              <div>
                <p className="text-xl">Daftar berhasil!</p>
                <p className="mt-4">Mengalihkan ke halaman login...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterForm;
