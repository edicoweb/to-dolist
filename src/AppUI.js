import React from "react";

import { TodoContext } from "./todoContext";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCreateButton } from "./components/TodoCreateButton";

function AppUI(){
  return( 
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        })=>(    
        <TodoList>
          {error && <p>errorrr!</p>}
          {loading && <p>Cargando</p>}
          {(!loading && !searchedTodos.length) && <p>Crear tu primer tarea</p>}
    
          {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text = {todo.text}
            completed = {todo.completed}
            onComplete = {() => {completeTodo(todo.text)}}
            onDelete = {() => {deleteTodo(todo.text)}}
          />
          ))}
        </TodoList>    
        )}
      </TodoContext.Consumer>
      <TodoCreateButton />
    </React.Fragment>
  );
}

export { AppUI };