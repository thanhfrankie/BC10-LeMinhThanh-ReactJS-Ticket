import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../reducer/action";

class Cart extends Component {
  render() {
    return (
      <div>
        <div className="text-light mt-1">
          <button className="gheDuocChon"></button>{" "}
          <span style={{ fontSize: "30px" }}> Ghế đã đặt</span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span style={{ fontSize: "30px" }}> Ghế đang đặt</span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>{" "}
          <span style={{ fontSize: "30px" }}> Ghế chưa đặt</span>
        </div>
        <div className="mt-1">
          <table className="table text-warning" border="3">
            <thead className="text-center">
              <tr style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.huyGhe(gheDangDat.soGhe);
                        }}
                        className=" btn-danger"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning text-center">
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe: (soGhe) => dispatch(huyGheAction(soGhe)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
