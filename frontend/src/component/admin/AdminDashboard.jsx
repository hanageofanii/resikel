// src/pages/admin/Dashboard.jsx
import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
