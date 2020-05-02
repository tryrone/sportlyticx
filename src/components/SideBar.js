import React, { Component } from "react";
import {
  spons,
  vector,
  shirt,
  bk,
  bulb,
  shake,
  tic,
  people,
  heart,
  brand,
  meg,
  pad,
} from "../img/links";

import "./SideStyle.css";

export default class SideBar extends Component {
  render() {
    return (
      <section className="side">
        <img src={spons} alt="hd" className="spons" />
        <ul className="side-list">
          <li className="row">
            <img src={vector} alt="djc" className="icon" />
            <p>Demo</p>
          </li>
          <li className="row">
            <img src={shirt} alt="djc" className="icon" />
            <p>Demo</p>
          </li>
          <li className="row">
            <img src={bk} alt="djc" className="icon" />
            <p>Demo</p>
          </li>
          <li className="row">
            <img src={bulb} alt="djc" className="icon" />
            <p>Demo</p>
          </li>
          <li className="row">
            <img src={shake} alt="djc" className="icon" />
            <p>Demo</p>
          </li>
          <li className="row">
            <img src={tic} alt="djc" className="icon" />
            <p>Demo</p>
          </li>
          <li className="row">
            <img src={people} alt="djc" className="icon" />
            <p>Demo</p>
          </li>
          <li className="row">
            <img src={heart} alt="djc" className="icon" />
            <p>Demo</p>
          </li>
          <li className="row">
            <img src={meg} alt="djc" className="icon" />
            <p>Demo</p>
          </li>
          <li className="row">
            <img src={pad} alt="djc" className="icon" />
            <p>Demo</p>
          </li>
        </ul>

        <img src={brand} alt="jb" className="brand" />
      </section>
    );
  }
}
