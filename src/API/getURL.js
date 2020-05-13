import { API_URL, TASKS_PER_PAGE } from '../store/constants';

const getURL = (queries, pageSize = TASKS_PER_PAGE) => {
  const preparedQueries = Object.entries(queries)
    .map((entry) => `${entry[0]}=${entry[1]}`)
    .join('&');

  return `${API_URL}/?${preparedQueries}&pageSize=${pageSize}`;
};

export default getURL;
