import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCreateButton } from "./components/TodoCreateButton";


var defaultTodos = [
  {text: 'aprender react', completed: true},
  {text: 'no se que hacer xD', completed: false},
  {text: 'programar en react', completed: false}
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos); 
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
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  return (
    <React.Fragment>
      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text = {todo.text}
          completed = {todo.completed}
        />
        ))}
      </TodoList>

      <TodoCreateButton />
    </React.Fragment>
  );
}

export default App;
