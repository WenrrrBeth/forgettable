import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import useStyles from "./styles";
import { Typography, Toolbar, AppBar, IconButton } from "@material-ui/core";
import "../../fonts.css";

const Navigation = () => {
  const classes = useStyles();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("profile"));

  const navOpt = location.pathname;

  return (
    <AppBar
      className={classes.appBar}
      position="fixed"
      color="inherit"
      elevation={0}
    >
      <Typography
        component={Link}
        to="/"
        className={classes.brandName}
        variant="h5"
        align="left"
      >
        Forgettable
      </Typography>
      <Toolbar className={classes.toolbar}>
        <IconButton className={classes.home} component={Link} to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke={navOpt === "/" ? "#3EA3B0" : "black"}
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </IconButton>
        <IconButton className={classes.write} component={Link} to="/write">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke={navOpt === "/write" ? "#3EA3B0" : "black"}
          >
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        </IconButton>
        <IconButton
          className={classes.profile}
          component={Link}
          to={
            user?.result?.googleId || user?.result?._id
              ? "/profile"
              : "/profile/authenticate"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke={
              navOpt === "/profile/authenticate" || navOpt === "/profile" || navOpt === "/profile/settings"
                ? "#3EA3B0"
                : "black"
            }
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
