import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState, history = {}, middlewares = []) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = composeEnhancers(
        applyMiddleware(thunk,...middlewares),
    );
    return createStore(rootReducer, initialState, middleware);
}