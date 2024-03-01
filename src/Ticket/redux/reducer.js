import { seatArr } from "../data";
import { ADD_SEAT, DELETE_SEAT } from "./constant";

let initialState = {
  seatArr: seatArr,
  detail: seatArr[0],
  cart: [],
};
export let seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEAT: {
      let cloneCard = [...state.cart];
      if (
        cloneCard.findIndex((item) => item.soGhe === action.payload.soGhe) == -1
      ) {
        cloneCard.push(action.payload);
      }
      return { ...state, cart: cloneCard };
    }
    case DELETE_SEAT: {
      let updatedCart = state.cart.filter((item) => item !== action.payload);
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};
