import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import img1 from "../images/kato_trouser_1.jpg";
import img2 from "../images/leather_detail_jacket_1.jpg";
import img3 from "../images/oak_graf_lantz_loak_city_tote_splattered_paint_1.jpg";
import img4 from "../images/soleil_kanga_1.jpg";
import img5 from "../images/handstiched_boiled_wool_crop_top_1.jpg";


const Latest = () => {
  const [hoveredIndex, setHoveredIndex] = useState("-1"); 
  const [flippedIndex, setFlippedIndex] = useState(-1);


  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const handleClick = (index) => {
    setFlippedIndex(index === flippedIndex ? -1 : index);
  };

  
  

  const headingStyle = {
    marginTop: "100px",
    marginBottom: "20px", // Adjusted margin
    fontWeight: "bold",
    color: "#333",
  };

  const cardStyle = {
    height: "500px",
    margin: "8px", // Adjust margin for slight distance
    transformStyle: "preserve-3d", // Enable 3D transformation
    transition: "transform 0.5s ease"
  }; 

   const flippedCardStyle = {
    ...cardStyle,
    transform: "rotateY(180deg)", // Rotate the card on Y-axis for the flip
  };


  const itemNameStyle = {
    fontSize: "12px",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#666",
    lineHeight: 1.1,
    minHeight: "51px",
    margin: 0,
    textAlign: "left",
  };

  const itemPriceStyle = {
    fontSize: "15px",
    color: "#967969",
    fontWeight: "bold",
  };

  const iconContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    color: "white",
  };

  const images = [img1, img2, img3, img4, img5];
  
  const itemNames = [
    "Kato Trouser",
    "Leather Detail Jacket",
    "Oak & Graf Lantz Loak City Tote",
    "Soleil Kanga",
    "Handstitched Boiled Wool Crop Top",
  ];
  const prices = ["$ 92.00", "$ 112.00", "$ 152.00", "$ 98.00", "$ 85.00"];

  return (
    <>
      <Container maxWidth={false}>
      <Typography variant="h3" align="center" style={headingStyle}>
        Shop The Latest
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {/* Add justifyContent */}
        {images.map((image, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={4}
            md={2}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            style={{
              position: "relative",
              cursor: "pointer", // Change cursor to hand icon on hover
            }}
          >
            <div style={{ position: "relative" }}>
            <Card
            style={hoveredIndex === index ? flippedCardStyle : cardStyle}
          >
             <div style={{ transform: "rotateY(0deg)", backfaceVisibility: "hidden" }}>
                <CardMedia component="img" height="400" image={image} />
                <CardContent>
                  <Typography variant="subtitle2" style={itemNameStyle}>
                    {itemNames[index]}
                  </Typography>
                  <Typography variant="body2" style={itemPriceStyle}>
                    {prices[index]}
                  </Typography>
                </CardContent>
                </div>
              </Card>
              {hoveredIndex === index && (
             <div style={iconContainerStyle}>
             <FontAwesomeIcon icon={faHeart} style={{ fontSize: "24px" }}  />
             <div>
                    <FontAwesomeIcon
                      icon={faShoppingBag}
                      style={{ fontSize: "24px" }}
                    />
                    <span
                      style={{
                        fontSize: "10px",
                        textAlign: "center",
                      }}
                    >
                      ADD TO BAG
                    </span>
                  </div>
             <Typography style={{ fontSize: "10px", textAlign: "center" }}>
              QUICK<br/> VIEW
             </Typography>
           </div>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </Container></>
  
  );
};

export default Latest;
