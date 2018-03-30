import React, { Component } from 'react';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            entry: this.props.toDoEntry
        }

        this.editEntry = this.editEntry.bind(this)

    }


    editEntry (e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        {this.state.entry}<br/><input type='text' name='entry' onChange={this.editEntry}/>
                    </li>
                </ul>
            </div>
        )
    }
}