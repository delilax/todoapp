import axios from 'axios';
import * as actionTypes from './actionTypes';
import { Action, Dispatch } from 'redux';

export function isAction<A extends Action>(action: Action, type: string): action is A {
  return action.type === type;
}
export interface IActionStartSessionSuccess extends Action {
  type: "START_SESSION_SUCCESS";
  idSession: string;
}

export interface IActionStartSessionFailed extends Action {
  type: "START_SESSION_FAILED";
}

export interface IActionDeleteSessionSuccess extends Action {
  type: "DELETE_SESSION_SUCCESS";
  idSession: string;
}

export interface IActionDeleteSessionFailure extends Action {
  type: "DELETE_SESSION_FAILURE";
}

export interface IActionChangeErrorFailureSuccess extends Action {
  type: "CHANGE_SESSION_FAILURE_NUM_SUCCESS";
  errorRate: number;
}

export interface IActionChangeErrorFailureFailure extends Action {
  type: "CHANGE_SESSION_FAILURE_NUM_FAILURE";
}

export interface IActionSetFailureRateNumber extends Action {
  type: "SET_FAILURE_RATE_NUMBER";
  num: number;
}

export type SessionActions =
  | IActionStartSessionSuccess
  | IActionStartSessionFailed
  | IActionDeleteSessionSuccess
  | IActionDeleteSessionFailure
  | IActionChangeErrorFailureSuccess
  | IActionChangeErrorFailureFailure
  | IActionSetFailureRateNumber;

export const setFailureNumber = (
  failureNumber: number
): IActionSetFailureRateNumber => {
  return {
    type: actionTypes.SET_FAILURE_RATE_NUMBER,
    num: failureNumber
  };
};

export const startSessionSuccess = (id: string): IActionStartSessionSuccess => {
  return {
    type: actionTypes.START_SESSION_SUCCESS,
    idSession: id
  };
};

export const startSessionFailed = (): IActionStartSessionFailed => {
  return {
    type: actionTypes.START_SESSION_FAILED
  };
};

export const startSession: any = () => {
  return (dispatch: Dispatch) => {
    axios
      .post("http://localhost:9000/api/session")
      .then(response => {
        console.log(response);
        dispatch(startSessionSuccess(response.data.sessionId));
      })
      .catch(error => {
        console.log(error);
        dispatch(startSessionSuccess(error));
      });
  };
};

export const deleteSessionSuccess = (id: any): IActionDeleteSessionSuccess => {
  return {
    type: actionTypes.DELETE_SESSION_SUCCESS,
    idSession: id
  };
};

export const deleteSessionFailure = (id: any): IActionDeleteSessionFailure => {
  return {
    type: actionTypes.DELETE_SESSION_FAILURE
  };
};

export const deleteSession: any = (id: string) => {
  const headers = {
    sessionId: id
  };

  return (dispatch: Dispatch) => {
    axios
      .delete("http://localhost:9000/api/session", { headers })
      .then(response => {
        console.log(response);
        dispatch(deleteSessionSuccess(response.data.sessionId));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const changeSessionFailureNumberSuccess = (
  error: any
): IActionChangeErrorFailureSuccess => {
  return {
    type: actionTypes.CHANGE_SESSION_FAILURE_NUM_SUCCESS,
    errorRate: error
  };
};

export const changeSessionFailureNumberFailure = (
  id: any
): IActionChangeErrorFailureFailure => {
  return {
    type: actionTypes.CHANGE_SESSION_FAILURE_NUM_FAILURE
  };
};

export const changeSessionFailureNumber: any = (
  errorRate: number,
  id: string
) => {
  const headers = {
    sessionId: id
  };
  const body = {
    errorRate: errorRate
  };

  return (dispatch: Dispatch) => {
    axios
      .patch("http://localhost:9000/api/session", body, { headers })
      .then(response => {
        console.log(response);
        dispatch(changeSessionFailureNumberSuccess(response.data.errorRate));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
