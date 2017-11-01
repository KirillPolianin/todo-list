import React from 'react';

import TodoListItem from './todo_list_item';

const TodosList = (props) => {

  const todoListItems = props.todos.map((todo, index) => {
    return (
      <TodoListItem key={index} todo={todo} />
    );
  });

  return (
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Description</th>
        </tr>
        {todoListItems}
      </tbody>
    </table>
  );
}

export default TodosList;
