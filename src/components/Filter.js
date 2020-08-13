import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import FilterTag from "./FilterTag";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    paddingBottom: 4, // padding  - marginBottom of <FIlterTag  />
    transform: "translateY(-38px)",
    marginBottom: theme.spacing(2),
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
    marginBottom: theme.spacing(2), // equal to <FilterTag />
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
  },
  filterTag: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "&:last-child": {
      marginRight: 0,
    },
  },
}));

export default function Filter() {
  const styles = useStyles();
  return (
    <Paper className={styles.root} elevation={10}>
      <Grid container>
        <Grid item xs={10}>
          <FilterTag className={styles.filterTag} label="Frontend" />
          <FilterTag className={styles.filterTag} label="CSS" />
          <FilterTag className={styles.filterTag} label="JavaScript" />
        </Grid>
        <Grid className={styles.gridClear} item xs={2}>
          <Button className={styles.clear}>Clear</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
