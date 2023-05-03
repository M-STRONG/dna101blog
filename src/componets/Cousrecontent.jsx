import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import NavBar from './Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const coursecontent = () => {
  const { id } = useParams(); // get the id parameter from the URL
  const [course, setCourse] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/course/get_course_by_id/${id}`, {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data);
        setCourse(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]); // add id as a dependency to re-run the effect when id changes
//http://127.0.0.1:8000/api/course/get_course_by_id/1
  return (
    <div>
      <NavBar />
      <div className="flex flex-col min-h-screen">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4">
            <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
            <p className="text-gray-600">{course.description}</p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-8">
          <img src={`http://127.0.0.1:8000${course.img}`} alt="Article Header" className="w-full rounded-lg shadow-md mb-6" />

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-500">{course.content}</p>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  );
}

export default coursecontent;
