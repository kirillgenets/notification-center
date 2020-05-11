import { SET_READ_STATUS_FILTER } from '../constants';

const setReadStatusFilter = (filter) => ({
  type: SET_READ_STATUS_FILTER,
  payload: filter,
});


export default setReadStatusFilter;
