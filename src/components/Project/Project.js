import React, { Component } from "react";
import "./Project.css";
import pj1 from "./1.jpg";

class Project extends Component {
  render() {
    const { now_contents } = this.props;
    return (
      <div className="project_container">
        <div className="project_first_container">
          <div className="project_first_title">프로젝트1</div>
          <div className="project_first_subtitle">프로젝트1에 대한 설명</div>
        </div>
        <div className="project_about_container">
          <img className="project_about_image" src={pj1} />
          <div className="project_about_desc">
            <div className="project_about_desc_head">안녕하세요</div>
            <div className="project_about_desc_body">
              저는 제주도에서 태어나 현재는 수원에 거주하고 있는 프론트엔드
              개발자 지망생 김태은입니다. 대학교에서 인터렉션 디자인과
              프로그래밍 수업을 듣고 흥미를 느껴 개발 공부를 시작하게
              되었습니다.
            </div>
          </div>
          <img className="project_about_image" src={pj1} />
          <div className="project_about_desc">
            <div className="project_about_desc_head">안녕하세요</div>
            <div className="project_about_desc_body">
              저는 제주도에서 태어나 현재는 수원에 거주하고 있는 프론트엔드
              개발자 지망생 김태은입니다. 대학교에서 인터렉션 디자인과
              프로그래밍 수업을 듣고 흥미를 느껴 개발 공부를 시작하게
              되었습니다.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
