import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Rewards = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    jenis: "",
    berat: "",
  });

  const [totalPoints, setTotalPoints] = useState(0);

  // Load points from localStorage when the component is mounted
  useEffect(() => {
    const savedPoints = localStorage.getItem("totalPoints");
    if (savedPoints) {
      setTotalPoints(parseInt(savedPoints));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();

    try {
      const response = await axios.post("http://localhost:5000/sampah", {
        name: formData.name,
        jenis: formData.jenis,
        berat: formData.berat,
      });

      if (response.status === 201) {
        // Increment points based on the weight of the trash (e.g., 10 points per kg)
        const newPoints = totalPoints + parseInt(formData.berat) * 10;
        setTotalPoints(newPoints);

        // Save updated points to localStorage
        localStorage.setItem("totalPoints", newPoints);

        // Navigate to notification page
        navigate("/notification", {
          state: {
            message: "Form berhasil disubmit!",
            returnPath: "/Rewards",
          },
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Terjadi kesalahan saat mengirim pesan.");
    }

    // Reset form data
    setFormData({
      name: "",
      jenis: "",
      berat: "",
    });

    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-green-200 py-16 px-8 lg:px-24 text-center">
        <h1 className="text-2xl font-bold">Yuk Kurangi Sampah!</h1>
      </header>
      <main className="w-full max-w-4xl bg-white mt-6 p-6 rounded-lg shadow-md mb-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">
              Kumpulkan sampah anda hari ini!
            </h2>
            <a
              href="/Tracklocation"
              className="text-sm text-gray-500 hover:underline">
              Lacak Lokasi
            </a>
          </div>
          <div className="flex items-center border border-orange-300 rounded-lg p-4">
            <i className="fas fa-recycle text-orange-300 text-2xl mr-2"></i>
            <div>
              <p className="text-sm text-gray-500">Total Poin</p>
              <p className="text-xl font-bold text-green-500">{totalPoints}</p>
              <a
                href="/claimreward"
                className="text-sm text-gray-500 hover:underline">
                Klaim hadiah
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-center text-xl font-bold mb-4">Formulir</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Anda
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
                placeholder="masukkan nama anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jenis Sampah
              </label>
              <select
                name="jenis"
                value={formData.jenis}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required>
                <option>Pilih jenis sampah</option>
                <option value="plastik">Plastik</option>
                <option value="kertas">Kertas</option>
                <option value="kardus">Kardus</option>
                <option value="logam">Logam</option>
                <option value="organik">Organik</option>
                <option value="elektronik">Sampah Elektronik</option>
                <option value="bahan berbahaya">
                  Bahan Berbahaya dan Beracun (B3)
                </option>
              </select>
            </div>
            <div className="flex items-center">
              <div className="flex-grow">
                <label className="block text-sm font-medium text-gray-700">
                  Berat Sampah
                </label>
                <input
                  type="number"
                  name="berat"
                  value={formData.berat}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">Kg</span>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Rewards;
