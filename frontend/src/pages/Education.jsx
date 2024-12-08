import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  const currentDate = new Date();

  // Memformat tanggal
  const formattedDate = currentDate
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  return (
    <main className="bg-gray-100">
      {/* Section 1: Introduction with 3R */}
      <section className="bg-green-200 py-8 px-8 lg:px-24 flex flex-col lg:flex-row items-center">
        <div className="flex-1 text-left max-w-lg mx-auto space-y-4">
          <h1 className="text-3xl font-bold text-justify text-black">
            Bijak Kelola Sampah
          </h1>
          <h2 className="text-lg font-bold text-justify text-black">
            Perlakukan Sampahmu dengan 3R Agar Menjadi Berkah Bersama
          </h2>

          <div className="space-y-6">
            {/* Reduce */}
            <div className="flex flex-col lg:flex-row items-center space-x-4">
              <img
                src="./src/assets/images/reduce.png"
                alt="Reduce"
                className="w-12 h-12"
              />
              <h3 className="text-lg text-justify text-black font-bold">
                REDUCE
              </h3>
              <p className="text-lg text-justify text-black">
                Mengurangi jumlah timbulan sampah.
              </p>
            </div>

            {/* Reuse */}
            <div className="flex flex-col lg:flex-row items-center space-x-4">
              <img
                src="./src/assets/images/reuse.png"
                alt="Reuse"
                className="w-12 h-12"
              />
              <h3 className="text-lg text-justify text-black font-bold">
                REUSE
              </h3>
              <p className="text-lg text-justify text-black">
                Menggunakan material lebih dari sekali.
              </p>
            </div>

            {/* Recycle */}
            <div className="flex flex-col lg:flex-row items-center space-x-4">
              <img
                src="./src/assets/images/recycle.png"
                alt="Recycle"
                className="w-12 h-12"
              />
              <h3 className="text-lg text-justify text-black font-bold">
                RECYCLE
              </h3>
              <p className="text-lg text-justify text-black">
                Menggunakan material membuat produk baru.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-sm mx-auto">
          <img
            src="./src/assets/images/education1.png"
            alt="education image"
            className="mx-auto w-full h-auto"
          />
        </div>
      </section>

      {/* Section 2: Cleanliness Awareness */}
      <section className="bg-gray-100 py-2 px-8 lg:px-24 flex flex-col lg:flex-row items-center">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-2 mb-2">
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./src/assets/images/education2.png"
                alt="Illustration of mission"
                className="w-full max-w-sm"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-black text-justify">
                Menjaga kebersihan adalah tindakan nyata.
              </h3>
              <p className="text-black text-justify">
                Sampah merupakan sisa-sisa kegiatan sehari-hari manusia atau
                proses alam yang berbentuk padat atau semi padat berupa zat
                organik bersifat terurai atau anorganik bersifat tidak dapat
                terurai.
              </p>

              {/* Trash Info Box */}
              <div className="bg-green-200 p-3 rounded-lg space-y-3">
                {/* Organic Trash */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">65%</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-black text-sm">
                      Sampah Organik
                    </p>
                  </div>
                </div>

                {/* Plastic, Paper, etc */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">35%</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-black text-sm">
                      Sampah Plastik, Kertas Dll
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-b border-gray-300 my-4" />
        </div>
      </section>

      {/* Section 3: Blog Showcase */}
      <section className="bg-gray-100 py-6 px-8 lg:px-24 flex flex-col items-center">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-green-500">
                Blog <span className="text-black">Kami</span>
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Blog Preview */}
              <div className="w-full lg:w-1/2">
                <img
                  src="./src/assets/images/blogs.png"
                  alt="Recycle Image"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 bg-green-200 rounded-lg p-6 py-16">
                <p className="py-4 text-sm text-gray-500 mb-2">
                  {formattedDate}
                </p>
                <h3 className="py-4 text-3xl text-black my-4 font-bold">
                  Apa itu Recycle? Pahami Arti dan Cara Melakukannya!
                </h3>
                <div className="py-2 flex space-x-3 mb-4">
                  <span className="px-10 py-1 bg-transparent border-2 border-gray-500 text-black rounded-full text-sm">
                    Recycle
                  </span>
                  <span className="px-10 py-1 bg-transparent border-2 border-gray-600 text-black rounded-full text-sm">
                    Edukasi
                  </span>
                </div>
                <button className="mt-8">
                  <Link
                    to="/ArticlesList"
                    className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Lihat Artikel →
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View More Button */}
    </main>
  );
};

export default Education;
