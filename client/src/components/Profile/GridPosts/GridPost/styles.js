import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles({
  homeContainer: {
    marginTop: "80px",
    width: "70%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  homeTitle: {
    fontFamily:"'Abril Fatface', cursive",
    marginBottom: "25px",
  },
  bar: {
    fontFamily: "'Playfair Display', serif",
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  saveNum: {
    color: "gray",
    marginRight: "-10px",
  },
  saveIcon: {
    marginRight: "0px",
  }
});

export default theme;
