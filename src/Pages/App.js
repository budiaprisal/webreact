import './App.css'
import { Routes } from '../Config'

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ListBarang from './ListBarang';
import FormBarang from './FormBarang';


const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);

  return (
    <div className="App">
      <h1>CRUD Data Barang</h1>
      <Button variant="primary" onClick={handleShowForm}>
        Tambah Barang
      </Button>
      <ListBarang />

      <Routes />

      <FormBarang show={showForm} handleClose={handleCloseForm} />
    </div>
  );
};

export default App;
