import React, { Component } from "react";
import "./Home.css";
import about from "./images/profile_image.jpg";
import velog from "./skills_logo/velog.png";
import github from "./skills_logo/github.png";
import insta from "./skills_logo/insta.png";
import react from "./skills_logo/react.png";
import html from "./skills_logo/html5.png";
import css from "./skills_logo/css3.png";
import js from "./skills_logo/javascript.svg";
import nodejs from "./skills_logo/nodejs.png";
import jquery from "./skills_logo/jquery.png";
import sass from "./skills_logo/sass.png";
import aws from "./skills_logo/aws.png";
import mysql from "./skills_logo/mysql.png";

class Home extends Component {
  state = {
    now_contents: "HOME",
    project_info: this.props.project_info,
    about_info: {
      sns: [
        { title: "깃허브", img: github, link: "https://github.com/taenykim" },
        { title: "블로그", img: velog, link: "https://velog.io/@kimtaeeeny" },
        {
          title: "인스타",
          img: insta,
          link: "https://www.instagram.com/kimtaeeeny2/"
        }
      ],
      skills: [
        { title: "리액트", img: react },
        { title: "HTML", img: html },
        { title: "CSS", img: css },
        { title: "JS", img: js },
        { title: "Jquery", img: jquery },
        { title: "nodeJS", img: nodejs },
        { title: "SASS", img: sass },
        { title: "AWS", img: aws },
        { title: "mySQL", img: mysql }
      ]
    }
  };

  render() {
    const image_style = {
      width: "30px",
      height: "30px"
      // filter: "grayscale(100%)",
      // WebkitFilter:"grayscale(100%)",
    };
    const image_container_style = {
      marginRight: "15px"
      // filter: "grayscale(100%)",
      // WebkitFilter:"grayscale(100%)",
    };
    const project_item_desc_style = {
      fontSize: "20px",
      fontFamily: "escore9",
      color: "#ddd"
    };

    return (
      <div className="home_container" id="Home">
        <div className="home_first_container">
          <div className="home_first_title">
            <div className="wow fadeInUp">
              Front-end&nbsp;
              <div className="home_first_container_br"></div>
              Developer
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              Kim Taeeun's&nbsp;
              <div className="home_first_container_br"></div>
              Portfolio v.2
            </div>
          </div>
          <div className="home_first_reactDesc">
            본 사이트는 리액트로 만들었습니다.
          </div>
        </div>
        <div className="home_about_container">
          <div className="home_about_desc">
            <div className="home_about_desc_head wow fadeInUp">안녕하세요</div>
            <div
              className="home_about_desc_body wow fadeInUp"
              data-wow-delay="0.1s"
            >
              저는 프론트엔드 개발자 김태은입니다. 대학교에서 인터렉션 디자인과
              프로그래밍 수업을 듣고 흥미를 느껴 개발 공부를 시작하게 되었고,
              디자인🎨과 서버💻를 잘 이해하는 프론트엔드 개발자가 되는 것이
              목표입니다.🙂
            </div>
            <div
              className="home_about_desc_foot"
            >
              <div className="home_about_desc_foot_sns">
                {this.state.about_info.sns.map(list => {
                  return (
                    <a style={image_container_style} href={list.link}>
                      <img style={image_style} src={list.img} />
                    </a>
                  );
                })}
              </div>
              <div className="home_about_desc_foot_skills" >
                {this.state.about_info.skills.map(list => {
                  return (
                    <div style={image_container_style}>
                      <img style={image_style} src={list.img} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <img className="home_about_image" src={about} />
        </div>
        <div className="home_project_title wow fadeInDown">PROJECT</div>
        <div className="home_project_subtitle wow fadeInUp">
          저는 주로 리액트를 사용합니다.
        </div>
        <div className="home_project_container">
          {this.state.project_info.map(list => {
            return (
              <div className="home_project_item">
                <div className="home_project_item_desc">
                  <div style={project_item_desc_style}>{list.title}</div>
                  {list.sub}
                </div>
                <div className="home_project_item_desc2">{list.tag}</div>
                <img
                  className="project_image"
                  src={list.img}
                  onClick={() => {
                    const { onUpdate } = this.props;
                    onUpdate(list.project_no);
                    document.getElementById("root").scrollIntoView();
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
