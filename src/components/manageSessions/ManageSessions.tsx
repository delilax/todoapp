import React, { Component } from 'react';
import axios from 'axios';
import { number, string } from 'prop-types';

class ManageSessions extends Component {

    state={
        sessionId:'',
        failure:30
    }

  componentDidMount=()=>{
    this.startSession();

  }

    startSession = () =>{
      axios.post('http://localhost:9000/api/session')
      .then(res =>{
          this.setState({sessionId:res.data.sessionId})
        console.log(res);
      })
      .catch(err =>{
        console.log(err);
      })
    }

    deleteSession = () =>{
        const headers = {
            'sessionId': this.state.sessionId
        }

        axios.delete('http://localhost:9000/api/session', {headers})
        .then(res =>{
          console.log(res);
        })
        .catch(err =>{
          console.log(err);
        })
      }

    changeSessionFailure = () =>{
        const headers = {
            'sessionId': this.state.sessionId
        }
        const body={
            'errorRate': this.state.failure
        }

        axios.patch('http://localhost:9000/api/session', body,{headers})
        .then(res =>{
          console.log(res);
        })
        .catch(err =>{
          console.log(err);
        })
      }

      

    setFailureHandler = (event:any) =>{
        const newNumber=parseInt(event.target.value);
        this.setState({failure:newNumber});
    }

    render() {
        return (
          <div>
              <button onClick={this.startSession}>Start new session</button>
              <button onClick={this.deleteSession}>Delete current session</button>
              
              <div>Enter current session failure: 0 - 100 </div>
              <input type="number" value={this.state.failure} onChange={this.setFailureHandler} min="0" max="100"></input>
              <button onClick={this.changeSessionFailure}>Change current session failure</button>
          </div>
        );
      }
    }

export default ManageSessions;