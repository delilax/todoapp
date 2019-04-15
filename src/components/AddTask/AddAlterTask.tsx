import * as React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions/todoA';

interface ViewProps{
    onCreateToDo: typeof actionCreator.createToDo;
    onalterToDo: typeof actionCreator.alterToDo;
    isSessionId:string;
    type:string;
    idtodo:string;
  }
  
  interface ViewState{
        text:string,
        isCompleted:boolean,
        urgency:number
  }

  
class AddTask extends React.Component<ViewProps,ViewState> {

    state={
        text:'',
        isCompleted:true,
        urgency:1
    }

    onChangeTextHandler:any =(event:any)=>{
        this.setState({text:event.target.value});
    }

    onChangeCompletedHandler:any =()=>{
        console.log(this.state.isCompleted);
        this.setState({isCompleted:!this.state.isCompleted});
    }

    onChangeUrgencyHandler:any =(event:any)=>{
        this.setState({urgency:event.target.value});
    }

    onAddHandlerer:any = () =>{
        console.log(this.props.isSessionId);
        this.props.onCreateToDo(this.state,this.props.isSessionId);
        this.setState({text:'',isCompleted:true,urgency:0})
    }

    onAlterHandlerer:any = () =>{
        console.log(this.props.isSessionId);
        console.log(this.props.idtodo);
        this.props.onalterToDo(this.state,this.props.isSessionId,this.props.idtodo);
        this.setState({text:'',isCompleted:true,urgency:1})
    }

    render(){

        return(
            <div>
                <label>Tittle:</label>
                <input type="text" value={this.state.text} onChange={this.onChangeTextHandler}></input>
                <label>Completed:</label>
                <input type="checkbox" onClick={this.onChangeCompletedHandler}></input>
                <label>Urgency:</label>
                <input type="number" value={this.state.urgency} min="1" max="5" onChange={this.onChangeUrgencyHandler}></input>
                {this.props.type==="add"? <button onClick={this.onAddHandlerer}>ADD</button> : <button onClick={this.onAlterHandlerer}>CHANGE</button>}
            </div>
        )
            
    }
}

 const mapStateToProps = (state:any) =>{
     return {
        isSessionId: state.session.sessionId
     };
 };
    
 const mapDispatchToProps = (dispatch:any) => {
     return{
         onCreateToDo: (form:object,id:string) => dispatch(actionCreator.createToDo(form,id)),
         onalterToDo: (form:object,idSession:string,idToDo:string) => dispatch(actionCreator.alterToDo(form,idSession,idToDo))
     };
 };
    
    export default connect(mapStateToProps,mapDispatchToProps) (AddTask);