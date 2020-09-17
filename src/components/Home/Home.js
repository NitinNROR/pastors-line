import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="App container">
          <Spinner animation="border" variant="info" />
        </div>
      );
    } else {
      return (
        <div className="App container-fluid">
          <div className="button-div div-a">
            <Link to="/all" className="btn btn-a home-btn">
              All Contacts
            </Link>
          </div>
          <div className="button-div">
            <Link to="/us" className="btn btn-b home-btn">
              US Contacts
            </Link>
          </div>
        </div>
      );
    }
  }
}
