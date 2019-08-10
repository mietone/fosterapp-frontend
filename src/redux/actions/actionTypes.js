export const CREATE_LITTER = "CREATE_LITTER";
export const LOAD_LITTERS_SUCCESS = "LOAD_LITTERS_SUCCESS";
export const LOAD_KITTENS_SUCCESS = "LOAD_KITTENS_SUCCESS";
export const CREATE_LITTER_SUCCESS = "CREATE_LITTER_SUCCESS";
export const UPDATE_LITTER_SUCCESS = "UPDATE_LITTER_SUCCESS";
export const CREATE_KITTEN_SUCCESS = "CREATE_KITTEN_SUCCESS";
export const UPDATE_KITTEN_SUCCESS = "UPDATE_KITTEN_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_LITTER_OPTIMISTIC = "DELETE_LITTER_OPTIMISTIC";
