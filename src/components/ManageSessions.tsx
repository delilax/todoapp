import * as React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/sessionA';


interface ViewProps{
  onSession: typeof actionCreator.startSession;
  onDeleteSession: typeof actionCreator.deleteSession;
  onchangeSessionFailure: typeof actionCreator.changeSessionFailureNumber;
  onSetFailureRate: typeof actionCreator.setFailureNumber;
  isSessionId: string;
  isFaulireRate: number;
}

interface ViewState{
}

class ManageSessions extends React.Component<ViewProps,ViewState> {

  componentDidMount=()=>{
    this.props.onSession();
  }
    
    setFailureHandler = (event:any) =>{
        this.props.onSetFailureRate(Number(event.target.value));
    }

    render() {
        return (
          <div>
              <button onClick={this.props.onSession}>Start new session</button>
              <button onClick={()=>this.props.onDeleteSession(this.props.isSessionId)}>Delete current session</button>
              
              <div>Enter current session failure: 0 - 100 </div>
              <input type="number" name="failureRate" onChange={this.setFailureHandler} min="0" max="100"/>
              <button onClick={()=>this.props.onchangeSessionFailure(this.props.isFaulireRate,this.props.isSessionId)}>Change current session failure</button>
          </div>
        );
      }
    }


    const mapStateToProps = (state:any) =>{
      return {
          isSessionId: state.session.sessionId,
          isFaulireRate: state.session.failure
      };
  };
 
 const mapDispatchToProps = (dispatch:any) => {
      return{
           onSession: () => dispatch(actionCreator.startSession()),
           onDeleteSession: (id:any) =>dispatch(actionCreator.deleteSession(id)), 
           onchangeSessionFailure: (errorRate:any,id:any) =>dispatch(actionCreator.changeSessionFailureNumber(errorRate,id)), 
           onSetFailureRate: (failureNum: number) => dispatch(actionCreator.setFailureNumber(failureNum))
      };
 };
 
export default connect(mapStateToProps,mapDispatchToProps) (ManageSessions);