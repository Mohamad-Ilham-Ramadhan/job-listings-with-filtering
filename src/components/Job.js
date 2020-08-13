import React from "react";
import clsx from "clsx";
import { v4 as uuid } from "uuid";
import { makeStyles, lighten } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import avaPhotosnap from "../images/photosnap.svg";
import Tag from "./Tag";

const borderThick = 5;
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: 23,
    paddingBottom: 7, // padding - <Tag /> margin-bottom
    paddingLeft: 23,
  },
  avatarSmall: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    position: "absolute",
    top: -theme.spacing(3),
  },
  flex: {
    display: "flex",
    height: 100,
    background: "skyblue",
  },
  breadcrumbs: {
    "& p": {
      fontWeight: 500,
      color: lighten(theme.palette.neutral.darkGrayishCyan, 0.2),
      fontSize: "0.78rem",
    },
  },
  tag: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  position: {
    display: "block",
    marginBottom: 12,
    color: theme.palette.neutral.veryDarkGrayishCyan,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
  },
  company: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "& .MuiTypography-root": {
      marginRight: theme.spacing(2),
    },
    "& .MuiChip-root": {
      marginRight: theme.spacing(1),
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));
const useStylesBorderLeft = makeStyles((theme) => ({
  root: {
    borderLeft: `${borderThick}px solid ${theme.palette.primary.main}`,
    paddingLeft: 23 - borderThick,
  },
}));
const useStylesDot = makeStyles((theme) => ({
  root: {
    height: 4,
    width: 4,
    backgroundColor: lighten(theme.palette.neutral.darkGrayishCyan, 0.2),
    borderRadius: "100%",
  },
}));

function Dot() {
  const styles = useStylesDot();
  return <div className={styles.root}></div>;
}
export default function Job({
  logo,
  isNew,
  featured,
  company,
  position,
  postedAt,
  location,
  contract,
  tags,
  ...props
}) {
  const styles = useStyles();
  let stylesBorderLeft = {};
  if (featured) {
    stylesBorderLeft = useStylesBorderLeft();
  }
  return (
    <Paper
      className={clsx(styles.root, stylesBorderLeft.root, props.className)}
      elevation={10}
    >
      <Grid>
        <Grid item xs={12}>
          <Avatar className={styles.avatarSmall} src={logo}></Avatar>
          <Box className={styles.company}>
            <Typography color="primary" variant="body1" component="span">
              {company}
            </Typography>
            {isNew ? <Chip label="NEW!" color="primary" /> : null}
            {featured ? <Chip label="FEATURED" color="secondary" /> : null}
          </Box>
          <Link className={styles.position} href="#" variant="h6">
            {position}
          </Link>
          <Breadcrumbs className={styles.breadcrumbs} separator={<Dot />}>
            <Typography>{postedAt}</Typography>
            <Typography>{contract}</Typography>
            <Typography>{location}</Typography>
          </Breadcrumbs>
        </Grid>
        <Divider className={styles.divider} />
        <Grid item xs={12}>
          {tags.map((label) => (
            <Tag key={uuid()} className={styles.tag} label={label} />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}
