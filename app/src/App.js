import React, { Component } from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";
import SearchForm from "./components/search/SearchForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <h1>Job Search</h1>
          <SearchForm />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
