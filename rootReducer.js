import { combineReducers } from 'redux';
import movieReducer from './reducer';

export default combineReducers({
    movies: movieReducer,
});