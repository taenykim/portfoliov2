import React, { Component } from "react";
import "./Home.css";
import about from "./12.jpg";
import github from "./gg.png";
import project_image from "./1.jpg";

class Home extends Component {
  render() {
    const desc_head_style = {
      fontSize: "40px",
      marginTop: "20px",
      marginBottom: "10px"
    };
    const desc_body_style = {
      fontSize: "15px",
      lineHeight: "30px",
      paddingRight: "90px"
    };
    const github_style = {
      width: "30px",
      marginRight: "20px",
    }
    const home_image_style = {
      height: "400px",
    }
    const project_image_style = {
      width:"1020px",
      margin:"30px"
    }

    return (
      <div className="home_container">
        <div className="home_about_container">
          <div className="home_about_desc">
            <div style={desc_head_style}>안녕하세요</div>
            <div style={desc_body_style}>
              저는 제주도에서 태어나 현재는 수원에 거주하고 있는 프론트엔드
              개발자 지망생 김태은입니다. 대학교에서 인터렉션 디자인과
              프로그래밍 수업을 듣고 흥미를 느껴 개발 공부를 시작하게
              되었습니다.
            </div>
            <div className="home_about_desc_foot">
              <img style={github_style} src={github} />
              <img style={github_style} src={github} />
              <img style={github_style} src={github} />
            </div>
          </div>
          <div className="home_about_image">
            <img style={home_image_style} src={about} />
          </div>
        </div>
        <div className="home_project_container">
          <img style={project_image_style}src={project_image}/>
          <img style={project_image_style}src={project_image}/>
          <img style={project_image_style}src={project_image}/>

        </div>
      </div>
    );
  }
}

export default Home;
