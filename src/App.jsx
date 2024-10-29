export default function App() {
  return (
      <div>
          <header className="bg-green-100 p-4 flex justify-between items-center">
              <div className="text-2xl font-bold text-green-600">RESIKEL</div>
              <nav>
                  <ul className="flex space-x-4">
                      <li><a href="#" className="text-green-600 hover:text-green-800">Home</a></li>
                      <li><a href="#" className="text-green-600 hover:text-green-800">About Us</a></li>
                      <li><a href="#" className="text-green-600 hover:text-green-800">Education</a></li>
                      <li><a href="#" className="text-green-600 hover:text-green-800">Rewards</a></li>
                  </ul>
              </nav>
              <div className="flex items-center space-x-2">
                  <i className="fas fa-user text-green-600"></i>
                  <span className="text-green-600">Login</span>
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
                        <img src="https://placehold.co/400x300" alt="Person recycling waste" className="mx-auto" />
                        <p className="mt-4 text-gray-700">
                            Pernah bertanya-tanya ke mana sampah kita berakhir? Di RESEKI, kami berkomitmen untuk mengurangi sampah dengan menyediakan platform yang memudahkan kamu untuk mendaur ulang. Temukan cara-cara kreatif untuk mengurangi sampah dan dapatkan reward menarik!
                        </p>
                        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Explore More</button>
                    </div>
              </section>
              <section className="bg-green-100 text-center py-16">
                  <h2 className="text-2xl font-bold text-green-600">Bangun Masa Depan yang Bersih!</h2>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      <div className="bg-white p-4 rounded shadow">
                          <i className="fas fa-recycle text-green-600 text-3xl"></i>
                          <h3 className="mt-2 text-lg font-bold text-green-600">Inovasi dalam Daur Ulang</h3>
                          <p className="text-gray-700">Temukan cara-cara baru untuk mendaur ulang sampah.</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow">
                          <i className="fas fa-gift text-green-600 text-3xl"></i>
                          <h3 className="mt-2 text-lg font-bold text-green-600">Reward yang Seru!</h3>
                          <p className="text-gray-700">Dapatkan reward menarik untuk setiap sampah yang kamu daur ulang.</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow">
                          <i className="fas fa-leaf text-green-600 text-3xl"></i>
                          <h3 className="mt-2 text-lg font-bold text-green-600">Lingkungan Lebih Lestari</h3>
                          <p className="text-gray-700">Bersama kita bisa menciptakan lingkungan yang lebih bersih dan hijau.</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow">
                          <i className="fas fa-lightbulb text-green-600 text-3xl"></i>
                          <h3 className="mt-2 text-lg font-bold text-green-600">Pendidikan Lingkungan</h3>
                          <p className="text-gray-700">Pelajari lebih lanjut tentang pentingnya menjaga lingkungan.</p>
                      </div>
                  </div>
              </section>
              <section className="bg-green-200 text-center py-16">
                  <h2 className="text-2xl font-bold text-green-600">Siap untuk Belajar Lebih Dalam?</h2>
                  <p className="mt-4 text-gray-700">
                      Mulailah dengan mengikuti program edukasi kami yang dirancang untuk memberikan pengetahuan mendalam tentang pengelolaan sampah dan daur ulang.
                  </p>
                  <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Explore More</button>
              </section>
          </main>
          <footer className="bg-green-100 text-center py-8">
              <div className="max-w-4xl mx-auto">
                  <div className="flex justify-between items-center flex-col md:flex-row">
                      <div className="text-green-600">Logo</div>
                      <div className="text-gray-700">
                          <p>Kontak</p>
                          <p>Alamat</p>
                          <p>Email</p>
                      </div>
                      <div className="text-gray-700">
                          <p>Hubungi Kami</p>
                          <p>FAQ</p>
                          <p>Support</p>
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
