import { makeStyles } from "@material-ui/core";
const Profile = "/images/mypic.jpg";

const styles = makeStyles({

    leftContainer: {
        backgroundColor: "#b5bcf5",
        position: "absolute",
        bottom: "0px",
        top: "0px",
        borderTopLeftRadius: "13px",
        borderBottomLeftRadius: "13px",
        display: "flex",
        alignItems: "center",
    },

    profilePic: {
        backgroundImage: `url(${Profile})`,
        height: "120px",
        width: "120px",
        borderRadius: "60px",
        backgroundSize: "cover",
        marginTop: "25px",
        marginBottom: "10px",
    },
    navContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 20,
    },
    socialContainer: {
        marginTop: "40px",
        justifyContent: "center",
        alignItems: "center",
    },

    icon: {
        "&:hover": {
            fill: "red",
        },
        fill: "#040822",
        WebkitTransition: "all .4s ease-in-out",
        transition: "all .4s ease-in-out",
        cursor: "pointer",
        fontSize: "30px",
    },
});

export default styles