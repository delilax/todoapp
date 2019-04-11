import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';

import thunk from 'redux-thunk';

import sessionR from './store/reducers/sessionR';
// import todoR from './store/reducers/todoR';

const rootReducer = combineReducers({
    session: sessionR,
    // todo: todoR
});

const store=createStore(rootReducer,(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
            <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
