export default function App() {
  return (
      <div>
          <header className="bg-green-100 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <img src= "./logo.png" alt="Logo Resikel" className="w-11 h-11 mr-3" />
              </div>
              <nav>
                  <ul className="flex space-x-4">
                      <li><a href="#" className="text-black-600 hover:text-green-800">Home</a></li>
                      <li><a href="#" className="text-black-600 hover:text-green-800">About Us</a></li>
                      <li><a href="#" className="text-black-600 hover:text-green-800">Education</a></li>
                      <li><a href="#" className="text-black-600 hover:text-green-800">Rewards</a></li>
                  </ul>
              </nav>
              <div className="flex items-center space-x-2">
                  <i className="fas fa-user text-green-600"></i>
                  <span className="text-black-600">Login</span>
              </div>
          </header>
          <main>
            <section className="bg-green-100 text-center py-16 px-8 lg:px-24 flex items-center justify-center">
              <div className="flex-1 text-left max-w-lg mx-auto space-y-4">
                <h1 className="text-3xl font-bold text-green-600">Yuk Kurangi Sampahmu Hari Ini!</h1>
                <p className="text-xl text-green-600">Dan Dapatkan Reward untuk Setiap Sampah yang Kamu Berikan kepada Kami!</p>
                <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Ayo Kurangi Sampah!</button>
              </div>
              <div className="flex-1 mt-8 max-w-sm mx-auto">
                <img src="./1.png" alt="image" className="mx-auto w-full h-auto" />
              </div>
              </section>
                <section className="bg-white text-center py-16">
                    <div className="max-w-2xl mx-auto">
                        <img src="./2.jpg" alt="image" className="mx-auto rounded-lg" />
                        <p className="mt-4 text-gray-700">
                            Pernah bertanya-tanya ke mana sampah kita berakhir? Di RESIKEL, kami berkomitmen untuk mengurangi sampah dengan menyediakan platform yang memudahkan kamu untuk mendaur ulang. Temukan cara-cara kreatif untuk mengurangi sampah dan dapatkan reward menarik!
                        </p>
                        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Explore More</button>
                    </div>
              </section>
              <section className="bg-green-100 text-center py-16">
                    <h1 className="text-2xl font-bold text-green-600 mb-8">Bangun Masa Depan yang Bersih!</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <i className="fas fa-dollar-sign text-green-600 text-3xl mb-4"></i>
                            <h2 className="font-bold">Investasi untuk Masa Depan</h2>
                            <p>Kelola sampah dengan baik untuk generasi mendatang.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <i className="fas fa-lightbulb text-green-600 text-3xl mb-4"></i>
                            <h2 className="font-bold">Inovasi Tanpa Batas!</h2>
                            <p>Temukan solusi-solusi kreatif untuk masalah sampah.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <i className="fas fa-leaf text-green-600 text-3xl mb-4"></i>
                            <h2 className="font-bold">Lingkungan Lestari</h2>
                            <p>Jaga bumi agar tetap indah dan sehat.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 justify-center max-w-3xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <i className="fas fa-globe text-green-600 text-3xl mb-4"></i>
                            <h2 className="font-bold">Peduli Bumi</h2>
                            <p>Membantu melindungi alam dan menciptakan masa depan yang lebih baik.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <i className="fas fa-info-circle text-green-600 text-3xl mb-4"></i>
                            <h2 className="font-bold">Hidup Harmonis dengan Alam</h2>
                            <p>Hidup berdampingan dengan alam tanpa merusak.</p>
                        </div>
                    </div>
                </section>
              <section className="bg-white-200 text-center py-16 flex justify-center">
                <div className="bg-green-100 rounded-lg shadow-lg p-8 max-w-md">
                  <h2 className="text-2xl font-bold text-green-600">Siap untuk Belajar Lebih Dalam?</h2>
                  <p className="mt-4 text-gray-700">
                    Mulailah dengan mengikuti program edukasi kami yang dirancang untuk memberikan pengetahuan mendalam tentang pengelolaan sampah dan daur ulang.
                  </p>
                  <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                    Explore More
                  </button>
                </div>
          </section>
          </main>
          <footer className="bg-green-100 text-center py-8">
              <div className="max-w-4xl mx-auto">
                  <div className="flex justify-between items-center flex-col md:flex-row">
                      <div className="flex items-center">
                        <img src= "./logo.png" alt="Logo Resikel" className="w-20 h-20 mr-3" />
                      </div>
                      <div className="text-gray-700">
                          <p className="text-lg font-bold mb-2">Roadmap</p>
                          <p>Home</p>
                          <p>About Us</p>
                          <p>Education</p>
                          <p>Rewards</p>
                      </div>
                      <div className="text-gray-700">
                        <p className="text-lg font-bold mb-2">Hubungi Kami</p>
                        <p>resikel@gmail.com</p>
                        <p>+62 123 456 789</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                      </div>
                      <div className="flex space-x-4 mt-4 md:mt-0">
                          <i className="fab fa-facebook text-green-600"></i>
                          <i className="fab fa-twitter text-green-600"></i>
                          <i className="fab fa-instagram text-green-600"></i>
                          <i className="fab fa-linkedin text-green-600"></i>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
  );
}
