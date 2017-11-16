import React, { Component } from 'react';

import AddTodoForm from './add_todo_form';
import TodosList from './todos_list';
import './App.css';

class TodoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  deleteTodo = index => {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== index)
    });
  };

  render() {
    return (
      <div>
        <div className="App-header">
          <h2 className="">Simple Todolist</h2>
        </div>
        <AddTodoForm onFormSubmit={todo => this.addTodo(todo)} />
        <TodosList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default TodoPage;
