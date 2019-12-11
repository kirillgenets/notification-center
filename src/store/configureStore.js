import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';

const configureStore = initialState => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(createSagaMiddleware())
    );
}

export default configureStore;
