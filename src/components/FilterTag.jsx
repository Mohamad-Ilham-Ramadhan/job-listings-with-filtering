import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { makeStyles, darken } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";

import Tag from "./Tag";

import deleteTag from "../actions/deleteTag";

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
function FilterTag({
  label,
  // handleDelete,
  deleteTag,
  handleClickFilterTag,
  ...props
}) {
  const styles = useStyles();

  function onCloseClick(label) {
    return function () {
      deleteTag(label);
    };
  }
  return (
    <ButtonGroup
      className={styles.root}
      variant="contained"
      color="primary"
      disableElevation
      {...props}
    >
      <Tag label={label} handleClick={handleClickFilterTag} />
      <Button className={styles.close} onClick={onCloseClick(label)}>
        <ClearIcon />
      </Button>
    </ButtonGroup>
  );
}

function mapDispatch(dispatch) {
  return bindActionCreators({ deleteTag }, dispatch);
}

export default connect(null, mapDispatch)(FilterTag);
