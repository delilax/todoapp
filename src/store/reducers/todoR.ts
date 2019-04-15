import { Reducer } from "redux";
import * as actionTypes from "../actions/actionTypes";
import { toDOActions } from "../actions/todoA";
import { ToDoState } from "../types/todoTypes";

const initialState = {
  toDos: {
    created: "",
    id: "",
    isCompleted: false,
    text: "",
    updated: "",
    urgency: 0
  },
  haveToDos: false,
  testVar: false
};

const getAllToDosSuccess = (state: any, action: any) => {
  return {
    ...state,
    toDos: action.todosArray,
    haveToDos: true
  };
};

const getAllToDosFailed = (state: any, action: any) => {
  return {
    ...state,
    haveToDos: false
  };
};

const createToDoSuccess = (state: any, action: any) => {
  const copyState = Object.assign({}, state);

  const copyStateToDos = Array.from(Object.create(copyState.toDos));
  copyStateToDos.push(action.newTask);
  return {
    ...state,
    toDos: copyStateToDos
  };
};

const alterToDoInState = (state: any, action: any) => {
  let i = 0;
  if (state.haveToDos) {
    const copyState = Object.assign({}, state);
    const copyStateToDos = Array.from(Object.create(copyState.toDos));
    copyStateToDos.map((task: any) => {
      if (task.id == action.todosAltered.id) {
        task.text = action.todosAltered.text;
        task.updated = action.todosAltered.updated;
        task.isCompleted = action.todosAltered.isCompleted;
        task.urgency = action.todosAltered.urgency;
      }
    });
    return {
      ...state,
      toDos: copyStateToDos
    };
  }
  return state;
};

const deletedToDo = (state: any, action: any) => {
  return {
    ...state,
    toDos: action.newArray,
    haveToDos: true
  };
};

const reducer: Reducer<ToDoState> = (
  state: ToDoState = initialState,
  action: toDOActions
) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TODOS_SUCCESS:
      return getAllToDosSuccess(state, action);
    case actionTypes.GET_ALL_TODOS_FAILED:
      return getAllToDosFailed(state, action);
    case actionTypes.CREATE_TODO_SUCCESS:
      return createToDoSuccess(state, action);
    case actionTypes.ALTER_TODO_IN_STATE_SUCCESS:
      return alterToDoInState(state, action);
    case actionTypes.DELETE_TODO_SUCCESS:
      return deletedToDo(state, action);
    default:
      return state;
  }
};

export { reducer as todoReducer };
