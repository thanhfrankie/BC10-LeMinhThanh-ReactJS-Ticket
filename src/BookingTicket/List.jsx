import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../reducer/action";

class List extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;
      //trạng thái ghế đã bị đặt
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      // xét trạng thái ghế đang đặt
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDaDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disable}
          className={`ghe ${cssGheDaDat} ${cssGheDaDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">{hang.soGhe}</button>;
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-4">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-light text-left ml-5 mt-1" style={{ fontSize: 25 }}>
        {this.renderHangGhe()}
      </div>
    );
  }
}

//lấy mảng danhSachGheDangDat từ redux về
let mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.danhSachGheDangDat,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);