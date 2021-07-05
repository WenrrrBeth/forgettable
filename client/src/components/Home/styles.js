import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles((theme) => ({
  homeContainer: {
    marginTop: "80px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "0px",
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
    minHeight: "100px",
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
    lineHeight: "17px"
  },
  saveIcon: {
    margin: "0px",
    padding: "0px",
    width: "20px",
    height: "20px",
    justifyContent: "flex-end"
  },
  saveLoadIcon: {
    margin: "0px",
    padding: "0px",
    width: "20px",
    height: "20px",
    justifyContent: "flex-end",
    color: "lightblue",
  },
  [theme.breakpoints.down('md')]:{
    detailContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      padding: "0px 0px 5px 5px",
      margin: "0px 0px 13px 0px",
      borderBottomRightRadius: "10px",
      borderBottomLeftRadius: "10px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    detailContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      padding: "0px 0px 5px 5px",
      margin: "0px 0px 10px 0px",
      borderBottomRightRadius: "10px",
      borderBottomLeftRadius: "10px",
    },
    gridPost: {
      columnCount: "3",
      columnGap: "5px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    detailContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      padding: "0px 0px 5px 5px",
      margin: "0px 0px 5px 0px",
      borderBottomRightRadius: "10px",
      borderBottomLeftRadius: "10px",
    },
    homeContainer: {
      marginTop: "80px",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      margin: "0px",
      padding: "0px",
    },
    gridPost: {
      columnCount: "2",
      columnGap: "5px",
      margin: "0px",
      padding: "0px"
    },
    title: {
      display: "flex",
      fontFamily: "'Playfair Display', serif",
      fontSize: "10px",
      padding: "0px",
      margin: "0px",
    },
  },

}));

export default theme;
