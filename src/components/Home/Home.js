import React, { Component } from "react";
import "./Home.css";
import about from "./12.jpg";
import velog from "./velog.png"
import github from "./github.png";
import facebook from "./facebook.png";
import react from "./react.png";
import html from "./html5.svg"
import css from "./css3.svg";
import js from "./javascript.svg";
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
      marginRight: "15px",
      // filter: "grayscale(100%)",
      // WebkitFilter:"grayscale(100%)",
    };
    const project_item_desc_style = {
      fontSize: "40px",
      fontFamily: "escore7"
    };

    return (
      <div className="home_container" id="Home">
        <div className="home_first_container">
          <div className="home_first_title">
            <div>
              Front-end<div className="home_first_container_br"></div> Developer
            </div>
            <div>
              Kim Taeeun's <div className="home_first_container_br"></div>
              Portfolio v.2
            </div>
          </div>
        </div>
        {/* <div className="home_about_title">ABOUT</div> */}
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
                <img style={github_style} src={velog} />
                <img style={github_style} src={facebook} />
              </div>
              <div className="home_about_desc_foot_skills">
                <img style={github_style} src={react} />
                <img style={github_style} src={html} />
                <img style={github_style} src={css} />
                <img style={github_style} src={js} />
                <img style={github_style} src={github} />
                <img style={github_style} src={github} />
              </div>
            </div>
          </div>
          <img className="home_about_image" src={about} />
        </div>
        {/* <div className="home_about_title">ABOUT</div> */}

        <div className="home_project_title">PROJECT</div>
        <div className="home_project_subtitle">저는 주로 리액트를 사용합니다.</div>
        <div className="home_project_container">
          <div className="home_project_item">
            <div className="home_project_item_desc">
              <div style={project_item_desc_style}>Fashub</div>패션정보 공유
              웹사이트
            </div>
            <div className="home_project_item_desc2">
              #react #nodeJS #mySQL #AWS #반응형
            </div>
            <img
              className="project_image"
              src={project_image}
              onClick={this.updateContents1}
            />
          </div>
          <div className="home_project_item">
            <div className="home_project_item_desc">
              <div style={project_item_desc_style}>Crawling App</div>크롤링
              사이트
            </div>
            <div className="home_project_item_desc2">
              #react #nodeJS #searching #crawling #반응형
            </div>
            <img
              className="project_image"
              src={project_image}
              onClick={this.updateContents2}
            />
          </div>
          <div className="home_project_item">
            <div className="home_project_item_desc">
              <div style={project_item_desc_style}>React Native</div>현장실습
            </div>
            <div className="home_project_item_desc2">
              #react #native #nodeJS #반응형
            </div>
            <img
              className="project_image"
              src={project_image}
              onClick={this.updateContents3}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
