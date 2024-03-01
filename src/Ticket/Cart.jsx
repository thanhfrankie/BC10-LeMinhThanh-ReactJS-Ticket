import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_SEAT } from "./redux/constant";
import "./css/index.css";
class Cart extends Component {
  render() {
    return (
      <div className="col-12">
        <h3>Danh Sách Ghế Bạn Chọn</h3>
        <table style={{ color: "white" }} className="table">
          <thead className="thead">
            <tr>
              <th className="table-header">Số Ghế</th>
              <th className="table-header">Giá</th>
              <th className="table-header">Hủy</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, index) => {
              return (
                <tr key={item}>
                  <td style={{ color: "" }}>{item.soGhe}</td>
                  <td style={{ color: "" }}>{item.gia}</td>
                  <td>
                    <button
                      onClick={() => this.props.handleDelete(item)}
                      className="btn btn-danger"
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (item) => {
      let action = {
        type: DELETE_SEAT,
        payload: item,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
