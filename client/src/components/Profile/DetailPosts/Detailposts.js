import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Detailpost from "./DetailPost/Detailpost";

const Detailposts = ({ posts, shared }) => {
  const classes = useStyles();

  return (
    <Container className={classes.personalContainer}>
      {posts.map((post, idx) => (
        <Detailpost key={idx} post={post} shared={shared}/>
      ))}
    </Container>
  );
};

export default Detailposts;
