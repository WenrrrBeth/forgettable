import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles({
  homeContainer: {
    marginTop: "80px",
    width: "100%",
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
    alignSelf: "center",
  },
  loadSktCol: {
    diplay: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  gridPost: {
    columnCount: "4",
    columnGap: "5px",
  },
  imageCol: {
    display: "inline-block",
    width: "100%",
  },
  image: {
    display: "block",
    width: "100%",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
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

  detailContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: "0px 0px 5px 5px",
    margin: "0px 0px 20px 0px",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  stretch: {
    display: "flex",
    alignItems: "stretch",
    padding: "0px 0px 0px 3px",
    margin: "0px",
  },
  title: {
    display: "flex",
    fontFamily: "'Playfair Display', serif",
    fontSize: "15px",
    padding: "0px",
    margin: "0px",
  },
  saveIcon: {
    margin: "0px",
    padding: "0px",
    width: "20px",
    height: "20px",
    justifyContent: "flex-end"
  }
});

export default theme;
