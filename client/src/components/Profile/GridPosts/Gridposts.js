import {
  Container,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import "../../../fonts.css";

const Gridposts = ({ posts, profile }) => {
  const classes = useStyles();

  return (
    <Container className={classes.homeContainer}>
      <Container className={classes.gridPost}>
          {
            posts.map((post, index) => (
              <div key={index} className={classes.imageCol}>
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
