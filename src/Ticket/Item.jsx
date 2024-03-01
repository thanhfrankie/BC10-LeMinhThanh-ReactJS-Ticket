import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SEAT } from "./redux/constant";
import "./css/index.css";

class Item extends Component {
  render() {
    let { hang, danhSachGhe } = this.props.data;
    console.log(this.props.data);
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
let mapDispatchToProps = (dispatch) => {
  return {
    handleAddSeat: (item) => {
      let action = {
        type: ADD_SEAT,
        payload: item,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Item);
