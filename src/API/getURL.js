import { API_URL, NOTIFICATIONS_PER_PAGE } from '../store/constants';

const getURL = (page, category, isRead) => {
  let URL = `${API_URL}/?page=${page}&perPage=${NOTIFICATIONS_PER_PAGE}`;
  URL += category ? `&category=${category}` : '';
  URL += isRead ? `&isRead=${isRead}` : '';

  return URL;
};

export default getURL;
