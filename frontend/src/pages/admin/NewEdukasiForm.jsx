import React, { useState } from "react";

const NewEdukasiForm = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // Add more state variables for other fields like date, category, image, etc.

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEdukasiData = {
      title,
      description,
      // Add other fields to newEdukasiData
    };
    onSubmit(newEdukasiData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-lg font-bold mb-4">Tambah Edukasi Baru</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Judul
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Masukkan judul edukasi"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Deskripsi
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Masukkan deskripsi edukasi"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* Add more input fields for other properties like date, category, image, etc. */}
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewEdukasiForm;
