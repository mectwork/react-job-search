import React from "react";

const JobDetails = props => {
  console.log(props);
  const job = props.location.state;
  return (
    <div>
      <h1>{job.title}</h1>
      <div
            dangerouslySetInnerHTML={{
              __html: job.description
                .split(" ")        
                .join(" ")
            }}
          />
    </div>
  );
};

export default JobDetails;
