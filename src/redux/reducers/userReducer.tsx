import {ActionTypes} from '../constants/actionTypes';

const initialState = {
  loading: false,
  registerResponse: undefined,
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.DONE_REGISTER:
      return {
        ...state,
        registerResponse: payload.response,
        loading: false,
      };
    case ActionTypes.SET_LOADING_REGISTER:
      return {
        ...state,
        loading: payload.loading,
      };
    default:
      return state;
  }
};
