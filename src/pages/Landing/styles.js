import { makeStyles } from "@material-ui/core";
const Image = "/images/bg.png";
const Profile = "/images/mypic.jpg";

const styles = makeStyles({
    main: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
    },
    sub: {
        backgroundColor: "#f7f5ed40",
        position: "absolute",
        left: "150px",
        bottom: "50px",
        right: "150px",
        top: "50px",
        borderRadius: "13px",
    },
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
        marginTop: "100px",
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