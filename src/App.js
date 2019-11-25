import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";

class App extends Component {
  state = {
    now_contents: "HOME" //home, project(n)
  };
  render() {
    return (
      <div className="full_container">
        <Menu now_contents={this.state.now_contents} />
        {this.state.now_contents === "HOME" && <Home />}
        {this.state.now_contents === "project1" && (
          <Project now_contents={this.state.now_contents} />
        )}
        {this.state.now_contents === "project2" && (
          <Project now_contents={this.state.now_contents} />
        )}
      </div>
    );
  }
}

export default App;
