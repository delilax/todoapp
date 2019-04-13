import * as actionTypes from '../actions/actionTypes';

import {toDOActions} from '../actions/todoA';

export interface toDoState {
    toDos: { created: null; id: null; isCompleted: null; text: null; updated: null; urgency: null; }
}

const initialState={
    toDos:{
        created: null,
        id: null,
        isCompleted: null,
        text: null,
        updated:null,
        urgency: null
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

const reducer = (state:toDoState = initialState,action:toDOActions) =>{
    switch(action.type){
        case(actionTypes.GET_ALL_TODOS_SUCCESS): return getAllToDosSuccess(state,action);
        default: return state;
    }
}

export default reducer;