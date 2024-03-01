import { seatArr } from "../data";
import { ADD_SEAT, DELETE_SEAT, TOGGLE_SEAT } from "./constant";

let initialState = {
  seatArr: seatArr,
  // isBooked: false,
  cart: [],
};
export let seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEAT: {
      let cloneCart = [...state.cart];
      if (
        cloneCart.findIndex((item) => item.soGhe === action.payload.soGhe) == -1
      ) {
        cloneCart.push(action.payload);
      }
      let seatElement = document.getElementById(action.payload.soGhe);
      console.log(seatElement);
      if (seatElement) {
        seatElement.classList.add("daDat");
      }
      return { ...state, cart: cloneCart };
    }
    // case TOGGLE_SEAT: {
    //   console.log("toggle");
    //   return { ...state, isBooked: !state.isBooked };
    // }
    case DELETE_SEAT: {
      let updatedCart = state.cart.filter((item) => item !== action.payload);
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};
