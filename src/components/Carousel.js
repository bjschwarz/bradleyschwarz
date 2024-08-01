import React from "react";
import Slider from "react-slick";
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';


function ImageViewer({project}) {

  var settings = {
    dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                lazyLoad: true,
                centerMode: true,
                adaptiveHeight: true,
                fade: true,
                arrows: true,
                autoplaySpeed: 5000,
                className: 'slides'
  };

  console.log(project)

  return (
    <div>
    <Slider {...settings}>
      <div className="slider-container">
        <Slider {...settings}>
        {project?.additional_images?.map((item) => (
          <Box sx={{ display: 'flex', alignContent: 'center' }}>
            <Image src={item} 
            objectFit='cover'a
            width={500}
            loading="lazy"
            ></Image>
            
          </Box>
        ))} 
        </Slider>
      </div>
    </Slider>
    </div>
  );
}
export default ImageViewer;