import { seatArr } from "../data";

let initialState = {
  seat: seatArr,
  detail: seatArr[0],
  cart: [],
};
export let seatReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
