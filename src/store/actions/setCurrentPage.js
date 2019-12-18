import { SET_CURRENT_PAGE } from '../constants';

const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export default setCurrentPage;
