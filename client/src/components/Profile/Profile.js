import {
  Container,
  Grid,
  Typography,
  Paper,
  CardContent,
  CardMedia,
  Card,
  IconButton,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import useStyles from "./styles.js";
import { LOGOUT } from "../../constants/actiontypes";
import { getProfile } from "../../actions/profile";
import bgimg from "../../designs/bgimg_defaultDesign.png";
import bgimgBorder from "../../designs/bgimg_BorderDesign.PNG";
import profileimg from "../../designs/profile_default.jpeg";
import "../../fonts.css";

const Profile = () => {
  const classes = useStyles();
  const [subNav, setSubNav] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
      dispatch(getProfile(user.result._id));
  }, [user.result._id, dispatch]);

  const profile = useSelector((state) => state.profile);

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/profile/authenticate");
    setUser(null);
  };

  //   useEffect(() => {
  //     const token = user?.token;
  //     if (token) {
  //         const decodedToken = decode(token);
  //         if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //     }
  //     setUser(JSON.parse(localStorage.getItem('profile')));
  //   }, [location])

  return (
    <Container className={classes.profileContainer}>
      <Grid className={classes.profile} container>
        <Typography className={classes.title} variant="h6">
          Profile
        </Typography>
        <div className={classes.background}>
          <img
            className={classes.bgimgOverlay}
            src={bgimgBorder}
            alt="background image border design"
          />
          <img
            className={classes.bgimg}
            src={
              profile?.bgimg?.filename
                ? profile?.bgimg.data
                : bgimg
            }
            alt="default background image design"
          />
        </div>
        <Card className={classes.nameCard} elevation={0}>
          <div className={classes.userTop}>
            <CardMedia
              className={classes.profilePic}
              component="img"
              alt="profile picture"
              image={
                profile?.profileimg?.filename
                  ? profile?.profileimg.data
                  : profileimg
              }
              title="Click settings to modify profile pictures"
            />
            <div className={classes.userRight}>
              <Typography className={classes.name} variant="h5">
                {profile?.name ? profile?.name : "Name"}
              </Typography>
              <div className={classes.controls}>
                <IconButton component={Link} to="/write">
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
                  >
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                </IconButton>
                <IconButton component={Link} to="/profile/settings">
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
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </IconButton>
                <IconButton onClick={logout}>
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
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                </IconButton>
              </div>
            </div>
          </div>
          <div className={classes.userBottom}>
            <CardContent className={classes.userContent}>
              <Typography
                className={classes.mind}
                variant="h6"
                color="textSecondary"
              >
                {profile?.mind
                  ? profile?.mind
                  : "Click setting to add what's on your mind."}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </Container>
  );
};

export default Profile;
