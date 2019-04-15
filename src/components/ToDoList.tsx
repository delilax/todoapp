import * as React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/todoA";

import AddAlterTask from "./AddAlterTask/AddAlterTask";

import "./ToDoList.css";

interface ViewProps {
  onGetAllTodos: typeof actionCreator.getAllTodos;
  onDeleteTodo: typeof actionCreator.deleteToDo;
  isSessionId: string;
  isToDos: any;
  isHaveToDos: boolean;
  isTestVar: boolean;
}

interface ViewState {
  showAddTask: boolean;
  containText: string;
  isShownModal: boolean;
  taskToShowChange: string;
}

class ToDoList extends React.Component<ViewProps, ViewState> {
  state = {
    showAddTask: false,
    containText: "",
    isShownModal: false,
    taskToShowChange: ""
  };

  componentDidUpdate = () => {
    this.props.onGetAllTodos(this.props.isSessionId);
  };

  showAddtaskInputHandler: any = () => {
    this.setState({ showAddTask: !this.state.showAddTask });
  };

  showAltertaskInputHandler: any = (id: string) => {
    this.setState({
      taskToShowChange: id
    });
  };

  onSearchHandler = (event: { target: { value: string } }) => {
    this.setState({ containText: event.target.value });
  };

  addTaskCancelHandlerer = () => {
    this.setState({ isShownModal: false });
  };

  render() {
    return (
      <div>
        <input
          className="InputFilterToDos"
          type="text"
          placeholder="Filter by name"
          value={this.state.containText}
          onChange={this.onSearchHandler}
        />
        <br />
        <button className="btnAddTask" onClick={this.showAddtaskInputHandler}>
          Add task on the list
        </button>
        {this.state.showAddTask ? (
          <AddAlterTask type="add" idtodo="" textToDo="" urgencyToDo={1} />
        ) : null}

        {this.props.isHaveToDos ? (
          <ul>
            {this.props.isToDos.map((todo: any) =>
              todo.text
                .toUpperCase()
                .includes(this.state.containText.toUpperCase()) ? (
                <div key={todo.id} className="containerListToDo">
                  <h2>{todo.text}</h2>
                  <label>Urgency:</label>
                  <h3>{todo.urgency}</h3>
                  <label>Created:</label>
                  <div>
                    {todo.created.substr(8, 2)}.{todo.created.substr(5, 2)}.
                    {todo.created.substr(0, 4)} Time:
                    {todo.created.substr(11, 8)}
                  </div>
                  <label>Updated:</label>
                  <div>
                    {todo.updated.substr(8, 2)}.{todo.updated.substr(5, 2)}.
                    {todo.updated.substr(0, 4)} Time:
                    {todo.updated.substr(11, 8)}
                  </div>
                  {todo.isCompleted ? (
                    <h4>Completed</h4>
                  ) : (
                    <h4>Not completed</h4>
                  )}

                  <br />
                  <button
                    className="btnChangeTask"
                    onClick={() => this.showAltertaskInputHandler(todo.id)}
                  >
                    Change task
                  </button>

                  <button
                    className="btnDeleteTask"
                    onClick={() =>
                      this.props.onDeleteTodo(this.props.isSessionId, todo.id)
                    }
                  >
                    Delete task
                  </button>

                  {todo.id === this.state.taskToShowChange ? (
                    <AddAlterTask
                      type="alter"
                      idtodo={todo.id}
                      textToDo={todo.text}
                      urgencyToDo={todo.urgency}
                    />
                  ) : null}
                </div>
              ) : null
            )}
          </ul>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isSessionId: state.session.sessionId,
    isToDos: state.todo.toDos,
    isHaveToDos: state.todo.haveToDos,
    isTestVar: state.todo.testVar
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetAllTodos: (id: string) => dispatch(actionCreator.getAllTodos(id)),
    onDeleteTodo: (idSession: string, idToDo: string) =>
      dispatch(actionCreator.deleteToDo(idSession, idToDo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
