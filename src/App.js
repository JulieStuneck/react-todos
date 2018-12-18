import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["A", "B", "C"],
      currentText: ""
    }
  }
  setText = (e) => {
    //console.log(e.target.value);
    const newValue = e.target.value;
    this.setState({ currentText: newValue })
  }
  addTodo = () => {
    const newTodo = this.state.currentText;
    const todos = [...this.state.todos, newTodo]
    this.setState({ todos, currentText: '' })
  }
  render() {
    const { currentText, todos } = this.state;
    return (
      <Todos
        currentText={currentText}
        setText={this.setText}
        addTodo={this.addTodo}
        todos={todos}
      />
    );
  }
}

export default App;
