import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";

class List extends Component {
  renderListSeat = () => {
    return this.props.seat.map((item) => {
      return <Item key={item.id} data={item} />;
    });
    };
    
  render() {
    return (
      <div>
        <Item />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    seat: state.seatArr,
  };
};
export default connect(mapStateToProps)(List);
