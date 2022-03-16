import {apiClient} from '../../data/services/apiClient';
import {ActionTypes} from '../constants/actionTypes';

export const createUser = (params, onFinish) => async dispatch => {
  dispatch({
    type: ActionTypes.SET_LOADING_CREATE,
    payload: {
      loading: true,
    },
  });
  await apiClient
    .post('create-user', params)
    .then((response: AxiosResponse) => {
      if (onFinish) {
        onFinish(response);
      }
    });
};

export const getUsers = () => async dispatch => {
  dispatch({
    type: ActionTypes.SET_LOADING_GET_USER,
    payload: {
      loading: true,
    },
  });
  await apiClient.get('get-users').then((response: AxiosResponse) => {
    dispatch({
      type: ActionTypes.DONE_GET_USER,
      payload: {
        response: response,
      },
    });
  });
};
