import { Typography } from "@material-ui/core";
import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "./styles";

const Postform = () => {
  const classes = useStyles();
  return <Container className={classes.writeContainer}>Add a Forgetable</Container>;
};

export default Postform;
