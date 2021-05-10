import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import "../../fonts.css";

const Postform = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [userData, setUserData] = useState({name:"", email: "", bgimg: "", profileimg: "", mind: ""});
  const [profileImg, setProfileImg] = useState("");
  const [bgImg, setBgImg] = useState("");

  const handleSubmit = () => {};

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3EA3B0",
      },
    },
  });

  const handleChange = () => {};

  const handleProfileChange = (e) => {
    setProfileImg(e.target.files["0"].name);
  };

  const handleBgChange = (e) => {
      setBgImg(e.target.files["0"].name);
  }

  return (
    <Container className={classes.settingsContainer}>
      <Grid container className={classes.settingsGrid}>
        <Typography className={classes.title} variant="h6">
          Settings
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid
            className={classes.formGrid}
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <ThemeProvider theme={theme}>
              <TextField
                className={classes.inputTheme}
                name="name"
                label="Name"
                onChange={handleChange}
                variant="filled"
                required
              />
              <TextField
                disabled
                className={classes.inputTheme}
                name="email"
                label="Email:"
                defaultValue={user.result.email}
                variant="filled"
              />
              <TextField
                className={classes.inputTheme}
                name="mind"
                label="What's on your mind?"
                onChange={handleChange}
                variant="filled"
                required
                multiline
                rows={8}
              />
              <div className={classes.imgUpload}>
                <Button className={classes.imgUploadButton}>
                  <label className={classes.label} for="imgUpload">Choose Profile Image</label>
                </Button>
                <input
                  id="imgUpload"
                  className={classes.fileUploadInput}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleProfileChange}
                />
                <Typography className={classes.fileName}>
                  {profileImg ? profileImg : "No files choosen"}
                </Typography>
              </div>
              <div className={classes.imgUpload}>
                <Button className={classes.imgUploadButton}>
                  <label className={classes.label} for="imgUpload">Choose Background Image</label>
                </Button>
                <input
                  id="imgUpload"
                  className={classes.fileUploadInput}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleBgChange}
                />
                <Typography className={classes.fileName}>
                  {profileImg ? profileImg : "No files choosen"}
                </Typography>
              </div>
              <div className={classes.optButtons}>
                  <Button className={classes.button} component={Link} to="/profile">Cancel</Button>
                  <Button className={classes.button}>Save</Button> 
              </div>
            </ThemeProvider>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default Postform;
