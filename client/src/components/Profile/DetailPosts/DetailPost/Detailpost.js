import { Chip, Container, Grid, Typography, Card } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import bgimgBorder from "../../../../designs/bgimg_BorderDesign6.png";
import "../../../../fonts.css";

const Detailpost = ({ post, shared }) => {
  const classes = useStyles();
  const creationDate = new Date(post.createdAt);
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
          <div className={classes.firstLine}>
            <Typography className={classes.title} variant="h5">
              {post.title}
            </Typography>
            {
              shared && (
                <Container className={classes.saveCount}>
                  <Typography className={classes.countNum}>{post.saves.length}</Typography>
                  <svg
                    className={classes.saveIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="gray"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </Container>
              )
            }
          </div>
          <Typography className={classes.detail} variant="subtitle1">
            {post.content}
          </Typography>
          <div className={classes.imageContainer} >
            <img
              className={classes.imageOverlay}
              src={bgimgBorder}
              alt=""
            />
            <img
              className={classes.image}
              src={post.image.data}
              alt=""
            />
          </div>
          <Container className={classes.chips}>
            {post.tags.map((tag, idx) => (
              <Chip
                className={classes.chip}
                key={idx}
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
