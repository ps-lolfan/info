import React from "react";
import { Grid, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
import styles from "./styles";

const LeftMain = () => {
  const classes = styles();
  return (
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
          <Typography variant="h5">PRAVEEN SINNUR</Typography>
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
          <Grid item>
            <Link to="/">
              <Typography variant="h6">About</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/work">
              <Typography variant="h6">My Work</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/experience">
              <Typography variant="h6">Experience</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/contact">
              <Typography variant="h6">Contact</Typography>
            </Link>
          </Grid>
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
    </Grid>
  );
};

export default LeftMain;
