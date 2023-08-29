import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/download1.jpg";
import img2 from "../images/download 2.jpg";
import img3 from "../images/download3.jpg";
import img4 from "../images/download4.jpg";
import { Box,} from "@mui/material";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}
const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const images = [img1, img2, img3, img4];
  return (
    <Box sx={{ width: "90%", marginLeft: 4 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img src={image} key={index}></img>
        ))}
      </Slider>
    </Box>
  );
};
export default ImageSlider;