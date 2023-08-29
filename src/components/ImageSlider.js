import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/ret.jpg";
import img2 from "../images/images1.jpg";
import img3 from "../images/new8.jpeg";
import img4 from "../images/yoo.jpg";
import { Box, Grid } from "@mui/material";

const ImageSlider = () => {
  const settings = {
    infinite: true,
    // speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
  };
  const images = [img1, img2, img3, img4];
  return (
    // <Grid container justifyContent="flex">
      <Box sx={{ height: 'calc(100vh - 157px)', width: "100%" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index} sx={{ height: 'calc(100vh - 180px)' }}>
              <img
                src={image}
                alt={`Image ${index}`}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    // </Grid>
  );
};

export default ImageSlider;
