const About = () => {
  return (
    <main className="bg-gray-50">
      <section className="bg-green-100 py-16 px-8 lg:px-24 flex items-center">
        <div className="flex-1 max-w-sm mx-auto">
          <img
            src="./src/assets/images/3.png"
            alt="image"
            className="mx-auto w-full h-auto"
          />
        </div>
        <div className="flex-1 text-left max-w-lg mx-auto space-y-4">
          <h1 className="text-3xl font-bold text-center text-green-600">
            About Us
          </h1>
          <p className="text-xl text-justify text-green-600">
            Resikel adalah aplikasi yang dikembangkan oleh Yayasan Pelita Hijau
            Nusantara untuk membantu masyarakat Batam dalam mengelola sampah
            dengan cara yang lebih praktis dan berkelanjutan. Melalui Resikel,
            kami ingin mengajak masyarakat berpartisipasi aktif dalam menjaga
            kebersihan lingkungan, dengan menyediakan alat dan informasi yang
            memudahkan proses pemilahan, pengumpulan, serta pemanfaatan kembali
            sampah.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="container mx-auto">
          {/* Visi Kami */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://placehold.co/200x200"
                alt="Illustration of mission"
                className="mx-auto"
              />
            </div>
            <div className="md:w-1/2 pl-4">
              <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
                Misi Kami
              </h3>
              <ol className="list-decimal list-inside text-gray-700">
                <li className="mb-2">
                  Mendorong kegiatan regulasi dan kebijakan yang mendukung daur
                  ulang.
                </li>
                <li className="mb-2">
                  Menyediakan informasi dan sarana yang lebih baik untuk mendaur
                  ulang sampah.
                </li>
                <li>
                  Meningkatkan kesadaran masyarakat akan pentingnya daur ulang.
                </li>
              </ol>
            </div>
          </div>
          {/* Misi Kami */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://placehold.co/200x200"
                alt="Illustration of mission"
                className="mx-auto"
              />
            </div>
            <div className="md:w-1/2 pl-4">
              <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
                Misi Kami
              </h3>
              <ol className="list-decimal list-inside text-gray-700">
                <li className="mb-2">
                  Mendorong kegiatan regulasi dan kebijakan yang mendukung daur
                  ulang.
                </li>
                <li className="mb-2">
                  Menyediakan informasi dan sarana yang lebih baik untuk mendaur
                  ulang sampah.
                </li>
                <li>
                  Meningkatkan kesadaran masyarakat akan pentingnya daur ulang.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* Kantor Kami Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Kantor Kami</h3>
          <p className="text-gray-700 mb-4">
            Alamat kami di: Jalan Gambir Park, Town House Blok A/No.12, Jakarta,
            Indonesia 20456
          </p>
          <div className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.342817525823!2d106.8512233151034!3d-6.229096995527924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f2211c4f9793%3A0xb6cf5bb36d5d118b!2sTownhouse%20Gambir%20Park%20Blok%20A%2FNo.12%2C%20Jalan%20Gambir%20Park%2C%20Sukadamai%2C%20Kec.%20Serang%20Baru%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017311!5e0!3m2!1sen!2sid!4v1696096390293!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Map Location"></iframe>
          </div>
        </div>
      </section>

      {/* Tim Kami Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Tim Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-lg bg-white">
                <img
                  src="https://placehold.co/100x100"
                  alt={`Photo of team member ${index + 1}`}
                  className="mx-auto rounded-full mb-2 border-4 border-green-200"
                />
                <h4 className="font-bold">Your Name</h4>
                <p>{`Role ${index + 1}`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
