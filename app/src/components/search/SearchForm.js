import React, { Component } from "react";

export default class SearchForm extends Component {
  render() {
    return (
      <form className="row mt-4" id="search-job">
        <div class="input-group">
          <div className="col-md-5 mb-3">
            <label htmlFor="what">What:</label>
            <input
              className="form-control"
              type="search"
              id="what"
              name="what"
              placeholder="job title, keywords, or company"
              aria-label="What"
            />
          </div>
          <div className="col-md-5 mb-3">
            <label htmlFor="where">Where:</label>
            <input
              className="form-control"
              type="search"
              placeholder="city, state, or zip code"
              aria-label="Search"
              id="where"
            />
          </div>
          <div className="col-md-2 mb-3 mt-2">
            <button
              className="btn btn-block btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
