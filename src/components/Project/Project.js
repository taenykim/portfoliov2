import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    const { now_contents } = this.props;
    return (
      <div>
        {console.log(now_contents)}
      </div>
    );
  }
}

export default Project;
