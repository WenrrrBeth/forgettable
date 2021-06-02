import {
  Container,
  Grid,
  Typography,
  CardContent,
  CardMedia,
  Card,
  IconButton,
} from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import useStyles from "./styles.js";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { LOGOUT } from "../../constants/actiontypes";
import { getProfile } from "../../actions/profile";
import { getUnsharedPosts, getSharedPosts, getSavedPost } from "../../actions/post";
import bgimg from "../../designs/bgimg_defaultDesign.png";
import bgimgBorder from "../../designs/bgimg_BorderDesign6.png";
import profileimg from "../../designs/profile_default.jpeg";
import Gridposts from "./GridPosts/Gridposts";
import Detailposts from "./DetailPosts/Detailposts";
import "../../fonts.css";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #DBDBDB",
  },
  indicator: {
    backgroundColor: "#3EA3B0",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    fontFamily: "'Playfair Display', serif",
    color: "gray",
    "&:hover": {
      color: "#3EA3B0",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
    },
    "&:focus": {
      color: "#3EA3B0",
    },
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(17),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(13),
    }
  },
}))((props) => <Tab disableRipple {...props} />);

const Profile = () => {
  const classes = useStyles();
  const [subNav, setSubNav] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    history.push("/profile/authenticate");
    setUser(null);
  }, [dispatch, history]);

  useEffect(() => {
    dispatch(getProfile(user?.result?._id ? user?.result?._id : user?.result?.googleId));
    dispatch(getUnsharedPosts(user?.result?._id ? user?.result?._id : user?.result?.googleId));
    dispatch(getSharedPosts(user?.result?._id ? user?.result?._id : user?.result?.googleId));
    dispatch(getSavedPost(user?.result?._id ? user?.result?._id : user?.result?.googleId));

    const token = user?.token;
    if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [user?.result?._id, user?.result?.googleId, dispatch, location, user?.token, logout]);

  const profile = useSelector((state) => state.profile);
  const unsharedPosts = useSelector((state) => state.unshared);
  const sharedPosts = useSelector((state) => state.shared);
  const savedPosts = useSelector((state) => state.saved);

  // useEffect(() => {
  //   const token = user?.token;
  //   if (token) {
  //       const decodedToken = decode(token);
  //       if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //   }
  //   setUser(JSON.parse(localStorage.getItem('profile')));
  // }, [location])

  const handleTabChange = (e, newValue) => {
    setSubNav(newValue);
  };

  const DisplayOpt = () => {
    if (subNav === 0) {
      // detailed personal posts prop
      if (unsharedPosts[0]) {
        return <Detailposts posts={unsharedPosts} />;
      }  
      return <Typography className={classes.title}>You have no personal posts</Typography>;
      // return <Detailposts posts={unsharedPosts} />;
    } else if (subNav === 1) {
      // detailed shared posts prop
      if (sharedPosts[0]) {
        return <Detailposts posts={sharedPosts} shared />;
      }
      return <Typography className={classes.title}>You have no shared posts</Typography>;
    } else {
      // saved posts from home
      if (savedPosts[0]) {
        return <Gridposts posts={savedPosts} profile={profile} />;
      }
      return <Typography className={classes.title}>You have saved Posts</Typography>;
    }
  };

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
            alt=""
          />
          <img
            className={classes.bgimg}
            src={profile?.bgimg?.filename ? profile?.bgimg.data : bgimg}
            alt=""
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
        <div className={classes.subNav}>
          <AntTabs value={subNav} onChange={handleTabChange}>
            <AntTab className={classes.navIndicator} label="Personal" />
            <AntTab className={classes.navIndicator} label="Shared" />
            <AntTab className={classes.navIndicator} label="Saved" />
          </AntTabs>
        </div>
        <DisplayOpt className={classes.subComponent} />
      </Grid>
    </Container>
  );
};

export default Profile;
