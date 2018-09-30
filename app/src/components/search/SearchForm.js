import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    what: "",
    where: ""
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const { what, where } = this.state;
    this.props.jobSearch({ what, where });
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="row mt-4" id="search-job">
        <div className="input-group">
          <div className="col-md-5 mb-3">
            <label htmlFor="what">What:</label>
            <input
              className="form-control"
              id="what"
              name="what"
              placeholder="job title, keywords, or company"
              value={this.state.what}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="col-md-5 mb-3">
            <label htmlFor="where">Where:</label>
            <input
              className="form-control"
              placeholder="city, state, or zip code"
              id="where"
              name="where"
              value={this.state.where}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="col-md-2 mb-3 mt-2">
            <button className="btn btn-block btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
