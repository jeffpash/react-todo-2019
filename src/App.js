import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
    state = {
        todos: [{
                id: 1,
                title: 'Take kids to school',
                completed: true
            },
            {
                id: 2,
                title: 'Cook lunch',
                completed: false
            },
            {
                id: 3,
                title: 'Go swimming',
                completed: true
            }
        ]
    }
    render() {
        return (
            <div className = "App">
                <h1> APP </h1>
                < Todos todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;