import {Reducer} from 'redux';
import * as actionTypes from '../actions/actionTypes';
import {toDOActions} from '../actions/todoA';

export interface toDoState {
    toDos: { 
        created: string; 
        id: string; 
        isCompleted: boolean; 
        text: string; 
        updated: string; 
        urgency: number; 
    }
}

const initialState={
    toDos:{
        created: "",
        id: "",
        isCompleted: false,
        text: "",
        updated:"",
        urgency: 0
    }

}

const getAllToDosSuccess = (state:any,action:any) =>{
    let res:Number[]=[];
    for(let key in action.todosArray){
        res[key as any]=(action.todosArray[key]);
    };
    // console.log(typeof(res));
    return{
        ...state,
        toDos:res
        
    }
}
getAllToDosSuccess

const reducer: Reducer<toDoState> = (state:toDoState = initialState,action:toDOActions) =>{
    switch(action.type){
        case(actionTypes.GET_ALL_TODOS_SUCCESS): return getAllToDosSuccess(state,action);
        default: return state;
    }
}

export {reducer as todoReducer};