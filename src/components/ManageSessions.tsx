import * as React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/sessionA";

import "./ManageSession.css";

interface ViewProps {
  onSession: typeof actionCreator.startSession;
  onDeleteSession: typeof actionCreator.deleteSession;
  onchangeSessionFailure: typeof actionCreator.changeSessionFailureNumber;
  onSetFailureRate: typeof actionCreator.setFailureNumber;
  isSessionId: string;
  isFaulireRate: number;
}

interface ViewState {
  theme: string;
}

class ManageSessions extends React.Component<ViewProps, ViewState> {
  state = {
    theme: "containerSession"
  };

  componentDidMount = () => {
    this.props.onSession();
  };

  setFailureHandler = (event: any) => {
    this.props.onSetFailureRate(Number(event.target.value));
  };

  render() {
    return (
      <div className={this.state.theme}>
        <button
          className="btnThemeBlack"
          onClick={() => {
            this.setState({ theme: "containerSession" });
          }}
        />
        <button
          className="btnThemeRed"
          onClick={() => {
            this.setState({ theme: "containerSessionRed" });
          }}
        />
        <button
          className="btnThemeGreen"
          onClick={() => {
            this.setState({ theme: "containerSessionGreen" });
          }}
        />
        <button
          className="btnThemeBlue"
          onClick={() => {
            this.setState({ theme: "containerSessionBlue" });
          }}
        />
        <br />

        <button className="btnStartSession" onClick={this.props.onSession}>
          START SESSION
        </button>
        <button
          className="btnDeleteSession"
          onClick={() => this.props.onDeleteSession(this.props.isSessionId)}
        >
          DELETE SESSION
        </button>
        <br />
        <input
          className="InputElementChangeFailure"
          type="number"
          name="failureRate"
          onChange={this.setFailureHandler}
          min="0"
          max="100"
        />
        <button
          className="btnChnageSession"
          onClick={() =>
            this.props.onchangeSessionFailure(
              this.props.isFaulireRate,
              this.props.isSessionId
            )
          }
        >
          CHANGE SESSION FAILURE RATE
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isSessionId: state.session.sessionId,
    isFaulireRate: state.session.failure
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSession: () => dispatch(actionCreator.startSession()),
    onDeleteSession: (id: any) => dispatch(actionCreator.deleteSession(id)),
    onchangeSessionFailure: (errorRate: any, id: any) =>
      dispatch(actionCreator.changeSessionFailureNumber(errorRate, id)),
    onSetFailureRate: (failureNum: number) =>
      dispatch(actionCreator.setFailureNumber(failureNum))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSessions);
