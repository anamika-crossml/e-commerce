import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/HOME-2.jpg";
import img2 from "../images/HOME-4.jpg";
import img3 from "../images/HOME-5.jpg";
import img4 from "../images/HOME-6.jpg";

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
  };

  //Array of images
  const images = [img1, img2, img3, img4];

  return (
    <Box sx={{ height: "calc(100vh - 157px)", width: "100%" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={`images-${index}`} sx={{ height: "calc(100vh - 180px)" }}>
            <img
              src={image}
              alt={`photos ${index}`}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
