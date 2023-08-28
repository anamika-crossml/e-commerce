import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}


const ImageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
      };

      const sliderContainerStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      };
    
      const sliderStyles = {
        width: '100%',
        height: '100%',
        zIndex: 1, // Ensure the slider content stays above the background
      };
  return ( 
    <>
        <div style={sliderContainerStyles}>
      <Slider {...settings} style={sliderStyles}>
        <div><img src="images/images1.jpeg" alt="Choose Brand" /></div>
        <div><img src="images/images2.jpeg" alt="Choose Brand 2" /></div>
        <div><img src="images/images3.jpeg" alt="Choose Brand 3" /></div>
        <div><img src="images/images5.jpeg" alt="Choose Brand 4" /></div>
        </Slider>
      </div>
       
    </>
  )
}

export default ImageSlider
