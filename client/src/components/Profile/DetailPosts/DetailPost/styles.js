import { makeStyles } from "@material-ui/core";

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
    firstLine: {
        display: "flex",
        flexDirection: "row",
    },
    title: {
        fontFamily: "'Abril Fatface', cursive",
        marginBottom: "10px",
    },
    saveCount: {
        width: "75px",
        display: "flex",
        alignItems: "center",
        alignSelf: "flex-start",
        marginRight: "0px",
        flexDirection: "row",
    },
    countNum: {
        fontFamily: "'Playfair Display', serif",
        fontWeight: "300",
        color: "gray",
        fontSize: "20px",
    },
    saveIcon: {
        width: "30px",
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
