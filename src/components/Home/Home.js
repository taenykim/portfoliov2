import React, { Component } from "react";
import "./Home.css";
import about from "./12.jpg";
import github from "./gg.png";
import project_image from "./1.jpg";

class Home extends Component {
  state = {
    now_contents: "HOME"
  };

  updateContents1 = () => {
    const { onUpdate } = this.props;
    onUpdate("PROJECT1");
  };

  updateContents2 = () => {
    const { onUpdate } = this.props;
    onUpdate("PROJECT2");
  };

  updateContents3 = () => {
    const { onUpdate } = this.props;
    onUpdate("PROJECT3");
  };

  render() {
    const github_style = {
      width: "30px",
      height: "30px",
      marginRight: "15px"
    };

    return (
      <div className="home_container" id="Home">
        <div className="home_first_container">
          <div>
            <div>
              Front-end<div className="home_first_container_br"></div> Developer
            </div>
            <div>
              Kim Taeeun's <div className="home_first_container_br"></div>
              Portfolio v.2
            </div>
          </div>
        </div>
        <div className="home_about_title">ABOUT</div>
        <div className="home_about_container">
          <div className="home_about_desc">
            <div className="home_about_desc_head">안녕하세요</div>
            <div className="home_about_desc_body">
              저는 제주도에서 태어나 현재는 수원에 거주하고 있는 프론트엔드
              개발자 지망생 김태은입니다. 대학교에서 인터렉션 디자인과
              프로그래밍 수업을 듣고 흥미를 느껴 개발 공부를 시작하게
              되었습니다.
            </div>
            <div className="home_about_desc_foot">
              <div className="home_about_desc_foot_sns">
                <img style={github_style} src={github} />
                <img style={github_style} src={github} />
                <img style={github_style} src={github} />
              </div>
              <div className="home_about_desc_foot_skills">
                <img style={github_style} src={github} />
                <img style={github_style} src={github} />
                <img style={github_style} src={github} />
                <img style={github_style} src={github} />
                <img style={github_style} src={github} />
                <img style={github_style} src={github} />
              </div>
            </div>
          </div>
          <img className="home_about_image" src={about} />
        </div>
        <div className="home_project_title">PROJECT</div>
        <div className="home_project_container">
          <img
            className="project_image"
            src={project_image}
            onClick={this.updateContents1}
          />
          <img
            className="project_image"
            src={project_image}
            onClick={this.updateContents2}
          />
          <img
            className="project_image"
            src={project_image}
            onClick={this.updateContents3}
          />
        </div>
      </div>
    );
  }
}

export default Home;
