import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import memberReducer from '../reducers/memberReducer';

import thunk from 'redux-thunk';

const middleware = [thunk];

const reducer = combineReducers({

    memberState : memberReducer,
});


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) )

export default store;