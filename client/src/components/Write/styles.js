import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles({
    postFormContainer: {
        marginTop: "60px",
    },
    postFormGrid: {
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
        width: "100%"
    },
    hashtag: {
        width: "100%",
        paddingLeft: "0px",
        paddingRight: "0px",
    },
    chip: {
        marginRight: "10px",
        marginBottom: "10px",
    },
    fgtbimg: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "20px",
        alignSelf: "self-start",
    },
    fgtbimgButton: {
        background: "#DBDBDB",
        borderRadius: 20,
    },
    label: {
        cursor: "pointer",
    },
    fileUploadInput: {
        display: "none",
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
