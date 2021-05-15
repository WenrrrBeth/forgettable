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
  import { getProfile } from "../../actions/profile";
  import { getAllSharedPosts } from "../../actions/post";
  import useStyles from "./styles";
  import "../../fonts.css";
  
  const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    const [click, setClick] = useState(false);
    const colSize = [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1]
  
    useEffect(() => {
      if(user?.result._id) {
          dispatch(getProfile(user?.result._id));
      }
      dispatch(getAllSharedPosts());
    }, [user?.result?._id, dispatch]);
  
    const posts = useSelector((state) => state.forgettable);
  
    return (
      <Container className={classes.homeContainer}>
        <Typography className={classes.homeTitle} variant="h5">Home</Typography>
        <GridList cellHeight={300} spacing={5} className={classes.gridList} cols={3}>
          {posts.map((post, index) => (
            <GridListTile key={post?._id} cols={index<12 ? colSize[index] : colSize[(index-12*(Math.round(index/12)))]}>
              <img src={post?.image.data} alt={post?.title} />
              {
                user?.result?._id ? (
                  <GridListTileBar
                    className={classes.bar}
                    title={post?.title}
                    titlePosition="bottom"
                    actionIcon={
                        <div className={classes.right}>
                          <Typography className={classes.saveNum} varient="body">{post?.saves}</Typography>
                          <IconButton
                            className={classes.saveIcon}
                            onClick={() => setClick(!click)}
                          >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill={user?.result._id ? ("none") : "gray"}
                              stroke={user?.result._id ? "white" : "gray"}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                          >
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                          </svg>
                          </IconButton>
                      </div>
                    }
                    actionPosition="right"
                  />
                ) : (
                  <GridListTileBar
                    className={classes.bar}
                    title={post?.title}
                    titlePosition="bottom"
                  />
                )
              }
            </GridListTile>
          ))}
        </GridList>
      </Container>
    );
  };
  
  export default Home;
  