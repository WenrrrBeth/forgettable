import { Chip, Container, Grid, Typography, Card } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import "../../../../fonts.css";

const Detailpost = (post) => {
  const classes = useStyles();
  const pt = post.post;
  const creationDate = new Date(pt.createdAt);
  const date = creationDate.toDateString();
  const time = creationDate.toLocaleTimeString();

  return (
    <Grid container className={classes.personalGrid}>
      <Grid container className={classes.date}>
        <Typography variant="subtitle1" className={classes.time}>
          {date}
        </Typography>
        <Typography variant="subtitle1" className={classes.time}>
          {time}
        </Typography>
      </Grid>
      <Card className={classes.detailCard} elevation={2}>
        <Grid container className={classes.detailGrid}>
          <Typography className={classes.title} variant="h5">
            {pt.title}
          </Typography>
          <Typography className={classes.detail} variant="subtitle1">
            {pt.content}
          </Typography>
          <img
            className={classes.image}
            src={post.post.image.data}
            alt="post image"
          />
          <Container className={classes.chips}>
            {pt.tags.map((tag) => (
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
                color="primary"
                variant="outlined"
              />
            ))}
          </Container>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Detailpost;
