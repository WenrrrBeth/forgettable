import {
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../../actions/profile";
import { getAllSharedPosts, updatePost } from "../../../actions/post";
import useStyles from "./styles";
import "../../../fonts.css";

const Gridposts = ({ posts, profile }) => {
  const classes = useStyles();
  const colSize = [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1];

  return (
    <Container className={classes.homeContainer}>
      <GridList
        cellHeight={300}
        spacing={5}
        className={classes.gridList}
        cols={3}
      >
        {posts.map((post, index) => (
          <GridListTile
            key={post?._id}
            cols={
              index < 12
                ? colSize[index]
                : colSize[index - 12 * Math.round(index / 12)]
            }
          >
            <img src={post?.image.data} alt={post?.title} />
            <GridListTileBar
              className={classes.bar}
              title={post?.title}
              titlePosition="bottom"
            />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
};

export default Gridposts;
