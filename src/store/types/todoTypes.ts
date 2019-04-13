export const enum ToDoActionTypes{
    GET_ALL_TODOS_SUCCESS='@@session/GET_ALL_TODOS_SUCCESS',
    GET_ALL_TODOS_FAILED='@@session/GET_ALL_TODOS_FAILED',
}

export interface ToDoState{
    readonly toDos: { 
        created: string; 
        id: string; 
        isCompleted: boolean; 
        text: string; 
        updated: string; 
        urgency: number; 
    }
}
