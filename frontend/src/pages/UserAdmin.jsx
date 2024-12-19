import axios from "axios";
import { useEffect, useState } from "react";

const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState([]);
  const [userToDelete, setUserToDelete] = useState(null); // Track user to be deleted
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

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

  const handleOpenModal = (id) => {
    setUserToDelete(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setUserToDelete(null);
    setIsModalOpen(false);
  };

  // Menghapus user
  const handleDeleteConfirmed = async () => {
    if (!userToDelete) return;

    setDeleting((prev) => [...prev, userToDelete]); // Mark user as being deleted
    setTimeout(async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/users/${userToDelete}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          setUsers((prev) => prev.filter((user) => user.id !== userToDelete)); // Remove user from list
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
        setDeleting((prev) =>
          prev.filter((deletingId) => deletingId !== userToDelete)
        ); // Remove ID from deleting list
        handleCloseModal(); // Close modal
      }
    }, 300); // Wait for animation to finish
  };

  // Fetch data user saat komponen dimuat
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="pl-72 pt-8 pr-8">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this user?</p>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirmed}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
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
                Points
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
                  {user.points}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleOpenModal(user.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    disabled={deleting.includes(user.id)}
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
