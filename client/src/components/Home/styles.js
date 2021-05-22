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
  loadSktRow: {
    display: "flex",
    flexDirection: "row",
    wrap: "wrap",
    gap: "10px",
    marginBottom: "10px",
  },
  loadSktCol: {
    diplay: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    width: "100%"
  },
  homeTitle: {
    fontFamily:"'Abril Fatface', cursive",
    marginBottom: "25px",
    alignSelf: "center",
  },
  bar: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "15px",
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
    width: "43px",
  }
});

export default theme;
