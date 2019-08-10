/* eslint-disable no-unused-expressions */
import * as types from "./actionTypes";
import { handleResponse } from "../../api/apiUtils";
import * as litterApi from "../../api/litterApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

const apiUrl = "http://localhost:3001/api/v1/litters";

export function createLitterSuccess(litter) {
  return { type: types.CREATE_LITTER_SUCCESS, litter };
}

export function updateLitterSuccess(litter) {
  return { type: types.UPDATE_LITTER_SUCCESS, litter };
}

export function deleteLitterOptimistic(litter) {
  return { type: types.DELETE_LITTER_OPTIMISTIC, litter };
}

// async with Thunk

export const loadLitters = () => {
  return dispatch => {
    dispatch(beginApiCall());
    return fetch(apiUrl)
      .then(handleResponse)
      .then(litters => {
        dispatch({
          type: types.LOAD_LITTERS_SUCCESS,
          litters
        });
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};

export const saveLitter = litter => {
  return dispatch => {
    dispatch(beginApiCall());
    // eslint-disable-next-line prettier/prettier
    return litterApi.saveLitter(litter)
      .then(savedLitter => {
        litter.id
          ? dispatch(updateLitterSuccess(savedLitter))
          : dispatch(createLitterSuccess(savedLitter));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};

export const deleteLitter = litter => {
  return dispatch => {
    dispatch(deleteLitterOptimistic(litter));
    return litterApi.deleteLitter(litter.id);
  };
};
