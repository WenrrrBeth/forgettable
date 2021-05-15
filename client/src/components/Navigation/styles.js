import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles({
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
//   home: {
//     cursor: "pointer",
//   },
//   write: {
//     cursor: "pointer",
//   },
//   profile: {
//     cursor: "pointer",
//   },
});

export default theme;
