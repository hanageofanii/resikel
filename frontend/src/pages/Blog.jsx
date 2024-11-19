import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <Link to="/education" className="text-green-500 no-underline">
        <p>← Blog</p>
      </Link>
      <h1 className="text-4xl font-bold mt-4">
        Apa itu Recycle? Pahami Arti dan Cara Melakukannya!
      </h1>
      <p className="text-gray-500 text-sm mt-2">September 24, 2024 · 5 menit</p>
      <img
        src="./src/assets/images/blog1.jpeg"
        alt="Recycle"
        className="w-full rounded-lg mt-4"
      />
      <p className="text-gray-500 text-xs mt-2">Photo by TRVST</p>
      <p className="text-justify leading-relaxed mt-4">
        Diantara sekian banyak istilah dalam kampanye peduli lingkungan, Recycle
        pasti termasuk salah satu di antaranya. Bersama dengan istilah lain,
        Reuse, Recovery dan Reduce, yang kemudian disingkat dengan 4R. Tapi, apa
        itu Recycle sebenarnya? Ada yang mengartikan dengan daur ulang. Lalu
        bagaimana juga dengan istilah Upcycle? Tidak perlu bingung, kamu akan
        menemukan jawabannya melalui artikel ini jadi simak terus ya!
      </p>

      <h2 className="text-2xl font-bold mt-8">Apa itu Recycle?</h2>
      <img
        src="./src/assets/images/blog2.jpeg"
        alt="Apa itu Recycle"
        className="w-full rounded-lg mt-4"
      />
      <p className="text-gray-500 text-xs mt-2">Photo by Everyday Eco Rin</p>
      <p className="text-justify leading-relaxed mt-4">
        Jika Kamu bertanya apa itu Recycle, maka jawabannya adalah daur ulang,
        proses untuk menghancurkan barang yang sudah tidak digunakan, untuk
        kemudian diolah lagi menjadi sesuatu yang baru dan memiliki manfaat,
        sehingga bisa kembali digunakan. Sebagian menganggap bahwa daur ulang
        atau Recycle adalah cara utama untuk menyelamatkan lingkungan dari
        tumpukan sampah. Padahal sebenarnya ini adalah langkah ketiga yang baru
        dilakukan, ketika Reduce dan Reuse sudah tidak lagi efektif. Sehingga
        sebenarnya dalam upaya pengelolaan sebisa mungkin untuk menggunakan
        Reduce atau Reuse terlebih dulu.
      </p>
    </div>
  );
};

export default Blog;
