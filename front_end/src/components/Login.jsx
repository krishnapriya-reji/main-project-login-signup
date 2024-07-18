// client/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(res.data);
      alert('Login successful!');
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
