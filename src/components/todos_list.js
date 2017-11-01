import React from 'react';

const TodosList = (props) => {

  const todoListItems = props.todos.map((todos, index) => {
    return (
      <>
    );
  });

  return (
    <table className="">
      <tr>
        <th>Date</th>
        <th>Description</th>
      </tr>
      {todoListItems}
    </table>
  );
}

export default TodosList;
