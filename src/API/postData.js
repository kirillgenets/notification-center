import axios from 'axios';

const postData = (url, body = {}, params = {}) => axios.post(url, body, { params });

export default postData;
