import React, { Component } from "react";
import "./Project.css";
import pj1 from "./1.jpg";
import pj2 from "./background1.jpg";
import pj3 from "./background2.jpg";
import pj4 from "./background3.jpg";

class Project extends Component {
  state = {
    project_info: [
      {
        title: "FASHUB",
        sub: "패션정보 공유 웹사이트",
        img: pj1
      },
      { title: "크롤링 사이트", sub: "배경화면 크롤링 사이트", img: pj2 },
      { title: "이러닝 APP", sub: "현장실습", img: pj3 },
      { title: "NONE", sub: "없음", img: pj4 }
    ]
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
          <div className="project_first_title">
            {this.state.project_info[index].title}
          </div>
          <div className="project_first_subtitle">
            {this.state.project_info[index].sub}
          </div>
        </div>
        <div className="project_second_container">
          <div className="project_second_head">
            {this.state.project_info[index].title}
          </div>
          <div className="project_second_body">
            프로젝트에 대한 간단한 소개입니다.프로젝트에 대한 간단한
            소개입니다.프로젝트에 대한 간단한 소개입니다.프로젝트에 대한 간단한
            소개입니다.프로젝트에 대한 간단한 소개입니다.프로젝트에 대한 간단한
            소개입니다.프로젝트에 대한 간단한 소개입니다.프로젝트에 대한 간단한
            소개입니다.
          </div>
          <div className="project_second_link">
            <div>Visit Site</div>
            <div>Github Link</div>
          </div>
        </div>
        <div className="project_about_container">
          <img
            className="project_about_image"
            src={this.state.project_info[index].img}
          />
          <div className="project_about_desc">
            <div className="project_about_desc_head">안녕하세요</div>
            <div className="project_about_desc_body">
              저는 제주도에서 태어나 현재는 수원에 거주하고 있는 프론트엔드
              개발자 지망생 김태은입니다. 대학교에서 인터렉션 디자인과
              프로그래밍 수업을 듣고 흥미를 느껴 개발 공부를 시작하게
              되었습니다.
            </div>
          </div>
          <img
            className="project_about_image"
            src={this.state.project_info[index].img}
          />
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
