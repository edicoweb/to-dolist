import React from "react";
import { AppUI } from "./AppUI";


// var defaultTodos = [
//   {text: 'aprender react', completed: true},
//   {text: 'no se que hacer xD', completed: false},
//   {text: 'programar en react', completed: false}
// ];

function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue); 

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;
      
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = [];
        }else{
          parseItem = JSON.parse(localStorageItem);
        }      
        setItem(parseItem);
        setLoading(false);
      } catch(error){
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error){
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {

  const {
    item: todos,
    setItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  /*Todo counter */
  const completedTodos = todos.filter(todo => !!todo.completed ).length;
  const totalTodos = todos.length;

  /* Todo Search */
  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }
  else{
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //Complete Todos
  const completeTodo = (text, completed) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
  };

  //Delete Todos
  const delteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  // React.useEffect(()=>{
  //   console.log('use effect')
  // },[totalTodos]);

  return (
    <AppUI
    loading={loading}
    error={error}
    totalTodos = {totalTodos}
    completedTodos = {completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    delteTodo = {delteTodo}
    
    />
  );
}

export default App;
