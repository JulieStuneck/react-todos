import React, { Component } from 'react';
import TodoList from './TodoList';
import AddBar from './AddBar';



class Todos extends Component {
    render() {
        const { currentText, setText, addTodo, todos } = this.props;
        return (
            <div>
                <AddBar
                    currentText={currentText}
                    setText={setText}
                    addTodo={addTodo}
                />
                <TodoList todos={todos} />
            </div>
        );
    }
}

export default Todos;