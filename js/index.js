require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as actions from './actions/index'

import store from './store';
import GameContainer from './components/game-conainer';


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
            <GameContainer />
        </Provider>,
        document.getElementById('app')
    )
);
