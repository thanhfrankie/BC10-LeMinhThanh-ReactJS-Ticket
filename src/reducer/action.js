import {ADD_SEAT, DELETE_SEAT } from "./constant";

export const datGheAction = (ghe) => {
  return {
    type: ADD_SEAT,
    ghe,
  };
};

export const huyGheAction = (soGhe) => ({
  type: DELETE_SEAT,
  soGhe,
});
