/* eslint-disable import/prefer-default-export */
import * as types from "./actionTypes";
import { handleResponse } from "../../api/apiUtils";

const apiUrl = "http://localhost:3001/api/v1/kittens";

// async with Thunk

export const loadKittens = () => {
  return dispatch => {
    return fetch(apiUrl)
      .then(handleResponse)
      .then(kittens => {
        dispatch({
          type: types.LOAD_KITTENS_SUCCESS,
          kittens
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
