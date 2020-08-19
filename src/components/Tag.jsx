import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles, darken } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import addTag from "../actions/addTag";

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
function Tag({ label, handleClick, addTag, ...props }) {
  // console.log(addTag);
  const styles = useStyles();
  function onClick(label) {
    return function () {
      addTag(label);
    };
  }
  return (
    <Button
      className={clsx(styles.root, props.className)}
      onClick={onClick(label)}
    >
      {label}
    </Button>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTag }, dispatch);
}

export default connect(null, mapDispatchToProps)(Tag);
