import {Reducer} from 'redux';
import * as actionTypes from '../actions/actionTypes';
import {toDOActions} from '../actions/todoA';
import {ToDoState} from '../types/todoTypes';

const initialState={
    toDos:{
        created: "",
        id: "",
        isCompleted: false,
        text: "",
        updated:"",
        urgency: 0
    },
    haveToDos:false

}

const getAllToDosSuccess = (state:any,action:any) =>{
    return{
        ...state,
        toDos:action.todosArray,
        haveToDos:true
        
    }
}

const getAllToDosFailed = (state:any,action:any) =>{
    return{
        ...state,
        haveToDos:false
        
    }
}


const reducer: Reducer<ToDoState> = (state:ToDoState = initialState,action:toDOActions) =>{
    switch(action.type){
        case(actionTypes.GET_ALL_TODOS_SUCCESS): return getAllToDosSuccess(state,action);
        case(actionTypes.GET_ALL_TODOS_FAILED): return getAllToDosFailed(state,action);
        default: return state;
    }
}

export {reducer as todoReducer};