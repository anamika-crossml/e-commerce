import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemText, AppBar, Toolbar, Typography } from "@mui/material";

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
    <AppBar position="fixed" style={{ backgroundColor: "#F8F8F8", zIndex: 100 }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary" style={{ marginLeft: "15px" }}>
          Fitswell
        </Typography>
        <List style={{ display: "flex", flexDirection: "row", padding: 0 }}>
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
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
