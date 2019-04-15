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
  
export interface iActionalterToDoInStateSuccess extends Action {
    type: 'ALTER_TODO_IN_STATE_SUCCESS',
    idtodo:string,
    todosAltered:object
  }

export interface iActionalterToDoInStateFailed extends Action {
    type: 'ALTER_TODO_IN_STATE_FAILED'
  }
  
export interface iActionaDeleteToDoSuccess extends Action {
    type: 'DELETE_TODO_SUCCESS',
    newArray:object
  }

export interface iActionaDeleteToDoFailed extends Action {
    type: 'DELETE_TODO_FAILED'
  }

  export type toDOActions = IActionGetAllTodosSuccess | 
                            IActionGetAllTodosFailed |
                            iActionalterToDoInStateSuccess |
                            iActionalterToDoInStateFailed |
                            iActionaDeleteToDoSuccess |
                            iActionaDeleteToDoFailed;


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
            console.log("[ACTION get all todos]");
            console.log(getToDos);
            dispatch(getAllTodosSuccess(getToDos));
      })
      .catch((error: any) =>{
        console.log(error);
      })
    }
}

export const createToDo:any = (form:any,id:string) =>{
  console.log(form,id);
      let isCompletedBoolean=false
      if(form.isCompleted=='true'){
        isCompletedBoolean=true;
      }
      const headers={
        'sessionId': id
      }

      const body={
        "text": form.text,
        "isCompleted": isCompletedBoolean,
        "urgency": Number(form.urgency)
      }

      console.log(axios.post('http://localhost:9000/api/todos',body,{headers}));
    return () =>{
        
        axios.post('http://localhost:9000/api/todos',body,{headers})
      .then((response: any) =>{
            console.log(response);
      })
      .catch((error: any) =>{
        console.log(error);
      })
    }
}

export const alterToDoInStateSuccess = (id:string,ToDosAltered:object):iActionalterToDoInStateSuccess =>{
  return {
    type:actionTypes.ALTER_TODO_IN_STATE_SUCCESS,
    idtodo:id,
    todosAltered:ToDosAltered
  }
}

export const alterToDoInStateFailed = ():iActionalterToDoInStateFailed =>{
  return {
    type:actionTypes.ALTER_TODO_IN_STATE_FAILED
  }
}

export const alterToDo:any = (form:any,idSession:string,idToDo:string) =>{
      let isCompletedBoolean=false
      if(form.isCompleted=='true'){
        isCompletedBoolean=true;
      }

      const headers={
        'sessionId': idSession
      }

      const body={
        "text": form.text,
        "isCompleted": isCompletedBoolean,
        "urgency": Number(form.urgency)
      }

    return (dispatch:Dispatch) =>{
        axios.patch('http://localhost:9000/api/todos/'+idToDo,body,{headers})
      .then((response: any) =>{
            console.log(response);
            dispatch(alterToDoInStateSuccess(idToDo,response.data.todo));

      })
      .catch((error: any) =>{
        console.log(error);
      })
    }
}

export const deteteToDoSuccess =(toDosDeleted:object) =>{
  return{
    type:actionTypes.DELETE_TODO_SUCCESS,
    newArray:toDosDeleted
  }
}

export const deteteToDoFailed =() =>{
  return{
    type:actionTypes.DELETE_TODO_FAILED
  }
}

export const deleteToDo:any = (idSession:string,idToDo:string) =>{
      const headers={
        'sessionId': idSession
      }

    return (dispatch:Dispatch) =>{
        axios.delete('http://localhost:9000/api/todos/'+idToDo,{headers})
      .then((response: any) =>{
            console.log(response);

            let getNewToDos=[];
            for(let key in response.data.todos){
              getNewToDos.push({
                    ...response.data.todos[key],
                    id:key
                    })
            }

            console.log("[ACTION after DELETE]");
            console.log(getNewToDos);

            dispatch(deteteToDoSuccess(getNewToDos));

      })
      .catch((error: any) =>{
        console.log(error);
      })
    }
}