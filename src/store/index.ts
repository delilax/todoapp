import { combineReducers, Dispatch, Reducer, Action, AnyAction } from 'redux';
import {SessionState} from './types/sessionTypes';
import {ToDoState} from './types/todoTypes';
import {sessionReducer} from './reducers/sessionR';
import {todoReducer} from './reducers/todoR';

export interface ApplicationState{
    session: SessionState,
    todo: ToDoState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
  }
  
export const rootReducer = combineReducers<ApplicationState>({
    session: sessionReducer,
    todo: todoReducer
})