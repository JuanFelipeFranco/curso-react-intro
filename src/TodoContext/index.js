import React from "react";
import { useLocalStorage } from '../Hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}){
    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error
   } = useLocalStorage('TODOS_V1',[]);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);
  
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


    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}



export {TodoContext, TodoProvider};