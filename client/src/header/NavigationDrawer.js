import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../configs/routes";
import slashImage from "./Slash1.png"; //value to be changed
import LogOut from "../components/LogOut";

function NavigationBar() {

  const imageStyle = {
    position: 'relative',
    width: '120px', // Adjust the width to your desired size
    // Maintain the aspect ratio
    position: 'absolute', // Position the border element absolutely within the container
    top: '15px',
    left: '30px',
    right: '10px',
    bottom: 0,
    border: '2px', // Customize the border style as needed
    boxSizing: 'border-box',
  };

  const appBarStyle = {
    backgroundColor: '#83604B', // Change the background color to your desired color
  };

  const visibleRoutes = routes.filter((route) => route.name).slice(0, 2);

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
          <img src={slashImage} alt="SLASH!!" style={imageStyle} />
        <div style={{ flexGrow: 1 }} />
        {visibleRoutes
          .filter((route) => route.name)
          .map((route, index) => (
            <Link to={route.path} key={index} style={{ textDecoration: 'none' }}>
              <Button color="inherit" style={{ color: 'white' }}>{route.name}</Button>
            </Link>
          ))}
          <LogOut />
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
