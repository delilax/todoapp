import {ApplicationState} from './store/index';
import {createStore, applyMiddleware, compose, combineReducers, Store} from 'redux';
import {rootReducer} from './store/index';
import thunk from 'redux-thunk';

export default function configureStore(
    initialState:ApplicationState
):Store<ApplicationState>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store=createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}


