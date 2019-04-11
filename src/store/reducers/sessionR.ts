import * as actionTypes from '../actions/actionTypes';

const initialState={
    sessionId:'',
    failure:30
}

const startSessionSuccess = (state:any,action:any) =>{
    return{
        ...state,
        sessionId:action.idSession
    }
}

const deleteSessionSuccess = (state:any,action:any) =>{
    return{
        ...state,
        sessionId:''
    }
}


const reducer = (state=initialState,action:any) =>{
    switch(action.type){
        case(actionTypes.START_SESSION_SUCCESS): return startSessionSuccess(state,action);
        case(actionTypes.DELETE_SESSION_SUCCESS): return deleteSessionSuccess(state,action);
        default: return state;
    }
}

export default reducer;