import { useState } from "react";

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <main>
      {/* Introduction Section */}
      <section className="bg-green-100 text-center py-16 px-8 lg:px-24">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Got Questions?
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Get in touch with the Resikel team, and we’ll get back to you as soon
          as we can!
        </p>
      </section>

      {/* FAQ Section */}
      <section className="bg-white text-center py-16 px-8 lg:px-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-justify">
          {[
            {
              question: "Apa itu Resikel?",
              answer:
                "Resikel adalah aplikasi atau platform yang berfokus pada pengelolaan sampah berbasis digital. Aplikasi ini bertujuan untuk mendorong masyarakat dalam mengelola sampah secara lebih efisien dan ramah lingkungan. Melalui Resikel, pengguna dapat melakukan pemilahan sampah dengan lebih mudah, yang merupakan langkah awal dalam proses daur ulang. Aplikasi ini juga menyediakan informasi dan edukasi tentang pentingnya pengurangan limbah, sehingga masyarakat dapat lebih sadar akan dampak sampah terhadap lingkungan.",
            },
            {
              question: "Apa itu sampah?",
              answer:
                "Sampah adalah segala jenis limbah atau material yang tidak lagi dibutuhkan atau digunakan oleh individu atau masyarakat. Sampah dapat berasal dari berbagai sumber, seperti rumah tangga, industri, pertanian, dan komersial. Dalam kehidupan sehari-hari, sampah sering kali terdiri dari sisa makanan, kemasan plastik, kertas, dan barang-barang yang sudah tidak terpakai. Pengelolaan sampah yang baik sangat penting untuk menjaga kebersihan lingkungan dan kesehatan masyarakat.",
            },
            {
              question: "Apa jenis sampah?",
              answer: {
                "Sampah Organik": [
                  "Sisa makanan, seperti kulit buah dan sayuran, merupakan bagian dari sampah organik yang dapat terurai dengan cepat.",
                  "Daun dan ranting yang jatuh dari pohon juga termasuk dalam kategori ini dan dapat dijadikan kompos.",
                ],
                "Sampah Anorganik": [
                  "Plastik adalah salah satu jenis sampah anorganik yang paling umum dan sulit terurai.",
                  "Kertas dan karton yang berasal dari kemasan dan dokumen juga termasuk dalam kategori ini dan dapat didaur ulang.",
                  "Logam, seperti kaleng minuman, juga merupakan jenis sampah anorganik yang bisa didaur ulang.",
                ],
                "Sampah Berbahaya": [
                  "Limbah medis, seperti jarum suntik dan bahan kimia dari rumah sakit, termasuk dalam kategori ini dan harus ditangani dengan hati-hati.",
                  "Baterai yang mengandung bahan berbahaya juga termasuk sampah berbahaya yang tidak boleh dibuang sembarangan.",
                  "Bahan kimia beracun, seperti cat dan pestisida, memerlukan prosedur pembuangan khusus untuk menghindari pencemaran.",
                ],
                "Sampah Elektronik": [
                  "Perangkat elektronik yang tidak terpakai, seperti ponsel dan komputer, termasuk dalam kategori ini dan memerlukan penanganan khusus.",
                  "Komponen elektronik yang rusak atau tidak terpakai juga merupakan bagian dari sampah elektronik.",
                ],
                "Sampah Sisa Konstruksi": [
                  "Material konstruksi seperti kayu, beton, dan logam yang tersisa setelah proyek pembangunan juga termasuk jenis sampah ini.",
                ],
              },
            },
            {
              question: "Apa itu pengolahan sampah?",
              answer:
                "Pengolahan sampah adalah proses yang melibatkan pengumpulan, pemilahan, daur ulang, dan pembuangan sampah secara efisien untuk mengurangi dampak negatif terhadap lingkungan. Proses ini dimulai dengan pengumpulan sampah dari berbagai sumber, baik dari rumah tangga maupun industri. Setelah itu, sampah dipilah berdasarkan jenisnya untuk memudahkan proses daur ulang. Sampah yang dapat didaur ulang, seperti kertas, plastik, dan logam, kemudian diproses menjadi bahan baru yang dapat digunakan kembali, sehingga mengurangi kebutuhan akan sumber daya alam baru. Sementara itu, sampah yang tidak dapat didaur ulang biasanya diolah melalui proses pembuangan yang aman, seperti pengolahan di tempat pembuangan akhir atau pembakaran dengan teknologi yang ramah lingkungan.",
            },
            {
              question: "Bagaimana cara menggunakan Resikel?",
              answer:
                "Untuk menggunakan Resikel, Anda hanya perlu mengunjungi situs web Resikel di browser Anda. Setelah itu, Anda dapat membuat akun dengan mengisi informasi yang diperlukan untuk mendapatkan akses penuh ke fitur-fitur yang tersedia. Di situs web ini, Anda dapat menemukan panduan tentang cara memisahkan dan mengelola sampah Anda dengan benar. Selain itu, situs ini juga menyediakan informasi mengenai lokasi tempat pembuangan sampah terdekat serta artikel edukatif tentang pengelolaan limbah yang berkelanjutan. Anda juga dapat melaporkan jenis sampah yang telah Anda kelola melalui situs ini untuk mendapatkan penghargaan dan berkontribusi dalam program keberlanjutan lingkungan.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden cursor-pointer"
              onClick={() => toggleFaq(index)}>
              <div className="bg-gray-50 p-4 text-xl font-semibold text-gray-700 flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-gray-500">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="p-4 text-gray-600 font-light bg-white">
                  {typeof faq.answer === "object"
                    ? Object.entries(faq.answer).map(([key, value]) => (
                        <div key={key}>
                          <strong>{key}:</strong>
                          <ul className="list-disc ml-5">
                            {value.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))
                    : faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white text-center py-16 px-8 lg:px-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact</h2>
        <form className="space-y-6 max-w-lg mx-auto">
          <div className="text-left">
            <label className="block text-gray-600 font-light mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#59cf94]"
              placeholder="Enter your name"
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-600 font-light mb-2">
              Your Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#59cf94]"
              placeholder="Enter your email"
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-600 font-light mb-2">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#59cf94]"
              placeholder="What would you like to learn?"
              rows="4"></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#59cf94] text-white py-3 px-8 rounded-full hover:bg-green-600 transition duration-300">
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
