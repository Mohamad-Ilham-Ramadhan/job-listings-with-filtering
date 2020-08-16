import React, { useState, useEffect } from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import bgHeaderMobile from "../images/bg-header-mobile.svg";
import bgHeaderDesktop from "../images/bg-header-desktop.svg";
import Container from "@material-ui/core/Container";

import Filter from "./Filter";
import Jobs from "./Jobs";

import database from "../../database.json";

const imagesPath = "./images/"; // webpack will handle the images to build directory
let data = database.map((item) => ({
  ...item,
  logo: `${imagesPath + item.logo}`,
  tags: [item.role, item.level, ...item.languages, ...item.tools],
}));
window.data = data;
console.log(window.data);

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
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  bgHeaderDesktop: {
    display: "none",
    height: "100%",
    backgroundImage: `url("${bgHeaderDesktop}")`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  main: {
    paddingBottom: theme.spacing(10),
    paddingTop: theme.spacing(7),
    backgroundColor: theme.palette.neutral.lightGrayishCyanBg,
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
    },
  },
  container: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  filter: {
    marginBottom: theme.spacing(7),
    marginTop: -92,
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(5),
      marginTop: -112,
    },
  },
  job: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
}));

export default function Home() {
  const styles = useStyles();
  const [tags, setTags] = useState([]);
  const [jobs, setJobs] = useState(data);
  useEffect(() => {
    setJobs(renderJobs(data, tags));
  }, [tags]);

  function handleDelete(label, e) {
    setTags((tags) => tags.filter((tag) => label !== tag));
    // console.log(tags.filter((tag) => label !== tag));
  }
  function handleClear() {
    setTags([]);
  }
  function handleClickTag(label) {
    setTags((tags) => {
      if (tags.find((tag) => tag == label)) {
        return tags;
      } else {
        return [...tags, label];
      }
    });
  }
  function handleClickFilterTag(label) {
    setTags([label]);
  }
  function renderJobs(jobs, tags) {
    jobs = jobs.filter((job) => {
      tags = tags.map((item) => item.toUpperCase());
      return tags.every((item) => {
        const newJobTags = job.tags.map((tag) => tag.toUpperCase());
        return newJobTags.includes(item);
      });
    });
    return jobs;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.bgHeaderMobile} />
        <div className={styles.bgHeaderDesktop} />
      </header>
      <main className={styles.main}>
        <Container className={styles.container}>
          <Filter
            className={styles.filter}
            tags={tags}
            handleDelete={handleDelete}
            handleClear={handleClear}
            handleClickFilterTag={handleClickFilterTag}
          />
          {/* [TERNYATA] mapping data yang bikin lemot!!!, di dalam Job ada mapping data lagi */}
          <Jobs jobs={jobs} styles={styles.job} handleClick={handleClickTag} />
        </Container>
      </main>
    </>
  );
}
