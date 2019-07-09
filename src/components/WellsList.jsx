import React, { Component } from "react";
import Well from "./shared/Well";
import axios from "axios";
import Navbar from "./shared/Navbar";

class WellsList extends Component {
  state = {
    wells: []
  };

  componentDidMount() {
    axios
      .get("https://mcdan-coding-exercise.azurewebsites.net/api/v1/well")
      .then(res => {
          this.setState({ wells: res.data });

      });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Well wells={this.state.wells} />
      </React.Fragment>
    );
  }
}

export default WellsList;
