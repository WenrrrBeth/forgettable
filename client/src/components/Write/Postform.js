import {
  Container,
  Grid,
  Typography,
  TextField,
  Chip,
  Button,
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postEvent } from "../../actions/post";
import useStyles from "./styles";
import Resizer from "react-image-file-resizer";
import "../../fonts.css";

const Postform = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [hashTags, setHashTags] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const [fgtbData, setFgtbData] = useState({
    by: "",
    title: "",
    content: "",
    tags: [],
    image: { filename: "", filetype: "", data: "" },
    shared: false,
  });
  const [fgtbImgName, setFgtbImgName] = useState("No files choosen.");
  const user = JSON.parse(localStorage.getItem("profile"));

  const clearData = () => {
    setFgtbData({
      by: "",
      title: "",
      content: "",
      tags: [],
      image: { filename: "", filetype: "", data: "" },
      shared: false,
    });
    setHashTags([])
    setFgtbImgName("No files choosen.")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fgtbData.image.data) {
      setInvalid(true);
    } else {
      dispatch(
        postEvent({ ...fgtbData, by: user?.result?._id, tags: hashTags }, history)
      );
    }
    clearData();
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3EA3B0",
      },
    },
  });

  const handleDelete = (didx) => {
    setHashTags([ ...hashTags.filter((_, idx) => idx!==didx)])
  };

  const handleTagChange = (e) => {
    if (e.target.value.slice(-1) === " ") {
      setHashTags((hashTags) => [...hashTags, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const resizeFile = (file) => 
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      200,
      200,
      file.type,
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

  const handleFgtbChange = (e) => {
    setFgtbImgName(e.target.files[0].name);
    setInvalid(false);
    try {
      const file = e.target.files[0];
      resizeFile(file)
        .then(result => {
          setFgtbData({
            ...fgtbData,
            image: {
              filename: e.target.files[0].name,
              filetype: e.target.files[0].type,
              data: result,
            }
          })
        })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className={classes.postFormContainer}>
      <Grid container className={classes.postFormGrid}>
        <Typography className={classes.title} variant="h6">
          What's with today?
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid
            className={classes.formGrid}
            container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={2}
          >
            <ThemeProvider theme={theme}>
              <TextField
                className={classes.inputTheme}
                name="title"
                label="Title"
                onChange={(e) =>
                  setFgtbData({
                    ...fgtbData,
                    title: e.target.value,
                  })
                }
                variant="filled"
                required
              />
              <TextField
                className={classes.inputTheme}
                name="content"
                label="Content"
                onChange={(e) => {
                  setFgtbData({ ...fgtbData, content: e.target.value });
                }}
                variant="filled"
                required
                multiline
                rows={6}
              />
              <TextField
                className={classes.inputTheme}
                name="tags"
                label="Tags (separate by space)"
                onChange={handleTagChange}
                variant="filled"
              />
              <Container className={classes.hashtag}>
                {/* { hashTags.length > 5 &&
                    <Alert severity="warning">
                      <AlertTitle>Warning</AlertTitle>
                      This is a reminder that you have added more than 5 Tags. <strong>Only 5 tags will be added.</strong>
                    </Alert>
                } */}
                { hashTags &&
                  hashTags.map((tag, i) => (
                    <Chip
                      className={classes.chip}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="9" x2="24" y2="9"></line>
                          <line x1="7" y1="15" x2="23" y2="15"></line>
                          <line x1="13" y1="3" x2="11" y2="21"></line>
                          <line x1="19" y1="3" x2="17" y2="21"></line>
                        </svg>
                      }
                      label={tag}
                      clickable
                      color="primary"
                      onDelete={() => handleDelete(i)}
                      variant="outlined"
                    />
                  ))
                }
              </Container>
              <div className={classes.fgtbimg}>
                <Button className={classes.fgtbimgButton}>
                  <label className={classes.label} htmlFor="fgtbimgUpload">
                    Choose Image
                  </label>
                </Button>
                <input
                  id="fgtbimgUpload"
                  className={classes.fileUploadInput}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFgtbChange}
                />
                <Typography className={classes.fileName}>
                  {fgtbImgName}
                </Typography>
              </div>
              {
                invalid && <Typography className={classes.warning}>Please choose an image.</Typography>
              }
              <div className={classes.optButtons}>
                <Button className={classes.button} component={Link} to="/profile">
                  Cancel
                </Button>
                <Button className={classes.button} type="submit" onClick={() => setFgtbData({ ...fgtbData, shared: true })}>
                  Share
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

export default Postform;
