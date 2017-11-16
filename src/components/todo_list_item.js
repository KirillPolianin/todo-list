import React from 'react';

const TodoListItem = props => {
  return (
    <tr>
      <td>{props.todo.date}</td>
      <td>{props.todo.description}</td>
      <td>
        <button className="btn btn-danger" onClick={props.deleteTodo}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoListItem;
