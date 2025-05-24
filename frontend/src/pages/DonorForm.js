import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DonorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    age: '',
    contact: '',
    location: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/donors', formData)
      .then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="bloodGroup" placeholder="Blood Group" onChange={handleChange} required />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
      <input name="contact" placeholder="Contact" onChange={handleChange} required />
      <input name="location" placeholder="Location" onChange={handleChange} required />
      <button type="submit">Add Donor</button>
    </form>
  );
};

export default DonorForm;
