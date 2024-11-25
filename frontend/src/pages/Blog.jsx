import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data dari backend article
    fetch("http://localhost:5000/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <div className="mt-4 mb-8">
        <Link
          to="/ArticlesList"
          className="inline-flex items-center text-gray-700 hover:text-gray-900 text-lg font-semibold"
        >
          <FaArrowLeft className="mr-2 text-xl" /> {/* Arrow icon */}
          Kembali
        </Link>
      </div>
      {articles.map((article) => (
        <section id={article.id} className="mb-10">
          <h1 className="text-4xl font-bold mt-4">{article.desc}</h1>
          <p className="text-gray-500 text-sm mt-2">
            {" "}
            {format(new Date(article.createdAt), "dd MMMM yyyy", {
              locale: id,
            })}
          </p>

          {article.imageUrl && (
            <img
              src={article.imageUrl}
              alt={article.altText}
              className="w-full rounded-lg mt-4"
            />
          )}
          <p className="text-gray-500 text-xs mt-2">{article.author}</p>
          <p className="text-justify leading-relaxed mt-4">{article.content}</p>
        </section>
      ))}
    </div>
  );
};

export default Blog;
