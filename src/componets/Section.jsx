import React from 'react';

const MyComponent = () => {
  const components = [
   
    {
      imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/66/fcb8c7bc2b16212736fbd7fad363bb/600_3402.jpg?auto=format%2Ccompress&dpr=1',
      title: 'Introduction Bioinformatics',
      description:"Bioinformatics is an interdisciplinary field that combines computer science, statistics, and biology to analyze and interpret biological data. It involves the development of algorithms and software tools for the storage, retrieval, and analysis of biological information, such as DNA and protein sequences, gene expression data, and protein structures."
        },
        {
    
          imageUrl: 'https://media.istockphoto.com/id/1297146235/photo/blue-chromosome-dna-and-gradually-glowing-flicker-light-matter-chemical-when-camera-moving.jpg?s=612x612&w=0&k=20&c=yjSdodXRBvtwzOYtQTqetnn3b4wWDNpF6keupxqxric=',
          title: 'What is DNA?',
          description:"DNA stands for Deoxyribonucleic Acid, which is a molecule that contains genetic instructions used in the development and functioning of all living organisms. It is often described as the  of life, as it contains the information necessary for the growth, reproduction, and functioning of cells and organisms."
            },
    {
      imageUrl: 'https://img-c.udemycdn.com/course/750x422/4119534_058f.jpg',
      title: 'Introduction to programming for Bioinformatics with Python',
      description:"Python is the main programming language used for bioinformaticians. This course is ideal for students who are starting in the field of bioinformatics and who do not have previous knowledge of programming. You will also learn in this course: What "   },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
          News&Course
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {components.map((component) => (
            <div key={component.title} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={component.imageUrl}
                  alt="Placeholder Image"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{component.title}</h3>
                <p className="mt-2 text-base leading-6 text-gray-500">{component.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
