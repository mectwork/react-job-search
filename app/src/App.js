import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import SearchForm from "./components/search/SearchForm";
import axios from "axios";

class App extends Component {
  state = {
    jobs: []
  };

  jobsList = search => {
    const { what, where } = search;
    const url = `https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=${
      process.env.REACT_APP_API_KEY
    }&format=json&method=aj.jobs.search&keywords=${what}&location=${where}&perpage=10`;
    console.log(url);
    axios
      .post(url)
      .then(res => {
        if (res.data.stat === "fail") {
          console.log(res.data.desc);
          return;
        }
        console.log(res.data);
        const jobs = res.data.listings.listing;
        this.setState({ jobs });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <h1>Job Search</h1>
          <SearchForm jobSearch={this.jobsList} />
          <hr />
          <ul>
            {this.state.jobs.map(job => (
              <li key={job.id}>{job.title}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
