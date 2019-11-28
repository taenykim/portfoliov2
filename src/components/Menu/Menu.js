import React, { Component } from "react";
import "./Menu.css";
import logo from "./logo1.png";
import menu_button from "./menu_button.png";
import x_button from "./x_button.png";

class Menu extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  onScroll = e => {
    const { now_contents } = this.props;
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    const menu_now_name = document.getElementsByClassName("menu_now_name");
    if (scrollTop > window.innerHeight - 200 && now_contents === "HOME") {
      menu_now_name[0].innerHTML = "HELLO!";
    } else if (now_contents === "HOME") {
      menu_now_name[0].innerHTML = "HOME";
    }
  };
  handleHome = () => {
    const { now_contents, onUpdate } = this.props;

    if (now_contents === "HOME") {
      document.getElementById("root").scrollIntoView();
    } else {
      onUpdate("HOME");
    }
  };
  render() {
    const logo_style = {
      height: "40px"
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
          <span style={emoji_style}>🚀&nbsp;&nbsp;</span>
          <span className="menu_now_name">{this.props.toggle_sidebar?("MENU"):(now_contents)}</span>
          <span style={emoji_style}>&nbsp;&nbsp;🚀</span>
        </div>
        <div
          className="menu_menu"
          onClick={() => {
            this.props.onToggle("iamsidebarbutton");
          }}
        >
          {!this.props.toggle_sidebar && ( <img className="menu_menu_img" style={logo_style} src={menu_button} />)}
          {this.props.toggle_sidebar && ( <img className="menu_menu_img" style={logo_style} src={x_button} />)}         
        </div>
      </div>
    );
  }
}

export default Menu;
