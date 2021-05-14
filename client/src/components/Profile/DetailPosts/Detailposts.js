import { Chip, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Detailposts = (posts) => {
  console.log(posts);
  const classes = useStyles();

  return (
    <Container className={classes.personalContainer}>
      <Grid container className={classes.personalGrid}>
        <Typography variant="subtitle1" className={classes.time}>
          {posts.createdAt}
        </Typography>
        <Grid container className={classes.detailGrid}>
          {posts.map((post) => {
            return (
              <>
                <Typography className={classes.title} variant="h6">
                  {post.title}
                </Typography>
                <Typography
                  className={classes.detail}
                  variant="subtitle1"
                >
                    {post.content}
                </Typography>
                <img className={classes.image} src={post.image.data} alt="post image" />
                {
                    posts.tags.map((tag) => (
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
                    ))
                }
              </>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detailposts;
