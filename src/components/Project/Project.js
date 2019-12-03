import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  state = {
    project_info : this.props.project_info
  };
  render() {
    const { now_contents } = this.props;
    const index = Number(now_contents[7] - 1);
    console.log(this.state.project_info[0].background);
    return (
      <div className="project_container">
        <div className="project_first_img_container">
          <img
            align="center"
            className="project_first_img"
            src={this.state.project_info[index].img}
          />
        </div>
        <div className="project_first_container">
          <div className="project_first_title wow fadeInUp">
            {this.state.project_info[index].title}
          </div>
          <div className="project_first_subtitle wow fadeInDown">
            {this.state.project_info[index].sub}
          </div>
        </div>
        <div className="project_second_container">
          <div className="project_second_head">
            {this.state.project_info[index].title}
          </div>
          <div className="project_second_body">
            {this.state.project_info[index].second_body}
          </div>
          <div className="project_second_link">
            <a href={this.state.project_info[0].visit_link} target="_blank">
              Visit Site
            </a>
            <a href={this.state.project_info[0].github_link} target="_blank">
              Github Link
            </a>
          </div>
        </div>
        <div className="project_about_container">
          {this.state.project_info[index].desc.map(desc => {
            return (
              <div className="project_about_pair">
                <img className="project_about_image" src={desc.img} />
                <div className="project_about_desc">
                  <div className="project_about_desc_head">{desc.title}</div>
                  <div className="project_about_desc_body">{desc.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Project;
