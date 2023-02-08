import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const axiosGlobal = axios.create({
    baseURL: '',
    headers: {
        Accept:'application/json',
        Authorization: AUTH_TOKEN,
    }
  });

export default axiosGlobal