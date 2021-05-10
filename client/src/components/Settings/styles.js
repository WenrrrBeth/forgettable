import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles({
    settingsContainer: {
        marginTop: "60px",
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
    },
    button: {
        background: "#DBDBDB",
        borderRadius: 20,
        marginLeft: "15px",
    }
})

export default theme;
