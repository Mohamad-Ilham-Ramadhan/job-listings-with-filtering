import React from "react";
import { makeStyles, darken } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
    "& .MuiButton-root": {
      padding: "5px 8px",
    },
  },
  tag: {
    backgroundColor: theme.palette.neutral.lightGrayishCyanFt,
    borderRight: "none !important",
    "&:hover": {
      backgroundColor: darken(theme.palette.neutral.lightGrayishCyanFt, 0.1),
    },
    "& span": {
      fontSize: ".8rem",
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  },

  close: {
    minWidth: 33,
    padding: "0 !important",
    "&  svg": {
      color: "white",
    },
  },
}));
export default function FilterTag({ text }) {
  const styles = useStyles();
  return (
    <ButtonGroup
      className={styles.root}
      variant="contained"
      color="primary"
      disableElevation
    >
      <Button className={styles.tag}>{text}</Button>
      <Button className={styles.close}>
        <ClearIcon />
      </Button>
    </ButtonGroup>
  );
}
