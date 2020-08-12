import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Tag from "./FilterTag";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    transform: "translateY(-38px)",
    // boxShadow: boxShadow,
  },
  gridClear: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  clear: {
    fontSize: "0.85rem",
    fontWeight: "bold",
    color: theme.palette.neutral.darkGrayishCyan,
  },
}));

export default function Filter() {
  const styles = useStyles();
  return (
    <Paper className={styles.root} elevation={10}>
      <Grid container>
        <Grid item xs={9}>
          <Tag text="Frontend" />
          <Tag text="CSS" />
          <Tag text="JavaScript" />
        </Grid>
        <Grid className={styles.gridClear} item xs={3}>
          <Button className={styles.clear}>Clear</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
