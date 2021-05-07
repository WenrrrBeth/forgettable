import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles((theme) => ({
  authContainer: {
    marginTop: "100px",
    alignItems: "center",
  },
  auth: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontFamily: "'Abril Fatface', cursive",
  },
  signupOpt: {
    marginTop: "5px",
    display: "flex",
    flexDirection: "row",
    borderColor: "#A9A9A9",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline 1px #B9B9B9",
    }
  },
  signuplead: {
    fontFamily: "'Arya', sans-serif",
    color: "#A9A9A9",
  },
  spanColor: {
    fontFamily: "'Arya', sans-serif",
    color: "#3EA3B0",
    fontWeight: "600",
  },
  form: {
    width: "60%",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
  },
  inputTheme: {
    marginBottom: "20px",
    width: "100%",
  },
  signinButton: {
    marginTop: "20px",
    background: "#DBDBDB",
    borderRadius: 21,
    border: 0,
    color: "black",
    height: 50,
    width: "70%",
    fontFamily: "'Playfair Display', serif",
    fontSize: 18,
    alignSelf: "center",
  },
  google: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "20px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline 1px #B9B9B9",
    }
  },
  signwgoogle: {
    marginLeft: "5px",
    fontFamily: "'Arya', sans-serif",
    color: "#A9A9A9",
  }
}));

export default theme;
