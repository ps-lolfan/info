import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "10px",
    alignItems: "center",
  },
  stylishDiv: {
    width: "50vh",
  },
}));

const name = "<praveen>";
function Section() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <h1>hi</h1>
    </div>
  );
}

export default Section;
