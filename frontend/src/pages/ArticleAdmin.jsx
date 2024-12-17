import axios from "axios";
import { useEffect, useRef, useState } from "react";

const ArticleAdmin = () => {
  const [articles, setArticles] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false); // Manage edit modal
  const [articleToEdit, setArticleToEdit] = useState(null); // Store article being edited
  const [notification, setNotification] = useState(""); // State untuk notifikasi
  const [formData, setFormData] = useState({
    ctg: "",
    title: "",
    imageUrl: "",
    altText: "",
    author: "",
    content: "",
    src: "",
  });
  const [editFormData, setEditFormData] = useState({
    ctg: "",
    title: "",
    imageUrl: "",
    altText: "",
    author: "",
    content: "",
    src: "",
  });
  const [deleting, setDeleting] = useState([]); // Track articles being deleted

  const tableEndRef = useRef(null); // Ref untuk bagian akhir tabel

  // Load articles from the database
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/articles");
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  // Add new article
  const handleAddArticle = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/articles",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setArticles((prev) => [...prev, response.data]);
      setFormData({
        ctg: "",
        title: "",
        image: null, // Reset image field
        altText: "",
        author: "",
        content: "",
        src: "",
      });
      scrollToBottom();
      fetchArticles();
      setTimeout(() => {
        setNotification("Artikel berhasil ditambahkan!"); // Atur notifikasi sukses
        setTimeout(() => setNotification(""), 3000);
      }, 300);
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenEditModal = (article) => {
    setArticleToEdit(article); // Set artikel yang akan diedit
    setEditFormData({
      ctg: article.ctg,
      title: article.title,
      imageUrl: article.imageUrl,
      altText: article.altText,
      author: article.author,
      content: article.content,
      src: article.src,
    }); // Isi form dengan data artikel
    setEditModalOpen(true); // Tampilkan modal edit
  };

  const handleCloseEditModal = () => {
    setArticleToEdit(null); // Reset artikel yang sedang diedit
    setEditModalOpen(false); // Sembunyikan modal edit
  };

  const handleEditConfirmed = async (e) => {
    e.preventDefault();
    if (!articleToEdit) return;

    const data = new FormData();
    Object.entries(editFormData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await axios.patch(
        `http://localhost:5000/articles/${articleToEdit.id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setArticles((prev) =>
        prev.map((article) =>
          article.id === articleToEdit.id
            ? { ...article, ...editFormData }
            : article
        )
      ); // Update daftar artikel
      fetchArticles();
      handleCloseEditModal(); // Tutup modal setelah sukses
      setTimeout(() => {
        setNotification("Perubahan berhasil disimpan!"); // Atur notifikasi sukses
        setTimeout(() => setNotification(""), 3000);
      }, 300);
    } catch (error) {
      console.error("Error editing article:", error);
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = (id) => {
    setArticleToDelete(id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setArticleToDelete(null);
    setModalOpen(false);
  };

  // Scroll to the bottom of the table
  const scrollToBottom = () => {
    tableEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Delete article with animation
  const handleDeleteConfirmed = async () => {
    if (!articleToDelete) return;

    setDeleting((prev) => [...prev, articleToDelete]); // Mark article as being deleted
    setTimeout(async () => {
      try {
        await axios.delete(`http://localhost:5000/articles/${articleToDelete}`);
        setArticles((prev) =>
          prev.filter((article) => article.id !== articleToDelete)
        );
        console.log("Article deleted successfully");
      } catch (error) {
        console.error("Error deleting article:", error);
      } finally {
        setDeleting((prev) =>
          prev.filter((deletingId) => deletingId !== articleToDelete)
        ); // Remove from deleting list
        handleCloseModal(); // Close modal after animation
        setTimeout(() => {
          setNotification("Artikel berhasil dihapus!"); // Atur notifikasi sukses
          setTimeout(() => setNotification(""), 3000);
        }, 300);
      }
    }, 300); // Wait for animation to finish
  };

  return (
    <div className="pl-72 pt-8 pr-8">
      {/* Modal Edit */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Edit Article</h2>
            <form onSubmit={handleEditConfirmed} className="space-y-4">
              <select
                name="ctg"
                value={editFormData.ctg}
                onChange={handleEditInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option>Pilih Kategori</option>
                <option value="Pengetahuan Umum">Pengetahuan Umum</option>
                <option value="Jenis Sampah">Jenis Sampah</option>
                <option value="Daur Ulang">Daur Ulang</option>
              </select>
              <textarea
                name="title"
                placeholder="Title"
                value={editFormData.title}
                onChange={handleEditInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="file"
                name="image"
                onChange={(e) =>
                  setEditFormData((prev) => ({
                    ...prev,
                    image: e.target.files[0],
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                type="text"
                name="altText"
                placeholder="Alt Text"
                value={editFormData.altText}
                onChange={handleEditInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                type="text"
                name="author"
                placeholder="Author"
                value={editFormData.author}
                onChange={handleEditInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name="content"
                placeholder="Content"
                value={editFormData.content}
                onChange={handleEditInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name="src"
                placeholder="Source"
                value={editFormData.src}
                onChange={handleEditInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={handleCloseEditModal}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-lg font-semibold px-8 py-3 rounded shadow-md z-50">
          {notification}
        </div>
      )}

      {/* Modal for confirmation */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Delete Confirmation</h2>
            <p>Are you sure you want to delete this article?</p>
            <div className="mt-6 flex justify-end space-x-4">
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
      {/* Section for the form and the heading */}
      <div className="flex flex-col space-y-6">
        <h2 className="text-2xl font-bold">Manage Articles</h2>

        {/* Form to add an article */}
        <form
          onSubmit={handleAddArticle}
          className="flex flex-col w-full bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
        >
          <h3 className="text-lg font-semibold mb-2">Add New Article</h3>
          <select
            name="ctg"
            value={formData.ctg}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option>Pilih Kategori</option>
            <option value="Pengetahuan Umum">Pengetahuan Umum</option>
            <option value="Jenis Sampah">Jenis Sampah</option>
            <option value="Daur Ulang">Daur Ulang</option>
          </select>
          <textarea
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            name="image"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, image: e.target.files[0] }))
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            type="text"
            name="altText"
            placeholder="Alt Text"
            value={formData.altText}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="src"
            placeholder="Source"
            value={formData.src}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            Add Article
          </button>
        </form>
      </div>

      {/* Table to display articles */}
      <div className="mt-8 bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-gray-300 px-4 py-2 text-center">
                ID
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Category
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Title
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Image
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Alt Text
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Author
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Content
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Source
              </th>
              <th
                className="border border-gray-300 px-4 py-2 text-center"
                colSpan="2"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr
                key={article.id}
                className={`transition-opacity duration-300 ${
                  deleting.includes(article.id) ? "opacity-0" : "opacity-100"
                }`}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {article.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {article.ctg}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {article.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={`http://localhost:5000${article.imageUrl}`}
                    alt={article.altText}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {article.altText}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {article.author}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {article.content}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {article.src}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleOpenEditModal(article)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleOpenModal(article.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    disabled={deleting.includes(article.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* Ref for scrolling */}
            <tr ref={tableEndRef}></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ArticleAdmin;
