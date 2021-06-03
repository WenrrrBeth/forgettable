import { makeStyles } from "@material-ui/core";

const theme = makeStyles((theme) => ({
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
    imageContainer: {
        position: "relative",
        top: 0,
        left: 0,
    },
    imageOverlay: {
        position: "relative",
        objectFit: "fill",
        height: "35vh",
        width: "100%",
        zIndex: 100,
    },
    image: {
        height: "35vh",
        width: "99%",
        top: 0,
        left: 1,
        objectFit: "cover",
        position: "absolute",
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
    },
    [theme.breakpoints.down("sm")]: {
        personalGrid: {
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            padding: "0px",
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
    },
    [theme.breakpoints.down("xs")]: {
        personalGrid: {
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            padding: "0px",
        },
        date: {
            display: "none"
        },
        time: {
            display: "none"
        },
        detailCard: {
            width: "100%",
            marginLeft: "0px",
            padding: "15px",
        },
        title: {
            fontFamily: "'Abril Fatface', cursive",
            marginBottom: "10px",
            fontSize: "18px"
        },
        detail: {
            fontFamily: "'Playfair Display', serif",
            lineHeight: "17px",
            marginBottom: "20px",
            fontSize: "14px",
        },
        
    }
}));

export default theme;
