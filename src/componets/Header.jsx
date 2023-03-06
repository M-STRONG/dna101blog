import React from 'react';
function Header() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-700 font-semibold tracking-wide uppercase">Welcome to our website</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide a wide range of services related to bioinformatics, including data analysis, software development, and consultation. Our team of experts has extensive experience in the field, and we are committed to delivering high-quality results to our clients.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
           
             

           

            {/* Add more services as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
