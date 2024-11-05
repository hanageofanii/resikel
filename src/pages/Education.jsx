const Education = () => {
  return (
    <main className="bg-gray-50">
      <section className="bg-green-200 py-16 px-8 lg:px-24 flex items-center">
        <div className="flex-1 text-left max-w-lg mx-auto space-y-4">
          <h1 className="text-3xl font-bold text-justify text-black">
            Bijak Kelola Sampah
          </h1>
          <h1 className="text-l font-bold text-justify text-black">
            Perlakukan Sampahmu dengan 3R Agar Menjadi Berkah Bersama
          </h1>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src="./src/assets/images/reduce.png"
                alt="Reduce"
                className="w-12 h-12"
              />
              <h1 className="text-l text-justify text-black-500 font-bold">
                REDUCE
              </h1>
              <p className="text-l text-justify text-black-500">
                Mengurangi jumlah timbulan sampah.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="./src/assets/images/reuse.png"
                alt="Reuse"
                className="w-12 h-12"
              />
              <h1 className="text-l text-justify text-black-500 font-bold">
                REUSE
              </h1>
              <p className="text-l text-justify text-black-500">
                Menggunakan material lebih dari sekali.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="./src/assets/images/recycle.png"
                alt="Recycle"
                className="w-12 h-12"
              />
              <h1 className="text-l text-justify text-black-500 font-bold">
                RECYCLE
              </h1>
              <p className="text-l text-justify text-black-500">
                Menggunakan material membuat produk baru.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-sm mx-auto">
          <img
            src="./src/assets/images/education1.png"
            alt="image"
            className="mx-auto w-full h-auto"
          />
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-8 lg:px-24 flex items-center">
        <div className="container mx-auto border-b border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 mb-10">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./src/assets/images/education2.png"
                alt="Illustration of mission"
                className="w-3/4 max-w-sm"
              />
            </div>

            {/* Bagian Teks */}
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-black-500 text-justify">
                Menjaga kebersihan adalah tindakan nyata.
              </h3>
              <p className="text-black-300 text-justify">
                Sampah merupakan sisa-sisa kegiatan sehari-hari manusia atau
                proses alam yang berbentuk padat atau semi padat berupa zat
                organik bersifat terurai atau anorganik bersifat tidak dapat
                terurai.
              </p>

              {/* Kotak Info Sampah */}
              <div className="bg-green-200 p-3 rounded-lg space-y-3">
                {/* Sampah Organik */}
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

                {/* Sampah Plastik, Kertas Dll */}
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
        </div>
      </section>

      <section className="bg-gray-100 py-8 px-8 lg:px-24 flex items-center">
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="max-w-6xl text-2xl font-bold text-black">
              Our <span className="text-green-500">Blogs</span>
            </h2>
            <p className="text-gray-500 text-sm">5 MIN READ</p>
          </div>

          <div className="flex gap-6">
            <div className="w-1/2">
              <img
                src="./src/assets/images/blogs.png"
                alt="Recycle Image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-1/2 bg-green-200 rounded-lg p-6 py-16">
              <p className="py-4 text-sm text-gray-500 mb-2">SEPT 24, 2024</p>
              <h3 className="py-4 text-3xl text-black my-4">
                Apa itu Recycle? Pahami Arti dan Cara Melakukannya!
              </h3>
              <div className="py-2 flex space-x-3 mb-4">
                <span className="px-3 py-1 bg-green-300 text-green-700 rounded-full text-sm">
                  Recycle
                </span>
                <span className="px-3 py-1 bg-green-300 text-green-700 rounded-full text-sm">
                  Education
                </span>
              </div>
              <a
                href="/Blog"
                className="py-2 text-green-700 text-base font-semibold hover:text-xl duration-150 active:text-lg">
                Read Now →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
