import { Container, Grid, Typography, Paper } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles.js";
import bgimg from "../../designs/bgimg_defaultDesign.png";
import bgimgBorder from "../../designs/bgimg_BorderDesign.PNG";
import "../../fonts.css";

const Profile = () => {
  const classes = useStyles();
  const [subNav, setSubNav] = useState(0);
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Container className={classes.profileContainer}>
      <Grid className={classes.profile} container>
        <Typography className={classes.title} variant="h6">
          Profile
        </Typography>
        <img
          className={classes.bgimg}
          src={user.bgimg ? user.bgimg : bgimg}
          alt="default background image design"
        />
        <img
          className={classes.bgimgOverlay}
          src={bgimgBorder}
          alt="background image border design"
        />
      </Grid>
    </Container>
  );
};

export default Profile;
