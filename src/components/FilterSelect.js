import React, { useEffect } from "react";
import { makestyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import database from "../../database.json";
window.database = database;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: -112,
    marginBottom: 40,
  },
  button: {
    display: "block",
    width: "100%",
    padding: 14,
    [theme.breakpoints.up("md")]: {
      padding: 25,
    },
  },
}));

export default function FilterSelect({
  availableTags,
  selectedTags,
  handleSelectTag,
}) {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function handleSelect(value) {
    return function () {
      handleSelectTag(value);
    };
  }
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Paper className={styles.root} elevation={10}>
      <Button
        className={styles.button}
        onClick={handleClick}
        aria-describedby={id}
      >
        Filter By
      </Button>

      {open && (
        <Popover
          className={styles.select}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <List style={{ minWidth: 200 }}>
            {availableTags.map((item) => (
              <React.Fragment key={item.type}>
                <ListItem key={item.type}>
                  <ListItemText secondary={item.type} />
                </ListItem>
                {item.tags.map((tag) => (
                  <ListItem key={tag} button onClick={handleSelect(tag)}>
                    <ListItemIcon>
                      <Checkbox checked={selectedTags.indexOf(tag) !== -1} />
                    </ListItemIcon>
                    <ListItemText primary={tag} />
                  </ListItem>
                ))}
              </React.Fragment>
            ))}
          </List>
        </Popover>
      )}
    </Paper>
  );
}
