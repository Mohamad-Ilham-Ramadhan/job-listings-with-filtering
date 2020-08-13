import React from "react";
import clsx from "clsx";
import { makeStyles, darken } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.neutral.lightGrayishCyanFt,
    borderRight: "none !important",
    minWidth: 0,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      // backgroundColor: darken(theme.palette.neutral.lightGrayishCyanFt, 0.1),
      "& span": {
        color: "white",
      },
    },
    "& span": {
      fontSize: ".8rem",
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  },
}));
export default function Tag({ label, ...props }) {
  const styles = useStyles();
  return (
    <Button className={clsx(styles.root, props.className)}>{label}</Button>
  );
}
