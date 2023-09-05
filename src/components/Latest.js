import {Card, CardMedia, Container, Grid, Icon, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {MinusOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import img1 from "../images/kato_trouser_1.jpg";
import img2 from "../images/leather_detail_jacket_1.jpg";
import img3 from "../images/oak_graf_lantz_loak_city_tote_splattered_paint_1.jpg";
import img4 from "../images/soleil_kanga_1.jpg";
import img5 from "../images/handstiched_boiled_wool_crop_top_1.jpg";
// import QuickView from "../DetailPage/QuckView";


const Latest = () => {
  const [hoveredIndex, setHoveredIndex] = useState("-1");
  const [flippedIndex, setFlippedIndex] = useState(-1);
  const [isHoveringShoppingBag, setIsHoveringShoppingBag] = useState(false); 
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedItem, setSelectedItem] = useState(null);

  /**
   * @method [handleMouseEnter] used to handle the index while hovering .
   */
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  /**
   * @method [handleMouseLeave] used to handle the index after hovering  .
   */
  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  /**
   * @method [handleClick] used to handle onclick while flipping the card   .
   */
  const handleClick = (index) => {
    setFlippedIndex(index === flippedIndex ? -1 : index);
  };

  const headingStyle = {
    marginBottom: "20px", // Adjusted margin                                                                         
    fontWeight: "bold",
    color: "#333",
  };

  const cardStyle = {
    height: "400px",
    margin: "8px",
    transformStyle: "preserve-3d",
    transition: "transform 0.5s ease",
  };

  const flippedCardStyle = {
    ...cardStyle,
    transform: "rotateY(180deg)",
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

  const itemNameStyle = {
    fontSize: "12px",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#666",
    lineHeight: 1.1,
    minHeight: "51px",
    margin: "1px 0",
    textAlign: "left",
    paddingLeft: "8px",
  };

  const itemPriceStyle = {
    fontSize: "14px",
    color: "#967969",
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: "8px",
    marginBottom: "12px",
    margin: "1px 0",
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

  const detailPageUrls = [
    "/detailPage1",
    "/detailPage2",
    "/detailPage3",
    "/detailPage4",
    "/detailPage5",
  ];

  return (
    <>
      <Container
        maxWidth={false}
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <Typography variant="h2" align="center" style={headingStyle}>
          Shop The Latest
        </Typography>
        <Grid container spacing={1} justifyContent="center">
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
                cursor: "pointer",
              }}
            >
              <div style={{ position: "relative" }}>
                <Card
                  style={hoveredIndex === index ? flippedCardStyle : cardStyle}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image={image}
                    style={{
                      transform:
                        hoveredIndex === index ? "rotateY(180deg)" : "none",
                      transition: "transform 0.5s ease",
                      backfaceVisibility: "visible",
                    }}
                  />
                </Card>
                {hoveredIndex === index && (
                  <div style={iconContainerStyle}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: "24px" }}
                    />
                    <div
                     onMouseEnter={() => setIsHoveringShoppingBag(true)} 
                     onMouseLeave={() => setIsHoveringShoppingBag(false)}
                    >
                      <FontAwesomeIcon
                        icon={faShoppingBag}
                        style={{
                          fontSize: "24px",
                          position: "relative",
                        }}
                      />
                       {isHoveringShoppingBag && (
                        <Typography
                        style={{
                          fontSize: "8px",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          backgroundColor: "white",
                          color: "#333",
                          display: "block",
                        }}
                        >
                          ADD TO CART
                        </Typography>
                      )}
                    </div>   
                    <Typography
                      style={{ fontSize: "10px", textAlign: "center" }}
                    >
                      QUICK
                      <br /> VIEW
                    </Typography>
                  </div>
                )}
                <div>
                  <Link to={`${detailPageUrls[index]}`}>
                    {" "}
                    {/* Link to ItemDetail1 */}
                    <Typography
                      variant="subtitle2"
                      style={{
                        ...itemNameStyle,
                      }}
                    >
                      {itemNames[index]}
                    </Typography>
                  </Link>
                  <IconButton>
                    <Icon >
                   <MinusOutlined/>
                    </Icon>
                  </IconButton>
                  <Typography
                    variant="body2"
                    style={{
                      ...itemPriceStyle, 
                    }}
                  >
                    {prices[index]}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Latest;