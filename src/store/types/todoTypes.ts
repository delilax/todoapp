export const enum ToDoActionTypes{
    GET_ALL_TODOS_SUCCESS='@@session/GET_ALL_TODOS_SUCCESS',
    GET_ALL_TODOS_FAILED='@@session/GET_ALL_TODOS_FAILED',
    ALTER_TODO_IN_STATE_SUCCESS='@@session/ALTER_TODO_IN_STATE_SUCCESS',
    ALTER_TODO_IN_STATE_FAILED='@@session/ALTER_TODO_IN_STATE_FAILED',
    DELETE_TODO_SUCCESS='@@session/DELETE_TODO_SUCCESS',
    DELETE_TODO_FAILED='@@session/DELETE_TODO_FAILED'
}

export interface ToDoState{
    toDos: { 
        [key:number]: number,
        created: string; 
        id: string; 
        isCompleted: boolean; 
        text: string; 
        updated: string; 
        urgency: number; 
    },
    haveToDos:boolean,
    testVar:boolean
}
