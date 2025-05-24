import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DonorList from './pages/DonorList';
import DonorForm from './pages/DonorForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DonorList />} />
        <Route path="/add" element={<DonorForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
