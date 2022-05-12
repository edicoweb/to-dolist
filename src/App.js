import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCreateButton } from "./components/TodoCreateButton";

import './css/App.css';

var todos = [
  {text: 'aprender react', completed: false},
  {text: 'no se que hacer xD', completed: false},
  {text: 'programar en react', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text = {todo.text} />
        ))}
      </TodoList>

      <TodoCreateButton />
    </React.Fragment>
  );
}

export default App;
