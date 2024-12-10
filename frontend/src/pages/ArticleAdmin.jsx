import { useState, useEffect, useRef } from "react";
import axios from "axios";

const ArticleAdmin = () => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    imageUrl: "",
    altText: "",
    author: "",
    content: "",
  });

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add new article
  const handleAddArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/articles",
        formData
      );
      // Tambahkan artikel baru ke state articles
      setArticles((prev) => [...prev, response.data]);
      // Reset form setelah submit
      setFormData({
        title: "",
        desc: "",
        imageUrl: "",
        altText: "",
        author: "",
        content: "",
      });
      scrollToBottom(); // Panggil scroll ke bagian bawah tabel
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };

  // Scroll to the bottom of the table
  const scrollToBottom = () => {
    tableEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Delete article
  const handleDeleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/articles/${id}`);
      setArticles((prev) => prev.filter((article) => article.id !== id));
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <div className="pl-72 pt-8 pr-8">
      {/* Section for the form and the heading */}
      <div className="flex flex-col space-y-6">
        <h2 className="text-2xl font-bold">Manage Articles</h2>

        {/* Form to add an article */}
        <form
          onSubmit={handleAddArticle}
          className="flex flex-col w-full bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
        >
          <h3 className="text-lg font-semibold mb-2">Add New Article</h3>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="desc"
            placeholder="Description"
            value={formData.desc}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="altText"
            placeholder="Alt Text"
            value={formData.altText}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
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
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
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
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Title
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Description
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Image
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Alt Text
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Author
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Content
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {article.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {article.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {article.desc}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={article.imageUrl}
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
                  <button
                    onClick={() => handleDeleteArticle(article.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
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
