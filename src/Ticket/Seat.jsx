import React, { Component } from "react";
import List from "./List";
import Cart from "./Cart";
import Detail from "./Detail";

export default class Seat extends Component {
  render() {
    return (
      <div>
        <Cart />
        <List />
        <Detail />
      </div>
    );
  }
}
