import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './Navbar';
import axios from 'axios';


const Sectionblog = () => {
  const [blogsList, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/blog/get_all_blogs/1', {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data);
        setBlogs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogsList.map((blog) => {
             
              return (
                <Link to={`/Blogcontent/${blog.id}`}  key={blog.id}>
                  <div key={blog.id} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="relative pb-48 overflow-hidden">
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={`http://127.0.0.1:8000${blog.img}`}
                        alt="Placeholder Image"
                      />
                    </div>
                    <div key={blog.id} className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">{blog.title}</h3>
                      <p className="mt-2 text-base leading-6 text-gray-500">{blog.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sectionblog;
