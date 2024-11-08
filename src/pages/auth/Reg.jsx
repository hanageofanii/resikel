import { useState } from "react";

function RegisterForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match";
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
        <h1 className="text-4xl font-bold text-center mb-8">REGISTER</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg mb-2">Nama lengkap</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nama"
              className="w-full p-3 border rounded-lg"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-lg mb-2">Email aktif*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
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
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-xl">Daftar berhasil!</p>
              <p className="mt-4">Mengalihkan ke halaman login...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterForm;
