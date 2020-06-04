import axios from 'axios';

const fetchData = (url, params = {}) =>
	axios.get(url, {
		params,
	});

export default fetchData;
