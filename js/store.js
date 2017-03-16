import * as reducers from './reducers/index';

import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

export default createStore(reducers.gameReducer, applyMiddleware(thunk));
