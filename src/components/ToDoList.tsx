import * as React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/todoA';

import AddTask from './AddTask/AddTask';

interface ViewProps{
    onGetAllTodos: typeof actionCreator.getAllTodos;
    isSessionId:string;
    isToDos:any,
    isHaveToDos:boolean

  }
  
  interface ViewState{
        showAddTask:boolean
  }

  
class ToDoList extends React.Component<ViewProps,ViewState> {

    state={
        showAddTask:false

    }

    componentDidUpdate = () =>{
        console.log(this.props.isSessionId);
        this.props.onGetAllTodos(this.props.isSessionId);
    }

    showtaskInputHandler:any  = () =>{
        this.setState({showAddTask:true})
    }

    render(){

        return(
            <div>
                {this.props.isHaveToDos ? <ul>
                    {this.props.isToDos.map((todo:any) => (
                            <li>
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
                            </li>
                    ))} 
                    </ul>
               :null}
            <button onClick={this.showtaskInputHandler}>Add task on the list</button>
            {this.state.showAddTask ? <AddTask /> : null}
            </div>
        );
    }
}

const mapStateToProps = (state:any) =>{
    return {
        isSessionId: state.session.sessionId,
        isToDos: state.todo.toDos,
        isHaveToDos: state.todo.haveToDos
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return{
        onGetAllTodos: (id:string) => dispatch(actionCreator.getAllTodos(id)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (ToDoList);