import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    if (this.props.loading) {
      return <h1>Loading...........</h1>;
    } else {
      return (
        <div className="App">
          <div className="button-div div-a">
            <Link to="/all" className="btn btn-a home-btn">
              Button A
            </Link>
          </div>
          <div className="button-div">
            <Link to="/us" className="btn btn-b home-btn">
              Button B
            </Link>
          </div>
        </div>
      );
    }
  }
}
