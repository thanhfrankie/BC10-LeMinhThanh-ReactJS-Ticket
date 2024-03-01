import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import "./css/index.css";

class List extends Component {
  renderListSeat = () => {
    return this.props.seatArr.map((item) => {
      console.log(item);
      return <Item key={item.hang} data={item} />;
    });
  };

  render() {
    return <div className="row col-8">{this.renderListSeat()}</div>;
  }
}
let mapStateToProps = (state) => {
  return {
    seatArr: state.seatArr,
  };
};
export default connect(mapStateToProps)(List);
