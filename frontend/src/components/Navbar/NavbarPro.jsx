import React, { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarPro.css";

export default class NavbarPro extends Component {
  
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo">
          React<i className="fab fa-react"> </i>
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
          {MenuData.map((item, index) => (
            <li key={index}>
              <a href={item.url} className={item.classN}>
                <i className={item.icon} >{item.title}</i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
