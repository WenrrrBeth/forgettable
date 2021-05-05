import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles({
  appBar: {
    display: "flex",
    flexDirection: "row",
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
  home: {
    marginRight: "15px",
    cursor: "pointer",
  },
  write: {
    marginRight: "15px",
    cursor: "pointer",
  },
  profile: {
    marginRight: "15px",
    cursor: "pointer",
  },
});

export default theme;
