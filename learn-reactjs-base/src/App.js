import ColorBox from 'components/ColorBox';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import React from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

function App() {
  const name = 'Nhi';
  const age = 18;
  const isFemale = true;
  const student = {
    name: 'Easy Fontend',
  };
  const colorList = ['red', 'blue', 'green'];
  return (
    <div className="App">
      {/* <header className="App-header"> }
        <img src={logo} className="App-logo" alt="logo" />
        <p> Y Nhi </p>
        <p>Xin chao {name} - {age} - {isFemale? 'Female':'Male'}</p>
        {isFemale ? <p>Female</p>: <p>Male</p>}
        {isFemale && <p>Female</p>}
        {!isFemale && <p>Male</p>}
        {isFemale && (
          <div>
          <p>Female 1</p>
          <p>Female 2</p>
          <p>Female 3</p>
          </div>
        )}
        {isFemale && (
          <React.Fragment>
          <p>Female 1</p>
          <p>Female 2</p>
          <p>Female 3</p>
          </React.Fragment>
        )}
        {isFemale && (
          <>
          <p>Female 1</p>
          <p>Female 2</p>
          <p>Female 3</p>
          </>
        )}
        {/* render object */}
      {/* <p>{student.name}</p>
        <ul>
          {colorList.map(color=>(
            <li style={{color}}> {color}</li>
          ))}
        </ul>
       </header> */}
      {/* <TodoFeature/> */}
      {/* <AlbumFeature/> */}
      Header
      {/* <p>
        <Link to="/todos">Todo</Link>
      </p>
      <p>
        <Link to="/albums">Album</Link>
      </p> */}
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todo
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Album</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact></Redirect>
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
