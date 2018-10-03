import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import SearchForm from "./components/search/SearchForm";
import { BarLoader } from "react-spinners";
import axios from "axios";
import SearchResults from "./components/search/SearchResults";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobDetails from "./components/jobs/JobDetails";

class App extends Component {
  state = {
    jobs: [],
    loading: false
  };

  jobsList = search => {
    this.setState({ ...this.state, loading: true });
    const { what, where } = search;
    const url = `https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=${
      process.env.REACT_APP_API_KEY
    }&format=json&method=aj.jobs.search&keywords=${what
      .split(" ")
      .join("+")}&location=${where.split(" ").join("+")}&perpage=15`;

    axios
      .post(url)
      .then(res => {
        this.setState({ ...this.state, loading: true });

        if (res.data.stat === "fail") {
          console.log(res.data.desc);
          return;
        }
        console.log(res.data);
        const jobs = res.data.listings.listing;
        this.setState({ ...this.state, jobs: jobs, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <h1>Job Search</h1>
            <SearchForm jobSearch={this.jobsList} />
            <div className="text-center">
              <BarLoader
                widthUnit={"%"}
                width={100}
                color={"#28a745"}
                loading={this.state.loading}
              />
            </div>
            <hr />
            <Route
              exact
              path="/"
              render={() => <SearchResults jobs={this.state.jobs} />}
            />
            <Route exact path="/job-details/:id" component={JobDetails} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
