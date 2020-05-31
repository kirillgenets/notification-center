import axios from 'axios';

const postData = (url, params = {}) => axios.post(url, params);

export default postData;
