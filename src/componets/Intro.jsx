import React from 'react';

const Introduction = () => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://www.mayo.edu/-/media/kcms/gbs/research/images/2019/02/06/15/18/genetics-bioinformatics-shu-571040611-8col.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold">Introducing BioBam</h1>
            <p className="text-gray-300 mt-4 text-xl">Empowering Biologists with the right software tools</p>
            <button className="mt-8 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
