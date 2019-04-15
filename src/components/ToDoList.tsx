import * as React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/todoA';

import AddTask from './AddTask/AddAlterTask';
import AddAlterTask from './AddTask/AddAlterTask';

interface ViewProps{
    onGetAllTodos: typeof actionCreator.getAllTodos;
    onDeleteTodo: typeof actionCreator.deleteToDo;
    isSessionId:string;
    isToDos:any,
    isHaveToDos:boolean,
    isTestVar:boolean

  }
  
  interface ViewState{
        showAddTask:boolean,
        showAlterTask:boolean,
        containText:string
  }

  
class ToDoList extends React.Component<ViewProps,ViewState> {

    state={
        showAddTask:false,
        showAlterTask:false,
        containText:''
    }

    componentDidUpdate = () =>{
        this.props.onGetAllTodos(this.props.isSessionId);
        console.log("[componentDidUpdate]");
        console.log(this.props.isToDos);
    }

    showAddtaskInputHandler:any  = () =>{
        this.setState({showAddTask:!this.state.showAddTask})
    }

    showAltertaskInputHandler:any  = (key:any) =>{
        console.log(key);
        this.setState({showAlterTask:!this.state.showAlterTask})
    }


    onSearchHandler = (event: { target: { value: string; }; }) =>{
        this.setState({containText:event.target.value});
    }

    render(){
        console.log("[render]");
        console.log(this.props.isToDos);
        return(
            <div>
                <input type="text" value={this.state.containText} onChange={this.onSearchHandler}/>

                {this.props.isHaveToDos ? <ul>

                    {this.props.isToDos.map((todo:any) => todo.text.toUpperCase().includes(this.state.containText.toUpperCase()) ?
                    
                        (
                            <li key={todo.id}>
                                    
                            <div>{todo.text}</div>
                            <label>Urgency:</label>
                            <div>{todo.urgency}</div>
                            <label>Created:</label>
                            <div>
                                {todo.created.substr(8,2)}.
                                {todo.created.substr(5,2)}.
                                {todo.created.substr(0,4)} Time: 
                                {todo.created.substr(11,8)}
                            </div>
                            <label>Updated:</label>
                            <div>
                                {todo.updated.substr(8,2)}.
                                {todo.updated.substr(5,2)}.
                                {todo.updated.substr(0,4)} Time: 
                                {todo.updated.substr(11,8)}
                            </div>
                            <br/>
                            <button onClick={()=>this.showAltertaskInputHandler()}>Change task</button>
                            <button onClick={()=>this.props.onDeleteTodo(this.props.isSessionId,todo.id)}>Delete task</button>
                            {this.state.showAlterTask ? <AddAlterTask type="alter" idtodo={todo.id} /> : null}
                    </li>
                        ) : null      
                        )} 
                    </ul>
               :null}
            <button onClick={this.showAddtaskInputHandler}>Add task on the list</button>
            {this.state.showAddTask ? <AddAlterTask type="add" idtodo="" /> : null}
            </div>
        );
    }
}

const mapStateToProps = (state:any) =>{
    return {
        isSessionId: state.session.sessionId,
        isToDos: state.todo.toDos,
        isHaveToDos: state.todo.haveToDos,
        isTestVar:state.todo.testVar
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return{
        onGetAllTodos: (id:string) => dispatch(actionCreator.getAllTodos(id)),
        onDeleteTodo: (idSession:string,idToDo:string) => dispatch(actionCreator.deleteToDo(idSession,idToDo))
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (ToDoList);