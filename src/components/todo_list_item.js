import React from 'react';

const TodoListItem = (props) => {
  return (
    <tr>
      <td>{props.todo.date}</td>
      <td>{props.todo.description}</td>
    </tr>
  );
};

export default TodoListItem;
