import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import bgHeaderMobile from "../images/bg-header-mobile.svg";
import bgHeaderDesktop from "../images/bg-header-desktop.svg";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import Filter from "./Filter";

const useStyles = makeStyles((theme) => ({
  header: {
    height: 156,
    backgroundColor: theme.palette.primary.main,
  },
  bgHeaderMobile: {
    height: "100%",
    backgroundImage: `url("${bgHeaderMobile}")`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  bgHeaderDesktop: {},
  main: {
    backgroundColor: theme.palette.neutral.lightGrayishCyanBg,
  },
  container: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

export default function Home() {
  const styles = useStyles();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.bgHeaderMobile} />
      </header>
      <main className={styles.main}>
        <Container>
          <Filter />
        </Container>
      </main>
    </>
  );
}
