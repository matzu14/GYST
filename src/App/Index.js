import React from 'react'

import { useTodos } from './useTodos';
// import { AppUI } from './AppUI';
// import { TodoContext } from "../components/TodoContext/";
import { TodoCounter } from '../components/TodoCounter/';
import { TodoSearch } from '../components/TodoSearch/';
import { TodoList } from '../components/TodoList/';
import { TodoItem } from '../components/TodoItem/';
import { CreateTodoButton } from '../components/CreateTodoButton/';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoHeader } from "../components/TodoHeader";

//! Guardao por si acaso
// function App() {
//   const [state, setState] = React.useState('Estado Compartido');

//   return (
//     <>
//       <TodoHeader>
//         <TodoCounter />
//         <TodoSearch />
//       </TodoHeader>

//       <TodoList>
//         <TodoItem state={state} />
//       </TodoList>
//     </>
//   );
// }
// function TodoHeader({ children }) {
//   return (
//     <header>
//       {children}
//     </header>)
// }
// function TodoList({ children }) {
//   return (
//     <section className='TodoSection'>
//       {children}
//     </section>
//   );
// }
// function TodoCounter() {

//   return <p>TodoCounter</p>;
// }
// function TodoSearch() {
//   return <p>TodoSearch</p>;
// }
// function TodoItem({ state }) {

//   return <p>TodoItem: {state}</p>
// }


function App() {
  const {
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    error,
    loading,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();
  return (

    <>
      <TodoHeader
        loading={loading}
      >
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No results for {searchText}</p>
        }
        /* Render prop */
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* Render function */}
        {/* {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </>
  );
}

export default App;
