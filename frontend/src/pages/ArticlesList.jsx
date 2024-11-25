import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

// const articles = [
//   {
//     id: 1,
//     title: "Recycle",
//     date: "SEPT 14, 2024",
//     description: "Apa Itu Penyortiran? Pahami dari dan Cara Mendaurulangnya!",
//     imageUrl: "./src/assets/images/blog1.jpeg",
//     altText: "Recycling symbol made of green leaves",
//   },
//   {
//     id: 2,
//     title: "Recycle",
//     date: "SEPT 14, 2024",
//     description: "Apa Itu Penyortiran? Pahami dari dan Cara Mendaurulangnya!",
//     imageUrl: "./src/assets/images/blog2.jpeg",
//     altText: "Recycling symbol made of green leaves",
//   },
//   {
//     id: 3,
//     title: "Recycle",
//     date: "SEPT 14, 2024",
//     description: "Apa Itu Penyortiran? Pahami dari dan Cara Mendaurulangnya!",
//     imageUrl: "./src/assets/images/blogs.png",
//     altText: "Recycling symbol made of green leaves",
//   },
//   {
//     id: 4,
//     title: "Recycle",
//     date: "SEPT 14, 2024",
//     description: "Apa Itu Penyortiran? Pahami dari dan Cara Mendaurulangnya!",
//     imageUrl: "./src/assets/images/blog1.jpeg",
//     altText: "Recycling symbol made of green leaves",
//   },
//   {
//     id: 5,
//     title: "Recycle",
//     date: "SEPT 14, 2024",
//     description: "Apa Itu Penyortiran? Pahami dari dan Cara Mendaurulangnya!",
//     imageUrl: "./src/assets/images/blog2.jpeg",
//     altText: "Recycling symbol made of green leaves",
//   },
//   {
//     id: 6,
//     title: "Recycle",
//     date: "SEPT 14, 2024",
//     description: "Apa Itu Penyortiran? Pahami dari dan Cara Mendaurulangnya!",
//     imageUrl: "./src/assets/images/blogs.png",
//     altText: "Recycling symbol made of green leaves",
//   },
//   {
//     id: 7,
//     title: "Recycle",
//     date: "SEPT 14, 2024",
//     description: "Apa Itu Penyortiran? Pahami dari dan Cara Mendaurulangnya!",
//     imageUrl: "./src/assets/images/blog1.jpeg",
//     altText: "Recycling symbol made of green leaves",
//   },
//   {
//     id: 8,
//     title: "Recycle",
//     date: "SEPT 14, 2024",
//     description: "Apa Itu Penyortiran? Pahami dari dan Cara Mendaurulangnya!",
//     imageUrl: "./src/assets/images/blog2.jpeg",
//     altText: "Recycling symbol made of green leaves",
//   },
//   {
//     id: 9,
//     title: "Recycle",
//     date: "SEPT 14, 2024",
//     description: "Apa Itu Penyortiran? Pahami dari dan Cara Mendaurulangnya!",
//     imageUrl: "./src/assets/images/blogs.png",
//     altText: "Recycling symbol made of green leaves",
//   },
// ];

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
          className="inline-flex items-center text-gray-700 hover:text-gray-900 text-lg font-semibold"
        >
          <FaArrowLeft className="mr-2 text-xl" /> {/* Arrow icon */}
          Kembali
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.altText}
                className="w-full h-48 object-cover"
              />
            )}
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
              <Link to="/Blog" className="hover:font-bold">
                <p className="text-gray-800 text-sm">{article.desc}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
