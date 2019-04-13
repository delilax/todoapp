import {Reducer} from 'redux';
import * as actionTypes from '../actions/actionTypes';

import {SessionActions} from '../actions/sessionA';
import {SessionState} from '../types/sessionTypes';


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

const reducer: Reducer<SessionState> = (state:SessionState=initialState,action:SessionActions) =>{
    switch(action.type){
        case(actionTypes.START_SESSION_SUCCESS): return startSessionSuccess(state,action);
        case(actionTypes.DELETE_SESSION_SUCCESS): return deleteSessionSuccess(state,action);
        case(actionTypes.CHANGE_SESSION_FAILURE_NUM_SUCCESS): return changeFailureRateSuccess(state,action);
        case(actionTypes.SET_FAILURE_RATE_NUMBER): return failureRateNumber(state,action);
        default: return state;
    }
}

export {reducer as sessionReducer};