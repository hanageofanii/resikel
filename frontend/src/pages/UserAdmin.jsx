import { useEffect, useState } from "react";
import axios from "axios";

const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState([]);

  // Mendapatkan data user
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/all-users");
      const filteredUsers = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }));
      console.log("Data fetched:", response.data); // Tambahkan log
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error); // Log error
    } finally {
      setLoading(false);
    }
  };

  // Menghapus user
  const Delete = async (id) => {
    setDeleting((prev) => [...prev, id]); // Tandai user sebagai "sedang dihapus"
    setTimeout(async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setUsers((prev) => prev.filter((user) => user.id !== id)); // Hapus user dari tampilan setelah animasi selesai
          console.log("User deleted successfully");
        } else {
          const errorData = await response.json();
          console.error("Error deleting user:", errorData.message);
          alert("Error deleting user: " + errorData.message);
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Error deleting user: " + error.message);
      } finally {
        setDeleting((prev) => prev.filter((deletingId) => deletingId !== id)); // Hapus ID dari daftar "sedang dihapus"
      }
    }, 300); // Waktu menunggu animasi selesai
  };

  // Fetch data user saat komponen dimuat
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="pl-72 pt-8 pr-8">
      <h2 className="text-2xl font-bold mb-6 ml-8">Manage Users</h2>
      <div className="ml-8 bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={`transition-opacity duration-300 ${
                  deleting.includes(user.id) ? "opacity-0" : "opacity-100"
                }`}
              >
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => Delete(user.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    disabled={deleting.includes(user.id)} // Cegah klik berulang
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAdmin;
