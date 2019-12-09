import React, { Component, Fragment } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import "./animate.css";
import WOW from "wow.js";
import pj1_main from "./components/Project/pj1/main.jpg";
import pj2_main from "./components/Project/pj2/main.jpg";
import pj3_main from "./components/Project/pj3/main.jpg";
import pj4_main from "./components/Project/pj4/main.jpg";
import fashub1 from "./components/Project/pj1/fashub1.png";
import fashub2 from "./components/Project/pj1/fashub2.png";
import fashub3 from "./components/Project/pj1/fashub3.png";
import fashub4 from "./components/Project/pj1/fashub4.png";
import fashub5 from "./components/Project/pj1/fashub5.png";
import portfolio1 from "./components/Project/pj2/portfolio1.png";
import portfolio2 from "./components/Project/pj2/portfolio2.png";
import portfolio3 from "./components/Project/pj2/portfolio3.png";
import portfolio4 from "./components/Project/pj2/portfolio4.png";
import portfolio5 from "./components/Project/pj2/portfolio5.png";
import portfolio6 from "./components/Project/pj2/portfolio6.png";
import wallpaperfinder1 from "./components/Project/pj3/wallpaperfinder1.png";
import wallpaperfinder2 from "./components/Project/pj3/wallpaperfinder2.png";
import wallpaperfinder3 from "./components/Project/pj3/wallpaperfinder3.png";
import wallpaperfinder4 from "./components/Project/pj3/wallpaperfinder4.png";
import wallpaperfinder5 from "./components/Project/pj3/wallpaperfinder5.png";
import wallpaperfinder6 from "./components/Project/pj3/wallpaperfinder6.png";
import wallpaperfinder7 from "./components/Project/pj3/wallpaperfinder7.png";

