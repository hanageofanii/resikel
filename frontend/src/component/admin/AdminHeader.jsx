// src/components/admin/AdminHeader.jsx
import React from "react";
import { Link } from "react-router-dom";
import LogoResikel from "../../assets/images/logo.png";

const AdminHeader = () => {
  return (
    <div className="w-full flex justify-between items-center bg-gray-800 text-white p-4">
      {/* Logo (sebelah kiri) */}
      <div className="flex items-center space-x-2">
        <Link to="/admin/dashboard" className="flex items-center">
          {/* Logo Text atau Gambar */}
          <span className="font-semibold text-xl">My Admin Panel</span>
        </Link>
      </div>

      {/* Profil dan Nama Profil (sebelah kanan) */}
      <div className="flex items-center space-x-4 mr-6">
        {/* Profil Avatar */}
        <div className="flex items-center">
          <img
            src={LogoResikel} // Ganti dengan gambar profil atau URL gambar yang sesuai
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-700"
          />
        </div>

        {/* Nama Profil */}
        <div className="text-white">
          <span className="text-sm font-semibold">Resikel</span>
          <p className="text-xs text-gray-400">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
