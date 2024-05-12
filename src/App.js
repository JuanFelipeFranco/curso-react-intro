import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos= [
  {text: "Cortar cebolla", completed:true},
  {text: "Tomar Cafe", completed:false},
  {text: "Estudiar", completed:false},
  {text: "Llorar", completed:false},
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/> 
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (<TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed} />))}
      </TodoList>

      <CreateTodoButton />
    </>
    
  );
}

export default App;
