import { Chip, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import Detailpost from "./DetailPost/Detailpost";

const Detailposts = (posts) => {
  const classes = useStyles();

  return (
    <Container className={classes.personalContainer}>
      {posts.posts.map((post) => (
        <Detailpost post={post} />
      ))}
    </Container>
  );
};

export default Detailposts;
