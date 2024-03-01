import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SEAT, TOGGLE_SEAT } from "./redux/constant";
import "./css/index.css";

class Item extends Component {
  render() {
    let { hang, danhSachGhe } = this.props.data;
    let { isBooked } = this.props;
    return (
      <div>
        <div className="seat">
          <div className="seat-container">
            <div>{hang}</div>
            {danhSachGhe.map((item) => (
              <div key={item.soGhe}>
                <button
                  onClick={() => {
                    this.props.handleAddSeat(item);
                    this.props.handleToggleSeat(item);
                  }}
                  key={item}
                  className={item.daDat ? "ghe daDat" : "seat-label"}
                  disabled={item.daDat}
                >
                  <input
                    type="checkbox"
                    value={item.soGhe}
                    disabled={item.daDat}
                  />
                  <span className="span-item">{item.soGhe}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    isBooked: state.isBooked,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleAddSeat: (item) => {
      let action = {
        type: ADD_SEAT,
        payload: item,
      };
      dispatch(action);
    },
    handleToggleSeat: (item) => {
      let action = {
        type: TOGGLE_SEAT,
        payload: item,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);
