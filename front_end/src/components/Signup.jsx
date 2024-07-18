// client/src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '',
    password: '',
  });

  const { name, email, phone, batch, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      console.log(res.data);
      alert('Signup successful!');
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={phone} onChange={handleChange} placeholder="Phone" required />
      <input type="text" name="batch" value={batch} onChange={handleChange} placeholder="Batch" required />
      <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
