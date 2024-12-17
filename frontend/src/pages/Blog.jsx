import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch data dari backend article
    fetch(`http://localhost:5000/articles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched article data:", data);
        setArticle(data);
      })
      .catch((error) => console.error("Error fetching article:", error));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>; // Tampilkan loading jika data belum ada
  }

  if (article === null) {
    return <div>Artikel tidak ditemukan.</div>;
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <div className="mt-4 mb-8">
        <Link
          to="/ArticlesList"
          className="inline-flex items-center text-dark text-lg font-semibold hover:text-gray-500"
        >
          <FaArrowLeft className="mr-2 text-xl" /> {/* Arrow icon */}
          Kembali
        </Link>
      </div>
      <section id={article.id} className="mb-10">
        <h1 className="text-4xl font-bold mt-4">{article.title}</h1>
        <p className="text-gray-500 text-sm mt-2">
          {article.author} |{" "}
          {format(new Date(article.createdAt), "dd MMMM yyyy", {
            locale: localeId,
          })}
        </p>
        {article.imageUrl && (
          <img
            src={`http://localhost:5000${article.imageUrl}`}
            alt={article.altText}
            className="w-full rounded-lg mt-4"
          />
        )}
        <p className="text-gray-500 text-xs mt-2">Photo by {article.author}</p>
        <p className="text-justify leading-relaxed mt-4">{article.content}</p>
      </section>
      <p className="text-gray-500 text-xs mt-2">Source : {article.src}</p>
    </div>
  );
};

export default Blog;
