import axios from 'axios';

export const apiConfig = {
  baseURL: 'https://40b38708-075d-419e-8097-7e9d607d22db.mock.pstmn.io/',
};

export const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
});
