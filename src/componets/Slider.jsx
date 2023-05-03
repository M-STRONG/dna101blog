import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "15px",
  autoplay: true,
  autoplaySpeed: 3000,
};

const SliderComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/general content/latest/4")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-blue m-10">
      <Slider {...settings}>
        {images.map((last) => (
          <div key={last.id}>
            {last.content_type === "BLOG" ? (
              <Link to={`/Blogcontent/${last.id}`}>
                <div className="flex justify-center">
                  <img src={`http://127.0.0.1:8000${last.img}`} alt={last.title} width={450} height={250}/>
                  <div className="px-6 py-4">
                    <h2 className="text-xl font-bold mb-2">{last.title}</h2>
                    <p className="text-gray-700 text-base">{last.description}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <Link to={`/Cousrecontent/${last.id}`}>
                <div className="flex justify-center">
                <img src={`http://127.0.0.1:8000${last.img}`} alt={last.title} width={450} height={250}/>
                  <div className="px-6 py-4">
                    <h2 className="text-xl font-bold mb-2">{last.title}</h2>
                    <p className="text-gray-700 text-base">{last.description}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
