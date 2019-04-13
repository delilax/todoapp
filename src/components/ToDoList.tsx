import * as React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/todoA';

interface ViewProps{
    onGetAllTodos: typeof actionCreator.getAllTodos;
    isSessionId:string;
    isToDos:any

  }
  
  interface ViewState{
  }

  
class ToDoList extends React.Component<ViewProps,ViewState> {


    componentDidUpdate = () =>{
        console.log(this.props.isSessionId);
        this.props.onGetAllTodos(this.props.isSessionId);
    }

    render(){
        console.log(this.props.isToDos.id);
        return(
            <div>
                {this.props.isToDos.id!=null ? <ul>
                    {this.props.isToDos.map((todo:any) => (
                            <li>
                                    <div>{todo.text}</div>
                                    <div>{todo.urgency}</div>
                                    <div>{todo.created}</div>
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
        isToDos: state.todo.toDos
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return{
        onGetAllTodos: (id:string) => dispatch(actionCreator.getAllTodos(id)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (ToDoList);