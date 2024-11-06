import { useState } from "react";

function RegisterForm() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah form untuk reload halaman

    // Munculkan popup
    setShowPopup(true);

    // Redirect ke halaman login setelah beberapa detik
    setTimeout(() => {
      window.location.href = "/Login"; // Ganti dengan rute login kamu
    }, 2000); // 2 detik
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">REGISTER</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg mb-2">Your Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Active Email Address*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Phone Number*</label>
            <input
              type="tel"
              placeholder="Enter your phone number (+62xxxxxxx)"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Repeat Password*</label>
            <input
              type="password"
              placeholder="Repeat your password"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-orange-400 text-white font-bold rounded-lg">
              REGISTER
            </button>
          </div>
        </form>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-xl">Registration successful!</p>
              <p className="mt-4">Redirecting to login...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterForm;
