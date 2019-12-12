import { SET_CATEGORY_FILTER } from '../constants/constants';  

const setCategoryFilter = filter => ({
    type: SET_CATEGORY_FILTER,
    payload: filter
})

export default setCategoryFilter;