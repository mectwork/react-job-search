import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class JobBlock extends Component {
  render() {
    const { job } = this.props;
    return (
      <div className="card mb-2">
        <div className="card-body">
          <h4>{job.title}</h4>
          <p>
            {job.type ? `Type: ${job.type.name}` : null} |
            <span className="ml-2">
              {job.company ? `Company: ${job.company.name}` : null}
            </span>
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: job.description
                .split(" ")
                .splice(0, 50)
                .join(" ")
            }}
          />
          <div className="row">
            <button className="btn btn-outline-success mx-2">Apply Now</button>
            <Link
              to={{
                pathname: `/job-details/${job.id}`,
                state: job
              }}
              className="btn btn-outline-dark"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
