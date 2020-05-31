import axios from 'axios';

const fetchData = (url, params = {}) =>
	axios.get(url, {
		params: params,
	});

export default fetchData;
