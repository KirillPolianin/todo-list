import React from 'react';

const TodoListItem = (props) => {
  return (
    <tr>
      <td>{props.todo.age}</td>
      <td>{props.todo.description}</td>
    </tr>
  );
};
