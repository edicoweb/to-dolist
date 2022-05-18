import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCreateButton } from "./components/TodoCreateButton";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    delteTodo,
}){
    return( 
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
      {error && <p>errorrr!</p>}
      {loading && <p>Cargando</p>}
      {(!loading && !searchedTodos.length) && <p>Crear tu primer tarea</p>}

      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text = {todo.text}
        completed = {todo.completed}
        onComplete = {() => {completeTodo(todo.text)}}
        onDelete = {() => {delteTodo(todo.text)}}
      />
      ))}
    </TodoList>
    <TodoCreateButton />
  </React.Fragment>
    );
}

export { AppUI };