import {
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/profile";
import { getAllSharedPosts, updatePost } from "../../actions/post";
import useStyles from "./styles";
import "../../fonts.css";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [loading, setLoading] = useState(false);

  const profile = useSelector((state) => state.profile);
  const posts = useSelector((state) => state.forgettable);

  useEffect(() => {
    user?.result._id && dispatch(getProfile(user?.result._id));
    dispatch(getAllSharedPosts());
    posts[0]?.title ? setLoading(false) : setLoading(true);
  }, [user?.result?._id, dispatch, posts]);

  const handleClick = (post) => {
    if (post.saves.includes(profile?._id)) {
      dispatch(
        updatePost(post._id, {
          ...post,
          saves: post.saves.filter((pid) => pid !== profile?._id),
        })
      );
    } else {
      dispatch(
        updatePost(post._id, { ...post, saves: [...post.saves, profile?._id] })
      );
    }
  };

  return (
    <Container className={classes.homeContainer}>
      <div className={classes.header}>
        <Typography className={classes.homeTitle} variant="h5">
          Home
        </Typography>
        {loading && (
          <div className={classes.loadSktCol}>
            <div className={classes.loadSktRow}>
              <Skeleton variant="rect" height={270} width={300} />
              <Skeleton variant="rect" height={270} width={300} />
              <Skeleton variant="rect" height={270} width={300} />
            </div>
            <div className={classes.loadSktRow}>
              <Skeleton variant="rect" height={270} width={300} />
              <Skeleton variant="rect" height={270} width={300} />
              <Skeleton variant="rect" height={270} width={300} />
            </div>
            <div className={classes.loadSktRow}>
              <Skeleton variant="rect" height={270} width={300} />
              <Skeleton variant="rect" height={270} width={300} />
              <Skeleton variant="rect" height={270} width={300} />
            </div>
          </div>
        )}
      </div>
      <Container className={classes.gridPost}>
          {
            posts.map((post, index) => (
              <div className={classes.imageCol}>
                <img className={classes.image} src={post?.image.data} alt={post?.title} />
                <Container className={classes.detailContainer}>
                  <Container className={classes.stretch}>
                    <Typography className={classes.title}>{post?.title}</Typography>
                  </Container>
                  <IconButton
                      className={classes.saveIcon}
                      onClick={() => handleClick(post)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={
                          user?.result._id
                            ? (post?.saves.includes(user?.result?._id) || post?.saves.includes(user?.result?.googleId))
                              ? "lightblue"
                              : "none"
                            : "white"
                        }
                        stroke={user?.result._id ? "lightblue" : "white"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </IconButton>
                  </Container>
              </div>
            ))
          }
      </Container>
    </Container>
  );
};

export default Home;
