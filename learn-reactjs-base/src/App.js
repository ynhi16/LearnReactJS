import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import React from 'react';
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
      <AlbumFeature/>
    </div>
  );
}

export default App;
