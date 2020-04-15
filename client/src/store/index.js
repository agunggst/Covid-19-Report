import { createStore, combineReducers, applyMiddleware } from 'redux';
import favReducer from './reducers/favReducer';
import apiReducer from './reducers/apiReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducers = combineReducers({
    favReducer,
    apiReducer
})

const store = createStore(reducers, applyMiddleware(thunk, logger))

export default store