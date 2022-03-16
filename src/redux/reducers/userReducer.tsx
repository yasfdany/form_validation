import {ActionTypes} from '../constants/actionTypes';

const initialState = {
  loadingCreateUser: false,
  loadingGetUser: false,
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.DONE_GET_USER:
      return {
        ...state,
        getUserResponse: payload.response,
        loadingGetUser: false,
      };
    case ActionTypes.SET_LOADING_CREATE:
      return {
        ...state,
        loadingCreateUser: payload.loading,
      };
    case ActionTypes.SET_LOADING_GET_USER:
      return {
        ...state,
        loadingGetUser: payload.loading,
      };
    default:
      return state;
  }
};
