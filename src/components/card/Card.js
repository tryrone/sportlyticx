import React, { Component } from "react";
import { chev, hun, path } from "../../img/links";
import { PieChart } from "react-minimal-pie-chart";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <section className="cTop">
          <p className="demo">Demo</p>

          <div className="weBox">
            <p className="we">Week</p>
            <img src={chev} alt="hd" className="chev" />
          </div>
        </section>

        <section className="butMe">
          <ul className="Lhs">
            <li className="huned">
              <img src={hun} alt="dckj" className="One" />
            </li>
            <li className="huned">
              <img src={hun} alt="dckj" className="One" />
            </li>
            <li className="huned">
              <img src={hun} alt="dckj" className="One" />
            </li>
            <li className="huned">
              <img src={hun} alt="dckj" className="One" />
            </li>
            <li className="huned">
              <img src={hun} alt="dckj" className="One" />
            </li>
          </ul>
          <section className="pie">
            <PieChart
              animate={true}
              animationDuration={3}
              reveal={98}
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
                { title: "Three", value: 16, color: "#FFC5BB" },
                { title: "Three", value: 12, color: "#88009E" },
                { title: "Three", value: 24, color: "#F99A02" },
              ]}
            />
          </section>

          <ul className="Lhs">
            <li className="huned">
              <img src={hun} alt="dckj" className="One" />
            </li>
            <li className="huned">
              <img src={hun} alt="dckj" className="One" />
            </li>
            <li className="huned">
              <img src={hun} alt="dckj" className="One" />
            </li>
            <li className="huned">
              <img src={hun} alt="dckj" className="One" />
            </li>
            <li className="huned">
              <img src={hun} alt="dckj" className="One" />
            </li>
          </ul>
        </section>

        <section className="nine">
          <img src={path} alt="jc" className="path" />
          <p className="vie">view more insights</p>
        </section>
      </div>
    );
  }
}
