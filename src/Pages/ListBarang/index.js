import React, { useEffect, useState } from "react";
import { Table, Pagination, Form , Button} from "react-bootstrap";
import axios from "axios";

const ListBarang = () => {
  const [barangList, setBarangList] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch data barang saat komponen dimuat
  useEffect(() => {
    fetchData();
  }, []);

  // Mengambil data barang dari backend
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/barang");
      setBarangList(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Menghapus data barang berdasarkan ID
  const deleteBarang = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Apakah Anda yakin ingin menghapus data barang ini?"
      );
      if (confirmDelete) {
        await axios.delete(`http://localhost:5000/api/barang/${id}`);
        fetchData();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Data Barang</h2>

      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Cari Barang"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Foto Barang</th>
            <th>Nama Barang</th>
            <th>Harga Beli</th>
            <th>Harga Jual</th>
            <th>Stok</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {barangList
            .filter((barang) =>
              barang.nama.toLowerCase().includes(search.toLowerCase())
            )
            .map((barang, index) => (
              <tr key={barang.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={barang.foto}
                    alt={barang.nama}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{barang.nama}</td>
                <td>{barang.hargaBeli}</td>
                <td>{barang.hargaJual}</td>
                <td>{barang.stok}</td>
                <td>
                  <Button onClick={() => deleteBarang(barang.id)}>Hapus</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  );
};

export default ListBarang;
