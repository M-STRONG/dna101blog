
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './Navbar';
import axios from 'axios';
const course = () => {
  const [courseList, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/course/get_all_courses/1", {
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
  }, []);

  return (
    <div>
      <NavBar/>
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
                
                
                {courseList.map((course)=>{
                return(
                  <Link to={`/Cousrecontent/${course.id}`}  key={course.id}>
                    <div key={course.id} className="bg-white overflow-hidden shadow rounded-lg">
                        <img className='h-56 w-full object-cover'  src={`http://127.0.0.1:8000${course.img}`}/>
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{course.title}</h3>
                            <p className='text-gray-600 text-xl'>{course.descriptione}</p>
                        </div>
                      </div>
                    </Link>
                )
                }
                
                
                )} 


            </div>

        </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default course