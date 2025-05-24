import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/donors')
      .then(res => setDonors(res.data));
  }, []);

  return (
    <div>
      <h2>Blood Donors</h2>
      <Link to="/add">Add Donor</Link>
      <ul>
        {donors.map((donor) => (
          <li key={donor._id}>{donor.name} - {donor.bloodGroup}</li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
