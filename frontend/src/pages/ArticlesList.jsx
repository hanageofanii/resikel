import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data dari API backend
    fetch("http://localhost:5000/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <header className="w-full bg-white-200 py-16 px-8 lg:px-24 text-center">
        <h1 className="text-4xl font-bold">Blog Kami</h1>
      </header>

      {/* Back to Education button */}
      <div className="mt-4 mb-8">
        <a
          href="/Education"
          className="inline-flex items-center text-dark text-lg font-semibold hover:text-gray-500"
        >
          <FaArrowLeft className="mr-2 text-xl" /> {/* Arrow icon */}
          Kembali
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Link to={`/article/${article.id}`}>
              <img
                src={`http://localhost:5000${article.imageUrl}`}
                alt={article.altText}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-orange-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {article.title}
                  </span>
                  <span className="text-gray-600 text-xs">
                    {format(new Date(article.createdAt), "dd MMMM yyyy", {
                      locale: id,
                    })}
                  </span>
                </div>
                <p className="text-gray-800 text-sm">{article.desc}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
