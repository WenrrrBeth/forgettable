import { makeStyles } from "@material-ui/core";

const theme = makeStyles({
    personalContainer: {
        width: "60%",
    },
    personalGrid: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },
    time: {
        fontFamily: "'Playfair Display', serif",
    },
    detailGrid: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontFamily: "'Abril Fatface', cursive",
    },
    detail: {
        fontFamily: "'Playfair Display', serif",
    },
    image: {
        objectFit: "cover",
    },
    chip: {
        
    }

})

export default theme;
