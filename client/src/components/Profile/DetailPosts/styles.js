import { makeStyles } from "@material-ui/core";

const theme = makeStyles((theme) => ({
    personalContainer: {
        width: "65%",
    },
    [theme.breakpoints.down("md")]: {
        personalContainer: {
            width: "80%",
        },
    },
    [theme.breakpoints.down("sm")]: {
        personalContainer: {
            width: "100%",
        },
    }
}));

export default theme;
