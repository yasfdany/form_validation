import {apiClient} from '../../data/services/apiClient';
import {ActionTypes} from '../constants/actionTypes';

export const doRegister = params => async dispatch => {
  dispatch({
    type: ActionTypes.SET_LOADING_REGISTER,
    payload: {
      loading: true,
    },
  });
  await apiClient.post('register', params).then((response: AxiosResponse) => {
    dispatch({
      type: ActionTypes.DONE_REGISTER,
      payload: {
        response: response,
      },
    });
  });
};
