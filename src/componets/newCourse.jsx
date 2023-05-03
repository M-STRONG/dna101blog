import React from 'react';
import { Link } from 'react-router-dom';

const ImageSection = () => {
  const images = [
    {
      id: 1,
      src: 'https://via.placeholder.com/150',
      alt: 'Placeholder Image 1',
      description: 'Description for Image 1',
      link: '/image1',
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/150',
      alt: 'Placeholder Image 2',
      description: 'Description for Image 2',
      link: '/image2',
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/150',
      alt: 'Placeholder Image 3',
      description: 'Description for Image 3',
      link: '/image3',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image) => (
        <Link key={image.id} to={image.link} className="w-64 h-auto m-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <img src={image.src} alt={image.alt} className="object-cover w-full h-48" />
            <div className="p-4">
              <p className="text-lg font-medium">{image.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageSection;
