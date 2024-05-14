import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../Hooks/useLocalStorage';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: true },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'cafe', completed: true },
// ];
// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');


function App() {
  const {item:todos,
        saveItem:saveTodos,
        loading,
        error
   } = useLocalStorage('TODOS_V1',[]);

  const [searchValue, setSearchValue] = React.useState('');
  
  //si en el array de todos aparecen true deben contabilizarlos
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  //la cantidad que hay en nuestro array
  const totalTodos = todos.length;

  //por cada todo preguntamos si incluye en alguna parte ese texto nuestro searchvalue el cual cambia con lo que escribe el usuario
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
  });

  
   //
  const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
  };

    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
  };

  return (
    <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );   
}

export default App;

