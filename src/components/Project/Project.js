import React, { Component } from "react";
import "./Project.css";
import pj1_main from "./pj1/main.jpg";
import pj2_main from "./pj2/main.jpg";
import pj3_main from "./pj3/main.jpg";
import pj4_main from "./pj4/main.jpg";

class Project extends Component {
  state = {
    project_info: [
      {
        title: "FASHUB",
        sub: "패션정보 공유 웹사이트",
        second_body:
          "대학교 프로젝트로 패션정보를 공유하는 사진 중심의 커뮤니티 사이트를 만들어보았습니다. 리액트를 이용해서 만든 첫번째 어플리케이션이다보니 코드의 재사용성, 성능보다는 구현에 집중하여 개발을 진행하였습니다. 이 프로젝트를 통해 웹 퍼블리싱, 프론트개발, 백엔드 서버 구축 등 전반적인 웹 어플리케이션 제작과정을 경험하게 되었습니다.",
        img: pj1_main,
        visit_link: "http://13.209.207.140:3000",
        github_link: "https://github.com/msmk530/opinion",
        desc: [
          {
            no: 1,
            img: pj1_main,
            title: "비동기처리",
            desc: "자바스크립트가 코드진행이 "
          },
          {
            no: 2,
            img: pj2_main,
            title: "무슨얘기",
            desc: "할까"
          },
          {
            no: 3,
            img: pj3_main,
            title: "뭐라도",
            desc: "써야지 써야지!!"
          }
        ]
      },
      {
        title: "크롤링 사이트",
        sub: "배경화면 크롤링 사이트",
        img: pj2_main,
        desc: []
      },
      { title: "이러닝 APP", sub: "현장실습", img: pj3_main, desc: [] },
      { title: "NONE", sub: "없음", img: pj4_main, desc: [] }
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
            {this.state.project_info[index].second_body}
          </div>
          <div className="project_second_link">
            <a href={this.state.project_info[0].visit_link} target="_blank">Visit Site</a>
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
