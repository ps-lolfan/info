import React from "react";
import { Grid } from "@material-ui/core";

import LeftMain from "../LeftMain/index";
import RightMain from "../RightMain/index";
import styles from "./styles";

const Landing = () => {
  const classes = styles();
  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} className={classes.sub}>
        <Grid container>
          <Grid item xs={3}>
            <LeftMain />
          </Grid>
          <Grid item xs={9}>
            <RightMain />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
