import { makeStyles } from "@material-ui/core/styles";
import bgimgBorder from "../../designs/bgimg_BorderDesign.PNG";

const theme = makeStyles((theme) => ({
  profileContainer: {
    marginTop: "60px",
    alignItems: "center",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontFamily: "'Abril Fatface', cursive",
    zIndex: "1000",
  },
  background: {
      position:"relative",
      top: 0,
      left: 0,
      width: "80%",
      height: "70vh",
  },
  bgimgOverlay: {
    position: "relative",
    objectFit: "fill",
    marginTop: "-50px",
    marginLeft: "-2%",
    width: "107%",
    height: "80vh",
    zIndex: 100,
  },
  bgimg: {
    top: 0,
    left: 0,
    objectFit: "cover",
    position: "absolute",
    width: "100%",
    height: "70vh",
  },
  nameCard: {
    display: "flex",
    flexDirection: "column",
    zIndex: 1100,
    maxWidth: "350px",
    marginTop: "-190px",
    borderRadius: "50px",
    alignSelf: "center",
  },
  profilePic: {
    width: "90px",
    height: "90px",
    marginLeft: "20px",
    marginTop: "20px",
    borderRadius: "50%",
  },
  userTop: {
    display: "flex",
    flexDirection: "row",
  },
  userRight: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
  },
  name: {
    fontFamily: "'Playfair Display', serif",
    marginTop: "20px",
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "6px",
  },
  mind: {
    fontFamily: "'Playfair Display', serif",
    lineHeight: "20px",
    margin: "0px 15px",
    fontSize: "16px",
  },
  subNav: {
    marginTop: "70px",
  },
  subComponent: {

  },

  [theme.breakpoints.down("sm")]: {
    bgimg: {
      width: "100%",
    },
  },
}));

export default theme;
