// import ColorBox from 'components/ColorBox';


import React, { useEffect } from 'react';
import { useState } from 'react';
import queryString from 'query-string';
import './App.css';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Pagination from './components/Pagination';

function App() {
  const [todoList, setTodoList]= useState([
    {id:1, title: 'I love Easy Frontend'},
    {id:2, title: 'We love Easy Frontend'},
    {id:3, title: 'They love Easy Frontend'}
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page:1,
    _limit: 10,
    _totalRows:11
  });
  const [filters, setFilter] = useState({
    _limit: 10,
    _page :1,
  })
  // query-string -> _limt=10&page=1 

  useEffect(()=> {
    async function fetchPostList() {
      try {
        //api
        const paramsString = queryString.stringify(filters);
        const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;// truyền biến
        const response = await fetch(requestURL);
        const responseJSON = await response.json();
        console.log({responseJSON})
  
        const {data, pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
      }
     
    }

    fetchPostList();

  },[filters])
  
  function handleTodoClick(todo) {
    const index = todoList.findIndex(x =>x.id === todo.id);
    if(index <0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);
    const newTodo = {
      id: todoList.length +1,
      ...formValues,
    };
    const newTodoList = [ ...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  function handlePageChange(newPage) {
    console.log('new page:',newPage);
    setFilter({
      ...filters,
      _page: newPage
    })
  }
  return (
    <div className="App">
      <div>React Hook</div>
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/> */}
      <PostList posts={postList}/>
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
