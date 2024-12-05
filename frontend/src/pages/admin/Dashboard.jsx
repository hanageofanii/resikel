// src/pages/admin/Dashboard.jsx
import React from "react";
import AdminHeader from "../../component/admin/AdminHeader";
import AdminSidebar from "../../component/admin/AdminSidebar";
import { FaTrashAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {" "}
      {/* Main container set to flex */}
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <AdminHeader />

        {/* Main content section */}
        <div className="flex-grow p-6">
          <h1 className="text-2xl font-semibold">Dashboard Admin</h1>
          {/* Other content goes here */}
          <div className="flex flex-wrap gap-8 p-6 border-solid border-2 border-indigo-600">
            {/* Sampah Masuk Card */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <FaArrowRight className="text-green-500 text-3xl mb-4" />
                    <h3 className="text-xl font-semibold">Sampah Masuk</h3>
                  </div>
                </div>
                <div className="text-5xl font-bold text-green-600">120</div>{" "}
                {/* Angka Sampah Masuk */}
              </div>
            </div>

            {/* Sampah Keluar Card */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 h-96">
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <FaArrowLeft className="text-red-500 text-3xl mb-10" />
                    <h3 className="text-xl font-semibold">Sampah Keluar</h3>
                  </div>
                </div>
                <div className="text-5xl font-bold text-red-600">85</div>{" "}
                {/* Angka Sampah Keluar */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
