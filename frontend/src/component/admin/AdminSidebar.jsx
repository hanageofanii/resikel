// src/components/admin/AdminSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import LogoResikel from "../../assets/images/logo.png";

const AdminSidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64">
      <div className="h-full flex flex-col">
        {/* Sidebar Header */}

        <div className="flex items-center justify-center py-2 border-y-1">
          <img src={LogoResikel} alt="" className="w-16 h-16" />
        </div>

        {/* Sidebar Menu */}
        <div className="flex-grow overflow-y-auto">
          <nav className="space-y-2 py-4 px-2">
            {/* Dashboard */}
            <Link
              to="/admin/dashboard"
              className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span>Dashboard</span>
            </Link>

            {/* Edukasi */}
            <Link
              to="/admin/edukasi"
              className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 0v4m0-4h4m-4 0H8"
                />
              </svg>
              <span>Edukasi</span>
            </Link>

            {/* Reward */}
            <Link
              to="/admin/reward"
              className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 2h2v7h-2zM5 7h14v2H5zM7 13h10v2H7zM5 17h14v2H5z"
                />
              </svg>
              <span>Reward</span>
            </Link>

            {/* Users */}
            <Link
              to="/admin/users"
              className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 14v3m-4-3v3m-4-3v3m4 0h4m4-3h4m-8 0H4"
                />
              </svg>
              <span>Users</span>
            </Link>

            {/* Settings */}
            <Link
              to="/admin/settings"
              className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              <span>Settings</span>
            </Link>
            {/* Logout */}
            <Link
              to="/admin/login"
              className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
