import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

const FormBarang = ({ show, handleClose, fetchData }) => {
  const [nama, setNama] = useState("");
  const [hargaBeli, setHargaBeli] = useState("");
  const [hargaJual, setHargaJual] = useState("");
  const [stok, setStok] = useState("");

  // Mengirim data barang ke backend untuk dibuat
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBarang = {
      nama,
      hargaBeli: Number(hargaBeli),
      hargaJual: Number(hargaJual),
      stok: Number(stok),
    };

    try {
      await axios.post("http://localhost:5000/api/barang", newBarang);
      fetchData();
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Form Barang</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Harga Beli</Form.Label>
            <Form.Control
              type="number"
              value={hargaBeli}
              onChange={(e) => setHargaBeli(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Harga Jual</Form.Label>
            <Form.Control
              type="number"
              value={hargaJual}
              onChange={(e) => setHargaJual(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Stok</Form.Label>
            <Form.Control
              type="number"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Simpan
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormBarang;
