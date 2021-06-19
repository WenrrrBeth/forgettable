import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles((theme) => ({
  settingsContainer: {
    marginTop: "60px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  err:{
    width: "fit-content",
    justifyContent: "center",
    alignSelf: "center",
  },
  settingsGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "'Abril Fatface', cursive",
  },
  form: {
    width: "60%",
  },
  formGrid: {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
  },
  inputTheme: {
    marginBottom: "20px",
    width: "100%",
  },
  imgUpload: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10px",
    alignSelf: "self-start",
  },
  fileUploadInput: {
    display: "none",
  },
  imgUploadButton: {
    background: "#DBDBDB",
    borderRadius: 20,
    fontFamily: "'Playfair Display', serif",
  },
  label: {
    cursor: "pointer",
  },
  fileName: {
    marginLeft: "10px",
  },
  optButtons: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
    marginBottom: "20px",
  },
  button: {
    background: "#DBDBDB",
    borderRadius: 20,
    marginLeft: "15px",
    fontFamily: "'Playfair Display', serif",
  },
  [theme.breakpoints.down('sm')] : {
    form: {
      width: "80%",
    },
  },
  [theme.breakpoints.down('xs')] : {
    settingsContainer: {
      marginTop: "60px",
      padding: "0px",
    },
    form: {
      width: "100%",
    },
    formGrid: {
      display: "flex",
      flexDirection: "column",
      marginTop: "30px",
    },
    imgUploadButton: {
      background: "#DBDBDB",
      borderRadius: 20,
      fontFamily: "'Playfair Display', serif",
      fontSize: "13px",
    },
    fileName: {
      marginLeft: "10px",
      fontSize: "17px",
    },
  }

}));

export default theme;
