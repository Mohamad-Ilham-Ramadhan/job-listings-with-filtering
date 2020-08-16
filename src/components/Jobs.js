import React from "react";
import Job from "./Job";

function Jobs({ jobs, styles, handleClick }) {
  return jobs.map((job) => (
    <Job
      key={job.id}
      className={styles}
      logo={job.logo}
      featured={job.featured}
      isNew={job.new}
      position={job.position}
      company={job.company}
      postedAt={job.postedAt}
      location={job.location}
      contract={job.contract}
      tags={job.tags}
      handleClick={handleClick}
    />
  ));
}

const MemoizedJobs = React.memo(Jobs);
export default MemoizedJobs;
