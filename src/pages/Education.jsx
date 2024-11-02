const Education = () => {
  return (
    <main className="bg-gray-50">
      <section className="bg-green-100 py-16 px-8 lg:px-24 flex items-center">
        <div className="flex-1 text-left max-w-lg mx-auto space-y-4">
          <h1 className="text-3xl font-bold text-justify text-green-600">
            Bijak Kelola Sampah
          </h1>
          <h1 className="text-l font-bold text-justify text-green-500">
            Perlakukan Sampahmu dengan 3R Agar Menjadi Berkah Bersama
          </h1>
          <ul>
            <h1 className="text-l text-justify text-green-500">
              REDUCE : Mengurangi jumlah timbulan sampah.
            </h1>
            <h1 className="text-l text-justify text-green-500">
              REUSE : Menggunakan kembali/menggunakan material lebih dari sekali
            </h1>
            <h1 className="text-l text-justify text-green-500">
              RECYCLE : Menggunakan material untuk membuat produk baru.
            </h1>
          </ul>
        </div>
        <div className="flex-1 max-w-sm mx-auto">
          <img
            src="./src/assets/images/education1.png"
            alt="image"
            className="mx-auto w-full h-auto"
          />
        </div>
      </section>

      <section className="bg-gray-100 py-8 px-8 lg:px-24 flex items-center">
        <div className="container mx-auto border-b border-gray-300">
          {/* Menjaga kebersihan */}
          <div className="py-8 flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./src/assets/images/education2.png"
                alt="Illustration of mission"
                className="mx-auto w-1/2"
              />
            </div>
            <div className="md:w-1/2 pl-4 ms-2">
              <h3 className="text-2xl font-bold mb-4 text-justify">
                Menjaga kebersihan adalah tindakan nyata.
              </h3>
              <p className="text-justify text-gray-700 mb-2">
                SAMPAH merupakan sisa-sisa kegiatan sehari-hari manusia atau
                proses alam yang berbentuk padat atau semi padat berupa zat
                organik bersifat terurai atau anorganik bersifat tidak dapat
                terurai.
              </p>
              {/*card*/}
              <div class="bg-green-200 p-6 rounded-lg w-full max-w">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span class="text-black font-bold">65%</span>
                  </div>
                  <div class="ml-4">
                    <p class="font-bold text-black">Sampah Organik</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span class="text-black font-bold">35%</span>
                  </div>
                  <div class="ml-4">
                    <p class="font-bold text-black">
                      Sampah Plastik, Kertas Dll
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our blogs */}
      <section className="bg-gray-100 py-8 px-8 lg:px-24 flex items-center">
        <div class="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          {/* title */}
          <div class="flex justify-between items-center mb-4">
            <h2 class="max-w-6xl text-2xl font-bold text-black">
              Our <span class="text-green-500">Blogs</span>
            </h2>
            <p class="text-gray-500 text-sm">5 MIN READ</p>
          </div>

          {/* content */}
          <div class="flex gap-6">
            {/* Image Section */}
            <div class="w-1/2">
              <img
                src="./src/assets/images/blogs.png"
                alt="Recycle Image"
                className="rounded-lg object-cover"
              />
            </div>
            {/* text */}
            <div class="w-1/2 bg-green-200 rounded-lg p-6 py-16">
              <p class="py-4 text-sm text-gray-500 mb-2">SEPT 24, 2024</p>
              <h3 class="py-4 text-3xl text-black my-4">
                Apa itu Recycle? Pahami Arti dan Cara Melakukannya!
              </h3>
              {/* Tags */}
              <div class="py-2 flex space-x-3 mb-4">
                <span class="px-3 py-1 bg-green-300 text-green-700 rounded-full text-sm">
                  Recycle
                </span>
                <span class="px-3 py-1 bg-green-300 text-green-700 rounded-full text-sm">
                  Education
                </span>
              </div>
              {/* link blogs */}
              <a href="#" class="py-2 text-green-700 font-semibold">
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
