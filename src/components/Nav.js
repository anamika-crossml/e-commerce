import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemText, AppBar, Toolbar, Typography } from "@mui/material";

const Nav = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#f8f8f8", zIndex: 100  }}>
      <Toolbar  style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" color="primary" style={{ marginLeft: "15px" }}>
            Fitswell
          </Typography>
        <List style={{ display: "flex", flexDirection: "row", padding: 0 }}>
          <ListItem component={NavLink} to="/" style={{ margin: "0 10px" }}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={NavLink} to="/about" style={{ margin: "0 10px" }}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem component={NavLink} to="/services" style={{ margin: "0 10px" }}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem component={NavLink} to="/portfolio" style={{ margin: "0 10px" }}>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem component={NavLink} to="/contact" style={{ margin: "0 10px" }}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
