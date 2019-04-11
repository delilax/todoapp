import React, { Component } from 'react';
import axios from 'axios';
import { number, string } from 'prop-types';

class ToDoList extends Component {

    componentDidMount = () =>{
        // this.getAllToDos();
    }

    // getAllToDos = () =>{
    //     axios.get("http://localhost:9000/api/todos")
    //     .then(response =>{
    //         console.log(response);
    //       })
    //       .catch(error =>{
    //         console.log(error);
    //       })
    // }

    render(){
        return(
            <div>
                <ul id="list">

                </ul>
            </div>
        );
    }
}

export default ToDoList;