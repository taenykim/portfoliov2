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
          <div className="project_about_pair">
            <img
              className="project_about_image"
              src={this.state.project_info[index].img}
            />
            <div className="project_about_desc">
              <div className="project_about_desc_head">반응형 사이트</div>
              <div className="project_about_desc_body">
                반응형 사이트에 대한 설명.반응형 사이트에 대한 설명.반응형
                사이트에 대한 설명.반응형 사이트에 대한 설명.반응형 사이트에
                대한 설명.반응형 사이트에 대한 설명.반응형 사이트에 대한
                설명.반응형 사이트에 대한 설명.반응형 사이트에 대한 설명.반응형
                사이트에 대한 설명.반응형 사이트에 대한 설명.
              </div>
            </div>
          </div>
          <div className="project_about_pair">
            <img
              className="project_about_image"
              src={this.state.project_info[index].img}
            />
            <div className="project_about_desc">
              <div className="project_about_desc_head">리액트 코드</div>
              <div className="project_about_desc_body">
                리액트 코드에 대한 설명.리액트 코드에 대한 설명.리액트 코드에
                대한 설명.리액트 코드에 대한 설명.리액트 코드에 대한 설명.리액트
                코드에 대한 설명.리액트 코드에 대한 설명.리액트 코드에 대한
                설명.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
