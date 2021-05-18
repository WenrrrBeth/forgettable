import { Chip, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import Detailpost from "./DetailPost/Detailpost";

const Detailposts = ({ posts, shared }) => {
  const classes = useStyles();

  return (
    <Container className={classes.personalContainer}>
      {posts.map((post) => (
        <Detailpost post={post} shared={shared}/>
      ))}
    </Container>
  );
};

export default Detailposts;
