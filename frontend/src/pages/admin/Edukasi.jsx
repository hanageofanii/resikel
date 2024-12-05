// src/pages/admin/Dashboard.jsx
// import React from "react";
import AdminHeader from "../../component/admin/AdminHeader";
import AdminSidebar from "../../component/admin/AdminSidebar";
import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

const Edukasi = () => {
  // State untuk data artikel
  const [articles, setArticles] = useState([
    { id: 1, title: "Artikel 1", createdAt: "2024-01-01" },
    { id: 2, title: "Artikel 2", createdAt: "2024-02-01" },
    { id: 3, title: "Artikel 3", createdAt: "2024-03-01" },
  ]);
  // Fungsi untuk menambah artikel
  const handleAddArticle = () => {
    console.log("Tombol Tambah Artikel diklik!");
    // Implementasi logika untuk menambah artikel baru
  };

  // Fungsi untuk mengupdate artikel
  const handleUpdateArticle = (id) => {
    console.log(`Update artikel dengan ID: ${id}`);
    // Implementasi logika untuk update artikel
  };

  // Fungsi untuk menghapus artikel
  const handleDeleteArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
    console.log(`Artikel dengan ID ${id} dihapus`);
  };

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
          <h1 className="text-2xl font-semibold mb-10">Edukasi</h1>
          {/* Other content goes here */}
          {/* Tombol Tambah Artikel */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddArticle}
            className="my-10"
          >
            Tambah Artikel
          </Button>

          {/* Tabel Artikel */}
          <TableContainer component={Paper} className="mt-6">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Tanggal Dibuat</TableCell>
                  <TableCell>Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {articles.map((article, index) => (
                  <TableRow key={article.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{article.title}</TableCell>
                    <TableCell>{article.createdAt}</TableCell>
                    <TableCell>
                      {/* Tombol Update */}
                      <IconButton
                        color="success"
                        onClick={() => handleUpdateArticle(article.id)}
                        className="mr-2"
                      >
                        <EditIcon />
                      </IconButton>
                      {/* Tombol Delete */}
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteArticle(article.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Edukasi;
