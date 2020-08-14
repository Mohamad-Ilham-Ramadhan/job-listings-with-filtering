import React from "react";
import { makeStyles, darken } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";

import Tag from "./Tag";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiButton-root": {
      padding: "5px 8px",
    },
  },
  close: {
    minWidth: 33,
    padding: "0 !important",
    "&:hover": {
      backgroundColor: theme.palette.neutral.veryDarkGrayishCyan,
    },
    "&  svg": {
      color: "white",
    },
  },
}));
export default function FilterTag({ label, handleDelete, ...props }) {
  const styles = useStyles();
  return (
    <ButtonGroup
      className={styles.root}
      variant="contained"
      color="primary"
      disableElevation
      {...props}
    >
      <Tag label={label} />
      <Button
        className={styles.close}
        onClick={(e) => {
          handleDelete(label, e);
        }}
      >
        <ClearIcon />
      </Button>
    </ButtonGroup>
  );
}
