const Education = () => {
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
              <p className="text-gray-500 text-sm">5 MIN READ</p>
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
                <p className="py-4 text-sm text-gray-500 mb-2">SEPT 24, 2024</p>
                <h3 className="py-4 text-3xl text-black my-4 font-bold">
                  Apa itu Recycle? Pahami Arti dan Cara Melakukannya!
                </h3>
                <div className="py-2 flex space-x-3 mb-4">
                  <span className="px-3 py-1 bg-orange-500 text-white font-bold rounded-full text-sm">
                    Recycle
                  </span>
                  <span className="px-3 py-1 bg-orange-500 text-white font-bold rounded-full text-sm">
                    Edukasi
                  </span>
                </div>
                <a href="/Blog" className="py-2 text-green-700 font-semibold">
                  Baca Sekarang →
                </a>
              </div>
            </div>
          </div>
          <hr className="border-b border-gray-300 mt-12" />
        </div>
      </section>

      {/* Section 4: Blog Grid */}
      <section className="bg-gray-100 py-5 px-8 lg:px-24 flex flex-col items-center">
        <div className="max-w-6xl mx-auto">
          {/* Blog Grid */}
          <div className="pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img
                src="./src/assets/images/blog1.jpeg"
                alt="Blog Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between mb-2">
                <span className="bg-orange-500 text-white  text-xs font-semibold px-2 py-1 rounded-full">
                  Recycle
                </span>
                <span className="text-gray-500 text-xs">SEPT 24, 2024</span>
              </div>
              <h3 className="font-bold text-black mb-2">
                Apa itu Recycle? Pahami Arti dan Cara Melakukannya!
              </h3>
              <p className="text-gray-500 text-sm">
                Apa itu Recycle? Pahami Arti dan Cara Melakukannya!
              </p>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img
                src="./src/assets/images/blog2.jpeg"
                alt="Blog Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between mb-2">
                <span className="bg-orange-500 text-white  text-xs font-semibold px-2 py-1 rounded-full">
                  Recycle
                </span>
                <span className="text-gray-500 text-xs">SEPT 24, 2024</span>
              </div>
              <h3 className="font-bold text-black mb-2">
                Mengapa Mengurangi Sampah itu Penting?
              </h3>
              <p className="text-gray-500 text-sm">
                Apa yang terjadi jika kita tidak mengurangi sampah? Mari kita
                pelajari lebih lanjut!
              </p>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img
                src="./src/assets/images/blogs.png"
                alt="Blog Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between mb-2">
                <span className="bg-orange-500 text-white  text-xs font-semibold px-2 py-1 rounded-full">
                  Reduce
                </span>
                <span className="text-gray-500 text-xs">SEPT 24, 2024</span>
              </div>
              <h3 className="font-bold text-black mb-2">
                Cara Mengurangi Sampah Plastik Secara Efektif
              </h3>
              <p className="text-gray-500 text-sm">
                Pelajari cara-cara sederhana yang dapat mengurangi sampah
                plastik sehari-hari.
              </p>
            </div>
          </div>

          {/* View More Button */}
          <div className="mt-12 text-center">
            <a
              href="/ArticlesList"
              className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              selengkapnya
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
