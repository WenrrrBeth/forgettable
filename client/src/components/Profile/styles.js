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
  bgimg: {
    objectFit: "cover",
    width: "80%",
    height: "70vh",
    position: "relative",
  },
  bgimgOverlay: {
    marginTop: "-10px",
    width: "80%",
    height: "77vh",
    margin: 0,
    position: "absolute",
    objectFit: "fill",
  },

  [theme.breakpoints.down("sm")]: {
    bgimg: {
      width: "100%",
    },
  },
}));

export default theme;
