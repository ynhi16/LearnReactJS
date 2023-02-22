import TodoForm from 'component/TodoForm';
import TodoList from 'component/TodoList';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Bài 1: Tổng quan về ReacJS' },
    { id: 2, title: 'Bài 2: Tổng quan về Component' },
    { id: 3, title: 'Bài 3: Tổng quan về React Hook' },
  ]);
  const [value, setValue] = useState({});

  function handleTodoDelete(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoEdit(todo) {
    setValue(todo);
    //sconsole.log(todo);

    // console.log(todo.title);
  }
  function handleTodoFormSubmit(formValue) {
    console.log('Log of handleTodoFormSubmit', formValue);
    if (!formValue.id) {
      const newTodo = {
        id: todoList.length + 1,
        title: formValue.title,
      };
      const newTodoList = [...todoList];
      // newTodoList.push(newTodo);
      setTodoList([...todoList, newTodo]);
    } else {
      todoList.forEach((todo) => {
        if (todo.id === formValue.id) {
          const index = todoList.findIndex((x) => x.id === todo.id);
          const newTodo = {
            title: formValue.title,
            ...formValue,
          };

          const newTodoList = [...todoList];
          newTodoList.splice(index, 1, newTodo);
          // newTodoList.push(newTodo);
          setTodoList(newTodoList);
        }
      });
    }
  }

  return (
    <div className="App">
      <h2>TodoList</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} valueType={value} />
      <TodoList todos={todoList} onTodoClickDelete={handleTodoDelete} onTodoClickEdit={handleTodoEdit} />
    </div>
  );
}

export default App;
