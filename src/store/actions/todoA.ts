import axios from 'axios';
import * as actionTypes from './actionTypes';
import { Action, Dispatch } from 'redux';

export function isAction<A extends Action>(action: Action, type: string): action is A {
  return action.type === type;
}


export interface IActionGetAllTodosSuccess extends Action {
    type: 'GET_ALL_TODOS_SUCCESS',
    todosArray:any
  }

export interface IActionGetAllTodosFailed extends Action {
    type: 'GET_ALL_TODOS_FAILED'
  }
  

  export type toDOActions = IActionGetAllTodosSuccess | 
                            IActionGetAllTodosFailed;


export const getAllTodosSuccess = (todos:any):IActionGetAllTodosSuccess =>{
    return {
      type:actionTypes.GET_ALL_TODOS_SUCCESS,
      todosArray:todos
    }
  }
  
  export const getAllTodosFailed = (id:string):IActionGetAllTodosFailed =>{
    return {
      type:actionTypes.GET_ALL_TODOS_FAILED
    }
  }

export const getAllTodos:any = (id:string) =>{
    const headers={
        'sessionId': id
      }

    return (dispatch:Dispatch) =>{
        axios.get('http://localhost:9000/api/todos',{headers})
      .then((response: any) =>{

        let getToDos=[];
            for(let key in response.data.todos){
                    getToDos.push({
                    ...response.data.todos[key],
                    id:key
                    })
            }
            // console.log(getToDos);
            dispatch(getAllTodosSuccess(getToDos));

      })
      .catch((error: any) =>{
        console.log(error);
      })
    }
}