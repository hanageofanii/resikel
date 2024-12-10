import { useEffect, useState } from "react";
import axios from "axios";

const SampahAdmin = () => {
  const [sampahData, setSampahData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSampah = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/sampah"); // Sesuaikan URL API
      const filteredSampah = response.data.map((sampah) => ({
        id: sampah.id,
        name: sampah.name,
        jenis: sampah.jenis,
        berat: sampah.berat,
      }));
      console.log("Data fetched:", response.data); // Tambahkan log
      setSampahData(filteredSampah);
    } catch (error) {
      console.error("Error fetching sampah:", error); // Log error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSampah();
  }, []);

  return (
    <div className="pl-72 pt-8 pr-8">
      <h2 className="text-2xl font-bold mb-6 ml-8">Manage Sampah</h2>
      <div className="ml-8 bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Nama
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Jenis
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Berat
              </th>
            </tr>
          </thead>
          <tbody>
            {sampahData.map((sampah) => (
              <tr key={sampah.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {sampah.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {sampah.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {sampah.jenis}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {sampah.berat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SampahAdmin;
