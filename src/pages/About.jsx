const About = () => {
  return (
    <main>
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
    </main>
  );
};

export default About;
