import React, { Component } from "react";
import "./Project.css";
import video1 from "./222.mp4";

class Project extends Component {
  render() {
    const { now_contents } = this.props;
    return (
      <div className="project_container">
        <div className="project_video_container">
          <video className="project_video" src={video1} loop autoPlay></video> 
        </div>
      </div>
    );
  }
}

export default Project;
