import axios from 'axios';

const putData = (url, body = {}, params = {}) => axios.put(url, body, { params });

export default putData;
