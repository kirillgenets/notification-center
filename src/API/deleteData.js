import axios from 'axios';

const deleteData = (url, params = {}) => axios.delete(url, params);

export default deleteData;
