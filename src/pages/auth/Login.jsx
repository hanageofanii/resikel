import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/");
    }, 2000);
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
        <h1 className="text-4xl font-bold mb-8">SIGN IN</h1>
        <p className="mb-6">Enter your email to sign in.</p>
        <form onSubmit={handleSignIn} className="w-full md:w-96 space-y-6">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <a href="#" className="text-sm text-blue-500">
            Forget your password?
          </a>
          {/* Centering the button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-400 text-white py-3 px-8 rounded mt-6">
              SIGN IN
            </button>
          </div>
        </form>
        <a href="/Reg" className="text-sm text-gray-700 mt-6">
          Dont have an account? Register here.
        </a>

        {/* Popup Notification */}
        {showPopup && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-xl">Login successful!</p>
              <p className="mt-4">Redirecting to home...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
