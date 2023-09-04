import { useState } from "react";
import {
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
  Modal
} from "@mui/material";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import FavoriteIcon from "@mui/icons-material/Favorite";
//images
import img1 from "../images/kato_trouser_1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from "@mui/icons-material/Close";

const QuickView = (isOpen, onClose) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [count, setCount] = useState(1);

  /**
   * @method [handleMouseEnter] used to zoom the image when user hovers  on the image.
   */
  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  /**
   * @method [handleMouseLeave] used to remove zoom effect when user leaves the image  .
   */
  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  /**
   * @method [incrementCount] used to increase the selected quantity from the cart.
   */
  const incrementCount = () => {
    setCount(count + 1);
  };

  /**
   * @method [decrementCount] used to decrease the selected quantity from the cart.
   */
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  /**
   * @method [handleButtonClick] used to add the item to the cart.
   */
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  /**
   * @method [arrowStyle] used to add some margin between counter value and arrows
   */
  const arrowStyle = {
    cursor: "pointer",
    marginLeft: "10px",
    marginRight: "10px", //
  };

  const handleClose = () => {
    onClose(); // Close the modal
  };

  return (
    <>
    <Modal
        open={isOpen}
        Close={onClose}
      >
     <Grid
      container
      style={{ display: "flex", marginTop: "300px", marginLeft: "200px" }}
    >
      <Grid item xs={4} style={{width:'60%'}}>
        <Card sx={{ width: "65%", height: "100%" }}>
          <CardMedia
            component="img"
            src={img1}
            alt="Kato Trouser"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isZoomed ? "scale(1.8)" : "scale(1)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
        </Card>
        <IconButton
            style={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
      </Grid>
      <Grid item xs={4} sx={{ marginLeft: "-600px" }}>
        <Typography
          variant="h2"
          style={{ marginTop: "50px" }}
          sx={{
            lineHeight: "1.1",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            textTransform: "none",
            fontSize: "26px",
            margin: "0 0 24px",
            color: "#404040",
          }}
        >
          Kato Trouser
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textTransform: "none",
            color: "#404040",
          }}
          //dont do anything from your own i just want when a user clicks on quick view it will opena  modal and the contetn of that modal is in QuickView file pelase implement this only
        >
          Wool & Cotton Jacket in a minimalistic one-side crop
          <br /> line with leather details on the pocket and the collar.
        </Typography>
        <Typography
          variant="h5"
          style={{ marginTop: "50px", color: "#967969" }}
        >
          $92.00
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
            marginTop: "100px",
          }}
        >
          <span onClick={decrementCount} style={arrowStyle}>
            &lt;
          </span>{" "}
          {count}
          <span onClick={incrementCount} style={arrowStyle}>
            &gt;
          </span>{" "}
          <Divider orientation="vertical" variant="middle" flexItem />
          <FontAwesomeIcon
            icon={faShoppingBag}
            style={{
              marginLeft: "20px",
              fontSize: "24px",
              position: "relative",
              color: "#967969",
            }}
          />
          <Button
            variant="text"
            onClick={handleButtonClick}
            style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}  
          >
            Add to Cart
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
            marginTop: "30px",
          }}
        >
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <Button
            variant="text"
            onClick={handleButtonClick}
            style={{ color: "#666666", fontSize: "10px", fontWeight: "bold" }}
          >
            ADD TO WISHLIST
          </Button>
        </div>
        <Typography
          variant="body2"
          style={{ marginTop: "20px", fontSize: "12px" }}
        >
          SKU:{" "}
          <span style={{ color: "#666666", fontWeight: "bold" }}>CM_04</span> |
          <Button
            variant="text"
            onClick={handleButtonClick}
            style={{ color: "#967969", fontSize: "10px", fontWeight: "bold" }}
          >
            NEW ARRIVALS ,
          </Button>
          <Button
            variant="text"
            onClick={handleButtonClick}
            style={{ color: "#967969", fontSize: "10px", fontWeight: "bold" }}
          >
            TROUSERS ,
          </Button>
          <Button
            variant="text"
            onClick={handleButtonClick}
            style={{ color: "#967969", fontSize: "10px", fontWeight: "bold" }}
          >
            WOMEN AW 19-20
          </Button>
          <Button
            variant="text"
            onClick={handleButtonClick}
            style={{ color: "#967969", fontSize: "10px", fontWeight: "bold" }}
          >
            LEATHER DETAILS
          </Button>
        </Typography>
      </Grid>
    </Grid>
    </Modal>
    
    </>
   
    
  );
};

export default QuickView;
