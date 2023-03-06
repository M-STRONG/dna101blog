import Footer from './Footer';
import { useState } from 'react';
import NavBar from './Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle login form submission
  };

  return (
    
    <div>
      <NavBar/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-500 px-3 py-2 w-full rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-500 px-3 py-2 w-full rounded" required />
          </div>
          <button type="submit" className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-md">Login</button>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
