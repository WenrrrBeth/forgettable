import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { updateProfile } from "../../actions/profile";
import { getProfile } from "../../actions/profile";
import "../../fonts.css";

const Settings = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [profileimg, setProfileimg] = useState("");
  const [bgimg, setBgimg] = useState("");

  useEffect(() => {
    dispatch(getProfile(user.result._id));
  }, [user.result._id, dispatch]);

  const profile = useSelector((state) => state.profile);
  const [userData, setUserData] = useState(profile);


  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3EA3B0",
      },
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updateProfile(profile?._id, { ...userData, email: user.result.email }, history)
    );
    setProfileimg("");
    setBgimg("");
  };

  const toBase64 = (file) => {
      return new Promise(resolve => {
        let reader = new FileReader();
        let base = "";
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          base = e.target.result;
          resolve(base);
        }
      })
  }

  const handleProfileChange = (e) => {
    setProfileimg(e.target.files[0].name);
    toBase64(e.target.files[0])
      .then(result => {
        setUserData({
        ...userData,
        profileimg: {
            filename: e.target.files[0].name,
            filetype: e.target.files[0].type,
            data: result,
        },
        })
      })
      .catch(err => {
          console.log(err);
      })
  }

  const handleBgChange = (e) => {
    setBgimg(e.target.files[0].name);
      toBase64(e.target.files[0])
      .then(result => {
        setUserData({
        ...userData,
        bgimg: {
            filename: e.target.files[0].name,
            filetype: e.target.files[0].type,
            data: result,
        },
        })
      })
      .catch(err => {
          console.log(err);
      })
  };

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
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    name: e.target.value ? e.target.value : profile?.name,
                  })
                }
                variant="filled"
                required
                defaultValue={user.result.name}
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
                onChange={(e) =>
                  setUserData({ ...userData, mind: e.target.value })
                }
                variant="filled"
                required
                multiline
                rows={8}
                defaultValue={profile?.mind}
              />
              <div className={classes.imgUpload}>
                <Button className={classes.imgUploadButton}>
                  <label className={classes.label} for="imgProfileUpload">
                    Choose Profile Image
                  </label>
                </Button>
                <input
                  id="imgProfileUpload"
                  className={classes.fileUploadInput}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleProfileChange}
                />
                <Typography className={classes.fileName}>
                  {profileimg 
                    ? profileimg
                    : profile?.profileimg?.filename ? profile?.profileimg?.filename : "No files choosen"}
                </Typography>
              </div>
              <div className={classes.imgUpload}>
                <Button className={classes.imgUploadButton}>
                  <label className={classes.label} for="imgBgUpload">
                    Choose Background Image
                  </label>
                </Button>
                <input
                  id="imgBgUpload"
                  className={classes.fileUploadInput}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleBgChange}
                />
                <Typography className={classes.fileName}>
                  {bgimg 
                    ? bgimg
                    : profile?.bgimg?.filename ? profile?.bgimg?.filename : "no files choosen"}
                </Typography>
              </div>
              <div className={classes.optButtons}>
                <Button
                  className={classes.button}
                  component={Link}
                  to="/profile"
                >
                  Cancel
                </Button>
                <Button className={classes.button} type="submit">
                  Save
                </Button>
              </div>
            </ThemeProvider>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default Settings;
