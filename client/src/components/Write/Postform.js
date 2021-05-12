import {
  Container,
  Grid,
  Typography,
  TextField,
  Chip,
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import "../../fonts.css";

const Postform = () => {
  const classes = useStyles();
  const [hashTags, setHashTags] = useState([]);
  const [count, setCount] = useState(0);
  const handleSubmit = () => {};

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3EA3B0",
      },
    },
  });

  const handleChange = (e) => {};

  const handleDelete = () => {};

  const handleTagChange = (e) => {
    if (e.target.value.slice(-1) === " ") {
      setHashTags((hashTags) => [...hashTags, e.target.value.trim()]);
      e.target.value = "";
      setCount(count + 1);
    }
  };

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  const setChips = () => {
    console.log("setChips");
    if (hashTags.length > count) {
      return (
        <Chip
          icon={
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
              <line x1="4" y1="9" x2="20" y2="9"></line>
              <line x1="4" y1="15" x2="20" y2="15"></line>
              <line x1="10" y1="3" x2="8" y2="21"></line>
              <line x1="16" y1="3" x2="14" y2="21"></line>
            </svg>
          }
          label="test"
          clickable
          color="primary"
          onDelete={handleDelete}
          variant="outlined"
        />
      );
    } else {
      return <Typography> No tags for now </Typography>;
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
                onChange={handleChange}
                variant="filled"
                required
              />
              <TextField
                className={classes.inputTheme}
                name="content"
                label="Content"
                onChange={handleChange}
                variant="filled"
                required
                multiline
                rows={8}
              />
              <TextField
                className={classes.inputTheme}
                name="tags"
                label="Tags (separate by space)"
                onChange={handleTagChange}
                variant="filled"
                required
              />
              <Container classNmae={classes.hashtag}>
                <Chip
                  icon={
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
                      class="feather feather-hash"
                    >
                      <line x1="4" y1="9" x2="20" y2="9"></line>
                      <line x1="4" y1="15" x2="20" y2="15"></line>
                      <line x1="10" y1="3" x2="8" y2="21"></line>
                      <line x1="16" y1="3" x2="14" y2="21"></line>
                    </svg>
                  }
                  label="hello"
                  clickable
                  color="primary"
                  onDelete={handleDelete}
                  variant="outlined"
                />
                {setChips}
              </Container>
            </ThemeProvider>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default Postform;
