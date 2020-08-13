import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import bgHeaderMobile from "../images/bg-header-mobile.svg";
import bgHeaderDesktop from "../images/bg-header-desktop.svg";
import Container from "@material-ui/core/Container";

import Filter from "./Filter";
import Job from "./Job";

import database from "../../database.json";

const imagesPath = "./images/"; // webpack will handle the images to build directory
let data = database.map((item) => ({
  ...item,
  logo: `${imagesPath + item.logo}`,
  tags: [item.role, item.level, ...item.languages, ...item.tools],
}));

// console.log(data);
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
  job: {
    marginBottom: theme.spacing(5),
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
          {data.map((job) => (
            <Job
              key={job.id}
              className={styles.job}
              logo={job.logo}
              featured={job.featured}
              isNew={job.new}
              position={job.position}
              company={job.company}
              postedAt={job.postedAt}
              location={job.location}
              contract={job.contract}
              tags={job.tags}
            />
          ))}
        </Container>
      </main>
    </>
  );
}
