import React from "react";
import { Route, Switch } from "react-router-dom";
import GetAppIcon from "@material-ui/icons/GetApp";

import Tooltip from "@material-ui/core/Tooltip";

import { Grid } from "@material-ui/core";

import About from "../About";
import Work from "../Work";
import Experience from "../Experience";
import Contact from "../Contact";

import styles from "./styles";

const resume = "/images/PRAVEEN_B_SINNUR _RESUME.pdf";

const RightMain = () => {
  const classes = styles();

  return (
    <>
      <Grid container direction="row-reverse">
        <Grid item>
          <Tooltip title="Download Resume">
            <a href={resume} download>
              <GetAppIcon className={classes.downloadIcon} />
            </a>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item className={classes.innerContainer}>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/work" exact component={Work} />
            <Route path="/experience" exact component={Experience} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Grid>
      </Grid>
    </>
  );
};

export default RightMain;
