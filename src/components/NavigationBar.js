import React, { Component } from "react";
import { logo, search, lamp, down } from "../img/links";
import "./NavStyle.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="sport">
          <img src={logo} alt="kdjnilk" className="logo" />
        </div>

        <div className="searchBar">
          <img src={search} alt="btn" className="search" />
          <input placeholder="Search" className="sr" />
        </div>

        <div className="navRight">
          <img src={lamp} alt="jcn" className="lamp" />
          <div className="det">
            <p className="Bname">Frank Lampard</p>
            <p className="Sname">Coach</p>
          </div>
          <img src={down} alt="jnc" className="down" />
        </div>
      </nav>
    );
  }
}
