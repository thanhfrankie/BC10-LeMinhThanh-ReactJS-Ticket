import {ADD_SEAT, DELETE_SEAT } from "./constant";

let initialState = {
  danhSachGheDangDat: [],
};

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEAT: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe == action.ghe.soGhe
      );
      if (index !== -1) {
        //nếu đã có ghế đó trong mảng thì xoá ghế đó đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // nếu chưa có ghế đó trong mảng thì push ghế đó vào mảng
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case DELETE_SEAT: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        //nếu đã có ghế đó trong mảng thì xoá ghế đó đi
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default seatReducer;