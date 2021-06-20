import React from "react";
import { Typography, Grid } from "@material-ui/core";

const About = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography variant="h3" color="secondary">
            about
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant="h4" color="primary">
            A
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
