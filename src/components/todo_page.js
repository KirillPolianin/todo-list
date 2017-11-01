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

  render() {
    return (
      <div>
      <AddTodoForm onFormSubmit={todo => this.addTodo(todo)} />
      <TodosList todos={this.state.todos} />
      </div>
    );
  }
};

export default TodoPage;
