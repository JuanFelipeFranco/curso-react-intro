import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

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
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parseTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parseTodos = [];
  }else{
    parseTodos = JSON.parse(localStorageTodos);
  }

  const [todos,setTodos] = React.useState(parseTodos);
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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos)); //Actualizando ellocal storage

    setTodos(newTodos); //actualizandolo en el estado
  };
   //
  const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      );
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
  };

    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
    
  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=> completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
