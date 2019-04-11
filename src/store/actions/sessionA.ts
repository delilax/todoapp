import axios from 'axios';
import * as actionTypes from './actionTypes';

export const startSessionSuccess = (id:any)=>{
    return {
        type:actionTypes.START_SESSION_SUCCESS,
        idSession:id
    }
}

export const startSessionFailed = (id:any)=>{
    return {
        type:actionTypes.START_SESSION_FAILED
    }
}

export const startSession = () =>{
    return (dispatch:any) =>{
        axios.post('http://localhost:9000/api/session')
      .then(response =>{
          dispatch(startSessionSuccess(response.data.sessionId));
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
        dispatch(startSessionSuccess(error));
      })
    }
}


export const deleteSessionSuccess = (id:any) =>{
  return {
    type:actionTypes.DELETE_SESSION_SUCCESS,
    idSession:id
  }
}

export const deleteSessionFailure = (id:any) =>{
  return {
    type:actionTypes.DELETE_SESSION_FAILURE
  }
}

export const deleteSession = (headers:object) =>{
  return (dispatch:any) =>{
    axios.delete('http://localhost:9000/api/session', {headers})
    .then(response =>{
      dispatch(deleteSessionSuccess(response.data.sessionId));
      console.log(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }
}

export const changeSessionFailureNumberSuccess = (id:any) =>{
  return {
    type:actionTypes.CHANGE_SESSION_FAILURE_NUM_SUCCESS,
    idSession:id
  }
}

export const changeSessionFailureNumberFailure = (id:any) =>{
  return {
    type:actionTypes.CHANGE_SESSION_FAILURE_NUM_FAILURE
  }
}

export const changeSessionFailureNumber = (body:object, headers:object) =>{
  return (dispatch:any) =>{
    axios.patch('http://localhost:9000/api/session', body,{headers})
    .then(response =>{
      console.log(response);
      dispatch(changeSessionFailureNumberSuccess(response.data.sessionId));
    })
    .catch(error =>{
      console.log(error);
    })
}