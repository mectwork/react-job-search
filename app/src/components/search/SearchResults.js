import React from "react";
import JobBlock from "../jobs/JobBlock";

const SearchResults = props => {
  console.log(props)
  return (
    <React.Fragment>
      {props.jobs.length > 0 ?(<ul className="list-unstyled">
        {props.jobs.map(job => (
          <li key={job.id}>
            <JobBlock job={job} />
          </li>
        ))}
      </ul>): null}
      
    </React.Fragment>
  );
};
export default SearchResults;
