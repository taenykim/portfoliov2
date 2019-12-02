import React, { Component } from "react";
import "./Project.css";
import pj1_main from "./pj1/main.jpg";
import pj2_main from "./pj2/main.jpg";
import pj3_main from "./pj3/main.jpg";
import pj4_main from "./pj4/main.jpg";
import fashub1 from "./pj1/fashub1.png";
import fashub2 from "./pj1/fashub2.png";
import fashub3 from "./pj1/fashub3.png";
import fashub4 from "./pj1/fashub4.png";
import fashub5 from "./pj1/fashub5.png";

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
            img: fashub1,
            title: "메인페이지",
            desc:
              "메인페이지는 무한스크롤 구현으로 SPA의 특성을 살리는 게시판을 구현하고자 하였고, 스크롤이 바닥에 닿을 때마다 데이터를 가져오게 해서 성능도 최적화 시켰습니다. 그리고 사진 중심의 커뮤니티다 보니 레이아웃도 그에 맞게 디자인 하였습니다. 최신데이터가 제일 위에 뜨게끔 데이터베이스를 가져올 때 sorting하는 코드도 넣었습니다."
          },
          {
            no: 2,
            img: fashub3,
            title: "카테고리",
            desc:
              "카테고리는 총 HOME, SINGER, ACTOR, ATHLETE, PUBLIC 5가지 종류로 넣었고 각 버튼을 클릭할 때마다 state의 변화를 줘서 각 state별로 서버에서 해당 정보를 가져오게끔 구현하였습니다. 그리고 database query문에 하드코딩을 통하여 꼭 해당 카테고리가 아니더라도 비슷한 범주면 예를들어, 축구선수, 야구선수 이렇게 입력해도 ATHLETE를 선택했을 때 정보를 불러오게끔 하였습니다."
          },
          {
            no: 3,
            img: fashub4,
            title: "검색기능",
            desc:
              "검색기능 또한 SPA의 특성을 살려 새로고침이 필요없이 입력만으로 데이터를 가져오게끔 하였습니다. 검색어가 바뀔 때마다 state를 계속 바뀌게 하였고 filter 함수와 조건문을 통하여 해당 검색어가 포함된 데이터만 불러오게끔 하였습니다. "
          },
          {
            no: 4,
            img: fashub5,
            title: "옷 정보등록",
            desc:
              "옷 정보등록은 material UI DIALOG 컴포넌트를 이용하였고, axios 라이브러리를 통하여 정보가 추가되면 서버로 정보를 post 하게끔 구현하였습니다."
          },
          {
            no: 5,
            img: fashub2,
            title: "반응형 디자인",
            desc:
              "디바이스의 종류에 맞게 레이아웃이 변하게끔 디자인하였습니다. 특히 스마트폰일 경우 카테고리 기능을 없애고 옷 정보등록 버튼을 우측 하단에 위치하였습니다. css @media 문법을 알기 전이라 js파일 내부에서 InnerWidth 값에 따라 다른 코드를 실행하게끔 구현하였습니다.ㅠ_ㅠ"
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
