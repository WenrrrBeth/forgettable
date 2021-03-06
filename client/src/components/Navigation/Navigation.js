import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import useStyles from "./styles";
import { Typography, Toolbar, AppBar, IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actiontypes";
import decode from "jwt-decode";
import "../../fonts.css";

const Navigation = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  const navOpt = location.pathname;

  useEffect(() => {
    if (!user && navOpt==="/profile") {
      history.push("/profile/authenticate")
    } else if (user && navOpt==="/profile/authenticate") {
      history.push("/profile");
    } else if (navOpt!=="/"&&navOpt!=="/write"&&navOpt!=="/profile"&&navOpt!=="/profile/authenticate"&&navOpt!=="/profile/settings") {
      console.log("huh?")
      history.push("/");
    }
  }, [history, navOpt, user])

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    history.push("/profile/authenticate");
    setUser(null);
  }, [dispatch, history]);

  useEffect(() => {
    const token = user?.token;
    if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [user?.result?._id, user?.result?.googleId, dispatch, location, user?.token, logout]);

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
        <IconButton className={classes.icon} component={Link} to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={navOpt === "/" ? "#3EA3B0" : "black"}
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </IconButton>
        <IconButton
          className={classes.icon}
          component={Link}
          to={user ? "/write" : "/profile/authenticate"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={navOpt === "/write" ? "#3EA3B0" : "black"}
          >
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        </IconButton>
        <IconButton
          className={classes.icon}
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={
              navOpt === "/profile/authenticate" ||
              navOpt === "/profile" ||
              navOpt === "/profile/settings"
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
