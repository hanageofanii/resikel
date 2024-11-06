import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate(); // Inisialisasi hook untuk navigasi

  const handleSignIn = () => {
    // Ketika tombol SIGN IN ditekan, arahkan ke homepage
    navigate("/"); // Ganti '/' dengan rute homepage kamu
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
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
        <input
          type="email"
          placeholder="Enter your email"
          className="mb-6 p-4 w-full md:w-96 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 p-4 w-full md:w-96 border rounded"
        />
        <a href="#" className="text-sm text-blue-500 mb-6">
          Forget your password?
        </a>
        <button
          onClick={handleSignIn} // Menambahkan fungsi untuk navigasi
          className="bg-orange-400 text-white py-3 px-8 rounded w-full md:w-auto">
          SIGN IN
        </button>
        <a href="/Reg" className="text-sm text-gray-700 mt-6">
          Do you have account?
        </a>
      </div>
    </div>
  );
}

export default App;
