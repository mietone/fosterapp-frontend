import * as types from "./actionTypes";
import { handleResponse, handleError } from "../../api/apiUtils";

const apiUrl = "http://localhost:3001/api/v1/litters";

export function createLitter(litter) {
  return { type: types.CREATE_LITTER, litter };
}

// async with Thunk

export const loadLitters = () => {
  return dispatch => {
    return fetch(apiUrl)
      .then(handleResponse)
      .then(litters => {
        dispatch({
          type: types.LOAD_LITTERS_SUCCESS,
          litters
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
