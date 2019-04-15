import * as React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/todoA";
import "./AddAlterTask.css";

interface ViewProps {
  onCreateToDo: typeof actionCreator.createToDo;
  onalterToDo: typeof actionCreator.alterToDo;
  isSessionId: string;
  type: string;
  idtodo: string;
  textToDo: string;
  urgencyToDo: number;
}

interface ViewState {
  text: string;
  isCompleted: boolean;
  urgency: number;
}

class AddTask extends React.Component<ViewProps, ViewState> {
  state = {
    text: "",
    isCompleted: false,
    urgency: 1
  };

  componentDidMount = () => {
    this.setState({
      text: this.props.textToDo,
      urgency: this.props.urgencyToDo
    });
  };
  onChangeTextHandler: any = (event: any) => {
    this.setState({ text: event.target.value });
  };

  onChangeCompletedHandler: any = () => {
    this.setState({ isCompleted: !this.state.isCompleted });
  };

  onChangeUrgencyHandler: any = (event: any) => {
    this.setState({ urgency: event.target.value });
  };

  onAddHandlerer: any = () => {
    this.props.onCreateToDo(this.state, this.props.isSessionId);
    this.setState({ text: "", urgency: 1 });
  };

  onAlterHandlerer: any = () => {
    this.props.onalterToDo(
      this.state,
      this.props.isSessionId,
      this.props.idtodo
    );
    this.setState({
      text: this.props.textToDo,
      urgency: this.props.urgencyToDo
    });
  };

  render() {
    return (
      <div className="containerAddAlterTask">
        <input
          className="titleInputAdded"
          type="text"
          placeholder="Title"
          value={this.state.text}
          onChange={this.onChangeTextHandler}
        />
        <br />
        <label className="labelsAdd">Completed: </label>
        <input type="checkbox" onClick={this.onChangeCompletedHandler} />
        <br />
        <label className="labelsAdd">Urgency: </label>
        <input
          className="urgencyInputAdded"
          type="number"
          value={this.state.urgency}
          min="1"
          max="5"
          onChange={this.onChangeUrgencyHandler}
        />
        <br />

        {this.props.type === "add" ? (
          <button className="btnChangeTaskSend" onClick={this.onAddHandlerer}>
            ADD
          </button>
        ) : (
          <button className="btnChangeTaskSend" onClick={this.onAlterHandlerer}>
            CHANGE
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isSessionId: state.session.sessionId
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCreateToDo: (form: object, id: string) =>
      dispatch(actionCreator.createToDo(form, id)),
    onalterToDo: (form: object, idSession: string, idToDo: string) =>
      dispatch(actionCreator.alterToDo(form, idSession, idToDo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