class App extends Component {
  state = {
    now_contents: "HOME", //home, project(n)
    toggle_sidebar: false,
    project_info: [
      {
        project_no: "PROJECT1",
        title: "FASHUB",
        sub: "패션정보 공유 웹어플리케이션",
        tag: "#react #nodeJS #mySQL #AWS #반응형",
        img: pj1_main,
        second_body:
          "대학교 프로젝트로 패션정보를 공유하는 사진 중심의 커뮤니티 사이트를 만들어보았습니다. 리액트를 이용해서 만든 첫번째 어플리케이션이다보니 코드의 재사용성, 성능보다는 구현에 집중하여 개발을 진행하였습니다. 이 프로젝트를 통해 웹 퍼블리싱, 프론트개발, 백엔드 서버 구축 등 전반적인 웹 어플리케이션 제작과정을 경험하게 되었습니다.",
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
              "디바이스의 종류에 맞게 레이아웃이 변하게끔 디자인하였습니다. 특히 스마트폰일 경우 카테고리 기능을 없애고 옷 정보등록 버튼을 우측 하단에 위치하였습니다. css @media 문법을 알기 전이라 js파일 내부에서 InnerWidth 값에 따라 다른 코드를 실행하게끔 구현하였습니다."
          },
          {
            no: 6,
            img: pj1_main,
            title: "현재",
            desc:
              "서버를 닫아놓아서 사이트의 방문은 불가능합니다.ㅜㅜ"
          }
        ]
      },
      {
        project_no: "PROJECT2",
        title: "포트폴리오",
        sub: "포트폴리오 사이트 v2",
        tag: "#react #반응형",
        img: pj2_main,
        second_body:
          "포트폴리오 사이트입니다. 정적인 페이지로 제가 작업한 것들을 보기좋게 보여주기 위해서 만들었습니다. 템플릿 없이 create-react-app 으로 html, css, 로직 모두 하나부터 열까지 직접 만들어보려고 하였고 레이아웃과 코드 재사용성 위주를 신경써서 제작해보았습니다.",
        visit_link: "https://taenykim.github.io/portfoliov2/",
        github_link: "https://github.com/taenykim/portfoliov2",
        desc: [
          {
            no: 1,
            img: portfolio1,
            title: "메인페이지",
            desc:
              "상단에 고정으로 좌우에 홈버튼과 메뉴버튼을 위치시켰고 중앙에는 현재 보이고있는 컨텐츠의 TITLE을 보여주고자 하였습니다. css는 주로 flex box를 사용하였고, 애니메이션은 wow.js와 animate.css를 이용해보았습니다."
          },
          {
            no: 2,
            img: portfolio2,
            title: "state 공유",
            desc:
              "한 곳의 정보를 수정하였을 때 각각의 컴포넌트(HOME, PROJECT)의 정보가 모두 수정되게끔 정보들을 APP.js 파일의 state 안에 위치하였고 props를 통하여 정보를 공유하게끔 설정하였습니다."
          },
          {
            no: 3,
            img: portfolio3,
            title: "코드반복x",
            desc:
              "반복적으로 사용되는 태그들은 모두 map 함수를 통해서 정리하였습니다."
          },
          {
            no: 4,
            img: portfolio4,
            title: "사이드 바",
            desc:
              "메뉴버튼을 누르면 나오는 사이드 바 또한 외부 라이브러리를 사용하지 않고 직접 구현해보았습니다. Toggle함수를 통해, 메뉴가 활성화 될때마다 오른쪽에서 slide해서 화면에 보여지게끔 만들었습니다."
          },
          {
            no: 5,
            img: portfolio5,
            title: "이미지 사용",
            desc:
              "고정적으로 사용되는 이미지(메인화면의 배경화면 등)은 css의 background 속성을 통하여 설정하였고 가변적으로 변하는 이미지는 img 태그를 통해 조건에 따라 source를 불러오게끔 하였습니다."
          },
          {
            no: 6,
            img: portfolio6,
            title: "반응형 디자인",
            desc:
              "전체적으로 flex wrap 속성을 넣어서 item들이 container 크기를 넘어갈 경우 자동 줄바꿈 되도록 하였고, 각 디바이스(desktop, pad, phone)에 맞는 디테일한 레이아웃 조정도 신경써보았습니다."
          }
        ]
      },
      {
        project_no: "PROJECT3",
        title: "WALLPAPER FINDER",
        sub: "배경화면 크롤링 사이트",
        tag: "#react #cheerio #크롤링 #mansory #반응형",
        img: pj3_main,
        second_body:
          "배경화면 크롤링 사이트입니다. alpacoders라는 대형 Wallpaper 사이트를 자주 이용하는 편인데 키워드를 검색했을 때, 30개씩 정보를 보여주고 다음페이지를 클릭해서 넘어가야지만 다음 정보를 가져오는데에 불편함을 느껴 키워드를 검색했을 때 클릭하는 번거로움 없이 한눈에 이미지들을 보면 좋을 것 같다는 생각에 웹사이트를 기획해보았습니다.",
        visit_link: "https://taenykim.github.io/smartwallpaperfinder/",
        github_link: "https://github.com/taenykim/smartwallpaperfinder",
        desc: [
          {
            no: 1,
            img: wallpaperfinder1,
            title: "메인페이지",
            desc:
              '화면 중앙에 검색창과 우측상단에 해당 키워드의 이미지 개수와 현재 보여지는 이미지 개수정보, 하단에는 이미지 레이아웃 형태를 선택할 수 있는 3개의 버튼을 두었습니다. 검색창 하단에 "데스크탑 이용시 width를 1070이상을 유지"하라는 메시지를 적어놓았는데 밑에서 설명하도록 하겠습니다. TIP) 외국 사이트다보니 검색어는 영문을 입력해야합니다.'
          },
          {
            no: 2,
            img: wallpaperfinder2,
            title: "결과 화면",
            desc:
              "captain america를 검색한 결과입니다. 이미지 레이아웃은 벽돌형(pinterest같은 형태) 레이아웃을 사용하고자 해서, Mansory 라이브러리를 사용하였습니다. 배경화면의 크기가 거의 일정해서 티는 안나지만 여러 형태의 이미지가 들어와도 잘 배치되게끔 설정하였습니다."
          },
          {
            no: 3,
            img: wallpaperfinder3,
            title: "무한스크롤",
            desc:
              "검색키워드가 정보가 많을 경우도 있어서, 한꺼번에 모든 정보를 가져오는 방식이 아닌 스크롤을 밑으로 가져갔을 때, 데이터를 다시 리로드하는 무한스크롤 기능을 넣었습니다. 그리고 여기서 데이터를 가져오는 방식을 콜백함수를 통하여 구현하였는데 밑에서 설명해드리도록 하겠습니다."
          },
          {
            no: 4,
            img: wallpaperfinder4,
            title: "비동기(1) 콜백함수",
            desc:
              "이번에 개발을 하면서 가장 막히고 이해하려고 애썼던 부분이 javascript의 비동기방식이었습니다. 해당 이미지는 검색어를 입력하였을 때 크롤링 코드를 실행시키는 부분인데, 검색어를 state로 넘겨준 후 크롤링 코드를 실행하게끔 setState부분에 콜백 함수를 넣어 구현하였습니다."
          },
          {
            no: 5,
            img: wallpaperfinder5,
            title: "비동기(2) 요청,응답",
            desc:
              "무한스크롤이 발생하는 스크롤 이벤트 부분입니다. http 요청하는 부분과 json을 응답받는 부분을 콘솔창에 띄우는 코드를 작성해보았는데 요청,응답,요청,응답 순이 아닌 요청,요청,응답,응답 순의 비동기 방식을 볼 수 있었습니다. 그래서 마지막 페이지에 갔을 때 마지막페이지에 대한 요청을 여러번 응답해서 중복되는 경우가 발생했습니다. 그래서 요청하는 부분이 아닌 응답하고 데이터를 넣는 과정에서 조건문을 넣어 이를 해결하였습니다. "
          },
          {
            no: 6,
            img: wallpaperfinder6,
            title: "크롤링(1) 프록시",
            desc: "크롤링 프록시에 대한 내용."
          },
          {
            no: 7,
            img: wallpaperfinder7,
            title: "크롤링(2) 반응형",
            desc: "검색창 하단에 \"데스크탑 이용시 width를 1070이상을 유지\"하라는 데의 이유입니다. 크롤링을 하려면 해당 웹사이트의 선택자에 접근을 해야하는데 제가 크롤링한 alphacoder라는 사이트는 디바이스에 따라 선택자가 달랐습니다. 그래서 innerWidth가 1070보다 클 경우 데스크탑으로 인식하게끔 코드를 짜봤습니다."
          }
        ]
      },
      {
        project_no: "PROJECT4",
        title: "이러닝 APP",
        sub: "현장실습",
        tag: "#react #nodeJS #mySQL #AWS #반응형",
        img: pj4_main,
        desc: []
      }
    ]
  };
  handleUpdate = data => {
    this.setState({
      now_contents: data
    });
  };
  handleToggle = side => {
    const sidebar = document.getElementsByClassName("sidebar");
    if (this.state.toggle_sidebar === true) {
      sidebar[0].style = "right:-100vw";
      this.setState({
        toggle_sidebar: false
      });
    } else if (side === "iamsidebarbutton") {
      sidebar[0].style = "right:0";
      this.setState({
        toggle_sidebar: true
      });
    }
  };

  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }

  render() {
    return (
      <Fragment>
        <div className="sidebar">
          <div className="sidebar_title">MENU</div>
          <ol className="sidebar_list">
            {this.state.project_info.map(list => {
              return (
                <li
                  onClick={() => {
                    this.setState({
                      now_contents: list.project_no
                    });
                    this.handleToggle();
                    document.getElementById("root").scrollIntoView();
                  }}
                >
                  {list.title}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="full_container" onClick={this.handleToggle}>
          <Menu
            onUpdate={this.handleUpdate}
            now_contents={this.state.now_contents}
            onToggle={this.handleToggle}
            toggle_sidebar={this.state.toggle_sidebar}
          />
          {this.state.now_contents === "HOME" && (
            <Home
              project_info={this.state.project_info}
              onUpdate={this.handleUpdate}
            />
          )}
          {this.state.now_contents != "HOME" && (
            <Project
              project_info={this.state.project_info}
              now_contents={this.state.now_contents}
            />
          )}
        </div>
        <div className="home_foot_container">
          <div>💌 kimtaeeeny@gmail.com</div>
        </div>
      </Fragment>
    );
  }
}

export default App;
