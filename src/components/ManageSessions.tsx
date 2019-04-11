import * as React from 'react';
import {connect} from 'react-redux';

import * as actionCreator from '../store/actions/sessionA';

class ManageSessions extends React.Component {

    state:any={
        sessionId:'',
        failure:30,

        headers:{
          'sessionId': this.state.sessionId
        },
        bodyFailure:{
          'errorRate': this.state.failure
        }
    }

 

  componentDidMount=()=>{
    // this.startSession();
  }
    
    setFailureHandler = (event:any) =>{
        const newNumber=parseInt(event.target.value);
        this.setState({failure:newNumber});
    }

    render() {
        return (
          <div>
              <button onClick={this.props.onSession}>Start new session</button>
              <button onClick={()=>this.props.onDeleteSession(this.state.header)}>Delete current session</button>
              {/* this.props.deleteSession(this.state.header) poyvati header is Redux state */}
              
              <div>Enter current session failure: 0 - 100 </div>
              <input type="number" value={this.state.failure} onChange={this.setFailureHandler} min="0" max="100"></input>
              <button onClick={()=>this.props.changeSessionFailure(this.state.body,this.state.header)}>Change current session failure</button>
          </div>
        );
      }
    }


    const mapStateToProps = (state:any) =>{
      return {
          isSessionId: state.session.sessionId,
      };
  };
 
 const mapDispatchToProps = (dispatch:any) => {
      return{
           onSession: () => dispatch(actionCreator.startSession()),
           onDeleteSession: (headers:any) =>dispatch(actionCreator.deleteSession(headers)), // posati idSession
           onChangeSession: (body:any,headers:any) =>dispatch(actionCreator.changeSessionFailureNumber(body,headers)); // posati idSession
      };
 };
 
export default connect(mapStateToProps,mapDispatchToProps) (ManageSessions);