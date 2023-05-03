import { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import NavBar from './Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/signin', {
        email: email,
        password: password
      });
      console.log(response.data);
      // Add logic to handle successful login
    } catch (error) {
      console.log(error.response.data);
      // Add logic to handle login failure
    }
  };

  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-500 px-3 py-2 w-full rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-500 px-3 py-2 w-full rounded" required />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Log In
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
