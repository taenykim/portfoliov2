import React, { Component, Fragment } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";

class App extends Component {
  state = {
    now_contents: "HOME", //home, project(n)
    toggle_sidebar: false
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
        toggle_sidebar: false,
      });
    } else if (side === "iamsidebarbutton") {
      sidebar[0].style = "right:0";
      this.setState({
        toggle_sidebar: true,
      });
    }
  };
  render() {
    return (
      <Fragment>
        <div className="sidebar">
          <div className="sidebar_title">MENU</div>
          <ul className="sidebar_list">
            <li
              onClick={() => {
                this.setState({
                  now_contents: "PROJECT1"
                });
                this.handleToggle();
              }}
            >
              PROJECT1
            </li>
            <li
              onClick={() => {
                this.setState({
                  now_contents: "PROJECT2"
                });
                this.handleToggle();
              }}
            >
              PROJECT2
            </li>
            <li
              onClick={() => {
                this.setState({
                  now_contents: "PROJECT3"
                });
                this.handleToggle();
              }}
            >
              PROJECT3
            </li>
            <li
              onClick={() => {
                this.setState({
                  now_contents: "PROJECT4"
                });
                this.handleToggle();
              }}
            >
              PROJECT4
            </li>
          </ul>
        </div>
        <div className="full_container" onClick={this.handleToggle}>
          <Menu
            onUpdate={this.handleUpdate}
            now_contents={this.state.now_contents}
            onToggle={this.handleToggle}
            toggle_sidebar={this.state.toggle_sidebar}
          />
          {this.state.now_contents === "HOME" && (
            <Home onUpdate={this.handleUpdate} />
          )}
          {this.state.now_contents === "MENU" && (
            <Home onUpdate={this.handleUpdate} />
          )}
          {this.state.now_contents != "HOME" && (
            <Project now_contents={this.state.now_contents} />
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
