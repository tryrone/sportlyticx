import React, { Component } from "react";
import Card from "../card/Card";
import "./MainStyle.css";

export default class Main extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#F5F6FA",
          width: "100%",
          padding: "33px",
          color: "#636566",
          // height: "120vh",
          // position: "fixed",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold", fontSize: "32px" }}>
          Overview
        </p>
        <Card />
      </div>
    );
  }
}
