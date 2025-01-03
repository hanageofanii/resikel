const About = () => {
  return (
    <main className="bg-gray-50">
      <section className="bg-green-200 py-16 px-8 lg:px-15 flex items-center">
        <div className="flex-1 max-w-sm mx-auto">
          <img
            src="./src/assets/images/6.png"
            alt="image"
            className="mx-auto w-full h-auto"
          />
        </div>
        <div className="flex-1 text-left max-w-lg mx-auto space-y-4">
          <h1 className="text-3xl font-bold text-center text-black-300">
            Tentang Kami
          </h1>
          <p className=" text-justify text-black-700 mb-2">
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

      <section className="bg-gray-100 py-16 px-8 lg:px-24 flex items-center">
        <div className="container mx-auto">
          {/* Visi Kami */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="md:w-1/2 pl-4 ms-2">
              <h3 className="text-2xl font-bold mb-4 text-justify">
                Visi Kami
              </h3>
              <p className="text-justify text-black-700 mb-2">
                Menjadi platform digital yang memberdayakan masyarakat dalam
                pengelolaan sampah yang efektif dan berkelanjutan. Resikel
                berkomitmen memberikan solusi praktis, edukasi, dan inspirasi
                untuk menciptakan ekosistem yang lebih hijau dan lestari bagi
                Batam dan Indonesia.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./src/assets/images/4.png"
                alt="Illustration of mission"
                className="mx-auto w-1/2"
              />
            </div>
          </div>
          {/* Misi Kami */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./src/assets/images/5.png"
                alt="Illustration of mission"
                className="mx-auto w-1/2"
              />
            </div>
            <div className="md:w-1/2 pl-4 me-2">
              <h3 className="text-2xl font-bold mb-4 text-justify">
                Misi Kami
              </h3>
              <ol className="list-decimal list-inside items-justify text-black-700">
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
          <p className="text-black-700 mb-4">Tembesi, Batam, Indonesia</p>
          <div className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.16833052255!2d104.0759!3d1.0858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98b7b5c500e33%3A0x8b907ab0b13e0b5c!2sBatam!5e0!3m2!1sen!2sid!4v1696096390293!5m2!1sen!2sid"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Hana Suci Aninda Geofani",
                role: "Hustler",
                image: "./src/assets/images/member1.jpg",
              },
              {
                name: "Sandi Aji Pamungkas",
                role: "Hipster",
                image: "./src/assets/images/member2.png",
              },
              {
                name: "Sucipta Aditri Laksana",
                role: "Hipster",
                image: "./src/assets/images/member3.png",
              },
              {
                name: "Elpratama Perangin Angin",
                role: "Hacker",
                image: "./src/assets/images/member4.png",
              },
              {
                name: "Titto Nugraha Auladhana",
                role: "Hacker",
                image: "./src/assets/images/member5.png",
              },
              {
                name: "Muhammad Rafi",
                role: "Hacker",
                image: "./src/assets/images/member6.png",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="border-2 border-green-300 rounded-lg p-3 shadow-lg bg-white transition-transform transform hover:scale-105 mx-2" // Gunakan mx-2 untuk margin horizontal yang konsisten
              >
                <div className="p-2 border border-black-200 rounded-lg">
                  <img
                    src={member.image}
                    alt={`Photo of team member ${member.name}`}
                    className="mx-auto mb-2 border-2 border-black h-60 w-40 object-cover rounded-md"
                  />
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
