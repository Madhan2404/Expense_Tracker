// Profile.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    income: '',
    workSpecification: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('/api/saveProfile', formData);
      console.log('Profile data saved successfully');
      window.location.reload()
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  

  return (
    <div className='profile-form'>
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="clientName">Client Name:</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="income">Income:</label>
          <input
            type="text"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="workSpecification">Work Specification:</label>
          <textarea
            id="workSpecification"
            name="workSpecification"
            value={formData.workSpecification}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Profile</button>
        <Link to="/"><button>Close</button></Link>
      </form>
    </div>
  );
};

export default Profile;