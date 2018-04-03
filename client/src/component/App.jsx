import React, { Component } from 'react'
import ToDoList from './ToDoList.jsx'

var dataObj = {
    listOfTodos: ['Play Basketball', 'Go to the Gym', 'Study at HackReactor'],
    timePosted: Date.now(),
};

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: dataObj.listOfTodos,
            toDoItem: '',
            title : true
        };
        this.addItem = this.addItem.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.changeTitleText = this.changeTitleText.bind(this);
    }

    addItem () {
        if (!this.state.toDoItem.length) {
            alert ('Not Allowed')
        } else {
            this.state.todos.push(this.state.toDoItem);
            this.setState({toDoItem:''})
            document.getElementsByName('toDoItem')[0].value = '';
        }
    }

    onChangeHandler (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeTitleText () {
        this.setState({title : !this.state.title})
    }

    render() {
        return (
            <div>
                <h1 onClick={this.changeTitleText}>{this.state.title ? 'To Do List' : 'React Practice'}</h1>
                <ToDoList todos={this.state.todos}/>
                <input name='toDoItem' placeholder='Add Item' onChange={this.onChangeHandler}></input>
                <button onClick={this.addItem}>Add Item</button>
                {/* Working */}
            </div>
        )
    }
}


//TODO: make a button to replace todolist component



// within the render method
    // return a single div containing the child components
    // EX:
        /**
         * 
         * @param {any} propData - any data you want to pass along, primitive or complex.
         * return (
         *  <div>
         *      <Child1 propName={propData} />
         *      <Child2 propName={propData} />
         *      <Child3 propName={propData} />
         *  </div>
         * )
         */