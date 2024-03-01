import React, { Component } from "react";
import List from "./List";
import Cart from "./Cart";
import "./css/index.css";

export default class Seat extends Component {
  render() {
    return (
      <div>
        <div className="row pt-3">
          <div className="col-8" style={{ height: "100vh" }}>
            <List />
          </div>
          <div className="col-4">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}
