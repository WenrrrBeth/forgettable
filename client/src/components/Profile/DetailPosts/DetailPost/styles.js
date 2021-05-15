import { makeStyles } from "@material-ui/core"

const theme = makeStyles({
    personalGrid: {
        marginTop: "20px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
    },
    date: {
        width: "300px",
        display: "flex",
        flexDirection: "column",
        textAlign: "right",
    },
    time: {
        fontFamily: "'Playfair Display', serif",
        fontSize: "25px",
        marginRight: "5px",
    },
    detailCard: {
        width: "100%",
        marginLeft: "20px",
        padding: "15px",
    },
    detailGrid: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontFamily: "'Abril Fatface', cursive",
        marginBottom: "10px",
    },
    detail: {
        fontFamily: "'Playfair Display', serif",
        lineHeight: "20px",
        marginBottom: "20px",
    },
    image: {
        height: "40vh",
        width: "100%",
        objectFit: "cover",
        borderRadius: "10px",
    },
    chips: {
        display: "block",
        alignSelf: "flex-start",
        marginTop: "10px",
        paddingLeft: "0px",

    },
    chip: {
        marginRight: "10px",
        marginTop: "5px",
    }
})

export default theme;
