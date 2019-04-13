import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';


import thunk from 'redux-thunk';

import * as sessionR from './store/reducers/sessionR';
import * as todoR from './store/reducers/todoR';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export interface RootState extends StoreEnhancerState {
//     router: RouterState;
//     counters: CountersState;
//     todos: TodosState;
//   }

const rootReducer = combineReducers({
    session: sessionR,
    todo: todoR
});

const store=createStore(rootReducer,composeEnhancers(
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
