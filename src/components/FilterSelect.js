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

function filterTagsByType(data, type) {
  function removeDuplicate(arr) {
    return arr.reduce((acc, item) => {
      const newItem = item.toUpperCase();
      if (acc.map((el) => el.toUpperCase()).includes(newItem)) {
        return [...acc];
      } else {
        return [...acc, item];
      }
    }, []);
  }
  if (Array.isArray(data[0][type])) {
    return removeDuplicate(
      data.reduce((acc, job) => [...acc, ...job[type]], [])
    );
  } else {
    return removeDuplicate(data.map((item) => item[type]));
  }
}

const roles = filterTagsByType(database, "role");
const levels = filterTagsByType(database, "level");
const languages = filterTagsByType(database, "languages");
const tools = filterTagsByType(database, "level");

const availableTags = [
  { type: "role", tags: roles },
  { type: "level", tags: levels },
  { type: "languages", tags: languages },
  { type: "tools", tags: tools },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: -112,
    marginBottom: 40,
  },
  button: {
    display: "block",
    width: "100%",
    padding: 25,
  },
}));

export default function FilterSelect({ show }) {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tags, setTags] = React.useState([
    "JavaScript",
    "Frontend",
    "NodeJs",
    "CSS",
  ]);
  const [checked, setChecked] = React.useState(["CSS"]);

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function handleSelect(value) {
    return function () {
      setChecked((checked) => {
        if (checked.indexOf(value) !== -1) {
          return checked.filter((item) => item !== value);
        }
        return [...checked, value];
      });
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
              <>
                <ListItem key={item.type}>
                  <ListItemText secondary={item.type} />
                </ListItem>
                {item.tags.map((tag) => (
                  <ListItem key={tag} button onClick={handleSelect(tag)}>
                    <ListItemIcon>
                      <Checkbox checked={checked.indexOf(tag) !== -1} />
                    </ListItemIcon>
                    <ListItemText primary={tag} />
                  </ListItem>
                ))}
              </>
            ))}
          </List>
        </Popover>
      )}
    </Paper>
  );
}
