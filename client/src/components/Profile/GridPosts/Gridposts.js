import {
  Container,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import "../../../fonts.css";

const Gridposts = ({ posts, profile }) => {
  const classes = useStyles();
  const colSize = [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1];

  return (
    <Container className={classes.homeContainer}>
      <Container className={classes.gridPost}>
          {
            posts.map((post, index) => (
              <div className={classes.imageCol}>
                <img className={classes.image} src={post?.image.data} alt={post?.title} />
                <Container className={classes.detailContainer}>
                  <Container className={classes.stretch}>
                    <Typography className={classes.title}>{post?.title}</Typography>
                  </Container>
                  </Container>
              </div>
            ))
          }
      </Container>
    </Container>
  );
};

export default Gridposts;
