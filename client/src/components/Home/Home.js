import {
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Typography,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";
import { Skeleton } from '@material-ui/lab';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../actions/profile";
import { getAllSharedPosts, updatePost } from "../../actions/post";
import useStyles from "./styles";
import "../../fonts.css";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [loading, setLoading] = useState(false);
  const colSize = [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1]

  const profile = useSelector((state) => state.profile)
  const posts = useSelector((state) => state.forgettable);

  useEffect(() => {
    if(user?.result?._id) {
        dispatch(getProfile(user?.result._id));
    }
    dispatch(getAllSharedPosts());
    posts[0]?.title ? setLoading(false) : setLoading(true);
  }, [user?.result?._id, dispatch, posts]);

  const handleClick = (post) => {
    if (post.saves.includes(profile?._id)) {
      dispatch(
        updatePost(post._id, { ...post, saves: post.saves.filter((pid) => (pid !== profile?._id))})
      );
    } else {
      dispatch(
        updatePost(post._id, {...post, saves: [...post.saves, profile?._id]})
      );
    }
  }

  console.log(posts[0]?.title);

  return (
    <Container className={classes.homeContainer}>
      <div className={classes.header} >
        <Typography className={classes.homeTitle} variant="h5">Home</Typography>
        {loading && (
          <div className={classes.loadSktCol}>
            <div className={classes.loadSktRow}>
              <Skeleton variant="rect" height={270} width={300}/>
              <Skeleton variant="rect" height={270} width={300}/>
              <Skeleton variant="rect" height={270} width={300}/>
            </div>
            <div className={classes.loadSktRow}>
              <Skeleton variant="rect" height={270} width={300}/>
              <Skeleton variant="rect" height={270} width={300}/>
              <Skeleton variant="rect" height={270} width={300}/>
            </div>
            <div className={classes.loadSktRow}>
              <Skeleton variant="rect" height={270} width={300}/>
              <Skeleton variant="rect" height={270} width={300}/>
              <Skeleton variant="rect" height={270} width={300}/>
            </div>
          </div>
        )}
      </div>
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
                    <IconButton
                      className={classes.saveIcon}
                      onClick={() => handleClick(post)}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={user?.result._id ? (post?.saves.includes(user?.result?._id) ? "white" : "none") : "gray"}
                        stroke={user?.result._id ? "white" : "gray"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    </IconButton>
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
