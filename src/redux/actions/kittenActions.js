/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import * as types from "./actionTypes";
import { handleResponse } from "../../api/apiUtils";
import * as kittenApi from "../../api/kittenApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

const apiUrl = "http://localhost:3001/api/v1/kittens";

export function createKittenSuccess(kitten) {
  return { type: types.CREATE_KITTEN_SUCCESS, kitten };
}

export function updateKittenSuccess(kitten) {
  return { type: types.UPDATE_KITTEN_SUCCESS, kitten };
}

// async with Thunk

export const loadKittens = () => {
  return dispatch => {
    dispatch(beginApiCall());
    return fetch(apiUrl)
      .then(handleResponse)
      .then(kittens => {
        dispatch({
          type: types.LOAD_KITTENS_SUCCESS,
          kittens
        });
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};

export const saveKitten = kitten => {
  return dispatch => {
    dispatch(beginApiCall());
    // eslint-disable-next-line prettier/prettier
    return kittenApi.saveKitten(kitten)
      .then(savedKitten => {
        kitten.id
          ? dispatch(updateKittenSuccess(savedKitten))
          : dispatch(createKittenSuccess(savedKitten));
      })
      .catch(error => {
        throw error;
      });
  };
};
