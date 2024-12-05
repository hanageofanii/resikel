import Navbar from "../component/Navbar";
import Footer from "../component/footer.jsx";
const Homepage = () => {
  return (
    <main>
      <Navbar />
      <section className="bg-green-200 text-center py-16 px-8 lg:px-24 flex items-center justify-center">
        <div className="flex-1 text-left max-w-lg mx-auto space-y-4">
          <h1 className="text-3xl font-bold text-black-600">
            Yuk Kurangi Sampahmu Hari Ini!
          </h1>
          <p className="text-xl text-black-600">
            Dan Dapatkan Hadiah untuk Setiap Sampah yang Kamu Berikan kepada
            Kami!
          </p>
          <a href="/Rewards">
            <button className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600">
              Ayo Kurangi Sampah!
            </button>
          </a>
        </div>
        <div className="flex-1 mt-8 max-w-sm mx-auto">
          <img
            src="./src/assets/images/1.png"
            alt="image"
            className="mx-auto w-full h-auto"
          />
        </div>
      </section>
      <section className="bg-white text-center py-16">
        <div className="max-w-2xl mx-auto">
          <img
            src="./src/assets/images/2.jpg"
            alt="image"
            className="mx-auto rounded-lg"
          />
          <p className="mt-4 text-gray-700">
            Pernah bertanya-tanya ke mana sampah kita berakhir? Di RESIKEL, kami
            berkomitmen untuk mengurangi sampah dengan menyediakan platform yang
            memudahkan kamu untuk mendaur ulang. Temukan cara-cara kreatif untuk
            mengurangi sampah dan dapatkan Hadiah menarik!
          </p>
          <a href="/About">
            <button className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600">
              Telusuri lebih lanjut
            </button>
          </a>
        </div>
      </section>
      <section className="bg-green-200 text-center py-16">
        <h1 className="text-2xl font-bold text-black-600 mb-8">
          Bangun Masa Depan yang Bersih!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-dollar-sign text-black-300 text-3xl mb-4"></i>
            <h2 className="font-bold">Investasi untuk Masa Depan</h2>
            <p>Kelola sampah dengan baik untuk generasi mendatang.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-lightbulb text-black-300 text-3xl mb-4"></i>
            <h2 className="font-bold">Inovasi Tanpa Batas!</h2>
            <p>Temukan solusi-solusi kreatif untuk masalah sampah.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-leaf text-black-300 text-3xl mb-4"></i>
            <h2 className="font-bold">Lingkungan Lestari</h2>
            <p>Jaga bumi agar tetap indah dan sehat.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 justify-center max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-globe text-black-300 text-3xl mb-4"></i>
            <h2 className="font-bold">Peduli Bumi</h2>
            <p>
              Membantu melindungi alam dan menciptakan masa depan yang lebih
              baik.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-info-circle text-black-300 text-3xl mb-4"></i>
            <h2 className="font-bold">Hidup Harmonis dengan Alam</h2>
            <p>Hidup berdampingan dengan alam tanpa merusak.</p>
          </div>
        </div>
      </section>
      <section className="bg-white-200 text-center py-16 flex justify-center">
        <div className="bg-green-200 rounded-lg shadow-lg p-8 max-w-md">
          <h2 className="text-2xl font-bold text-black-600">
            Siap untuk Belajar Lebih Dalam?
          </h2>
          <p className="mt-4 text-black-300">
            Mulailah dengan mengikuti program edukasi kami yang dirancang untuk
            memberikan pengetahuan mendalam tentang pengelolaan sampah dan daur
            ulang.
          </p>
          <a href="/Education">
            <button className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600">
              Jelajahi lebih lanjut
            </button>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Homepage;
