import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    zIndex: 11000,
  },
  brandName: {
    marginLeft: "20px",
    fontFamily: "'Abril Fatface', cursive",
    color: "black",
    textDecoration: "none",
    alignSelf: "center",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  [theme.breakpoints.down("xs")]: {
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
    },
    icon: {
      padding: "7px",
    }
  }
}));

export default theme;
