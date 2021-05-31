import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles({
  homeContainer: {
    marginTop: "30px",
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
  }
});

export default theme;
