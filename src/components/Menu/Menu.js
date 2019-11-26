import React, { Component } from 'react';
import "./Menu.css";
import logo from "./logo1.png";
import menu_button from "./menu_button.png";

class Menu extends Component {
    render() {
        const logo_style={
            height:"60px",
        }
        const {now_contents} = this.props;
        return (
            <div className="menu_container">
                <div className="menu_home"><img style={logo_style} src={logo}/></div>
                <div className="menu_now">this is {now_contents}</div>
                <div className="menu_menu"><img style={logo_style} src={menu_button}/></div>
            </div>
        );
    }
}

export default Menu;