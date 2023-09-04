import React from "react";
import { NavLink } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Nav = () => {
  const activeStyle = { color: "brown" };
  const listItemStyle = { color: "grey", transition: "color 0.3s" };
  const listItemHoverStyle = { color: "brown", transition: "color 0.3s" };
  const handleMouseEnter = (e) => {
    e.target.style.color = "brown";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "grey";
  };
  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#F8F8F8", zIndex: 100 }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <List style={{ display: "flex", flexDirection: "row", padding: 0 }}>
          <Tooltip title="Home">
            <ListItem
              component={NavLink}
              to="/"
              exact
              activeStyle={activeStyle}
              style={listItemStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ListItemText primary="HOME" />
            </ListItem>
          </Tooltip>
          <Tooltip title="Shop">
            <ListItem
              component={NavLink}
              to="/shop"
              activeStyle={activeStyle}
              style={listItemStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ListItemText primary="SHOP" />
            </ListItem>
          </Tooltip>
          <Tooltip title="Women">
            <ListItem
              component={NavLink}
              to="/women"
              activeStyle={activeStyle}
              style={listItemStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ListItemText primary="WOMEN" />
            </ListItem>
          </Tooltip>
          <Tooltip title="Men">
            <ListItem
              component={NavLink}
              to="/men"
              activeStyle={activeStyle}
              style={listItemStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ListItemText primary="MEN" />
            </ListItem>
          </Tooltip>
          <Tooltip title="Blog">
            <ListItem
              component={NavLink}
              to="/blog"
              activeStyle={activeStyle}
              style={listItemStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ListItemText primary="BLOG" />
            </ListItem>
          </Tooltip>
        </List>
        {/* Icons and Divider */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Product Search">
            <IconButton style={{ marginRight: "10px" }}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" variant="large" flexItem />
          <Tooltip title="Login / Register">
            <IconButton style={{ marginRight: "10px" }}>
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="My Wishlist">
            <IconButton style={{ marginRight: "10px" }}>
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" variant="large" flexItem />
          <Tooltip title="Your Cart">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="subtitle2"
                style={{
                  marginRight: "10px",
                  marginLeft: "10px",
                  color: "black",
                }}
              >
                YOUR CART <br/><span style={{ color: "brown" }}>$0.00</span>
              </Typography>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
            </div>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;