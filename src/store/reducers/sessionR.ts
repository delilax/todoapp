import * as actionTypes from '../actions/actionTypes';

import {SessionActions} from '../actions/sessionA';

export interface SessionState {
    sessionId:string,
    failure:number
}


const initialState={
    sessionId:'',
    failure:0

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

const changeFailureRateSuccess = (state:any,action:any) =>{
    return{
        ...state,
        failure:action.errorRate
    }
}

const failureRateNumber = (state:any,action:any) =>{
    return{
        ...state,
        failure:action.num
    }
}

const reducer = (state:SessionState=initialState,action:SessionActions) =>{
    switch(action.type){
        case(actionTypes.START_SESSION_SUCCESS): return startSessionSuccess(state,action);
        case(actionTypes.DELETE_SESSION_SUCCESS): return deleteSessionSuccess(state,action);
        case(actionTypes.CHANGE_SESSION_FAILURE_NUM_SUCCESS): return changeFailureRateSuccess(state,action);
        case(actionTypes.SET_FAILURE_RATE_NUMBER): return failureRateNumber(state,action);
        default: return state;
    }
}

export default reducer;