import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyComponent = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/general content/highlighted/3', {
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        setComponents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
          News&Course
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {components.map(component => {
            let link_type = '';
            if (component.content_type === 'BLOG') {
              link_type = 'Blogcontent';
            } else {
              link_type = 'Cousrecontent';
            }
            return (
              <Link to={`/${link_type}/${component.id}`} key={component.id}>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={`http://127.0.0.1:8000${component.img}`}
                      alt="Placeholder Image"
                    />
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">{component.title}</h3>
                    <p className="mt-2 text-base leading-6 text-gray-500">{component.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
