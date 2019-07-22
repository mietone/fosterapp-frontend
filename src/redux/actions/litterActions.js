import * as types from "./actionTypes";
import { handleResponse } from "../../api/apiUtils";

const apiUrl = "http://localhost:3001/api/v1/litters";

export function createLitterSuccess(litter) {
  return { type: types.CREATE_LITTER_SUCCESS, litter };
}

export function updateLitterSuccess(litter) {
  return { type: types.UPDATE_LITTER_SUCCESS, litter };
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

export const saveLitter = litter => {
  return dispatch => {
    return fetch(apiUrl)
      .then(handleResponse)
      .saveLitter(litter)
      .then(savedLitter => {
        litter.id
          ? dispatch(updateLitterSuccess(savedLitter))
          : dispatch(createLitterSuccess(savedLitter));
      })
      .catch(error => {
        throw error;
      });
  };
};
