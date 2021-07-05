import {
  Container,
  IconButton,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/profile";
import { getAllSharedPosts, updatePost, getSavedPost } from "../../actions/post";
import useStyles from "./styles";
import "../../fonts.css";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [loading, setLoading] = useState(false);
  const [save, setSave] = useState([]);
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const url = location.pathname


  const profile = useSelector((state) => state.profile);
  const postsSelector = useSelector((state) => state.forgettable);
  const savedPosts = useSelector((state) => state.saved);

  useEffect(() => {
    dispatch(getSavedPost(user?.result?._id ? user?.result?._id : user?.result?.googleId));
    user?.result._id && dispatch(getProfile(user?.result._id));
    if (posts && postsSelector[postsSelector.length-1]?._id!==posts[posts.length-1]?._id && posts.length < 300) {
      setPosts([...posts, ...postsSelector]);
      setLoading(false);
    }
    if (!save[0] && savedPosts[0]) {
      setSave([ ...save, ...savedPosts.map((sv) => sv._id)])
    }
  }, [user?.result?._id, user?.result?.googleId, save, dispatch, postsSelector, posts, savedPosts]);

  const handleIntersect = (entries) => {
    if (entries[0].isIntersecting) {
      console.log("intersect")
      dispatch(getAllSharedPosts());
      setLoading(true);
    }
  }

  useEffect(() => {
    let opts = {
      root: null,
      rootMargins: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, opts);
    observer.observe(document.querySelector("footer"));
    dispatch(getAllSharedPosts());
  }, [dispatch])

  const handleClick = (post) => {
    if (post.saves.includes(profile?._id)) {
      dispatch(
        updatePost(post._id, {
          ...post,
          saves: post.saves.filter((pid) => pid !== profile?._id),
        })
      );
      console.log(save)
    } else {
      dispatch(
        updatePost(post._id, { ...post, saves: [...post.saves, profile?._id] })
      );
    }

    if (save.includes(post._id)) {
      setSave(save.filter((sv) => sv!==post._id))
    } else {
      setSave([...save, post._id])
    }
  };

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
                  {
                    ( user?.result?._id || user?.result?.googleId ) &&
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
                          (save?.includes(post._id))
                            ? "lightblue"
                            : "none"
                        }
                        stroke="lightblue"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </IconButton>
                  }
                </Container>
              </div>
            ))
          }
      </Container>
      {
        loading && (
          <CircularProgress style={{color: "#3EA3B0"}} />
        )
      }
      <footer>
        <p style={{fontWeight: 600}}>© 2021 Beth Ding</p>
      </footer>
    </Container>
  );
};

export default Home;
