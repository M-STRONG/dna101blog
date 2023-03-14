import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './Navbar';


const Courses = ({courses}) => {

    console.log("course Object")
    console.log(courses)

    const course1=[
        {
            "id":1,
            'title':'Bioinformatics with Python',
            'desc':"Do you know that the human genomic sequence if printed out in a normal text font, would stretch for 5000 km, which is like the distance from London to Montreal, Los Angeles to Panama, Accra to Cape Town,  Tokyo to Calcutta.",
            'coverImg':'https://cdn.pixabay.com/photo/2020/01/22/12/33/python-4785225__340.jpg',
    
        },
        {
            "id":2,
            'title':' Introduction to Bioinformatics Course',
            'desc':"Best & Most Updated Bioinformatics course, provides a step-by-step process to study Bioinformatics and biological data",
            'coverImg':'https://media.istockphoto.com/id/1319439243/photo/molecule-of-dna-double-helix-3d-illustration.jpg?b=1&s=170667a&w=0&k=20&c=rU-tufcFUE1FAB3PIokTzNyLbLy5PoUsb6f-Xu4v6sM=',
            
        },
        {
            "id":3,
            'title':'Bioinformatics research guide-using analysis to write paper',
            'desc':"How to do Bioinformatics Research Genome wide identification in Plants Using bioinformatics analysis to write research",
            'coverImg':'https://media.istockphoto.com/id/1291641896/photo/program-code-on-computer-display-in-magnifying-glass-close-up.jpg?s=612x612&w=0&k=20&c=SZi1x4U-Gk3dyEQULcxsKtL3p65mjirMWlRp_Yd5KPo=',
            
        },
        {
          "id":4,
          'title':"Learn Bioinformatics in 6 Days",
          'desc':"It's WORTH your money! This program runs through 6 chapters. This is a self-paced course that suits to your own daily busy schedules. ",
          'coverImg':'https://media.istockphoto.com/id/645455730/photo/dna-in-hand-on-blue-background.jpg?b=1&s=170667a&w=0&k=20&c=TQhngxQWke0qjaEruNv1T58KDPQrG3jBWvOJ0Yx9GXQ=',
          
      },
    ]



  return (
    <div>
      <NavBar/>
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
                
                
                {course1.map((course)=>{
                return(
                  <Link to="/Cousrecontent">
                    <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                        <img className='h-56 w-full object-cover' src={course.coverImg} />
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{course.title}</h3>
                            <p className='text-gray-600 text-xl'>{course.desc}</p>
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

export default Courses