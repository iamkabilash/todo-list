import './App.css';
import ListItem from './todo/ListItem';
import React, { useState } from 'react';

const App = () => {
  const [todoName, setTodoName] = useState("");
  const [list, setList] = useState([]);

  const updateTodoName = (e) =>{
    setTodoName(e.target.value);
  }

  const addTodo = () =>{
    setList([...list, {name: todoName, completed: false}]);
    setTodoName("");
  }

  const onDone = (item) =>{
    let newList = list.map((listItem) => {
      if(listItem.name === item.name){
        return {...listItem, completed: !listItem.completed}
      }
      return listItem;
    });
    console.log(item);
    setList(newList);
  }
  const onDelete = (item) =>{
    let newList = list.filter((listItem) => {
      if(listItem.name === item.name){
        return false;
      }
      return true;
    });
    console.log(item);
    setList(newList);
  }

  return (
    <div>
      <h2>Todo list</h2>
      {/* <ListItem /> */}

      <input type="text" placeholder='Add a todo' 
      value={todoName} onChange={updateTodoName} />
      <button onClick={addTodo}>Add Todo</button>

      {list.map((item)=> <ListItem obj = {item} onDone={onDone} 
      onDelete = {onDelete} />)}
    </div>
  );
}

export default App;
