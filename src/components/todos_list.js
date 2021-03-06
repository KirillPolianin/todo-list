import React from 'react';
// import ReactTable from 'react-table';
import 'react-table/react-table.css';

import TodoListItem from './todo_list_item';

const TodosList = props => {
  const todoListItems = props.todos.map((todo, index) => {
    return (
      <TodoListItem
        key={index}
        todo={todo}
        deleteTodo={() => props.deleteTodo(index)}
      />
    );
  });

  // const columns = [
  //   {
  //     Header: 'Date',
  //     accessor: 'date'
  //   },
  //   {
  //     Header: 'Description',
  //     accessor: 'description'
  //   }
  // ];

  return (
    <table className="table table-hover">
      <tbody>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th />
        </tr>
        {todoListItems}
      </tbody>
    </table>
    // <div>
    //   <ReactTable
    //     data={props.todos}
    //     columns={columns}
    //     sortable={true}
    //     defaultPageSize={10}
    //     className="text-center"
    //   />
    // </div>
  );
};

export default TodosList;
