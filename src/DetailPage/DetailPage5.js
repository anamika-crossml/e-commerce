import { useState } from "react";
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Divider,
  IconButton
} from "@mui/material";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../images/handstiched_boiled_wool_crop_top_1.jpg";
import img2 from "../images/handstiched_boiled_wool_crop_top_1-150x150.jpg";
import img3 from "../images/handstiched_boiled_wool_crop_top_2-150x150.jpg";
import img4 from "../images/handstiched_boiled_wool_crop_top_3-150x150.jpg";
import img5 from "../images/handstiched_boiled_wool_crop_top_4-150x150.jpg";
import img6 from "../images/handstiched_boiled_wool_crop_top_5-150x150.jpg";

const DetailPage5 = () => {
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

  return (
    <>
      <Grid
        container
        style={{ display: "flex", marginTop: "300px", marginLeft: "200px" }}
      >
        <Grid item xs={4}>
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
        </Grid>
        <Grid item xs={4}>
          <Grid container item xs={12} flexDirection="column" spacing={2}>
            <Grid item xs={4}>
              <Card sx={{ width: "35%", height: "40%", marginLeft: "-200px" }}>
                <CardMedia component="img" src={img2} alt="Image 2" />
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card
                sx={{
                  width: "35%",
                  height: "40%",
                  marginLeft: "-200px",
                  marginTop: "60px",
                }}
              >
                <CardMedia component="img" src={img3} alt="Image 3" />
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card
                sx={{
                  width: "35%",
                  height: "40%",
                  marginLeft: "-200px",
                  marginTop: "60px",
                }}
              >
                <CardMedia component="img" src={img4} alt="Image 4" />
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card
                sx={{
                  width: "35%",
                  height: "40%",
                  marginLeft: "-200px",
                  marginTop: "60px",
                }}
              >
                <CardMedia component="img" src={img5} alt="Image 4" />
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card
                sx={{
                  width: "35%",
                  height: "40%",
                  marginLeft: "-200px",
                  marginTop: "60px",
                }}
              >
                <CardMedia component="img" src={img6} alt="Image 4" />
              </Card>
            </Grid>
          </Grid>
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
        </Grid>
      </Grid>
      <Grid>
        <Typography
          variant="h6"
          style={{
            marginTop: "60px",
            marginLeft: "300px",
            color: "#a3865b",
            fontWeight: "bold",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "15px",
            fontStyle: "italic",
          }}
        >
          Additional information
        </Typography>
        <TableContainer
          component={Paper}
          style={{
            marginTop: "40px",
            marginLeft: "290px",
            marginBottom: "300px",
          }}
        >
          <Table style={{ border: "none" }}>
            <TableBody>
              <TableRow>
                <TableCell>FABRIC</TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    onClick={handleButtonClick}
                    style={{ color: "#a3865b" }}
                  >
                    Boiled Wool
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>COLOR</TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    onClick={handleButtonClick}
                    style={{ color: "#a3865b" }}
                  >
                    Black
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SIZE</TableCell>
                <TableCell>
                  <Typography variant="text" style={{ color: "#a3865b" }}>
                    L,M,S,XL,XS
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default DetailPage5;


