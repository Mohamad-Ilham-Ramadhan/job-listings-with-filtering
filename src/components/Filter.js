import React, { useState, useEffect } from "react";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import FilterTag from "./FilterTag";
import FilterSelect from "./FilterSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    padding: 20,
    paddingBottom: 4, // padding  - marginBottom of <FIlterTag  />
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  },
  gridFilterContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    order: 2,
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },
  gridFilterSelect: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    order: 1,
    [theme.breakpoints.up("md")]: {
      order: 2,
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
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container>
      <Grid
        className={styles.gridFilterContainer}
        item
        xs={12}
        md={10}
        style={tags.length <= 0 ? { display: "none" } : null}
      >
        <Paper
          className={clsx(styles.root, props.className)}
          style={tags.length <= 0 ? { padding: 30 } : null}
          elevation={10}
        >
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
            {tags.length > 0 && (
              <Grid className={styles.gridClear} item xs={2}>
                <Button className={styles.clear} onClick={handleClear}>
                  Clear
                </Button>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Grid>
      <Grid
        className={styles.gridFilterSelect}
        style={{
          marginTop: tags.length > 0 && downSm ? -100 : 0,
          // marginTop: tags.length > 0 && upMd ? 0 : null,
          paddingLeft: tags.length > 0 && upMd ? 16 : null,
        }}
        item
        xs={12}
        md={tags.length > 0 ? 2 : 12}
      >
        <FilterSelect show={tags.length > 0 ? false : true} />
      </Grid>
    </Grid>
  );
}
