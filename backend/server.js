const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const upload = multer();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const barangList = [];

// Read (GET): Mendapatkan semua data barang
app.get("/api/barang", (req, res) => {
  res.json(barangList);
});

// Create (POST): Menambahkan data barang baru
app.post("/api/barang", upload.single("foto"), (req, res) => {
  const { nama, hargaBeli, hargaJual, stok } = req.body;
  const foto = req.file;

  // Logika validasi data

  const newBarang = {
    id: Date.now().toString(),
    nama,
    hargaBeli,
    hargaJual,
    stok,
    foto: foto ? foto.buffer.toString("base64") : null,
  };

  barangList.push(newBarang);
  res.status(201).json(newBarang);
});

// Update (PUT): Mengupdate data barang berdasarkan ID
app.put("/api/barang/:id", upload.single("foto"), (req, res) => {
  const { id } = req.params;
  const { nama, hargaBeli, hargaJual, stok } = req.body;
  const foto = req.file;

  // Logika validasi data

  const barang = barangList.find((barang) => barang.id === id);
  if (!barang) {
    return res.status(404).json({ message: "Data barang tidak ditemukan" });
  }

  barang.nama = nama;
  barang.hargaBeli = hargaBeli;
  barang.hargaJual = hargaJual;
  barang.stok = stok;
  barang.foto = foto ? foto.buffer.toString("base64") : null;

  res.json(barang);
});

// Delete (DELETE): Menghapus data barang berdasarkan ID
app.delete("/api/barang/:id", (req, res) => {
  const { id } = req.params;

  const index = barangList.findIndex((barang) => barang.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Data barang tidak ditemukan" });
  }

  barangList.splice(index, 1);
  res.json({ message: "Data barang berhasil dihapus" });
});




app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
