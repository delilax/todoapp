import * as React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/todoA';

interface ViewProps{
    onGetAllTodos: typeof actionCreator.getAllTodos;
    isSessionId:string;
    isToDos:any,
    isHaveToDos:boolean

  }
  
  interface ViewState{
  }

  
class ToDoList extends React.Component<ViewProps,ViewState> {


    componentDidUpdate = () =>{
        console.log(this.props.isSessionId);
        this.props.onGetAllTodos(this.props.isSessionId);
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
                                    <div>{todo.created}</div>
                                    <label>Updated:</label>
                                    <div>{todo.updated}</div>
                            </li>
                    ))} 
                    </ul>
               :null}
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