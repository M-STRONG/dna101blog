import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

// TODO
const Done = () => {
  return (
   <div>
     <NavBar/>
    <div className="flex flex-col items-center justify-center h-screen">
  
      <h1 className="text-3xl font-bold mb-2">Success!</h1>
      <p className="text-lg text-gray-500">Your request has been processed.</p>
    </div>
    <Footer/>
    </div>
  );
};

export default Done;
