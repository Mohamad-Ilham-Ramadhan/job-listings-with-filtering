import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import FilterTag from "./FilterTag";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    paddingBottom: 4, // padding  - marginBottom of <FIlterTag  />
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  },
  gridClear: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  clear: {
    padding: 0,
    minWidth: 0,
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

export default function Filter({
  tags,
  handleDelete,
  handleClear,
  handleClickFilterTag,
  ...props
}) {
  const styles = useStyles();

  if (tags.length > 0) {
    return (
      <Paper className={clsx(styles.root, props.className)} elevation={10}>
        <Grid container>
          <Grid item xs={10}>
            {tags.map((tag) => (
              <FilterTag
                key={tag}
                className={styles.filterTag}
                label={tag}
                handleDelete={handleDelete}
                handleClickFilterTag={handleClickFilterTag}
              />
            ))}
          </Grid>
          <Grid className={styles.gridClear} item xs={2}>
            <Button className={styles.clear} onClick={handleClear}>
              Clear
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  } else {
    return null;
  }
}
