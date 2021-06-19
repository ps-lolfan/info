import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

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

const Landing = () => {
  const classes = styles();
  return (
    <Grid conatiner className={classes.main}>
      <Grid item className={classes.sub}>
        <Grid container>
          <Grid
            container
            direction="column"
            item
            xs={3}
            className={classes.leftContainer}
          >
            <Grid item className={classes.profilePic} />
            <Grid item>
              <Typography variant="h6">PRAVEEN SINNUR</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Software Engineer</Typography>
            </Grid>
            <Grid
              container
              direction="column"
              spacing="4"
              className={classes.navContainer}
            >
              <Grid item>iamge</Grid>
              <Grid item>iamge</Grid>
              <Grid item>iamge</Grid>
              <Grid item>iamge</Grid>
            </Grid>
            <Grid container spacing={4} className={classes.socialContainer}>
              <Grid item>
                <a
                  href="https://github.com/ps-lolfan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon className={classes.icon} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://linkedin.com/in/praveen-sinnur"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon className={classes.icon} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.instagram.com/praveen_sinnur/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon className={classes.icon} />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={9}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
