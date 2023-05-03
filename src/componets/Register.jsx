import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: ''
  });

  const { name, email, password1, password2 } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (password1 !== password2) {
      alert('Passwords do not match');
    } else {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      try {
        const { data } = await axios.post(
          'http://127.0.0.1:8000/api/auth/signup',
          { name, email, password1, password2 },
          config
        );

        console.log(data);
        window.location.href = '/Done';
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Create an account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-400 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full border border-gray-400 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password1" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password1"
              name="password1"
              value={password1}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-400 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password2" className="block text-gray-700 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border border-gray-400 p-2 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-indigo-600"
          >
            Sign Up
          </button>
        </form>
      </div>
      </div>)};
    export default Signup;

