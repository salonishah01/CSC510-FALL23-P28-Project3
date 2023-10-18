import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../configs/routes";
import slashImage from "/Users/sravyakaranam/Downloads/CSC510-FALL23-P27-Project2/client/src/header/slash.png"; //value to be changed

function NavigationBar() {

  const imageStyle = {
    position: 'relative',
    width: '30px', // Adjust the width to your desired size
    // Maintain the aspect ratio
    position: 'absolute', // Position the border element absolutely within the container
    top: '18px',
    left: '105px',
    right: '10px',
    bottom: 0,
    border: '2px', // Customize the border style as needed
    boxSizing: 'border-box',
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <img src={slashImage} alt="SLASH!!" style={imageStyle} />  SLASH!!
        </Typography>
        <div style={{ flexGrow: 1 }} />
        {routes
          .filter((route) => route.name)
          .map((route, index) => (
            <Link to={route.path} key={index} style={{ textDecoration: 'none' }}>
              <Button color="inherit" style={{ color: 'white' }}>{route.name}</Button>
            </Link>
          ))}
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
