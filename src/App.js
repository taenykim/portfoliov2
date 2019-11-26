import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";

class App extends Component {
  state = {
    now_contents: "HOME" //home, project(n)
  };
  handleUpdate = data => {
    this.setState({
      now_contents: data
    });
  };
  render() {
    return (
      <div className="full_container">
        <Menu
          onUpdate={this.handleUpdate}
          now_contents={this.state.now_contents}
        />
        {this.state.now_contents === "HOME" && (
          <Home onUpdate={this.handleUpdate} />
        )}
        {this.state.now_contents != "HOME" && (
          <Project now_contents={this.state.now_contents} />
        )}
      </div>
    );
  }
}

export default App;
