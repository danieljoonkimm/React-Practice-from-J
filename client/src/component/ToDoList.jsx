import React, { Component } from 'react';
import ToDoListEntries from './ToDoListEntries.jsx'

export default class ToDo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
               {this.props.todos.map(todo => {
                   return <ToDoListEntries toDoEntry={todo}/>
               })}
            </div>
        )
    }
}