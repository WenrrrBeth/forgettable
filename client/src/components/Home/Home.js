import {
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
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
  const [posts, setPosts] = useState([])

  const profile = useSelector((state) => state.profile);
  const postsSelector = useSelector((state) => state.forgettable);

  useEffect(() => {
    user?.result._id && dispatch(getProfile(user?.result._id));
    posts[0]?.title ? setLoading(false) : setLoading(true);
    if (posts && postsSelector[postsSelector.length-1]?._id!==posts[posts.length-1]?._id && posts.length < 300) {
      setPosts([...posts, ...postsSelector]);
    }
  }, [user?.result?._id, dispatch, postsSelector, posts]);

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

  const handleIntersect = (entries) => {
    if (entries[0].isIntersecting) {
      console.log("Intersecting")
      dispatch(getAllSharedPosts());
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    let opts = {
      root: null,
      rootMargins: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, opts);
    observer.observe(document.querySelector("footer"));
    dispatch(getAllSharedPosts());
  })


  return (
    <Container className={classes.homeContainer}>
      <div className={classes.header}>
        <Typography className={classes.homeTitle} variant="h5">
          Home
        </Typography>
      </div>
      <Container className={classes.gridPost}>
          {
            posts?.map((post, index) => (
              <div id={`card${index}`} key={index} className={classes.imageCol} >
                <img className={classes.image} src={post?.image?.data} alt={post?.title} id={post._id} idx={index} />
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
                        user?.result?._id
                          ? (post?.saves?.includes(user?.result?._id) || post?.saves?.includes(user?.result?.googleId))
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
      <footer>
        <p>2021 by Beth Ding</p>
      </footer>
    </Container>
  );
};

export default Home;
