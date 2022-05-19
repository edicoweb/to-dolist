import React from "react";

import { TodoContext } from "./todoContext/todoContext";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateForm } from "./createForm/createForm";
import { TodoCreateButton } from "./components/TodoCreateButton";
import { Modal } from "./modal/Modal";

import './css/AppUI.css';

function AppUI(){
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return( 
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />   
        <TodoList>
          {error && <p className="alert-ms">errorrr!</p>}
          {loading && <p className="alert-ms">Cargando...</p>}
          {(!loading && !searchedTodos.length) && <p className="alert-ms">edicoweb</p>}
    
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
        
        {!!openModal && (
          <Modal>
            <CreateForm />
          </Modal>
        )}

      <TodoCreateButton
        setOpenModal={setOpenModal}
      />

    </React.Fragment>
  );
}

export { AppUI };