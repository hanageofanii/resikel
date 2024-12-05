// src/pages/admin/Users.js
import React from "react";
import AdminSidebar from "../../component/admin/AdminSidebar.jsx";
import AdminHeader from "../../component/admin/AdminHeader.jsx";
import { Box, Typography } from "@mui/material";

const Settings = () => {
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
          <h1 className="text-2xl font-semibold">Data Pengguna</h1>
          {/* Other content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
