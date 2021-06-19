import { makeStyles } from "@material-ui/core";
const Image = "/images/bg.png";

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
    }

});

export default styles