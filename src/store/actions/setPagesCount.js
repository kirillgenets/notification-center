import { SET_PAGES_COUNT } from '../constants';

const setCurrentPage = (count) => ({
  type: SET_PAGES_COUNT,
  payload: count,
});

export default setCurrentPage;
