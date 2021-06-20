import { makeStyles } from "@material-ui/core";

const styles = makeStyles({

    downloadIcon: {
        "&:hover": {
            fill: "red",
        },
        fill: "#040822",
        WebkitTransition: "all .4s ease-in-out",
        transition: "all .4s ease-in-out",
        cursor: "pointer",
        fontSize: "30px",
        margin: '10px'
    },
    innerContainer: {
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '5%',
    }
});

export default styles