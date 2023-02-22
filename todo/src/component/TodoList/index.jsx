import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClickDelete: PropTypes.func,
  onTodoClickEdit: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  onTodoClickDelete: null,
  handleTodoClickEdit: null,
};

function TodoList(props) {
  const { todos, onTodoClickEdit, onTodoClickDelete } = props;

  function handleClickDelete(todo) {
    if (onTodoClickDelete) {
      onTodoClickDelete(todo);
    }
  }
  function handleTodoClickEdit(todo) {
    if (onTodoClickEdit) {
      onTodoClickEdit(todo);
    }
  }
  return (
    <div>
      <p>Danh sách</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleTodoClickEdit(todo)}>Sửa</button>
            <button onClick={() => handleClickDelete(todo)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
