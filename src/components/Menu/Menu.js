import React, { Component } from "react";
import "./Menu.css";
import logo from "./gg.png";
import menu from "./gg2.png";

class Menu extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  onScroll = e => {
    const { now_contents } = this.props;
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    const menu_now_name = document.getElementsByClassName("menu_now_name");
    if (scrollTop > window.innerHeight - 200 && now_contents === "HOME") {
      menu_now_name[0].innerHTML = "ABOUT";
    } else if(now_contents === "HOME") {
      menu_now_name[0].innerHTML = "HOME";
    }
  };
  handleHome = () => {
    const { now_contents, onUpdate } = this.props;

    if (now_contents === "HOME") {
      document.getElementById("Home").scrollIntoView();
    } else {
      onUpdate("HOME");
    }
  };
  render() {
    const logo_style = {
      height: "30px"
    };
    const emoji_style = {
      fontSize: "12px"
    };

    const { now_contents } = this.props;
    return (
      <div className="menu_container">
        <div className="menu_home" onClick={this.handleHome}>
          <img style={logo_style} src={logo} />
        </div>
        <div className="menu_now">
          <span style={emoji_style}>🚀</span>
          <span className="menu_now_name">{now_contents}</span>
          <span style={emoji_style}>🚀</span>
        </div>
        <div className="menu_menu">
          <img style={logo_style} src={menu} />
        </div>
      </div>
    );
  }
}

export default Menu;
