import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    navigate("/notification", {
      state: {
        message: "Form berhasil disubmit!",
        returnPath: "/Contact",
      },
    });

    console.log("Form submitted");
  };

  const faqs = [
    {
      question: "Apa itu Resikel?",
      answer:
        "Resikel adalah aplikasi yang membantu kamu mengelola sampah dengan cara yang lebih baik dan ramah lingkungan. Dengan Resikel, kamu bisa memilah sampah lebih mudah dan mendapatkan informasi penting tentang pengelolaan limbah.",
    },
    {
      question: "Apa itu sampah?",
      answer:
        "Sampah adalah barang-barang yang tidak terpakai lagi, seperti sisa makanan, kemasan, dan barang-barang yang sudah tidak digunakan. Pengelolaan sampah yang baik sangat penting untuk kesehatan dan kebersihan lingkungan.",
    },
    {
      question: "Apa jenis sampah?",
      answer: {
        "Sampah Organik": [
          "Sisa makanan, kulit buah, dan sayuran.",
          "Daun dan ranting.",
        ],
        "Sampah Anorganik": ["Plastik, kertas, dan logam."],
        "Sampah Berbahaya": ["Limbah medis dan baterai."],
        "Sampah Elektronik": ["Perangkat elektronik yang tidak terpakai."],
        "Sampah Sisa Konstruksi": ["Material seperti kayu dan beton."],
      },
    },
    {
      question: "Apa itu pengolahan sampah?",
      answer:
        "Pengolahan sampah meliputi pengumpulan, pemilahan, dan daur ulang untuk mengurangi dampak negatifnya terhadap lingkungan. Proses ini penting agar sampah yang bisa didaur ulang tidak menjadi limbah yang mencemari lingkungan.",
    },
    {
      question: "Bagaimana cara menggunakan Resikel?",
      answer:
        "Kamu bisa mengunjungi situs web Resikel dan membuat akun untuk mendapatkan akses penuh. Di sana, kamu akan menemukan panduan tentang cara mengelola sampah dan lokasi tempat pembuangan sampah terdekat.",
    },
  ];

  return (
    <main>
      {/* Introduction Section */}
      <section className="bg-green-200 text-center py-16 px-8 lg:px-24">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Punya Pertanyaan?
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Hubungi tim Resikel, dan kami akan menghubungi Anda sesegera mungkin
          sebisa mungkin!
        </p>
      </section>

      {/* FAQ Section */}
      <section className="bg-white text-center py-16 px-8 lg:px-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-justify">
          {faqs.map((faq, index) => (
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
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Kontak</h2>
        <form className="space-y-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="text-left">
            <label className="block text-gray-600 font-light mb-2">
              Nama Anda
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#59cf94]"
              placeholder="Masukan Nama Anda"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-600 font-light mb-2">
              Email Anda
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#59cf94]"
              placeholder="Masukan Email Anda"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-600 font-light mb-2">Pesan</label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#59cf94]"
              placeholder="Masukan Pesan Anda"
              rows="4"
              required></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
              Kirim
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
