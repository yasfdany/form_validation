import axios from 'axios';

export const apiConfig = {
  baseURL: 'https://39389849-733a-4cfe-8670-82623abdff3c.mock.pstmn.io/',
};

export const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
});
